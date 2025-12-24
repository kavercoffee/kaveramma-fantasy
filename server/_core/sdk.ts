import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { parse as parseCookieHeader } from "cookie";
import type { Request } from "express";
import { SignJWT, jwtVerify } from "jose";
import type { User } from "../../drizzle/schema";
import * as db from "../db";
import { ENV } from "./env";

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;

export type SessionPayload = {
  userId: number;
  email: string;
  name: string;
};

class AuthService {
  private jwtSecret: Uint8Array;

  constructor() {
    if (!ENV.jwtSecret) {
      throw new Error("JWT_SECRET environment variable is required");
    }
    this.jwtSecret = new TextEncoder().encode(ENV.jwtSecret);
  }

  async createSessionToken(userId: number, email: string, name: string): Promise<string> {
    const payload: SessionPayload = { userId, email, name };
    
    const token = await new SignJWT(payload as Record<string, unknown>)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(this.jwtSecret);

    return token;
  }

  async verifySessionToken(token: string): Promise<SessionPayload> {
    try {
      const { payload } = await jwtVerify(token, this.jwtSecret);
      return payload as SessionPayload;
    } catch (error) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid or expired session token" });
    }
  }

  async getUserFromRequest(req: Request): Promise<User | null> {
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader) return null;

    const cookies = parseCookieHeader(cookieHeader);
    const sessionToken = cookies[COOKIE_NAME];
    if (!isNonEmptyString(sessionToken)) return null;

    try {
      const payload = await this.verifySessionToken(sessionToken);
      const user = await db.getUserById(payload.userId);
      return user || null;
    } catch (error) {
      return null;
    }
  }
}

export const sdk = new AuthService();

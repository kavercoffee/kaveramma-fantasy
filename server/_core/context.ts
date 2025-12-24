import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import jwt from "jsonwebtoken";
import { getDb } from "../db";
import { users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    // Get JWT token from Authorization header or cookie
    const authHeader = opts.req.headers.authorization;
    const cookieToken = opts.req.cookies?.auth_token;
    
    let token: string | null = null;
    
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7);
    } else if (cookieToken) {
      token = cookieToken;
    }
    
    if (token) {
      try {
        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key") as { userId: number };
        
        // Get user from database
        const db = await getDb();
        if (db) {
          const result = await db
            .select()
            .from(users)
            .where(eq(users.id, decoded.userId))
            .limit(1);
          
          if (result.length > 0) {
            user = result[0];
          }
        }
      } catch (tokenError) {
        // Invalid token, user remains null
        console.error("[Auth] Token verification failed:", tokenError);
      }
    }
  } catch (error) {
    // Authentication is optional for public procedures
    console.error("[Auth] Error:", error);
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}

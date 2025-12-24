import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import * as db from "./db";
import { sdk } from "./_core/sdk";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { nanoid } from "nanoid";

// Restricted states in India
const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana",
];

const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;

export const authRouter = router({
  /**
   * Register a new user with custom authentication
   */
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8, "Password must be at least 8 characters"),
        name: z.string().min(2, "Name must be at least 2 characters"),
        age: z.number().min(18, "You must be at least 18 years old"),
        state: z.string().min(1, "State is required"),
        acceptedTerms: z.boolean().refine((val) => val === true, {
          message: "You must accept the terms and conditions",
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Check if state is restricted
      if (RESTRICTED_STATES.includes(input.state)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `Sorry, this platform is not available in ${input.state} due to government regulations.`,
        });
      }

      // Check if age is 18+
      if (input.age < 18) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You must be at least 18 years old to register.",
        });
      }

      // Check if user already exists
      const existingUser = await db.getUserByEmail(input.email);
      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "An account with this email already exists.",
        });
      }

      // Hash password
      const passwordHash = await bcrypt.hash(input.password, 10);

      // Create user
      await db.createUser({
        email: input.email,
        passwordHash,
        name: input.name,
        age: input.age,
        state: input.state,
        isAgeVerified: true,
        acceptedTerms: input.acceptedTerms,
      });

      // Get the created user
      const user = await db.getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create user account.",
        });
      }

      // Create session
      const sessionToken = await sdk.createSessionToken(user.id, user.email, user.name);

      // Set cookie
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(COOKIE_NAME, sessionToken, {
        ...cookieOptions,
        maxAge: ONE_YEAR_MS,
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    }),

  /**
   * Login with email and password
   */
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Get user by email
      const user = await db.getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password.",
        });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(
        input.password,
        user.passwordHash
      );
      if (!isValidPassword) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password.",
        });
      }

      // Check if user's state is still allowed
      if (RESTRICTED_STATES.includes(user.state)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `Sorry, this platform is no longer available in ${user.state} due to government regulations.`,
        });
      }

      // Update last signed in
      await db.updateLastSignedIn(user.id);

      // Create session
      const sessionToken = await sdk.createSessionToken(user.id, user.email, user.name);

      // Set cookie
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(COOKIE_NAME, sessionToken, {
        ...cookieOptions,
        maxAge: ONE_YEAR_MS,
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      };
    }),

  /**
   * Request password reset
   */
  requestPasswordReset: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await db.getUserByEmail(input.email);
      
      // Always return success to prevent email enumeration
      if (!user) {
        return {
          success: true,
          message: "If an account exists with this email, a password reset link has been sent.",
        };
      }

      // Generate reset token
      const resetToken = nanoid(32);
      const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      await db.setResetToken(input.email, resetToken, expiry);

      // TODO: Send email with reset link
      // For now, we'll just return the token (in production, this should be sent via email)
      console.log(`Password reset token for ${input.email}: ${resetToken}`);

      return {
        success: true,
        message: "If an account exists with this email, a password reset link has been sent.",
        // Remove this in production - only for development
        resetToken: process.env.NODE_ENV === "development" ? resetToken : undefined,
      };
    }),

  /**
   * Reset password with token
   */
  resetPassword: publicProcedure
    .input(
      z.object({
        token: z.string(),
        newPassword: z.string().min(8, "Password must be at least 8 characters"),
      })
    )
    .mutation(async ({ input }) => {
      const user = await db.getUserByResetToken(input.token);
      
      if (!user || !user.resetTokenExpiry) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid or expired reset token.",
        });
      }

      // Check if token is expired
      if (user.resetTokenExpiry < new Date()) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Reset token has expired. Please request a new one.",
        });
      }

      // Hash new password
      const passwordHash = await bcrypt.hash(input.newPassword, 10);

      // Update password
      await db.updateUserPassword(user.id, passwordHash);

      // Clear reset token
      await db.clearResetToken(user.id);

      return {
        success: true,
        message: "Password has been reset successfully. You can now log in with your new password.",
      };
    }),

  /**
   * Get current user (already implemented in routers.ts as auth.me)
   */
  me: publicProcedure.query(({ ctx }) => ctx.user),

  /**
   * Logout (already implemented in routers.ts as auth.logout)
   */
  logout: publicProcedure.mutation(({ ctx }) => {
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    return {
      success: true,
    } as const;
  }),
});

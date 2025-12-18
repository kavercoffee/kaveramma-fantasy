import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import { COOKIE_NAME } from "../shared/const";
import type { TrpcContext } from "./_core/context";
import * as db from "./db";

type CookieCall = {
  name: string;
  value?: string;
  options: Record<string, unknown>;
};

function createMockContext(): { ctx: TrpcContext; cookies: CookieCall[] } {
  const cookies: CookieCall[] = [];

  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      cookie: (name: string, value: string, options: Record<string, unknown>) => {
        cookies.push({ name, value, options });
      },
      clearCookie: (name: string, options: Record<string, unknown>) => {
        cookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, cookies };
}

describe("Authentication System", () => {
  describe("Registration", () => {
    it("should successfully register a new user with valid data", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const testEmail = `test-${Date.now()}@example.com`;

      const result = await caller.auth.register({
        email: testEmail,
        password: "SecurePass123!",
        name: "Test User",
        age: 25,
        state: "Karnataka",
        acceptedTerms: true,
      });

      expect(result.success).toBe(true);
      expect(result.user.email).toBe(testEmail);
      expect(result.user.name).toBe("Test User");

      // Cleanup
      const user = await db.getUserByEmail(testEmail);
      if (user) {
        await db.deleteUser(user.id);
      }
    });

    it("should reject registration from restricted state (Andhra Pradesh)", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.auth.register({
          email: "test@example.com",
          password: "SecurePass123!",
          name: "Test User",
          age: 25,
          state: "Andhra Pradesh",
          acceptedTerms: true,
        })
      ).rejects.toThrow(/not available in Andhra Pradesh/);
    });

    it("should reject registration from restricted state (Telangana)", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.auth.register({
          email: "test@example.com",
          password: "SecurePass123!",
          name: "Test User",
          age: 25,
          state: "Telangana",
          acceptedTerms: true,
        })
      ).rejects.toThrow(/not available in Telangana/);
    });

    it("should reject registration for users under 18", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.auth.register({
          email: "test@example.com",
          password: "SecurePass123!",
          name: "Test User",
          age: 17,
          state: "Karnataka",
          acceptedTerms: true,
        })
      ).rejects.toThrow(/at least 18 years old/);
    });

    it("should reject registration with short password", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.auth.register({
          email: "test@example.com",
          password: "short",
          name: "Test User",
          age: 25,
          state: "Karnataka",
          acceptedTerms: true,
        })
      ).rejects.toThrow(/at least 8 characters/);
    });

    it("should reject duplicate email registration", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const testEmail = `duplicate-${Date.now()}@example.com`;

      // First registration
      await caller.auth.register({
        email: testEmail,
        password: "SecurePass123!",
        name: "Test User",
        age: 25,
        state: "Karnataka",
        acceptedTerms: true,
      });

      // Second registration with same email
      await expect(
        caller.auth.register({
          email: testEmail,
          password: "SecurePass123!",
          name: "Another User",
          age: 25,
          state: "Karnataka",
          acceptedTerms: true,
        })
      ).rejects.toThrow(/already exists/);

      // Cleanup
      const user = await db.getUserByEmail(testEmail);
      if (user) {
        await db.deleteUser(user.id);
      }
    });
  });

  describe("Login", () => {
    it("should successfully login with correct credentials", async () => {
      const { ctx, cookies } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const testEmail = `login-test-${Date.now()}@example.com`;

      // Register user first
      await caller.auth.register({
        email: testEmail,
        password: "SecurePass123!",
        name: "Test User",
        age: 25,
        state: "Karnataka",
        acceptedTerms: true,
      });

      // Clear cookies from registration
      cookies.length = 0;

      // Now login
      const result = await caller.auth.login({
        email: testEmail,
        password: "SecurePass123!",
      });

      expect(result.success).toBe(true);
      expect(result.user.email).toBe(testEmail);
      expect(cookies.length).toBeGreaterThan(0);
      expect(cookies[0]?.name).toBe(COOKIE_NAME);

      // Cleanup
      const user = await db.getUserByEmail(testEmail);
      if (user) {
        await db.deleteUser(user.id);
      }
    });

    it("should reject login with incorrect password", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const testEmail = `wrong-pass-${Date.now()}@example.com`;

      // Register user
      await caller.auth.register({
        email: testEmail,
        password: "CorrectPass123!",
        name: "Test User",
        age: 25,
        state: "Karnataka",
        acceptedTerms: true,
      });

      // Try login with wrong password
      await expect(
        caller.auth.login({
          email: testEmail,
          password: "WrongPassword123!",
        })
      ).rejects.toThrow(/Invalid email or password/);

      // Cleanup
      const user = await db.getUserByEmail(testEmail);
      if (user) {
        await db.deleteUser(user.id);
      }
    });

    it("should reject login for non-existent user", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.auth.login({
          email: "nonexistent@example.com",
          password: "SomePassword123!",
        })
      ).rejects.toThrow(/Invalid email or password/);
    });

    it("should reject login for user from restricted state", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const testEmail = `restricted-${Date.now()}@example.com`;

      // Create user directly in database with restricted state
      // (bypassing registration validation for test purposes)
      await db.createUser({
        email: testEmail,
        passwordHash: await import("bcryptjs").then((bcrypt) =>
          bcrypt.hash("SecurePass123!", 10)
        ),
        name: "Test User",
        age: 25,
        state: "Sikkim", // Restricted state
        isAgeVerified: true,
        acceptedTerms: true,
      });

      // Try to login
      await expect(
        caller.auth.login({
          email: testEmail,
          password: "SecurePass123!",
        })
      ).rejects.toThrow(/no longer available in Sikkim/);

      // Cleanup
      const user = await db.getUserByEmail(testEmail);
      if (user) {
        await db.deleteUser(user.id);
      }
    });
  });

  describe("Logout", () => {
    it("should clear session cookie on logout", async () => {
      const { ctx, cookies } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.auth.logout();

      expect(result.success).toBe(true);
      expect(cookies).toHaveLength(1);
      expect(cookies[0]?.name).toBe(COOKIE_NAME);
      expect(cookies[0]?.options).toMatchObject({
        maxAge: -1,
        secure: true,
        sameSite: "none",
        httpOnly: true,
        path: "/",
      });
    });
  });

  describe("Password Reset", () => {
    it("should generate reset token for existing user", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const testEmail = `reset-${Date.now()}@example.com`;

      // Register user
      await caller.auth.register({
        email: testEmail,
        password: "OldPassword123!",
        name: "Test User",
        age: 25,
        state: "Karnataka",
        acceptedTerms: true,
      });

      // Request password reset
      const result = await caller.auth.requestPasswordReset({
        email: testEmail,
      });

      expect(result.success).toBe(true);
      expect(result.message).toContain("password reset link");

      // In development, token should be returned
      if (process.env.NODE_ENV === "development") {
        expect(result.resetToken).toBeDefined();
      }

      // Cleanup
      const user = await db.getUserByEmail(testEmail);
      if (user) {
        await db.deleteUser(user.id);
      }
    });

    it("should return success even for non-existent email (security)", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.auth.requestPasswordReset({
        email: "nonexistent@example.com",
      });

      expect(result.success).toBe(true);
      expect(result.message).toContain("password reset link");
    });

    it("should reset password with valid token", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const testEmail = `reset-valid-${Date.now()}@example.com`;

      // Register user
      await caller.auth.register({
        email: testEmail,
        password: "OldPassword123!",
        name: "Test User",
        age: 25,
        state: "Karnataka",
        acceptedTerms: true,
      });

      // Request password reset
      const resetResult = await caller.auth.requestPasswordReset({
        email: testEmail,
      });

      const resetToken = resetResult.resetToken;
      if (!resetToken) {
        throw new Error("Reset token not available in test");
      }

      // Reset password
      const result = await caller.auth.resetPassword({
        token: resetToken,
        newPassword: "NewPassword123!",
      });

      expect(result.success).toBe(true);
      expect(result.message).toContain("reset successfully");

      // Try logging in with new password
      const loginResult = await caller.auth.login({
        email: testEmail,
        password: "NewPassword123!",
      });

      expect(loginResult.success).toBe(true);

      // Cleanup
      const user = await db.getUserByEmail(testEmail);
      if (user) {
        await db.deleteUser(user.id);
      }
    });

    it("should reject password reset with invalid token", async () => {
      const { ctx } = createMockContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.auth.resetPassword({
          token: "invalid-token-12345",
          newPassword: "NewPassword123!",
        })
      ).rejects.toThrow(/Invalid or expired/);
    });
  });
});

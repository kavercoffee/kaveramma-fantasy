import type { Express, Request, Response } from "express";

export function registerOAuthRoutes(app: Express) {
  // OAuth disabled - using custom JWT authentication
  app.get("/api/oauth/callback", async (req: Request, res: Response) => {
    res.status(404).json({ error: "OAuth not available" });
    return;
  });
}

import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, decimal, index } from "drizzle-orm/mysql-core";

/**
 * Users table with custom authentication and compliance fields
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  passwordHash: text("passwordHash").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  
  // Compliance fields
  age: int("age").notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  isAgeVerified: boolean("isAgeVerified").default(false).notNull(),
  acceptedTerms: boolean("acceptedTerms").default(false).notNull(),
  
  // Password reset
  resetToken: varchar("resetToken", { length: 255 }),
  resetTokenExpiry: timestamp("resetTokenExpiry"),
  
  // User stats
  totalPoints: int("totalPoints").default(0).notNull(),
  teamsCreated: int("teamsCreated").default(0).notNull(),
  
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("email_idx").on(table.email),
  resetTokenIdx: index("reset_token_idx").on(table.resetToken),
}));

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Cricket matches table
 */
export const matches = mysqlTable("matches", {
  id: int("id").autoincrement().primaryKey(),
  externalId: varchar("externalId", { length: 100 }).unique(), // ID from cricket API
  
  team1: varchar("team1", { length: 255 }).notNull(),
  team2: varchar("team2", { length: 255 }).notNull(),
  team1Logo: text("team1Logo"),
  team2Logo: text("team2Logo"),
  
  matchType: mysqlEnum("matchType", ["T20", "ODI", "Test"]).notNull(),
  venue: varchar("venue", { length: 255 }),
  startTime: timestamp("startTime").notNull(),
  
  status: mysqlEnum("status", ["upcoming", "live", "completed", "cancelled"]).default("upcoming").notNull(),
  
  // Live match data
  team1Score: varchar("team1Score", { length: 50 }),
  team2Score: varchar("team2Score", { length: 50 }),
  currentInnings: int("currentInnings"),
  
  // Result
  winner: varchar("winner", { length: 255 }),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  statusIdx: index("status_idx").on(table.status),
  startTimeIdx: index("start_time_idx").on(table.startTime),
}));

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;

/**
 * Cricket players table
 */
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  externalId: varchar("externalId", { length: 100 }).unique(), // ID from cricket API
  
  name: varchar("name", { length: 255 }).notNull(),
  team: varchar("team", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["batsman", "bowler", "all-rounder", "wicket-keeper"]).notNull(),
  
  // Player image
  imageUrl: text("imageUrl"),
  
  // Statistics
  battingAverage: decimal("battingAverage", { precision: 5, scale: 2 }),
  bowlingAverage: decimal("bowlingAverage", { precision: 5, scale: 2 }),
  strikeRate: decimal("strikeRate", { precision: 5, scale: 2 }),
  economy: decimal("economy", { precision: 4, scale: 2 }),
  
  // Fantasy points
  basePoints: int("basePoints").default(10).notNull(),
  recentForm: int("recentForm").default(0).notNull(), // Last 5 matches average
  
  isActive: boolean("isActive").default(true).notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  teamIdx: index("team_idx").on(table.team),
  roleIdx: index("role_idx").on(table.role),
}));

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

/**
 * User teams table
 */
export const userTeams = mysqlTable("user_teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: int("matchId").notNull(),
  
  teamName: varchar("teamName", { length: 255 }).notNull(),
  
  captainId: int("captainId").notNull(), // Player ID
  viceCaptainId: int("viceCaptainId").notNull(), // Player ID
  
  totalPoints: int("totalPoints").default(0).notNull(),
  rank: int("rank"),
  
  isLocked: boolean("isLocked").default(false).notNull(), // Locked after match starts
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  userIdIdx: index("user_id_idx").on(table.userId),
  matchIdIdx: index("match_id_idx").on(table.matchId),
  userMatchIdx: index("user_match_idx").on(table.userId, table.matchId),
}));

export type UserTeam = typeof userTeams.$inferSelect;
export type InsertUserTeam = typeof userTeams.$inferInsert;

/**
 * Team players junction table (11 players per team)
 */
export const teamPlayers = mysqlTable("team_players", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull(),
  playerId: int("playerId").notNull(),
  
  pointsScored: int("pointsScored").default(0).notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  teamIdIdx: index("team_id_idx").on(table.teamId),
  playerIdIdx: index("player_id_idx").on(table.playerId),
}));

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

/**
 * Leaderboard entries (cached rankings)
 */
export const leaderboardEntries = mysqlTable("leaderboard_entries", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: int("matchId"),
  
  rank: int("rank").notNull(),
  points: int("points").notNull(),
  
  // Leaderboard type
  type: mysqlEnum("type", ["match", "season", "overall"]).notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  typeIdx: index("type_idx").on(table.type),
  matchIdIdx: index("match_id_idx").on(table.matchId),
  rankIdx: index("rank_idx").on(table.rank),
}));

export type LeaderboardEntry = typeof leaderboardEntries.$inferSelect;
export type InsertLeaderboardEntry = typeof leaderboardEntries.$inferInsert;

/**
 * Blog posts table
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  
  title: varchar("title", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 500 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  
  featuredImage: text("featuredImage"),
  
  authorId: int("authorId").notNull(),
  
  status: mysqlEnum("status", ["draft", "published"]).default("draft").notNull(),
  
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  slugIdx: index("slug_idx").on(table.slug),
  statusIdx: index("status_idx").on(table.status),
}));

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * Contact form submissions
 */
export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 500 }),
  message: text("message").notNull(),
  
  status: mysqlEnum("status", ["new", "read", "replied"]).default("new").notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  statusIdx: index("status_idx").on(table.status),
}));

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Analytics tracking table
 */
export const analyticsEvents = mysqlTable("analytics_events", {
  id: int("id").autoincrement().primaryKey(),
  
  userId: int("userId"),
  eventType: varchar("eventType", { length: 100 }).notNull(), // registration, team_created, match_joined, etc.
  eventData: text("eventData"), // JSON string with additional data
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  eventTypeIdx: index("event_type_idx").on(table.eventType),
  userIdIdx: index("user_id_idx").on(table.userId),
  createdAtIdx: index("created_at_idx").on(table.createdAt),
}));

export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type InsertAnalyticsEvent = typeof analyticsEvents.$inferInsert;

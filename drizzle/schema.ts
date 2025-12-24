import { integer, pgEnum, pgTable, text, timestamp, varchar, boolean, numeric, index, serial } from "drizzle-orm/pg-core";

// Define enums for PostgreSQL
export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);
export const matchTypeEnum = pgEnum("match_type", ["T20", "ODI", "Test"]);
export const matchStatusEnum = pgEnum("match_status", ["upcoming", "live", "completed", "cancelled"]);
export const playerRoleEnum = pgEnum("player_role", ["batsman", "bowler", "all-rounder", "wicket-keeper"]);
export const leaderboardTypeEnum = pgEnum("leaderboard_type", ["match", "season", "overall"]);
export const postStatusEnum = pgEnum("post_status", ["draft", "published"]);
export const submissionStatusEnum = pgEnum("submission_status", ["new", "read", "replied"]);

/**
 * Users table with custom authentication and compliance fields
 */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  
  // Compliance fields
  age: integer("age").notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  isAgeVerified: boolean("is_age_verified").default(false).notNull(),
  acceptedTerms: boolean("accepted_terms").default(false).notNull(),
  
  // Password reset
  resetToken: varchar("reset_token", { length: 255 }),
  resetTokenExpiry: timestamp("reset_token_expiry"),
  
  // User stats
  totalPoints: integer("total_points").default(0).notNull(),
  teamsCreated: integer("teams_created").default(0).notNull(),
  
  role: userRoleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  lastSignedIn: timestamp("last_signed_in").defaultNow().notNull(),
}, (table) => ({
  emailIdx: index("email_idx").on(table.email),
  resetTokenIdx: index("reset_token_idx").on(table.resetToken),
}));

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Cricket matches table
 */
export const matches = pgTable("matches", {
  id: serial("id").primaryKey(),
  externalId: varchar("external_id", { length: 100 }).unique(), // ID from cricket API
  
  team1: varchar("team1", { length: 255 }).notNull(),
  team2: varchar("team2", { length: 255 }).notNull(),
  team1Logo: text("team1_logo"),
  team2Logo: text("team2_logo"),
  
  matchType: matchTypeEnum("match_type").notNull(),
  venue: varchar("venue", { length: 255 }),
  startTime: timestamp("start_time").notNull(),
  
  status: matchStatusEnum("status").default("upcoming").notNull(),
  
  // Live match data
  team1Score: varchar("team1_score", { length: 50 }),
  team2Score: varchar("team2_score", { length: 50 }),
  currentInnings: integer("current_innings"),
  
  // Result
  winner: varchar("winner", { length: 255 }),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  statusIdx: index("status_idx").on(table.status),
  startTimeIdx: index("start_time_idx").on(table.startTime),
}));

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;

/**
 * Cricket players table
 */
export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  externalId: varchar("external_id", { length: 100 }).unique(), // ID from cricket API
  
  name: varchar("name", { length: 255 }).notNull(),
  team: varchar("team", { length: 255 }).notNull(),
  role: playerRoleEnum("role").notNull(),
  
  // Player image
  imageUrl: text("image_url"),
  
  // Statistics
  battingAverage: numeric("batting_average", { precision: 5, scale: 2 }),
  bowlingAverage: numeric("bowling_average", { precision: 5, scale: 2 }),
  strikeRate: numeric("strike_rate", { precision: 5, scale: 2 }),
  economy: numeric("economy", { precision: 4, scale: 2 }),
  
  // Fantasy points
  basePoints: integer("base_points").default(10).notNull(),
  recentForm: integer("recent_form").default(0).notNull(), // Last 5 matches average
  
  isActive: boolean("is_active").default(true).notNull(),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  teamIdx: index("team_idx").on(table.team),
  roleIdx: index("role_idx").on(table.role),
}));

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

/**
 * User teams table
 */
export const userTeams = pgTable("user_teams", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  matchId: integer("match_id").notNull(),
  
  teamName: varchar("team_name", { length: 255 }).notNull(),
  
  captainId: integer("captain_id").notNull(), // Player ID
  viceCaptainId: integer("vice_captain_id").notNull(), // Player ID
  
  totalPoints: integer("total_points").default(0).notNull(),
  rank: integer("rank"),
  
  isLocked: boolean("is_locked").default(false).notNull(), // Locked after match starts
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
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
export const teamPlayers = pgTable("team_players", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").notNull(),
  playerId: integer("player_id").notNull(),
  
  pointsScored: integer("points_scored").default(0).notNull(),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  teamIdIdx: index("team_id_idx").on(table.teamId),
  playerIdIdx: index("player_id_idx").on(table.playerId),
}));

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

/**
 * Leaderboard entries (cached rankings)
 */
export const leaderboardEntries = pgTable("leaderboard_entries", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  matchId: integer("match_id"),
  
  rank: integer("rank").notNull(),
  points: integer("points").notNull(),
  
  // Leaderboard type
  type: leaderboardTypeEnum("type").notNull(),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
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
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  
  title: varchar("title", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 500 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  
  featuredImage: text("featured_image"),
  
  authorId: integer("author_id").notNull(),
  
  status: postStatusEnum("status").default("draft").notNull(),
  
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  slugIdx: index("slug_idx").on(table.slug),
  statusIdx: index("status_idx").on(table.status),
}));

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * Contact form submissions
 */
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 500 }),
  message: text("message").notNull(),
  
  status: submissionStatusEnum("status").default("new").notNull(),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  statusIdx: index("status_idx").on(table.status),
}));

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Analytics tracking table
 */
export const analyticsEvents = pgTable("analytics_events", {
  id: serial("id").primaryKey(),
  
  userId: integer("user_id"),
  eventType: varchar("event_type", { length: 100 }).notNull(), // registration, team_created, match_joined, etc.
  eventData: text("event_data"), // JSON string with additional data
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  eventTypeIdx: index("event_type_idx").on(table.eventType),
  userIdIdx: index("user_id_idx").on(table.userId),
  createdAtIdx: index("created_at_idx").on(table.createdAt),
}));

export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type InsertAnalyticsEvent = typeof analyticsEvents.$inferInsert;

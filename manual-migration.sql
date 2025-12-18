-- Manual migration for Kaveramma Fantasy Cricket schema

-- Create users table with custom authentication
CREATE TABLE IF NOT EXISTS `users` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(320) NOT NULL UNIQUE,
  `passwordHash` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `state` varchar(100) NOT NULL,
  `isAgeVerified` boolean NOT NULL DEFAULT false,
  `acceptedTerms` boolean NOT NULL DEFAULT false,
  `resetToken` varchar(255),
  `resetTokenExpiry` timestamp,
  `totalPoints` int NOT NULL DEFAULT 0,
  `teamsCreated` int NOT NULL DEFAULT 0,
  `role` enum('user', 'admin') NOT NULL DEFAULT 'user',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastSignedIn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `email_idx` (`email`),
  INDEX `reset_token_idx` (`resetToken`)
);

-- Create matches table
CREATE TABLE IF NOT EXISTS `matches` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `externalId` varchar(100) UNIQUE,
  `team1` varchar(255) NOT NULL,
  `team2` varchar(255) NOT NULL,
  `team1Logo` text,
  `team2Logo` text,
  `matchType` enum('T20', 'ODI', 'Test') NOT NULL,
  `venue` varchar(255),
  `startTime` timestamp NOT NULL,
  `status` enum('upcoming', 'live', 'completed', 'cancelled') NOT NULL DEFAULT 'upcoming',
  `team1Score` varchar(50),
  `team2Score` varchar(50),
  `currentInnings` int,
  `winner` varchar(255),
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `status_idx` (`status`),
  INDEX `start_time_idx` (`startTime`)
);

-- Create players table
CREATE TABLE IF NOT EXISTS `players` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `externalId` varchar(100) UNIQUE,
  `name` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL,
  `role` enum('batsman', 'bowler', 'all-rounder', 'wicket-keeper') NOT NULL,
  `imageUrl` text,
  `battingAverage` decimal(5, 2),
  `bowlingAverage` decimal(5, 2),
  `strikeRate` decimal(5, 2),
  `economy` decimal(4, 2),
  `basePoints` int NOT NULL DEFAULT 10,
  `recentForm` int NOT NULL DEFAULT 0,
  `isActive` boolean NOT NULL DEFAULT true,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `team_idx` (`team`),
  INDEX `role_idx` (`role`)
);

-- Create user_teams table
CREATE TABLE IF NOT EXISTS `user_teams` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `userId` int NOT NULL,
  `matchId` int NOT NULL,
  `teamName` varchar(255) NOT NULL,
  `captainId` int NOT NULL,
  `viceCaptainId` int NOT NULL,
  `totalPoints` int NOT NULL DEFAULT 0,
  `rank` int,
  `isLocked` boolean NOT NULL DEFAULT false,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `user_id_idx` (`userId`),
  INDEX `match_id_idx` (`matchId`),
  INDEX `user_match_idx` (`userId`, `matchId`)
);

-- Create team_players table
CREATE TABLE IF NOT EXISTS `team_players` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `teamId` int NOT NULL,
  `playerId` int NOT NULL,
  `pointsScored` int NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `team_id_idx` (`teamId`),
  INDEX `player_id_idx` (`playerId`)
);

-- Create leaderboard_entries table
CREATE TABLE IF NOT EXISTS `leaderboard_entries` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `userId` int NOT NULL,
  `matchId` int,
  `rank` int NOT NULL,
  `points` int NOT NULL,
  `type` enum('match', 'season', 'overall') NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `type_idx` (`type`),
  INDEX `match_id_idx` (`matchId`),
  INDEX `rank_idx` (`rank`)
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(500) NOT NULL,
  `slug` varchar(500) NOT NULL UNIQUE,
  `excerpt` text,
  `content` text NOT NULL,
  `featuredImage` text,
  `authorId` int NOT NULL,
  `status` enum('draft', 'published') NOT NULL DEFAULT 'draft',
  `publishedAt` timestamp,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `slug_idx` (`slug`),
  INDEX `status_idx` (`status`)
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(320) NOT NULL,
  `subject` varchar(500),
  `message` text NOT NULL,
  `status` enum('new', 'read', 'replied') NOT NULL DEFAULT 'new',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `status_idx` (`status`)
);

-- Create analytics_events table
CREATE TABLE IF NOT EXISTS `analytics_events` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `userId` int,
  `eventType` varchar(100) NOT NULL,
  `eventData` text,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `event_type_idx` (`eventType`),
  INDEX `user_id_idx` (`userId`),
  INDEX `created_at_idx` (`createdAt`)
);

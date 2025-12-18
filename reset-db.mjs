import { drizzle } from 'drizzle-orm/mysql2';
import 'dotenv/config';

const db = drizzle(process.env.DATABASE_URL);

console.log('Dropping all existing tables...');

try {
  // Drop all tables in reverse order of dependencies
  await db.execute('DROP TABLE IF EXISTS analytics_events');
  await db.execute('DROP TABLE IF EXISTS contact_submissions');
  await db.execute('DROP TABLE IF EXISTS blog_posts');
  await db.execute('DROP TABLE IF EXISTS leaderboard_entries');
  await db.execute('DROP TABLE IF EXISTS team_players');
  await db.execute('DROP TABLE IF EXISTS user_teams');
  await db.execute('DROP TABLE IF EXISTS players');
  await db.execute('DROP TABLE IF EXISTS matches');
  await db.execute('DROP TABLE IF EXISTS users');
  
  console.log('All tables dropped successfully!');
  console.log('Now run: pnpm drizzle-kit push');
} catch (error) {
  console.error('Error dropping tables:', error);
  process.exit(1);
}

process.exit(0);

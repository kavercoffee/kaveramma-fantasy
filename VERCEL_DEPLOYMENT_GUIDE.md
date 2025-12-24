# Vercel Deployment Guide for Kaveramma Fantasy Cricket

## ⚠️ Important Notice

This project was originally built for Manus hosting with integrated services. Deploying to Vercel requires setting up external services for:
- **Database** (MySQL/PostgreSQL)
- **Authentication** (OAuth provider)
- **File Storage** (S3 or similar)

---

## Prerequisites

1. **Vercel Account** - Sign up at https://vercel.com
2. **Vercel CLI** - Install globally: `npm install -g vercel`
3. **External Services** - Set up the services listed below

---

## Required External Services

### 1. Database (Choose One)

**Option A: PlanetScale (Recommended)**
- Sign up at https://planetscale.com
- Create a new database
- Get connection string from Settings → Passwords
- Format: `mysql://username:password@host/database?sslaccept=strict`

**Option B: Supabase**
- Sign up at https://supabase.com
- Create project and get PostgreSQL connection string
- Note: You'll need to modify Drizzle schema for PostgreSQL

**Option C: Railway**
- Sign up at https://railway.app
- Deploy MySQL database
- Get connection string from database settings

### 2. Authentication (Choose One)

**Option A: Clerk (Recommended)**
- Sign up at https://clerk.com
- Create application
- Get publishable and secret keys
- Configure OAuth providers (Google, etc.)

**Option B: Auth0**
- Sign up at https://auth0.com
- Create application
- Get domain, client ID, and client secret

**Option C: NextAuth.js**
- Self-hosted solution
- Requires additional configuration

### 3. File Storage (Choose One)

**Option A: AWS S3**
- Create S3 bucket
- Get access key ID and secret access key
- Configure bucket for public access (if needed)

**Option B: Vercel Blob**
- Built into Vercel
- Get token from Vercel dashboard

**Option C: Cloudinary**
- Sign up at https://cloudinary.com
- Get cloud name, API key, and API secret

---

## Environment Variables

Create these environment variables in Vercel Dashboard (Settings → Environment Variables):

### Database
```
DATABASE_URL=your_database_connection_string
```

### Authentication (Example with Clerk)
```
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
```

### File Storage (Example with AWS S3)
```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name
```

### Application Settings
```
NODE_ENV=production
VITE_APP_TITLE=Kaveramma
VITE_APP_LOGO=/logo-dark.png
```

### JWT & Security
```
JWT_SECRET=your_random_secret_key_here
```

---

## Deployment Steps

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Navigate to Project Directory
```bash
cd /home/ubuntu/kaveramma-fantasy
```

### Step 4: Deploy to Vercel
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **kaveramma-fantasy** (or your choice)
- In which directory is your code located? **./**
- Want to override settings? **N**

### Step 5: Set Environment Variables

Either:
1. **Via Vercel Dashboard:**
   - Go to your project settings
   - Navigate to Environment Variables
   - Add all required variables

2. **Via CLI:**
```bash
vercel env add DATABASE_URL
vercel env add CLERK_SECRET_KEY
# ... add all other variables
```

### Step 6: Deploy Production
```bash
vercel --prod
```

---

## Post-Deployment Configuration

### 1. Database Migration
```bash
# Run migrations on your production database
npm run db:push
```

### 2. Custom Domain (Optional)
- Go to Vercel Dashboard → Domains
- Add your custom domain
- Update DNS records as instructed

### 3. Update OAuth Callbacks
- Update redirect URLs in your auth provider dashboard
- Add: `https://your-domain.vercel.app/api/oauth/callback`

---

## Code Modifications Required

### 1. Replace Manus OAuth

**Current (Manus):**
```typescript
// server/_core/oauth.ts
import { ManusOAuth } from './manus-oauth';
```

**Replace with Clerk:**
```typescript
import { clerkClient } from '@clerk/clerk-sdk-node';
```

### 2. Update Database Connection

The current `DATABASE_URL` from Manus needs to be replaced with your new database connection string.

### 3. Update Storage Functions

**Current (Manus):**
```typescript
import { storagePut } from './server/storage';
```

**Replace with AWS S3:**
```typescript
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
```

---

## Troubleshooting

### Build Fails
- Check all environment variables are set
- Ensure database is accessible from Vercel
- Review build logs in Vercel dashboard

### Authentication Issues
- Verify OAuth callback URLs
- Check API keys are correct
- Ensure redirect URIs match

### Database Connection Errors
- Verify connection string format
- Check database allows connections from Vercel IPs
- Enable SSL if required

---

## Important Notes

1. **This is a complex migration** - The app was built for Manus hosting and requires significant changes for Vercel
2. **Authentication will break** - You must implement a new auth provider
3. **Database must be migrated** - Export data from Manus and import to new database
4. **Storage must be reconfigured** - All file uploads need new S3/storage setup
5. **Environment variables** - 15+ variables need manual configuration

---

## Alternative: Stay with Manus Hosting

Manus provides:
- ✅ Integrated database, auth, and storage
- ✅ Zero configuration required
- ✅ Custom domain support
- ✅ Everything works out of the box

Consider using Manus hosting with your custom domain instead of migrating to Vercel.

---

## Support

For Vercel-specific issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

For authentication setup:
- Clerk Docs: https://clerk.com/docs
- Auth0 Docs: https://auth0.com/docs

For database setup:
- PlanetScale Docs: https://planetscale.com/docs
- Supabase Docs: https://supabase.com/docs

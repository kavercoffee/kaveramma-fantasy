# Railway Deployment Guide for Kaveramma Fantasy Cricket

## 🚀 Quick Deployment (5-10 minutes)

This guide will help you deploy your Kaveramma Fantasy Cricket platform to Railway with a MySQL database.

---

## Prerequisites

1. **Railway Account** - Sign up at https://railway.app (free tier available)
2. **Railway CLI** - We'll install this together
3. **Project Files** - Already prepared and ready to deploy

---

## Step 1: Create Railway Account

1. Go to https://railway.app
2. Click "Start a New Project"
3. Sign up with GitHub, Google, or Email
4. Verify your email address

---

## Step 2: Install Railway CLI

Open your terminal and run:

```bash
npm install -g @railway/cli
```

Verify installation:

```bash
railway --version
```

---

## Step 3: Login to Railway

```bash
railway login
```

This will open your browser for authentication. Click "Authorize" to continue.

---

## Step 4: Initialize Railway Project

Navigate to your project directory:

```bash
cd /home/ubuntu/kaveramma-fantasy
```

Initialize Railway:

```bash
railway init
```

Follow the prompts:
- **Create a new project?** Yes
- **Project name?** kaveramma-fantasy (or your choice)
- **Environment?** production

---

## Step 5: Add MySQL Database

```bash
railway add --database mysql
```

This creates a MySQL database and automatically sets the `DATABASE_URL` environment variable.

---

## Step 6: Set Environment Variables

Set required environment variables:

```bash
# JWT Secret (generate a random string)
railway variables --set JWT_SECRET="your-random-secret-key-here-change-this"

# App Configuration
railway variables --set NODE_ENV="production"
railway variables --set VITE_APP_TITLE="Kaveramma"
railway variables --set VITE_APP_LOGO="/logo-dark.png"

# Port (Railway auto-assigns, but we set default)
railway variables --set PORT="3000"
```

**Important:** Replace `your-random-secret-key-here-change-this` with a strong random string (at least 32 characters).

Generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Step 7: Deploy to Railway

```bash
railway up
```

This command will:
1. Upload your code to Railway
2. Install dependencies
3. Build the project
4. Start the server

Wait for deployment to complete (usually 2-5 minutes).

---

## Step 8: Run Database Migrations

After deployment, run migrations to create database tables:

```bash
railway run pnpm db:push
```

---

## Step 9: Get Your Deployment URL

```bash
railway domain
```

This will show your app's public URL (e.g., `kaveramma-fantasy.up.railway.app`).

---

## Step 10: Add Custom Domain (Optional)

### Via Railway Dashboard:
1. Go to https://railway.app/dashboard
2. Select your project
3. Click "Settings" → "Domains"
4. Click "Add Domain"
5. Enter your custom domain
6. Update your DNS records as instructed

### Via CLI:
```bash
railway domain add yourdomain.com
```

---

## Environment Variables Reference

Here are all the environment variables your app uses:

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `DATABASE_URL` | MySQL connection string | Yes (auto-set by Railway) | `mysql://user:pass@host:port/db` |
| `JWT_SECRET` | Secret key for JWT tokens | Yes | `your-random-32-char-string` |
| `NODE_ENV` | Environment mode | Yes | `production` |
| `PORT` | Server port | No (Railway auto-assigns) | `3000` |
| `VITE_APP_TITLE` | App title | No | `Kaveramma` |
| `VITE_APP_LOGO` | Logo path | No | `/logo-dark.png` |

---

## Post-Deployment Tasks

### 1. Test Your Deployment

Visit your Railway URL and verify:
- ✅ Homepage loads correctly
- ✅ Logo displays properly
- ✅ Navigation works
- ✅ Google Ads banner shows on mobile (with UTM parameters)

### 2. Monitor Logs

View real-time logs:
```bash
railway logs
```

### 3. Check Database

Connect to your database:
```bash
railway connect mysql
```

---

## Useful Railway Commands

```bash
# View project status
railway status

# Open Railway dashboard
railway open

# View environment variables
railway variables

# Restart your app
railway restart

# View logs
railway logs --follow

# Run commands in Railway environment
railway run <command>

# Deploy latest changes
railway up

# Link to existing project
railway link
```

---

## Troubleshooting

### Build Fails

**Problem:** Build fails with dependency errors

**Solution:**
```bash
# Clear Railway cache and rebuild
railway up --force
```

### Database Connection Errors

**Problem:** App can't connect to database

**Solution:**
1. Verify `DATABASE_URL` is set:
   ```bash
   railway variables
   ```
2. Run migrations:
   ```bash
   railway run pnpm db:push
   ```

### App Crashes on Start

**Problem:** Server starts but crashes immediately

**Solution:**
1. Check logs:
   ```bash
   railway logs
   ```
2. Verify all required environment variables are set
3. Check for missing dependencies

### Port Issues

**Problem:** App doesn't respond to requests

**Solution:**
- Railway automatically assigns `PORT` environment variable
- Your app should use `process.env.PORT` (already configured)

---

## Updating Your Deployment

When you make changes to your code:

```bash
# 1. Navigate to project directory
cd /home/ubuntu/kaveramma-fantasy

# 2. Deploy updates
railway up

# 3. Watch logs to ensure successful deployment
railway logs --follow
```

---

## Database Management

### Backup Database

```bash
# Export database
railway run mysqldump -u root -p kaveramma > backup.sql
```

### View Database Tables

```bash
railway connect mysql
# Then run SQL commands:
SHOW TABLES;
DESCRIBE users;
SELECT * FROM users LIMIT 10;
```

### Run Migrations

```bash
railway run pnpm db:push
```

---

## Cost Estimation

**Railway Pricing (as of 2024):**
- **Hobby Plan:** $5/month
  - 500 hours of usage
  - 8GB RAM
  - 100GB bandwidth
  - Suitable for small to medium traffic

- **Pro Plan:** $20/month
  - Unlimited usage
  - 32GB RAM
  - 100GB bandwidth
  - Priority support

**Your app will likely fit in the Hobby plan for initial launch.**

---

## Security Best Practices

1. **JWT Secret:** Use a strong, random 32+ character string
2. **Environment Variables:** Never commit `.env` files to Git
3. **Database:** Railway MySQL is private by default (good!)
4. **HTTPS:** Railway provides free SSL certificates automatically
5. **Rate Limiting:** Consider adding rate limiting for API endpoints

---

## Next Steps After Deployment

1. **Set up monitoring** - Use Railway's built-in metrics
2. **Configure backups** - Set up automated database backups
3. **Add analytics** - Track user behavior and performance
4. **Implement caching** - Use Redis for session management (optional)
5. **Set up CI/CD** - Connect GitHub for automatic deployments

---

## Support

**Railway Documentation:** https://docs.railway.app
**Railway Discord:** https://discord.gg/railway
**Railway Status:** https://status.railway.app

**Project-Specific Issues:**
- Check logs: `railway logs`
- Review environment variables: `railway variables`
- Restart app: `railway restart`

---

## Alternative: Deploy via Railway Dashboard

If you prefer using the web interface:

1. Go to https://railway.app/new
2. Click "Deploy from GitHub repo"
3. Connect your GitHub account
4. Select your repository
5. Railway will auto-detect settings
6. Add MySQL database from "New" → "Database" → "MySQL"
7. Set environment variables in project settings
8. Deploy!

---

## Comparison: Railway vs Manus vs Vercel

| Feature | Railway | Manus | Vercel |
|---------|---------|-------|--------|
| Database | ✅ Built-in MySQL | ✅ Built-in | ❌ External required |
| Authentication | ⚠️ DIY | ✅ Built-in OAuth | ❌ External required |
| File Storage | ⚠️ External S3 | ✅ Built-in | ⚠️ Vercel Blob |
| Node.js Support | ✅ Full | ✅ Full | ⚠️ Serverless only |
| Custom Domain | ✅ Free SSL | ✅ Free SSL | ✅ Free SSL |
| Pricing | $5/month | Varies | $20/month |
| Setup Time | 10 minutes | 0 minutes | 30+ minutes |

**Railway is a good middle ground** - more control than Manus, easier than Vercel.

---

## Success Checklist

- [ ] Railway account created
- [ ] Railway CLI installed
- [ ] Project initialized
- [ ] MySQL database added
- [ ] Environment variables set
- [ ] App deployed successfully
- [ ] Database migrations run
- [ ] Custom domain added (optional)
- [ ] App tested and working
- [ ] Logs reviewed for errors

---

**You're all set! Your Kaveramma Fantasy Cricket platform is now live on Railway! 🎉**

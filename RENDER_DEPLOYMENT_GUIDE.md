# Render.com Deployment Guide for Kaveramma Fantasy Cricket

This guide will walk you through deploying your Kaveramma Fantasy Cricket platform to Render.com with PostgreSQL database.

## Why Render.com?

✅ **True free tier** - No credit card required  
✅ **Free PostgreSQL database** included  
✅ **Automatic SSL** certificates  
✅ **Custom domain support**  
✅ **Git-based deployment** - Auto-deploy on push  
✅ **Similar to Manus** - Minimal code changes needed

---

## Prerequisites

1. A GitHub account
2. A Render.com account (sign up at https://render.com - free)
3. Your code pushed to a GitHub repository

---

## Step 1: Push Code to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Kaveramma Fantasy Cricket"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/kaveramma-fantasy.git
git branch -M main
git push -u origin main
```

---

## Step 2: Create Render Account

1. Go to https://render.com
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended for easier deployment)
4. Verify your email

---

## Step 3: Create PostgreSQL Database

1. From your Render dashboard, click **"New +"**
2. Select **"PostgreSQL"**
3. Configure:
   - **Name**: `kaveramma-db`
   - **Database**: `kaveramma`
   - **User**: `kaveramma` (auto-generated)
   - **Region**: Choose closest to your users
   - **Plan**: **Free**
4. Click **"Create Database"**
5. **IMPORTANT**: Copy the **Internal Database URL** (starts with `postgresql://`) - you'll need this

---

## Step 4: Create Web Service

1. From Render dashboard, click **"New +"**
2. Select **"Web Service"**
3. Connect your GitHub repository:
   - Click "Connect account" if needed
   - Select your `kaveramma-fantasy` repository
4. Configure the service:

### Basic Settings:
- **Name**: `kaveramma-fantasy`
- **Region**: Same as your database
- **Branch**: `main`
- **Root Directory**: (leave blank)
- **Runtime**: `Node`
- **Build Command**: `pnpm install && pnpm run build`
- **Start Command**: `pnpm run start`

### Environment Variables:
Click "Advanced" and add these environment variables:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `DATABASE_URL` | (Paste the Internal Database URL from Step 3) |
| `JWT_SECRET` | (Generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`) |
| `VITE_APP_TITLE` | `Kaveramma` |
| `VITE_APP_LOGO` | `/logo-dark.png` |

### Plan:
- Select **"Free"**

5. Click **"Create Web Service"**

---

## Step 5: Wait for Deployment

Render will now:
1. Clone your repository
2. Install dependencies
3. Build your application
4. Start the server

This takes 5-10 minutes for the first deployment. You can watch the logs in real-time.

---

## Step 6: Run Database Migrations

Once your service is deployed:

1. In your Render dashboard, go to your `kaveramma-fantasy` service
2. Click the **"Shell"** tab
3. Run the migration command:
   ```bash
   pnpm db:push
   ```
4. Wait for migrations to complete

---

## Step 7: Access Your Site

1. Render will provide you with a URL like: `https://kaveramma-fantasy.onrender.com`
2. Visit the URL to see your live site!
3. Test the registration and login functionality

---

## Step 8: Add Custom Domain (Optional)

1. Go to your service settings
2. Click "Custom Domains"
3. Click "Add Custom Domain"
4. Enter your domain (e.g., `kaveramma.com`)
5. Follow the DNS configuration instructions
6. Wait for DNS propagation (5-60 minutes)

---

## Troubleshooting

### Build Failed
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify `pnpm` is working correctly

### Database Connection Error
- Verify `DATABASE_URL` environment variable is set correctly
- Ensure you're using the **Internal Database URL** (not external)
- Check database is in the same region as your web service

### Application Crashes
- Check the logs in Render dashboard
- Verify all environment variables are set
- Ensure `JWT_SECRET` is generated and set

### Migrations Failed
- Ensure database is running
- Check `DATABASE_URL` is correct
- Try running migrations again from Shell tab

---

## Updating Your Site

Render automatically deploys when you push to GitHub:

```bash
# Make your changes
git add .
git commit -m "Update feature X"
git push origin main
```

Render will automatically:
1. Detect the push
2. Rebuild your application
3. Deploy the new version

---

## Cost Breakdown

### Free Tier Includes:
- ✅ 750 hours/month of web service runtime
- ✅ PostgreSQL database (90 days, then sleeps if inactive)
- ✅ Automatic SSL
- ✅ Custom domains
- ✅ Unlimited deploys

### Limitations:
- Services sleep after 15 minutes of inactivity (30-60 second cold start)
- 512 MB RAM
- Shared CPU

### Paid Plans (Optional):
- **Starter**: $7/month - No sleep, more resources
- **Standard**: $25/month - Dedicated resources, autoscaling

---

## Next Steps

1. ✅ Test all features (registration, login, team creation)
2. ✅ Set up custom domain
3. ✅ Configure Google Ads banner parameters
4. ✅ Add cricket match data
5. ✅ Build match selection interface
6. ✅ Implement team building system

---

## Support

- **Render Docs**: https://render.com/docs
- **Render Community**: https://community.render.com
- **Status Page**: https://status.render.com

---

## Comparison: Render vs Other Platforms

| Feature | Render | Railway | Vercel | Manus |
|---------|--------|---------|--------|-------|
| Free Tier | ✅ True free | ⚠️ Requires card | ✅ Free | ✅ Free |
| Database | ✅ PostgreSQL | ✅ MySQL | ❌ External | ✅ MySQL |
| Setup Time | 10 min | 5 min | 30 min | 0 min |
| Auto-deploy | ✅ GitHub | ✅ GitHub/CLI | ✅ GitHub | ✅ Built-in |
| Custom Domain | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| Best For | Full-stack apps | Full-stack apps | Frontend + APIs | Manus projects |

---

**Congratulations!** Your Kaveramma Fantasy Cricket platform is now live on Render.com! 🎉

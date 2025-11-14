# 🚀 Deploy to Render - Step by Step Guide

## Prerequisites
- GitHub account (free)
- Render account (free at https://render.com)

## Step 1: Push Code to GitHub

### Option A: Using GitHub Desktop (Easiest)
1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository → Select your `reactui` folder
4. Click "Publish repository" → Choose a name (e.g., "portfolio")
5. Make it public or private (your choice)
6. Click "Publish Repository"

### Option B: Using Git Command Line
If you have Git installed:

```bash
# Navigate to your project folder
cd C:\Users\hp\OneDrive\Desktop\reactui

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign up or log in (you can use GitHub to sign in)

2. **Create New Static Site**
   - Click the **"New +"** button (top right)
   - Select **"Static Site"**

3. **Connect Repository**
   - Click **"Connect account"** if not connected
   - Select your GitHub account
   - Find and select your repository (the one you just pushed)
   - Click **"Connect"**

4. **Configure Deployment**
   Render will auto-detect the `render.yaml` file, but verify these settings:
   - **Name:** `portfolio` (or your preferred name)
   - **Branch:** `main` (or `master`)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
   - **Node Version:** Leave as "Auto" (or select 18.x)

5. **Deploy**
   - Click **"Create Static Site"**
   - Wait 2-5 minutes for the build to complete
   - Your site will be live at: `https://portfolio.onrender.com`

## Step 3: Custom Domain (Optional)

After deployment:
1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain
4. Update DNS records as instructed

## ✅ That's It!

Your portfolio is now live! Render will automatically redeploy whenever you push changes to your GitHub repository.

## Troubleshooting

- **Build fails?** Check the build logs in Render dashboard
- **Site not loading?** Wait a few minutes (first deployment takes time)
- **Slow first load?** Free tier spins down after 15 min inactivity (first load may be slow)


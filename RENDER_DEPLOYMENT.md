# Render Deployment Guide

## Deployment Details

### Option 1: Static Site (Recommended - Free Tier Available)

**Configuration Details:**
- **Service Type:** Static Site
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18.x or 20.x (auto-detected)

**What Render will do:**
1. Install dependencies (`npm install`)
2. Build the React app (`npm run build`)
3. Serve the static files from the `build` folder
4. Provide a free HTTPS URL (e.g., `your-portfolio.onrender.com`)

### Option 2: Web Service (Using Dockerfile)

**Configuration Details:**
- **Service Type:** Web Service
- **Dockerfile:** Uses Node.js to build and serve the app
- **Port:** 10000 (Render's default)
- **Health Check:** Automatic

## Manual Setup Steps on Render Dashboard

1. **Go to Render Dashboard:** https://dashboard.render.com
2. **Click "New +" → "Static Site"**
3. **Connect your Git repository** (GitHub/GitLab/Bitbucket)
4. **Configure:**
   - **Name:** `portfolio` (or your preferred name)
   - **Branch:** `main` (or `master`)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
5. **Click "Create Static Site"**

## Environment Variables

No environment variables needed for this portfolio (it's a static site).

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain (e.g., `www.yourname.com`)
4. Update DNS records as instructed

## Auto-Deploy

Render automatically deploys when you push to your connected branch.


# Render Hosting Details

## Configuration Details Being Used

### 1. **Static Site Configuration** (render.yaml)
- **Service Type:** `static` (Static Site)
- **Service Name:** `portfolio`
- **Build Command:** `npm install && npm run build`
  - Installs all dependencies from package.json
  - Builds the React app into the `build` folder
- **Publish Directory:** `./build`
  - This is where the built static files are located
- **Routing:** All routes redirect to `/index.html` (for React Router compatibility)

### 2. **Package.json Details**
- **Build Script:** `react-scripts build` (already configured)
- **Dependencies:** React 19.2.0, React DOM, React Scripts 5.0.1
- **Node Version:** Render auto-detects (typically Node 18 or 20)

### 3. **Dockerfile Option** (Alternative)
If you prefer Docker deployment:
- **Base Image:** Node 18 Alpine (for building)
- **Production Server:** Nginx Alpine (for serving)
- **Port:** 80 (internally), Render maps to port 10000
- **Build Process:** Multi-stage build (smaller final image)

## What Render Needs

### Required Information:
1. **Git Repository:** Your code must be in GitHub/GitLab/Bitbucket
2. **Branch:** Usually `main` or `master`
3. **Build Command:** `npm install && npm run build`
4. **Publish Directory:** `build`

### Optional:
- **Custom Domain:** You can add your own domain later
- **Environment Variables:** Not needed for this static portfolio
- **Auto-Deploy:** Enabled by default (deploys on git push)

## Deployment Steps

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **On Render Dashboard:**
   - Go to https://dashboard.render.com
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Render will auto-detect the `render.yaml` file OR you can manually enter:
     - Build Command: `npm install && npm run build`
     - Publish Directory: `build`
   - Click "Create Static Site"

3. **Wait for deployment** (usually 2-5 minutes)

4. **Your site will be live at:** `https://portfolio.onrender.com` (or your custom name)

## Free Tier Limits
- ✅ Free HTTPS
- ✅ Free subdomain (`.onrender.com`)
- ⚠️ Spins down after 15 minutes of inactivity (first load may be slow)
- ⚠️ Can upgrade to paid plan for always-on service


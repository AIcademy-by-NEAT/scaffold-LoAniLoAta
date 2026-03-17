# 🚀 Team Vibe Checker - Deployment Guide

## Overview

This guide covers deploying **Team Vibe Checker** to production using:
- **Frontend**: Vercel (free tier)
- **Backend**: Railway or Heroku (free tier)

Total setup time: ~15 minutes

---

## Prerequisites

- Git repository (already initialized)
- GitHub account (free)
- Vercel account (free, sign up with GitHub)
- Railway OR Heroku account (free, with GitHub)

---

## Part 1: Prepare for Deployment

### 1.1 Update Environment Variables

**Backend (`.env`):**
```bash
PORT=3001
NODE_ENV=production
```

**Frontend (`.env.production`):**
```bash
NEXT_PUBLIC_API_URL=https://your-api-url.onrailway.app
```

Replace `your-api-url` with your actual backend URL (we'll get this after deploying backend).

### 1.2 Add Deployment Files

**Create `Procfile` for Heroku/Railway (backend root):**
```
web: npm run build && npm start
```

**Create `.vercelignore` (frontend root):**
```
node_modules
.next
.git
tests
docs
backend
```

---

## Part 2: Deploy Backend to Railway (Recommended - Easiest)

### 2.1 Setup Railway Project

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Authorize Railway to access your GitHub repo
5. Select your repository
6. Select the `backend` directory as root
7. Click "Deploy"

### 2.2 Set Environment Variables in Railway

1. Go to your Railway project
2. Click "Variables"
3. Add:
   ```
   PORT=3001
   NODE_ENV=production
   ```
4. Click "Save"

### 2.3 Get Your Backend URL

1. In Railway, click "Networking"
2. Copy the public domain URL
3. Save this - you'll need it for the frontend

**Example:** `https://scaffold-loaniloata-backend.onrailway.app`

---

## Part 3: Deploy Frontend to Vercel

### 3.1 Push to GitHub

```bash
git add .
git commit -m "Team Vibe Checker - Ready for deployment"
git push origin main
```

### 3.2 Deploy to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository
5. Configure project:
   - **Framework**: Next.js
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 3.3 Set Environment Variables

Before deploying, add environment variables:

1. Click "Environment Variables"
2. Add:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrailway.app
   ```
3. Click "Deploy"

### 3.4 Done!

Vercel will:
- Install dependencies
- Build the Next.js app
- Deploy to a live URL
- Give you a shareable link

**Example:** `https://scaffold-loaniloata.vercel.app`

---

## Alternative: Deploy Backend to Heroku

If you prefer Heroku instead of Railway:

### 3A.1 Setup Heroku CLI

```bash
# Install Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create your-app-name

# Add Procfile to backend root (if not already there):
web: npm run build && npm start
```

### 3A.2 Deploy

```bash
cd backend

# Push to Heroku
git push heroku main

# View logs
heroku logs --tail
```

### 3A.3 Get Your URL

```bash
heroku open
```

Heroku will show you your app URL (e.g., `https://your-app-name.herokuapp.com`)

---

## Part 4: Verify Deployment

### 4.1 Test Frontend

1. Open your Vercel URL: https://your-app-name.vercel.app
2. Enter two names
3. Complete the quiz
4. Verify results display correctly

### 4.2 Test Backend API

```bash
# Test questions endpoint
curl https://your-backend-url.onrailway.app/api/questions

# Test compatibility endpoint
curl -X POST https://your-backend-url.onrailway.app/api/compatibility \
  -H "Content-Type: application/json" \
  -d '{
    "person1": "Alice",
    "person2": "Bob",
    "person1_answers": ["a", "b", "c"],
    "person2_answers": ["x", "y", "z"]
  }'
```

### 4.3 Verify CORS

1. Open browser DevTools (F12)
2. Go to Console tab
3. Open the app
4. No CORS errors should appear
5. Quiz should load questions successfully

---

## Part 5: Update After Deployment

### If You Change Code

1. Commit changes to GitHub
2. Push to main branch
3. Vercel/Railway will auto-redeploy

```bash
git add .
git commit -m "Update: Add more questions"
git push origin main
```

### If You Change Backend

1. Railway will auto-redeploy from GitHub
2. Or manually trigger in Railway dashboard

---

## Troubleshooting

### "Cannot GET /api/questions"

**Problem**: Frontend can't reach backend  
**Solution**: Check `NEXT_PUBLIC_API_URL` is correct in Vercel variables

### "CORS error in console"

**Problem**: Backend CORS not enabled  
**Solution**: Verify `app.use(cors())` is in backend/src/app.ts

### "Build failed"

**Problem**: TypeScript or dependency errors  
**Solution**: 
```bash
# Test locally first
npm run build
npm run frontend:build
npm run backend:build
```

### "Port already in use"

**Problem**: Railway/Heroku default port conflict  
**Solution**: Set `PORT=3001` in production environment variables

### Questions endpoint returns 404

**Problem**: Backend routing issue  
**Solution**: Verify backend is running and `/api/questions` route exists

---

## Performance Optimizations

### Frontend (Vercel)

Vercel automatically provides:
- ✓ CDN for static files
- ✓ Automatic GZIP compression
- ✓ Image optimization
- ✓ Code splitting

### Backend (Railway)

Optimize with:
```typescript
// Add caching headers
app.get('/api/questions', (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600');
  // ...
});
```

---

## Monitoring & Logs

### View Vercel Logs

1. Go to vercel.com/dashboard
2. Select your project
3. Click "Logs" tab
4. View real-time logs

### View Railway Logs

1. Go to railway.app/dashboard
2. Select your project
3. Click "Logs" tab
4. Filter by service (Backend)

### View Heroku Logs

```bash
heroku logs --tail --app your-app-name
```

---

## Custom Domain (Optional)

### Add Domain to Vercel

1. In Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

### Add Domain to Railway

1. In Railway settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records

---

## Security Checklist

- ✅ CORS properly configured
- ✅ No secrets in `.env` files (use environment variables)
- ✅ HTTPS enabled (automatic with Vercel/Railway)
- ✅ Input validation on backend
- ✅ Error messages don't expose internals
- ✅ No personal data logging

---

## Cost Analysis

### Free Tier Included

- **Vercel**: 100GB bandwidth/month, unlimited deployments
- **Railway**: $5/month free credit (enough for hobby project)
- **Heroku**: Free tier no longer available (use Railway)

### If You Need More

- Vercel Pro: $20/month
- Railway: Pay as you go (~$5/month for standard hobby use)

---

## Next Steps

1. ✅ Deploy backend
2. ✅ Deploy frontend
3. ✅ Test production URLs
4. ✅ Share with friends!
5. 📈 Monitor logs
6. 🚀 Add more features

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- GitHub Issues: Add to your repo
- Community: Ask in Dev.to or Reddit

---

**Status**: Ready for production deployment  
**Estimated time**: 15 minutes total  
**Difficulty**: Easy ⭐

Enjoy your deployed app! 🎉

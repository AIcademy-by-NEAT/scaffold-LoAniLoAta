# ✅ NPM RUN DEV - ISSUE FIXED

## The Problem

You got this error:
```
[1] npm error Missing script: "backend:dev"
[0] npm error Missing script: "frontend:dev"
```

## The Root Cause

The root `package.json` was calling scripts that didn't exist properly.

## What We Fixed

### 1. Updated Root `package.json`
- ✅ Fixed `dev` script to use `concurrently` with proper directory navigation
- ✅ Added all missing script definitions
- ✅ Added `type-check`, `lint`, and other helper scripts

### 2. Updated Backend `package.json`
- ✅ Added `tsx` package for running TypeScript directly
- ✅ Changed `dev` script from `node --watch` to `tsx watch`

### 3. Created Helper Files
- ✅ `FIX_NPM_RUN_DEV.md` - Detailed troubleshooting guide
- ✅ `start.bat` - Windows batch script to automate setup

## How to Run Now

### Method 1: One Command (Recommended)

```bash
npm run dev
```

This will:
1. Start the backend on port 3001
2. Start the frontend on port 3000
3. Show output from both servers

### Method 2: Using Windows Batch Script

```bash
start.bat
```

This automatically:
1. Cleans old installations
2. Installs all dependencies
3. Starts the servers
4. Opens browser (if configured)

### Method 3: Run Separately (If Method 1 Fails)

**Terminal 1:**
```bash
cd backend
npm run dev
```

**Terminal 2 (new terminal):**
```bash
cd frontend
npm run dev
```

## What Should Happen

You should see output like:

```
[0] > next dev
[0] ▲ Next.js 14.0.3
[0]   Local: http://localhost:3000

[1] > tsx watch src/index.ts
[1] 🚀 Server running on port 3001
```

Then:
- Open browser to http://localhost:3000
- Enter two names
- Answer questions
- See results!

## If You Still Get Errors

### Error: "Cannot find module 'tsx'"
**Fix:**
```bash
cd backend
npm install tsx
cd ..
npm run dev
```

### Error: "Port 3000 or 3001 already in use"
**Fix:**
```bash
# Find and kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or just use different ports
PORT=3002 npm run dev:frontend
```

### Error: "npm: command not found"
**Fix:** Install Node.js from https://nodejs.org/

## All Available Scripts

```bash
# Development
npm run dev              # Run both servers
npm run dev:frontend    # Just frontend
npm run dev:backend     # Just backend

# Building
npm run build           # Build both
npm run frontend:build  # Just frontend
npm run backend:build   # Just backend

# Testing
npm run e2e             # Run E2E tests
npm run e2e:ui          # With visual UI

# Type checking
npm run backend:type-check
npm run frontend:type-check

# Linting
npm run lint            # Lint everything
npm run backend:lint
npm run frontend:lint

# Cleaning
npm run clean           # Remove build artifacts
```

## Summary of Changes

| File | Change |
|------|--------|
| `package.json` | Fixed dev, build, and test scripts |
| `backend/package.json` | Added `tsx` dependency |
| `FIX_NPM_RUN_DEV.md` | Created troubleshooting guide |
| `start.bat` | Created Windows automation script |

---

## ✨ You're All Set!

Run this command:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

Enjoy your hilarious compatibility test! 🎭

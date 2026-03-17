# 🔧 Fix for npm run dev Error

## What Was Wrong

The npm scripts were trying to run `frontend:dev` and `backend:dev` which didn't exist.

## What Was Fixed

✅ Updated root `package.json` with correct scripts  
✅ Added `tsx` to backend dependencies (to run TypeScript directly)  
✅ Fixed `npm run dev` to properly navigate to subdirectories

## How to Fix It Now

### Option 1: Fresh Install (Recommended)

```bash
# Clean everything
rm -r node_modules frontend/node_modules backend/node_modules
rm package-lock.json frontend/package-lock.json backend/package-lock.json

# Reinstall everything
npm install-all

# Run it
npm run dev
```

### Option 2: Quick Fix (If Option 1 doesn't work)

```bash
# Just reinstall backend packages
cd backend
npm install tsx

# Go back and try dev
cd ..
npm run dev
```

### Option 3: Run Separately (Alternative)

If `npm run dev` still doesn't work, run in separate terminals:

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2 (new terminal)
cd frontend
npm run dev
```

## What Should Happen

When you run `npm run dev`, you should see:

```
[0] > next dev
[0] ▲ Next.js 14.0.3
[0] Local: http://localhost:3000

[1] 🚀 Server running on port 3001
```

Both servers should start without errors!

## After Running

- Frontend: http://localhost:3000 ✅
- Backend: http://localhost:3001 ✅

---

**If you still get errors after these fixes, try Option 3 (run separately).**

Good luck! 🚀

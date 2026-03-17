# 🚀 Team Vibe Checker - Setup & Testing Guide

## Quick Start

### On Windows (Your Machine)

1. **Install Dependencies:**
   ```bash
   cd D:\Dropbox\Develop\AI\fromgit\scaffold-LoAniLoAta
   npm install-all
   ```
   This will install:
   - Root level dependencies (concurrently)
   - Backend dependencies (Express, TypeScript, CORS)
   - Frontend dependencies (Next.js, React, Tailwind)

2. **Install Node.js (if not already installed)**
   - Download from https://nodejs.org/ (LTS version)
   - Verify: `node --version` and `npm --version`

3. **Start Both Servers in Parallel:**
   ```bash
   npm run dev
   ```
   This will start:
   - **Frontend**: http://localhost:3000 (Next.js)
   - **Backend**: http://localhost:3001 (Express API)

   Or run them separately:
   ```bash
   # Terminal 1 - Frontend
   npm run dev:frontend
   
   # Terminal 2 - Backend
   npm run dev:backend
   ```

### What's Running

**Backend (Port 3001):**
- `GET /api/questions` → Returns 15 random questions
- `POST /api/compatibility` → Calculates random compatibility (50/50 YES/NO)
- `GET /api/health` → Health check

**Frontend (Port 3000):**
- Home page: Enter two names
- Quiz page: Answer questions (15 questions per person)
- Results page: See the verdict + fake metrics

## Project Structure

```
scaffold-LoAniLoAta/
├── backend/
│   ├── src/
│   │   ├── index.ts          # Server entry point
│   │   ├── app.ts            # Express app + routes
│   │   ├── calculator.ts     # Random verdict engine
│   │   ├── questionsService.ts # Question shuffling
│   │   └── data.ts           # Questions + reasons
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── pages/
│   │   ├── _app.tsx          # Next.js app wrapper
│   │   ├── index.tsx         # Home page
│   │   ├── quiz.tsx          # Quiz flow
│   │   └── results.tsx       # Results display
│   ├── styles/
│   │   └── globals.css       # Tailwind + global styles
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
│
└── package.json              # Root level (monorepo)
```

## Testing the App

### 1. Manual Testing (UI)
1. Open http://localhost:3000
2. Enter two names (e.g., "Alice" and "Bob")
3. Click "🚀 Start Quiz"
4. Answer 15 questions for Person 1
5. Answer 15 questions for Person 2
6. See results!
7. **Important Test:** Click "🔄 Test Another Pair" and use the SAME names
   - You should get a DIFFERENT result ~50% of the time (this is the joke!)

### 2. Backend API Testing (cURL)

Get questions:
```bash
curl http://localhost:3001/api/questions
```

Calculate compatibility:
```bash
curl -X POST http://localhost:3001/api/compatibility \
  -H "Content-Type: application/json" \
  -d '{
    "person1": "Alice",
    "person2": "Bob",
    "person1_answers": ["Answer1", "Answer2", "Answer3"],
    "person2_answers": ["Answer1", "Answer2", "Answer3"]
  }'
```

Health check:
```bash
curl http://localhost:3001/api/health
```

### 3. Verify Randomness (CRITICAL)

1. Go to http://localhost:3000
2. Enter "Test1" and "Test2"
3. Answer the same way for both people
4. Note the result (YES or NO)
5. Click "🔄 Test Another Pair"
6. Same names, same answers
7. **Expected:** Different result ~50% of the time

If you run this 10 times with identical answers:
- You should get ~5 YES results
- You should get ~5 NO results
- If results are always the same, the randomness is broken!

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### npm install fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### CORS Errors
- Backend is running on port 3001? ✓
- Frontend has correct API URL? (Check `NEXT_PUBLIC_API_URL`)
- Check browser console for exact error

### Next.js won't start
- Make sure you have `.next` cache cleared: `npm run clean`
- Try `npm run build` first to check for TypeScript errors

## Key Files to Know

**Backend Core Logic:**
- `backend/src/calculator.ts` - The fake compatibility engine
  - `generateVerdict()` - 50/50 coin flip
  - `generateMetrics()` - Random 0-100 values
  - `selectReason()` - Pick from reason pool

**Frontend Flow:**
- `pages/index.tsx` - Home (name entry)
- `pages/quiz.tsx` - Quiz questions & answers
- `pages/results.tsx` - Display verdict + metrics

**Data:**
- `backend/src/data.ts`
  - 15 questions (can add more)
  - 25+ YES reasons
  - 25+ NO reasons

## Next Steps (If You Want to Extend)

1. **Add more questions:**
   - Edit `backend/src/data.ts`
   - Add to `QUESTIONS` array

2. **Add more reasons:**
   - Edit `backend/src/data.ts`
   - Add to `YES_REASONS` or `NO_REASONS`

3. **Improve UI:**
   - Add animations (CSS in `frontend/styles/globals.css`)
   - Add loading states
   - Add confetti on results

4. **Add E2E Tests:**
   - Create `tests/e2e/flow.spec.ts`
   - Run: `npm run e2e`

5. **Deploy:**
   - Frontend → Vercel (automatic from GitHub)
   - Backend → Heroku/Railway

## Commands Reference

```bash
# Development
npm run dev                    # Run both frontend + backend
npm run dev:frontend          # Just frontend
npm run dev:backend           # Just backend

# Building
npm run build                 # Build both
npm run frontend:build        # Just frontend
npm run backend:build         # Just backend

# Testing
npm run test                  # Run all tests
npm run e2e                   # Run E2E tests
npm run e2e:ui                # E2E with UI

# Linting
npm run lint                  # Lint everything
npm run frontend:lint         # Frontend lint
npm run backend:lint          # Backend lint

# Cleaning
npm run clean                 # Remove build artifacts
```

## Architecture Overview

```
┌─────────────────────────┐
│   User Browser (3000)   │
│  ┌─────────────────────┐│
│  │  Next.js Frontend   ││
│  │  - Home Page        ││
│  │  - Quiz Page        ││
│  │  - Results Page     ││
│  └─────────────────────┘│
└────────────┬────────────┘
             │ (HTTP/JSON)
             ↓
┌─────────────────────────┐
│  Express Backend (3001) │
│  ┌─────────────────────┐│
│  │  GET /questions     ││
│  │  POST /compatibility││
│  │  GET /health        ││
│  └─────────────────────┘│
│  ┌─────────────────────┐│
│  │  Data Layer         ││
│  │  - Questions        ││
│  │  - YES Reasons      ││
│  │  - NO Reasons       ││
│  └─────────────────────┘│
└─────────────────────────┘
```

## How the "Science" Works

1. **User A & B answer 15 random questions**
2. **Backend receives answers:**
   - Doesn't actually analyze answers (they're ignored!)
   - Generates 4 random metrics (0-100)
   - Flips a coin for YES/NO (50/50)
   - Picks a random reason from the pool
3. **Frontend displays:**
   - Verdict (YES/NO)
   - Percentage (average of metrics)
   - Reason from database

**The Joke:**
- Same answers → Different results ~50% of the time
- Metrics are random (not based on answers)
- Reasons are hilarious and self-aware

## Success Criteria

✅ Backend starts on port 3001  
✅ Frontend starts on port 3000  
✅ Can enter names and start quiz  
✅ Can answer 15 questions per person  
✅ See results with verdict + percentage  
✅ Results are random (rerun with same answers = different result)  
✅ Can test another pair  
✅ All API endpoints respond with JSON  

## Questions?

If something doesn't work:
1. Check if both servers are running
2. Check browser console for errors
3. Check terminal for server errors
4. Make sure ports 3000 and 3001 are free
5. Verify Node.js version: `node --version` (should be 16+)

Enjoy! 🎭✨

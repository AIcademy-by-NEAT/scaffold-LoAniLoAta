# CTO Brief — Team Vibe Checker Project Initialization ✅

## What Just Happened

I've transformed the `scaffold-LoAniLoAta` scaffold into a complete project specification for **Team Vibe Checker** — a hilarious, fake compatibility testing app.

This is a **parody project** that pretends to scientifically evaluate whether two people can work together. Results are 100% random and meaningless. Users know this and find it funny.

---

## Files Updated/Created

### 1. **README.md** (384 lines) ✅
Complete user-facing documentation including:
- What the project is
- Tech stack
- Quick start guide
- File structure
- Development workflow
- Testing strategy
- Deployment instructions

**Key Takeaways:**
- This is a joke app with a serious facade
- Results are deliberately random (50/50 YES/NO)
- Has 50+ questions and 80+ reasons
- Made for fun, not science

### 2. **CLAUDE.md** (427 lines) ✅
Complete project context for Claude Code including:
- Project identity and configuration
- All important commands
- Project structure with detailed explanations
- Role definitions (CTO, DEV, QA)
- Core feature descriptions
- Testing strategy
- Key rules and constraints

**Key Takeaways:**
- Clear architecture with 3 main modules (questions, compatibility, results)
- Frontend: Next.js, Backend: Express
- Random number generation is THE FEATURE
- Frontend port 3000, Backend port 3001

### 3. **docs/PRD.md** (404 lines) ✅
Product Requirements Document with:
- Executive summary
- 4 core features
- 4 detailed user stories
- 50 questions (organized by category)
- 40+ YES reasons and 40+ NO reasons
- Technical requirements
- Non-functional requirements
- Success metrics

**Key Takeaways:**
- Database has questions in 5 categories (personality, work style, life choices, quirks, weird stuff)
- Reasons are pre-written and hilarious
- No actual compatibility science — it's all fake

### 4. **docs/knowledge/question-database.md** (520 lines) ✅
Exhaustive database of all content:
- 50 complete questions with IDs, text, categories, and options
- 50 YES reasons (formatted as JSON for easy copy-paste)
- 50 NO reasons (formatted as JSON)
- Implementation notes for developers

**Key Takeaways:**
- Ready to paste into backend database
- Multiple variations for replay value
- Can be extended easily

### 5. **docs/ARCHITECTURE.md** (634 lines) ✅
Complete technical architecture including:
- System diagram (ASCII art)
- Frontend architecture (5 pages, 3 modules)
- Backend architecture (3 routes, 3 modules)
- Data models and flow
- Error handling
- Testing strategy
- Deployment guide
- Monitoring and scaling

**Key Takeaways:**
- Clear separation: Frontend (Next.js) ↔ Backend (Express)
- 3 modules: questions, compatibility, results
- API: GET /questions, POST /compatibility, GET /health
- Can handle thousands of concurrent users

---

## Project Identity

**Team Vibe Checker**

A playful web app that "scientifically" evaluates whether two people can work together.

### The Joke
1. Users enter two names
2. Each person answers 10-15 silly questions
3. Our "proprietary algorithm" processes the answers
4. The algorithm performs hilariously complex fake calculations (with funny names)
5. The algorithm flips a coin (50/50 YES/NO)
6. The algorithm picks a ridiculous reason
7. Users get a result that's completely random and obviously fake

### Why It's Funny
- It takes itself seriously (like real science)
- But everything is obviously absurd
- Results contradict each other on repeat (with identical answers)
- Fake metrics have ridiculous names (Quantum Preference Alignment, Tea-Selection Entropy)
- The "processing" takes 2-5 seconds even though it's instant math

---

## Key Features

### Feature 1: Random Question Selection (50+ questions)
- Each quiz pulls 15 random, non-repeating questions
- Questions organized in 5 categories
- Users get different questions every time
- Encourages replay

### Feature 2: Fake Compatibility Engine
**Input:** Two sets of answers  
**Process:** Random number generator with funny names  
**Output:** 50% YES, 50% NO with metrics and reason

**Metrics:**
- Synergy Oscillation Coefficient (random 0-100)
- Quantum Preference Alignment (random 0-100)
- Tea-Selection Entropy (random 0-100)
- Work Style Coherence Index (random 0-100)

### Feature 3: Huge Reason Database (80+ reasons)
- 40+ pre-written YES reasons
- 40+ pre-written NO reasons
- Each result gets a random reason
- Reasons are hilarious and self-aware

### Feature 4: Replay Value
- Results are random (same answers → different outcome ~50% of the time)
- Questions are random
- Reasons are random
- Users want to take it again

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 + TypeScript + Tailwind CSS + React |
| Backend | Express (or Fastify) + TypeScript |
| Database | In-memory JSON (no persistence needed) |
| Testing | Jest/Vitest + Playwright E2E |
| Deployment | Vercel (frontend) + Heroku/Railway (backend) |

---

## API Endpoints (Simple)

### GET `/api/questions`
Returns 15 random questions.

### POST `/api/compatibility`
Takes two sets of answers, returns compatibility verdict.

### GET `/api/health`
Health check for deployment monitoring.

---

## Data Model

### Question
```
id: string
text: string
category: string (personality, work_style, life_choices, quirks, weird_stuff)
options: string[] (optional)
```

### CompatibilityResult
```
person1: string
person2: string
compatible: boolean
percentage: number (0-100, calculated from metrics)
reason: string
metrics: {
  synergyOscillation: number,
  quantumAlignment: number,
  teaPreferenceHarmonization: number,
  workStyleCoherence: number
}
```

---

## Critical Rules (READ THIS)

### Rule 1: RESULTS MUST BE RANDOM
- Same answers on different runs = 50% chance of different outcome
- This is THE JOKE. Don't "fix" it.
- Verify with test: run quiz 10 times with same answers, check for ~50/50 split

### Rule 2: QUESTIONS NEVER REPEAT IN A SESSION
- Single quiz: 15 questions, no duplicates
- Across sessions: questions repeat (that's fine)
- Use Fisher-Yates shuffle or similar

### Rule 3: STAY IN CHARACTER
- App takes itself seriously (professional UI, scientific jargon)
- But results are obviously absurd
- The contrast is the comedy

### Rule 4: NO PERSONAL DATA STORAGE
- Names are temporary (cleared when quiz ends)
- Results are not saved
- No analytics or tracking
- Complete anonymity

---

## Module Breakdown

### Frontend Modules

#### **questions/**
- Fetch questions from API
- Display QuestionCard
- Manage question state
- Hook: useQuestions()

#### **compatibility/**
- Main quiz flow
- Manage quiz state (current question, answers)
- Navigate between questions
- Format answers for API
- Hook: useQuizState()

#### **results/**
- Display verdict (YES/NO)
- Show metrics
- Display reason
- Show names in context
- Component: ResultCard, MetricsDisplay, ReasonCard

#### **shared/**
- Reusable components (Button, Input, Layout)
- TypeScript types
- Design tokens (Tailwind)

### Backend Modules

#### **questions/**
- Load 50+ questions from JSON
- Select 15 random, non-repeating
- Router: GET /api/questions
- Service: selectRandomQuestions()

#### **compatibility/**
- THE CORE
- Calculate verdict (coin flip)
- Generate metrics (random 0-100)
- Select reason (random from pool)
- Router: POST /api/compatibility
- Service: calculateCompatibility()

#### **results/**
- Database of YES reasons (50)
- Database of NO reasons (50)
- Service: selectReason()
- Formatter: formatResult()

#### **shared/**
- Error handling
- Logging
- Utilities

---

## Development Workflow

### Phase 1: CTO (Planning) — ~30 min
```bash
/project:cto
```
- Read docs/ (PRD, Architecture)
- Review database (questions, reasons)
- Ask questions, adjust plan
- Approve architecture

### Phase 2: DEV (Implementation) — ~3 hours
```bash
/project:dev
```
- Implement features from task list
- Build frontend pages and modules
- Build backend API and modules
- Test locally

### Phase 3: QA (Testing) — ~1 hour
```bash
/project:qa
```
- Run unit tests
- Run E2E tests
- Verify randomness (critical!)
- Check all features work

### Phase 4: Deploy — ~30 min
- Deploy frontend to Vercel
- Deploy backend to Heroku/Railway
- Test in production

---

## Sprint 1 Checklist

### Must-Have
- ✅ Home page with name input
- ✅ Quiz page with questions (10-15)
- ✅ Results page with verdict + metrics + reason
- ✅ Backend API (GET /questions, POST /compatibility)
- ✅ Random verdict (50/50 YES/NO)
- ✅ Mobile responsive
- ✅ E2E tests for full flow

### Nice-to-Have
- ✅ Animations (loading spinner, results reveal)
- ✅ Share results button
- ✅ Retake button
- ✅ Funny loading messages
- ✅ Progressbar for questions
- ✅ Dark mode

### Don't Do
- ❌ Authentication
- ❌ User accounts
- ❌ Result storage
- ❌ Real compatibility science
- ❌ Ads or tracking

---

## Testing Strategy

### Unit Tests
Test the calculation engine:
```javascript
// Run quiz 10 times with same answers
// Count YES vs NO
// Should be roughly 50/50
```

### E2E Tests
Test full user flow:
- Load home page
- Enter names
- Answer questions
- Get results
- Results are random (run twice, check for differences)
- Retake works

### Randomness Test (CRITICAL)
```javascript
for (let i = 0; i < 10; i++) {
  const result = await runQuiz(alice, bob);
  verdicts.push(result.compatible);
}
// verdicts should have mix of true/false
// If all same, randomness is broken!
```

---

## Documentation You Have

| Document | Purpose | Status |
|----------|---------|--------|
| README.md | User-facing project info | ✅ Complete |
| CLAUDE.md | Project context for Claude | ✅ Complete |
| docs/PRD.md | Product requirements + questions | ✅ Complete |
| docs/ARCHITECTURE.md | Technical architecture | ✅ Complete |
| docs/knowledge/question-database.md | All content (JSON-ready) | ✅ Complete |
| docs/DECISIONS.md | Decision log (empty, fill as you go) | Ready |
| docs/ui/UI_KIT.md | Design system (to fill) | Skeleton |
| tests/e2e/example.spec.ts | E2E test template | Skeleton |

---

## Files to Create (Next Steps)

### Backend
1. `backend/modules/questions/src/db.ts` — Load questions from JSON
2. `backend/modules/questions/src/router.ts` — GET /api/questions
3. `backend/modules/compatibility/src/calculator.ts` — Random verdict + metrics
4. `backend/modules/compatibility/src/router.ts` — POST /api/compatibility
5. `backend/modules/results/src/reasonBank.ts` — YES/NO reasons database
6. `backend/src/index.ts` — Server entry point

### Frontend
1. `frontend/pages/index.tsx` — Home page (name entry)
2. `frontend/pages/quiz.tsx` — Quiz page (questions)
3. `frontend/pages/results.tsx` — Results page (verdict)
4. `frontend/modules/questions/src/components/QuestionCard.tsx`
5. `frontend/modules/results/src/components/ResultCard.tsx`
6. `frontend/modules/shared/components/Button.tsx`, `Input.tsx`, `Layout.tsx`

### Config
1. `next.config.js` — Next.js configuration
2. `tsconfig.json` — TypeScript config
3. `tailwind.config.js` — Tailwind CSS setup
4. `package.json` (frontend) — Dependencies
5. `package.json` (backend) — Dependencies

---

## Quick Reference

### Ports
- Frontend: `3000`
- Backend: `3001`

### Key Env Vars
```
ANTHROPIC_API_KEY=sk-ant-...  (optional)
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=development
```

### Build Commands (to implement)
```bash
# Frontend
npm run dev           # Next.js dev server
npm run build         # Production build
npm run lint          # Type check

# Backend
npm run backend:dev   # Express dev server
npm run backend:build # Compile TS

# Full stack
npm run dev:full      # Run both

# Testing
npm run test          # Unit tests
npx playwright test   # E2E tests
```

---

## Success Criteria

- ✅ Users complete quiz in <3 minutes
- ✅ Results are actually random (verify with test)
- ✅ No hardcoded results
- ✅ Questions never repeat in single session
- ✅ All E2E tests pass
- ✅ Mobile responsive
- ✅ Funny and engaging (users want to replay)

---

## Next Steps for CTO

1. **Review** this brief + the 5 main documents
2. **Adjust** if needed (change questions, reasons, tech stack, etc.)
3. **Plan** Sprint 1 tasks (break into small pieces)
4. **Delegate** tasks to DEV and QA
5. **Review** code as features are completed

---

## Questions?

- The PRD has all the questions and reasons
- The Architecture has all the technical details
- The CLAUDE.md has all the project rules
- The Question Database has ready-to-paste content

Everything you need to start building is here. 🚀

---

**Created:** 2025-03-17  
**By:** Claude (CTO Mode)  
**Status:** 🟢 READY FOR DEVELOPMENT

Go build something hilarious! ✨
# Team Vibe Checker — Claude Code Project Context

> **Stack:** Next.js 15 + TypeScript + Tailwind + Express/Fastify + Claude API
> **Purpose:** A playful (completely fake) team compatibility assessment app
>
> This file is auto-loaded by Claude Code CLI when you open this project directory.
> It is the single source of truth for Claude's project awareness.

---

## 1. Project Identity

| Field | Value |
|---|---|
| **Name** | Team Vibe Checker |
| **Purpose** | A hilarious fake compatibility test that uses random calculations to tell if two people can work together |
| **Current sprint** | Sprint 01 |
| **Frontend port** | 3000 |
| **Backend port** | 3001 |
| **Tone** | Playful, ridiculous, self-aware parody |

---

## 2. Key Commands

```bash
# Frontend (Next.js)
npm run dev                    # Start Next.js dev server (port 3000)
npm run build                  # Production build
npm run lint                   # TypeScript check + linting

# Backend (Express)
npm run backend:dev            # Start Express server (port 3001)
npm run backend:build          # Compile TypeScript

# Testing
npm run test                   # Run unit tests
npx playwright test            # Run E2E tests
npx playwright test --ui       # Interactive UI mode
npx playwright test --debug    # Debug mode

# Full stack
npm run dev:full              # Run frontend + backend in parallel
```

---

## 3. Definition of Done

```
A FEATURE IS "DONE" ONLY WHEN:
  1. Code works — both servers run without errors
  2. Tests pass — unit tests cover new logic
  3. E2E pass — Playwright tests verify the full quiz flow
  4. Results are RANDOM — same answers don't guarantee same result
  5. Questions/Reasons are UNIQUE — no duplicates in single session
  6. No regressions — existing quizzes still work
  7. Reviewed — CTO or another dev has seen the code
  8. Screenshots captured — for any UI changes

CRITICAL: This is a parody. The science is fake. The randomness is the joke.
```

---

## 4. Project Structure

```
team-vibe-checker/
├── CLAUDE.md                  # This file — project context
├── AGENTS.md                  # Role definitions (CTO, DEV, QA)
├── README.md                  # User-facing project README
├── .env.example               # Environment template
├── playwright.config.ts       # Playwright E2E configuration
│
├── .claude/
│   ├── settings.local.json    # Tool permissions
│   └── commands/              # Slash commands
│
├── frontend/                  # Next.js application
│   ├── AGENTS.md              # Frontend domain rules
│   ├── modules/
│   │   ├── questions/         # Question fetching & display
│   │   │   ├── README.md
│   │   │   ├── src/
│   │   │   │   ├── api.ts     # Fetch questions from backend
│   │   │   │   ├── components/QuestionCard.tsx
│   │   │   │   └── hooks/     # useQuestions, etc
│   │   │   └── tests/
│   │   │
│   │   ├── results/           # Results display & visualization
│   │   │   ├── README.md
│   │   │   ├── src/
│   │   │   │   ├── ResultCard.tsx
│   │   │   │   ├── MetricsDisplay.tsx
│   │   │   │   └── hooks/
│   │   │   └── tests/
│   │   │
│   │   ├── compatibility/     # Main quiz flow
│   │   │   ├── README.md
│   │   │   ├── src/
│   │   │   │   ├── CompatibilityQuiz.tsx
│   │   │   │   └── hooks/
│   │   │   └── tests/
│   │   │
│   │   └── shared/            # Buttons, inputs, layouts
│   │       ├── components/
│   │       ├── styles/
│   │       └── types/
│   │
│   ├── pages/                 # Next.js pages
│   │   ├── _app.tsx
│   │   ├── index.tsx           # Home / quiz entry
│   │   ├── quiz.tsx            # Quiz flow
│   │   ├── results.tsx         # Results display
│   │   └── api/                # Next.js API routes (proxy)
│   │
│   ├── styles/                # Global styles
│   │   ├── globals.css        # Tailwind + custom CSS
│   │   └── animations.css     # Fun animations
│   │
│   └── tests/
│       ├── unit/
│       └── e2e/
│
├── backend/                   # Express/Fastify API
│   ├── AGENTS.md              # Backend domain rules
│   ├── modules/
│   │   ├── questions/         # Question database & endpoints
│   │   │   ├── README.md
│   │   │   ├── src/
│   │   │   │   ├── db.ts      # Question database (in-memory or JSON)
│   │   │   │   ├── service.ts # Selection logic
│   │   │   │   ├── router.ts  # Express routes
│   │   │   │   └── types.ts
│   │   │   └── tests/
│   │   │
│   │   ├── compatibility/     # Calculation engine (THE CORE)
│   │   │   ├── README.md
│   │   │   ├── src/
│   │   │   │   ├── calculator.ts  # Random verdict + metrics
│   │   │   │   ├── metrics.ts     # Fake science calculations
│   │   │   │   ├── router.ts      # POST /compatibility endpoint
│   │   │   │   └── types.ts
│   │   │   └── tests/
│   │   │
│   │   ├── results/           # Result formatting & storage
│   │   │   ├── README.md
│   │   │   ├── src/
│   │   │   │   ├── reasonBank.ts  # Pre-written reasons DB
│   │   │   │   ├── formatter.ts   # Format results for frontend
│   │   │   │   └── types.ts
│   │   │   └── tests/
│   │   │
│   │   └── shared/            # Utilities
│   │       ├── errors.ts
│   │       ├── logging.ts
│   │       └── utils.ts
│   │
│   ├── src/
│   │   ├── index.ts           # Server entry point
│   │   ├── app.ts             # Express app setup
│   │   └── config.ts          # Configuration
│   │
│   └── tests/
│       ├── unit/
│       └── integration/
│
├── tests/
│   ├── e2e/
│   │   ├── full-flow.spec.ts    # Complete quiz → results flow
│   │   ├── questions.spec.ts    # Question loading
│   │   ├── results.spec.ts      # Results display
│   │   └── randomness.spec.ts   # Verify results are actually random
│   └── screenshots/             # Playwright captures
│
├── docs/
│   ├── PRD.md                 # Product requirements + question DB + reasons
│   ├── ARCHITECTURE.md        # Frontend/backend architecture
│   ├── DECISIONS.md           # Decision log
│   ├── knowledge/
│   │   └── QUESTION_DATABASE.md    # All questions & reasons (huge list)
│   ├── ui/
│   │   └── UI_KIT.md          # Design tokens, colors, animations
│   └── sprints/
│       ├── README.md
│       └── sprint_01/
│           ├── sprint_01_index.md
│           ├── todo/
│           ├── reports/
│           └── reviews/
│
└── package.json              # Monorepo root (or separate packages)
```

---

## 5. Environment Variables

Copy `.env.example` → `.env`:

```
# Claude API (optional — for flavor text generation)
ANTHROPIC_API_KEY=sk-ant-...

# URLs
NEXT_PUBLIC_API_URL=http://localhost:3001

# Ports
PORT=3000
BACKEND_PORT=3001

# Environment
NODE_ENV=development
```

---

## 6. The Core Feature: Fake Compatibility Engine

This is what makes the app fun. Located in `backend/modules/compatibility/src/`:

### Step 1: Parse Answers
```typescript
// Convert ["Yes", "No", "Sometimes"] → internal representation
```

### Step 2: Calculate Fake Metrics
Generate random numbers 0-100 with names like:
- **Synergy Oscillation Coefficient** (random 0-100)
- **Quantum Preference Alignment** (random %)
- **Tea-Selection Entropy** (random calculation)
- **Work Style Coherence Index** (random 0-100)

### Step 3: Generate Verdict
**50/50 coin flip:**
- Heads = "YES, you're compatible!"
- Tails = "NO, you're not compatible!"

### Step 4: Pick Reason
Select from pre-written reasons matching the verdict.

**Example:**
```json
{
  "compatible": true,
  "percentage": 87.4,
  "reason": "Your synergy oscillation coefficient is off the charts!",
  "metrics": {
    "synergyOscillation": 87.4,
    "quantumAlignment": 72.1,
    "teaPreferenceHarmonization": 91.3,
    "workStyleCoherence": 68.9
  }
}
```

---

## 7. The Question & Reason Databases

**Location:** `docs/PRD.md` and `docs/knowledge/QUESTION_DATABASE.md`

### Questions (50+ total)

Each question is an object:
```typescript
{
  id: "q1",
  text: "If you were a fruit, which would you be?",
  category: "personality",
  options?: ["Apple", "Banana", "Orange"] // optional
}
```

### Reasons (40+ each for YES and NO)

Pre-written ridiculous reasons:

**YES Reasons (40+):**
- "Your synergy oscillation coefficient is off the charts!"
- "Quantum probability indicates cosmic soulmate status."
- "Your tea preference harmonization is flawless."
- ...

**NO Reasons (40+):**
- "Fundamental incompatibility in fruit-selection entropy."
- "Work-style oscillation waves are 180 degrees out of phase."
- "One prefers order. One prefers chaos. Unrecoverable."
- ...

---

## 8. Key Rules

### Rule 1: Results Must Be Random
- Same answers on different runs = different outcomes (50% of the time)
- This is the joke. Don't "fix" it.

### Rule 2: Questions Must Never Repeat
- In a single quiz session, no question appears twice
- But across sessions, questions repeat (users can re-take the test)

### Rule 3: Stay in Character
- The app takes itself seriously (like it's real science)
- But the results are obviously absurd
- Users should laugh, not believe it

### Rule 4: No Personal Data
- Names are temporary (not stored)
- Results are not saved
- No analytics or tracking

---

## 9. Available Commands

| Command | Purpose |
|---|---|
| `/project:cto` | Architecture, planning, tech decisions |
| `/project:dev` | Implementation, features, bug fixes |
| `/project:qa` | Testing, quality gates, bug discovery |
| `/project:plan` | Force planning mode before complex work |
| `/project:test` | Run unit test suite |
| `/project:e2e` | Run Playwright E2E browser tests |

---

## 10. Testing Strategy

| Level | Location | Tool | When |
|-------|----------|------|------|
| **Unit** | `*/tests/unit/` | Jest/Vitest | Every calculation |
| **Integration** | `*/tests/integration/` | Jest/Supertest | API endpoints |
| **E2E** | `tests/e2e/` | Playwright | Full quiz flow |
| **Randomness** | `tests/e2e/randomness.spec.ts` | Playwright | Verify 50/50 split |

**Critical Test:** Run the quiz 10 times with identical answers. Results should differ ~50% of the time.

---

## 11. What NOT to Do

- ❌ Don't hardcode results (must be random)
- ❌ Don't repeat questions in a single quiz
- ❌ Don't store personal data
- ❌ Don't make the UI look too "professional" (it's supposed to be fun)
- ❌ Don't use real compatibility science (this is satire)
- ❌ Don't skip testing the randomness
- ❌ Don't add ads or tracking
- ❌ Don't duplicate code between similar calculations

---

## 12. Role Tags (for CTO/DEV/QA)

| Tag | Context |
|---|---|
| `[CTO]` | Architecture, planning, decisions |
| `[DEV]` | Implementation, feature work |
| `[DEV:frontend]` | Next.js, React components |
| `[DEV:backend]` | Express, calculations, database |
| `[QA]` | Testing, quality, randomness checks |
| `[FOUNDER]` | Human decision maker |

---

## 13. Sprint 1 Goals

- ✅ Basic UI (Next.js home page + quiz page)
- ✅ Question fetching from backend
- ✅ Compatibility calculation endpoint
- ✅ Results display with fake metrics
- ✅ E2E tests for full flow
- ✅ Verify randomness works
- ✅ Deploy to Vercel

---

## 14. Tips for Success

### Good Architecture
- **Separate concerns:** Questions, calculations, results are separate modules
- **Use types:** TypeScript for safety
- **Small functions:** Each calculation step is a tiny function
- **Easy to extend:** Adding questions or reasons should be simple JSON edits

### Testing Randomness
```javascript
// Run quiz 10 times with same answers
// Count YES vs NO verdicts
// Should be roughly 50/50 (not exactly, but close)
```

### Fun UI
- Use animations ✨
- Add loading spinners 🌀
- Show "calculating..." messages
- Display fake metrics with precision (e.g., 87.43%)
- Use fun fonts & colors

---

## 15. Resources

- [Claude API Docs](https://docs.anthropic.com/en/api)
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Playwright Testing](https://playwright.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 16. Quick Reference: API Endpoints

```
GET  /api/questions              → Fetch 15 random questions
POST /api/compatibility          → Calculate compatibility
GET  /api/health                 → Health check
```

See `backend/modules/questions/` and `backend/modules/compatibility/` for details.

---

**Remember:** This is a parody/joke. The science is fake. The randomness is the feature. Users should have fun! 🎭✨
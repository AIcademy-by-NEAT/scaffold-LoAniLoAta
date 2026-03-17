# Team Vibe Checker — Technical Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND (Next.js)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐   │
│  │ Home Page    │  │ Quiz Page    │  │ Results Page    │   │
│  │ (Enter names)│  │ (Questions)  │  │ (Verdict+Metrics)  │
│  └──────────────┘  └──────────────┘  └─────────────────┘   │
│         ▼                 ▼                    ▲              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              React Components & Hooks               │   │
│  │  - useQuestions (fetch questions)                   │   │
│  │  - useCompatibility (submit answers)                │   │
│  │  - useState (manage quiz state)                     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ▼
                  ┌─────────────────────┐
                  │  HTTP Requests      │
                  │  (fetch / axios)    │
                  └─────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Express API)                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │             RESTful API Endpoints                     │ │
│  │  ├─ GET  /api/questions                              │ │
│  │  ├─ POST /api/compatibility                          │ │
│  │  └─ GET  /api/health                                 │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ▼                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Questions    │  │Compatibility │  │   Results    │      │
│  │ Module       │  │   Module     │  │   Module     │      │
│  │ ├─ Router    │  │ ├─ Router    │  │ ├─ Router    │      │
│  │ ├─ Service   │  │ ├─ Service   │  │ ├─ Service   │      │
│  │ ├─ Database  │  │ ├─Calculator │  │ ├─ Formatter │      │
│  │ └─ Types     │  │ ├─ Metrics   │  │ └─ Types     │      │
│  │              │  │ └─ Types     │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         ▼                  ▼                ▼                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         In-Memory Data Stores (JSON/DB)            │   │
│  │  ├─ questions.json (50+ questions)                  │   │
│  │  ├─ yes-reasons.json (40+ reasons)                  │   │
│  │  └─ no-reasons.json (40+ reasons)                   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 1. Frontend Architecture (Next.js)

### Pages

#### `pages/index.tsx` — Home Page
- **Purpose:** Entry point. Users enter two names.
- **Components:** NameInput, StartButton
- **State:** person1Name, person2Name
- **Navigation:** → `/quiz` on submit
- **Features:**
  - Form validation (names not empty)
  - Quick FAQ about the app
  - Link to results (if cached)

#### `pages/quiz.tsx` — Quiz Page
- **Purpose:** Main quiz flow. Display questions one at a time.
- **Components:** QuestionCard, ProgressBar, NavigationButtons
- **State:**
  - currentQuestion (index)
  - answers (array of responses)
  - loading (fetching questions)
- **Features:**
  - Load 15 random questions
  - Display one question at a time
  - Store answers
  - Show progress (Question 3 of 15)
  - Next/Previous navigation
  - Submit button when done
  - Navigation: → `/results` on submit

#### `pages/results.tsx` — Results Page
- **Purpose:** Display verdict, metrics, and reason.
- **Components:** VerdictDisplay, MetricsCard, ReasonCard, RetakeButton
- **State:**
  - Result data (from API response)
  - Loading state
- **Features:**
  - Display both names
  - Show YES/NO with emphasis
  - Display 4 metrics with percentages
  - Display funny reason
  - Share button (optional)
  - "Retake Quiz" button

### Modules

#### `modules/questions/`
**Purpose:** Question fetching and management.

**Files:**
- `src/api.ts` — Fetch questions from backend
- `src/components/QuestionCard.tsx` — Display single question
- `src/hooks/useQuestions.ts` — Custom hook for question state
- `tests/unit/api.test.ts` — Test API calls

**Key Functions:**
```typescript
// Fetch 15 random questions
async function fetchQuestions(): Promise<Question[]> {
  const response = await fetch('/api/questions');
  return response.json();
}

// Custom hook
function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetchQuestions().then(q => {
      setQuestions(q);
      setLoading(false);
    });
  }, []);
  
  return { questions, loading };
}
```

#### `modules/compatibility/`
**Purpose:** Quiz flow and answer collection.

**Files:**
- `src/CompatibilityQuiz.tsx` — Main quiz component
- `src/hooks/useQuizState.ts` — Manage quiz state
- `src/utils/answerFormatter.ts` — Format answers for API
- `tests/unit/answerFormatter.test.ts`

**Key Features:**
- Track current question
- Collect answers
- Format data for API
- Navigate between questions

#### `modules/results/`
**Purpose:** Display and format results.

**Files:**
- `src/ResultCard.tsx` — Main result display
- `src/MetricsDisplay.tsx` — Show 4 metrics
- `src/ReasonCard.tsx` — Display reason
- `tests/unit/resultFormatter.test.ts`

**Key Features:**
- Display verdict (YES/NO)
- Show metrics in nice format
- Display reason
- Show names in context

#### `modules/shared/`
**Purpose:** Reusable components and utilities.

**Files:**
- `components/Button.tsx` — Reusable button
- `components/Input.tsx` — Reusable input
- `components/Layout.tsx` — Page layout
- `styles/variables.css` — Design tokens
- `types/index.ts` — Shared TypeScript types

---

## 2. Backend Architecture (Express/Fastify)

### Routes

#### `GET /api/questions`
**Purpose:** Return 15 random questions.

**Request:**
```
GET /api/questions
```

**Response:**
```json
{
  "success": true,
  "data": {
    "questions": [
      {
        "id": "q1",
        "text": "If you were a fruit...",
        "category": "personality",
        "options": ["Apple", "Banana", "Orange"]
      }
    ],
    "count": 15
  }
}
```

**Implementation:**
```typescript
// backend/modules/questions/src/router.ts
app.get('/api/questions', (req, res) => {
  const questions = selectRandomQuestions(15);
  res.json({ success: true, data: { questions, count: 15 } });
});
```

#### `POST /api/compatibility`
**Purpose:** Calculate compatibility between two people.

**Request:**
```json
{
  "person1": "Alice",
  "person2": "Bob",
  "person1_answers": ["Apple", "Yes", "No", ...],
  "person2_answers": ["Orange", "No", "Yes", ...]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "person1": "Alice",
    "person2": "Bob",
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
}
```

**Implementation Flow:**
1. Receive answers
2. Calculate verdict (random YES/NO)
3. Generate metrics (random 0-100)
4. Select reason (random from pool)
5. Format response
6. Return JSON

#### `GET /api/health`
**Purpose:** Health check for deployment.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-03-17T10:00:00Z"
}
```

### Modules

#### `modules/questions/`
**Purpose:** Question database and retrieval.

**Files:**
- `src/db.ts` — In-memory database (JSON loaded at startup)
- `src/service.ts` — Question selection logic
- `src/router.ts` — Express router for GET /api/questions
- `src/types.ts` — TypeScript interfaces
- `tests/unit/service.test.ts`

**Key Functions:**
```typescript
// Load questions from JSON
function loadQuestions(): Question[] {
  const data = require('./data/questions.json');
  return data.questions;
}

// Select N random, non-repeating questions
function selectRandomQuestions(count: number): Question[] {
  const shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
```

#### `modules/compatibility/`
**Purpose:** THE CORE. Fake compatibility calculation.

**Files:**
- `src/calculator.ts` — Main calculation engine
- `src/metrics.ts` — Generate fake metrics
- `src/router.ts` — Express router for POST /api/compatibility
- `src/types.ts` — TypeScript interfaces
- `tests/unit/calculator.test.ts` — Test randomness!

**Key Functions:**
```typescript
// Calculate compatibility
function calculateCompatibility(
  answers1: string[],
  answers2: string[]
): CompatibilityResult {
  // 1. Generate verdict (50/50)
  const compatible = Math.random() > 0.5;
  
  // 2. Generate metrics (random 0-100)
  const metrics = generateMetrics();
  
  // 3. Calculate percentage
  const percentage = calculatePercentage(metrics);
  
  // 4. Select reason
  const reason = selectReason(compatible);
  
  return {
    compatible,
    percentage,
    reason,
    metrics
  };
}

// Generate 4 fake metrics
function generateMetrics(): Metrics {
  return {
    synergyOscillation: Math.round(Math.random() * 100 * 10) / 10,
    quantumAlignment: Math.round(Math.random() * 100 * 10) / 10,
    teaPreferenceHarmonization: Math.round(Math.random() * 100 * 10) / 10,
    workStyleCoherence: Math.round(Math.random() * 100 * 10) / 10
  };
}

// Random verdict
function getVerdict(): boolean {
  return Math.random() > 0.5; // 50/50
}
```

#### `modules/results/`
**Purpose:** Reason database and result formatting.

**Files:**
- `src/reasonBank.ts` — YES and NO reasons
- `src/formatter.ts` — Format result for frontend
- `src/router.ts` — (Usually included in compatibility module)
- `src/types.ts`
- `tests/unit/reasonBank.test.ts`

**Key Functions:**
```typescript
// Select random reason
function selectReason(compatible: boolean): string {
  const reasons = compatible ? yesReasons : noReasons;
  return reasons[Math.floor(Math.random() * reasons.length)];
}

// Format result
function formatResult(raw: RawResult): FormattedResult {
  return {
    person1: raw.person1,
    person2: raw.person2,
    compatible: raw.compatible,
    percentage: raw.percentage,
    reason: raw.reason,
    metrics: formatMetrics(raw.metrics)
  };
}
```

#### `modules/shared/`
**Purpose:** Utilities and error handling.

**Files:**
- `src/errors.ts` — Custom error classes
- `src/logging.ts` — Logging utility
- `src/utils.ts` — Helper functions

---

## 3. Data Models

### Question
```typescript
interface Question {
  id: string;           // Unique ID
  text: string;         // Question text
  category: string;     // Category (personality, work_style, etc.)
  options?: string[];   // Optional multiple choice
}
```

### CompatibilityResult
```typescript
interface CompatibilityResult {
  person1: string;
  person2: string;
  compatible: boolean;
  percentage: number;   // 0-100
  reason: string;
  metrics: {
    synergyOscillation: number;
    quantumAlignment: number;
    teaPreferenceHarmonization: number;
    workStyleCoherence: number;
  };
}
```

---

## 4. Data Flow

### Quiz Flow (User Perspective)

```
1. User visits home page
   ↓
2. Enters two names
   ↓
3. Clicks "Start Quiz"
   ↓
4. Frontend fetches questions from GET /api/questions
   ↓
5. Questions loaded, quiz page renders
   ↓
6. User answers 15 questions one by one
   ↓
7. Answers collected in state
   ↓
8. User clicks "See Results"
   ↓
9. Frontend sends POST /api/compatibility with answers
   ↓
10. Backend calculates (random) verdict
    ↓
11. Backend returns result
    ↓
12. Frontend displays results page
    ↓
13. User sees YES/NO, metrics, and reason
    ↓
14. User can "Retake Quiz" → back to step 1
```

### Backend Processing (API Perspective)

```
POST /api/compatibility
  ↓
1. Parse request body (person1, person2, answers1, answers2)
  ↓
2. Call calculateCompatibility()
  ↓
3. Generate random verdict (50/50 YES/NO)
  ↓
4. Generate 4 random metrics (0-100)
  ↓
5. Calculate percentage (average of metrics)
  ↓
6. Select random reason (from YES or NO pool)
  ↓
7. Format response JSON
  ↓
8. Return 200 OK with result
  ↓
Frontend displays results
```

---

## 5. Error Handling

### Frontend
- Network error → Show retry button
- Invalid response → Show error message
- Missing data → Show loading state, retry

### Backend
- Invalid request → 400 Bad Request
- Missing data → 400 Bad Request
- Server error → 500 Internal Server Error
- Health check fails → Deploy monitoring alerts

---

## 6. Testing Strategy

### Unit Tests
- **Questions Service:** Test random selection works
- **Calculator:** Test randomness distribution
- **Metrics:** Test values are in range 0-100
- **Formatter:** Test output structure

### Integration Tests
- **Full API flow:** POST /api/compatibility returns valid result
- **Randomness:** Run 100 times, verify ~50% YES

### E2E Tests (Playwright)
- **Full user flow:** Home → Quiz → Results
- **Randomness test:** Same answers → different results ~50% of time
- **UI tests:** Elements display correctly

---

## 7. Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
# Deploys to vercel.com
```

### Backend (Heroku/Railway)
```bash
npm run build
npm start
# Runs on port 3001
```

### Environment Variables
```
ANTHROPIC_API_KEY=sk-ant-...  (optional, for future use)
NODE_ENV=production
PORT=3001
CORS_ORIGIN=https://yourfrontend.vercel.app
```

---

## 8. Performance Considerations

### Frontend
- **Code splitting:** Next.js does this automatically
- **Image optimization:** Use next/image
- **CSS:** Tailwind (purged in production)
- **Bundle size:** Keep modules focused

### Backend
- **In-memory data:** Fast, no DB latency
- **Caching:** Consider caching questions
- **Rate limiting:** Optional (for fun)
- **Compression:** gzip responses

### Response Times (Target)
- GET /questions → <500ms
- POST /compatibility → <100ms
- Full page load → <2s

---

## 9. Security (Simple)

### No authentication required
- This is a public, anonymous app
- No user data stored
- No sensitive information

### CORS Configuration
```typescript
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: false
}));
```

### Input Validation
```typescript
// Validate request body
if (!req.body.person1 || !req.body.person2) {
  return res.status(400).json({ error: 'Missing names' });
}
```

---

## 10. Monitoring & Logging

### Logging
- Log API requests (method, path, duration)
- Log errors (stack trace, request details)
- Log question selections (for analytics)

### Example Logs
```
[INFO] GET /api/questions - 1.2ms
[INFO] POST /api/compatibility - 0.8ms
[ERROR] Missing person1_answers - 400 Bad Request
```

---

## 11. Scaling (If Needed)

### Current
- Single Node.js server
- In-memory data
- Handles thousands of concurrent users

### Future
- Database (PostgreSQL) for question/reason storage
- Redis cache for popular questions
- Load balancing (multiple servers)
- CDN for frontend (Vercel handles this)

---

## 12. Architecture Decision Log

| Decision | Rationale |
|----------|-----------|
| Next.js | SSR + static generation + API routes |
| Express | Simple, familiar, easy to reason about |
| In-memory data | Fast, no DB overhead (data fits in memory) |
| TypeScript | Type safety, better DX |
| Tailwind | Fast styling, utility-first |
| Playwright | Cross-browser E2E testing |
| Random selection | Jokes are funnier when unpredictable |

---

**Status:** Architecture Complete  
**Last Updated:** 2025-03-17  
**Ready for Development:** YES ✅
# ✨ Team Vibe Checker

> A hilariously fake compatibility test for team members. Answer silly questions, get random verdicts backed by "science."

[![CI/CD Pipeline](https://github.com/yourusername/team-vibe-checker/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/yourusername/team-vibe-checker/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)

## 🎭 What Is This?

**Team Vibe Checker** is a playful parody of those "are you compatible" quizzes. Two people answer ridiculous questions, and our "proprietary algorithm" (random number generator) tells them if they can work together.

The joke? **Results are 100% random.** Ask the same two people the exact same questions, and you'll (likely) get a different result.

### Key Features

- 🎲 **50/50 Random Verdicts** - YES or NO with equal probability
- 📊 **Fake Metrics** - Synergy Oscillation, Quantum Alignment, Tea-Selection Entropy
- 💬 **Hilarious Reasons** - 50+ pre-written absurd explanations
- 🔄 **Replay Value** - Different result every time (even with identical answers)
- 📱 **Responsive Design** - Works on mobile and desktop
- ⚡ **Fast & Snappy** - Built with modern tech

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ ([download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation

```bash
# Clone and setup
git clone https://github.com/yourusername/team-vibe-checker.git
cd team-vibe-checker

# Install all dependencies
npm install-all

# Start both servers
npm run dev
```

Open http://localhost:3000 in your browser and enjoy!

## 📁 Project Structure

```
team-vibe-checker/
├── frontend/                  # Next.js React app
│   ├── pages/
│   │   ├── index.tsx         # Home (name entry)
│   │   ├── quiz.tsx          # Quiz flow
│   │   └── results.tsx       # Results display
│   ├── styles/               # Tailwind + CSS
│   └── package.json
│
├── backend/                  # Express API
│   ├── src/
│   │   ├── index.ts         # Server entry point
│   │   ├── app.ts           # Express app
│   │   ├── calculator.ts    # Random verdict engine
│   │   ├── questionsService.ts # Question shuffling
│   │   ├── data.ts          # Questions + reasons
│   │   └── middleware.ts    # Error handling
│   └── package.json
│
├── tests/
│   └── e2e/
│       └── flow.spec.ts     # Playwright E2E tests
│
├── docs/                     # Documentation
└── package.json             # Monorepo root
```

## 🔧 Available Commands

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
npm run test                  # Run unit tests
npm run e2e                   # Run E2E tests
npm run e2e:ui                # E2E tests with UI

# Linting
npm run lint                  # Lint everything
npm run frontend:lint         # Frontend lint
npm run backend:lint          # Backend lint

# Cleaning
npm run clean                 # Remove build artifacts
```

## 🧪 Testing

### Manual Testing

1. Open http://localhost:3000
2. Enter two names
3. Answer 15 questions for each person
4. See the verdict

### The Critical Test (Verify Randomness)

1. Enter "Alice" and "Bob"
2. Answer EXACTLY the same for both people
3. Note the result (YES or NO)
4. Click "Test Another Pair"
5. Same names, same answers
6. **Expected:** Different result ~50% of the time

**Run this 10 times:**
- You should get ~5 YES results
- You should get ~5 NO results

### E2E Tests

```bash
# Run all E2E tests
npm run e2e

# Run with UI
npm run e2e:ui

# Run specific test
npx playwright test -g "randomness"
```

### API Testing

```bash
# Get questions
curl http://localhost:3001/api/questions

# Calculate compatibility
curl -X POST http://localhost:3001/api/compatibility \
  -H "Content-Type: application/json" \
  -d '{
    "person1": "Alice",
    "person2": "Bob",
    "person1_answers": ["a", "b", "c"],
    "person2_answers": ["x", "y", "z"]
  }'

# Health check
curl http://localhost:3001/api/health
```

## 🌐 API Endpoints

All endpoints return JSON.

### GET `/api/questions`

Returns 15 random questions.

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
        "options": ["Apple", "Banana"]
      }
    ],
    "count": 15
  }
}
```

### POST `/api/compatibility`

Calculate random compatibility verdict.

**Request:**
```json
{
  "person1": "Alice",
  "person2": "Bob",
  "person1_answers": ["answer1", "answer2", ...],
  "person2_answers": ["answer1", "answer2", ...]
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
      "synergyOscillation": 94.2,
      "quantumAlignment": 71.5,
      "teaPreferenceHarmonization": 89.2,
      "workStyleCoherence": 84.7
    }
  }
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-03-17T12:34:56.789Z"
}
```

## 🚀 Deployment

### Deploy Frontend (Vercel)

1. Push to GitHub
2. Go to vercel.com/new
3. Import this repository
4. Set root directory to `frontend`
5. Deploy!

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

### Deploy Backend (Railway)

1. Go to railway.app
2. Create new project from GitHub
3. Select `backend` directory
4. Set environment variables
5. Deploy!

## 📊 Technology Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, React 18, TypeScript, Tailwind CSS |
| Backend | Express, TypeScript, Node.js |
| Testing | Playwright (E2E), Jest (unit) |
| Deployment | Vercel (frontend), Railway (backend) |
| CI/CD | GitHub Actions |

## 🎯 How The "Science" Works

```
User Input: Alice & Bob answer 15 questions each
        ↓
generateVerdict()  → Random coin flip (50/50 YES/NO)
generateMetrics()  → 4 random values (0-100)
selectReason()     → Pick from 50+ reasons
        ↓
Output: Verdict + Percentage + Reason + Metrics
        ↓
Result: 100% random, completely meaningless, absolutely hilarious
```

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 🐛 Troubleshooting

### npm install fails
```bash
rm -r node_modules package-lock.json
npm install-all
```

### Port already in use
```bash
# Kill process on port 3000/3001
lsof -ti:3000 | xargs kill -9
```

### CORS error
- Check backend is running on 3001
- Verify `NEXT_PUBLIC_API_URL` in frontend

### TypeScript errors
```bash
npm run backend:type-check
npm run frontend:type-check
```

See [SETUP_AND_TESTING.md](SETUP_AND_TESTING.md) for more help.

## 📚 Documentation

- [READY_TO_TEST.md](READY_TO_TEST.md) - Quick start guide
- [SETUP_AND_TESTING.md](SETUP_AND_TESTING.md) - Detailed setup & testing
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deploy to production
- [docs/PRD.md](docs/PRD.md) - Product requirements & questions
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - Technical architecture
- [CLAUDE.md](CLAUDE.md) - Project context for Claude Code

## 📈 Statistics

- **Lines of Code**: ~1,400
- **API Endpoints**: 3
- **Frontend Pages**: 3
- **Questions**: 15
- **Reasons**: 50+
- **Test Coverage**: Full E2E + API

## 🎭 The Joke

This app is a **parody** of personality quizzes. It:

- ✅ Takes itself seriously (professional UI, jargon)
- ✅ But is obviously absurd (random results, fake metrics)
- ✅ Gets funnier every time (different result each run)
- ✅ Has zero actual science (it's just randomness)

The humor is in the contrast. Users know it's fake and love it.

## 📝 License

MIT © 2025

## 🙏 Disclaimer

**These results are 100% fake.** Any resemblance to actual compatibility is purely coincidental. Please don't make real life decisions based on this app! 😄

---

**Ready to see if you and your teammates can work together?**

```bash
npm install-all && npm run dev
```

Open http://localhost:3000 and find out! 🎉

---

Made with ❤️ and randomness ✨

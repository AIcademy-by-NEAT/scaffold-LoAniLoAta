# ✨ Team Vibe Checker — The Ultimate Team Compatibility Test

> Ever wondered if you and your colleague can actually work together?  
> Answer some hilariously stupid questions. Watch our AI perform absurd calculations.  
> Get a completely random YES/NO verdict with a ridiculous reason.

## What Is This?

**Team Vibe Checker** is a playful web app that pretends to scientifically evaluate whether two people can work together on a project. It's completely fake, intentionally ridiculous, and honestly kind of fun.

### Features

🎭 **20+ Ridiculous Questions** — From "If you were a fruit, which would you be?" to "Do you alphabetize your spice rack?"

🧮 **Fake Science™** — Watch our AI perform hilariously complex calculations involving quantum compatibility coefficients, synergy oscillation metrics, and tea preference harmonization algorithms.

🎲 **Random Outcomes** — Two people answering identically might be "Perfect soulmates" or "Absolutely incompatible." It's completely random. You'll never know.

📚 **Giant Question Database** — 50+ questions and 40+ ridiculous reasons. Every interaction is different (and equally meaningless).

⚡ **Fast & Snappy** — Built with modern web tech. Processes answers in milliseconds (but displays fake processing for dramatic effect).

## Tech Stack

- **Frontend**: Next.js + TypeScript + Tailwind CSS + React
- **Backend**: Node.js + Express (or Fastify) + TypeScript
- **AI Integration**: Anthropic Claude API (for fun flavor text only, not real compatibility)
- **Testing**: Playwright E2E tests
- **Deployment**: Ready for Vercel/Netlify

## Quick Start (5 minutes)

### 1. Setup

```bash
# Copy the scaffold
cp -r scaffold-LoAniLoAta my-vibe-checker
cd my-vibe-checker

# Initialize git
git init

# Set up environment
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY
```

### 2. Fill in CLAUDE.md

Open `CLAUDE.md` and replace placeholders:
- `{{PROJECT_NAME}}` → "Team Vibe Checker"
- `{{PROJECT_DESCRIPTION}}` → "A funny fake compatibility test for team members"
- `{{TECH_STACK}}` → "Next.js 15 + TypeScript + Tailwind + Express"
- `{{DEV_COMMAND}}` → `npm run dev`
- `{{DEV_PORT}}` → `3000`

### 3. Read the PRD

Open `docs/PRD.md` — it has the full feature list, questions database, and compatibility reasons.

### 4. Start Building

```bash
# Launch Claude Code
claude

# Plan architecture
/project:cto

# Build features
/project:dev

# Test everything
/project:qa
```

## How It Works

### The Flow

1. **Two People** enter their names (e.g., "Alice" and "Bob")
2. **Random Questions** — Each person gets asked 10-15 random questions from a pool of 50+
3. **Fake Calculation** — Answers are analyzed by "proprietary compatibility algorithms" (JavaScript randomization with funny names)
4. **Results** — A completely random YES/NO with a reason like:
   - ✅ "YES: Your synergy oscillation coefficient is 87.4%! You're cosmic soulmates."
   - ❌ "NO: Bob's tea preference harmonization is fundamentally incompatible with Alice's fruit-selection entropy."

### Question Categories

- **Personality** — "Are you morning or night person?"
- **Quirks** — "Do you organize your bookshelf by color?"
- **Work Style** — "Meetings or Slack?"
- **Life Choices** — "Pineapple on pizza: yes or no?"
- **Weird Stuff** — "If you were a superhero, would your power be visible?"

### Why It's Funny

The whole app is a parody of those "are you compatible" quizzes. It:
- Takes itself hilariously seriously
- Uses fake technical jargon for simple random choices
- Shows fake processing times (2-5 seconds) while doing instant math
- Gives contradictory results (same answers → different outcomes for different people)
- Has absurd reasoning like "Quantum preference misalignment detected"

## File Structure

```
team-vibe-checker/
├── README.md                    # This file
├── CLAUDE.md                    # Project context
├── AGENTS.md                    # Role definitions
├── .env.example                 # Environment template
├── playwright.config.ts         # E2E test setup
│
├── frontend/                    # Next.js app
│   ├── AGENTS.md
│   ├── modules/
│   │   ├── questions/           # Question data & fetching
│   │   ├── results/             # Results display
│   │   ├── compatibility/       # Main calculation logic
│   │   └── shared/              # Common components
│   ├── pages/
│   ├── styles/
│   └── tests/
│
├── backend/                     # Express API
│   ├── AGENTS.md
│   ├── modules/
│   │   ├── questions/           # Question DB & API
│   │   ├── compatibility/       # Calculation engine
│   │   ├── results/             # Result generation
│   │   └── shared/              # Utilities
│   ├── routes/
│   ├── src/
│   └── tests/
│
├── .claude/
│   ├── settings.local.json
│   └── commands/
│       ├── cto.md               # /project:cto
│       ├── dev.md               # /project:dev
│       ├── qa.md                # /project:qa
│       └── ...
│
├── docs/
│   ├── PRD.md                   # Product requirements + questions DB
│   ├── ARCHITECTURE.md          # Tech architecture
│   ├── DECISIONS.md             # Decision log
│   ├── knowledge/
│   ├── ui/
│   │   └── UI_KIT.md
│   └── sprints/
│
└── tests/
    ├── e2e/
    │   ├── flow.spec.ts         # Full compatibility check flow
    │   └── questions.spec.ts     # Question loading
    └── screenshots/
```

## Key Concepts

### The Question Database

**Location**: `docs/PRD.md` includes a massive list of questions. Each interaction pulls random questions.

**Why so many?** So that users never get the same exact quiz twice. Users are encouraged to play again.

### The "Compatibility Engine"

Located in `backend/modules/compatibility/src/`, this is where the magic (nonsense) happens:

1. **Parse Answers** — Convert user responses to "data"
2. **Calculate Metrics** — Invented metrics like:
   - "Synergy Oscillation Coefficient" (0-100)
   - "Quantum Preference Alignment" (random %)
   - "Tea-Selection Entropy" (made up)
   - "Work Style Coherence Index" (just a number)
3. **Generate Verdict** — Random YES/NO (50/50 chance)
4. **Pick Reason** — Select from 40+ pre-written reasons matching the verdict

### Why Results Are Random

**On purpose.** Users can take the test again and get opposite results. This is the joke.

Example:
- Alice & Bob answer identically
- Run 1: "YES - perfect harmony"
- Run 2: "NO - incompatible vibrations"

## Development Workflow

### CTO Mode: Plan the Architecture

```bash
/project:cto
```

Ask Claude:
> "Design the architecture for Team Vibe Checker. Break into tasks for Sprint 1."

### DEV Mode: Build Features

```bash
/project:dev
```

Implement tasks one by one:
> "Implement task 1: Create the question selection algorithm"

### QA Mode: Test Everything

```bash
/project:qa
```

Test the full flow:
> "Run E2E tests for the compatibility check. Make sure results are random but sensible."

## Slash Commands

| Command | Purpose |
|---|---|
| `/project:cto` | Plan & design phase |
| `/project:dev` | Implementation phase |
| `/project:qa` | Testing & quality phase |
| `/project:plan` | Force planning before coding |
| `/project:test` | Run unit tests |
| `/project:e2e` | Run Playwright E2E tests |

## Database: Questions & Reasons

The entire question bank is in `docs/PRD.md` for easy editing. We maintain:
- **65+ unique questions** across 6 categories
- **60+ YES reasons** (compatibility verified!)
- **60+ NO reasons** (incompatibility confirmed!)

This ensures that every single user interaction is completely different with minimal chance of question/reason repetition.

### Questions (65+ Questions)

#### Personality (12 questions)

1. "If you were a fruit, which would you be?"
2. "Are you a morning person or night owl?"
3. "Do you organize your bookshelf by color or by title?"
4. "Introvert or extrovert at parties?"
5. "Do you plan everything or just wing it?"
6. "Coffee or tea person?"
7. "Do you prefer working alone or in teams?"
8. "Optimist or pessimist by default?"
9. "Do you laugh at your own jokes?"
10. "Window seat or aisle seat on planes?"
11. "Do you remember people's birthdays?"
12. "Are you punctual or fashionably late?"

#### Work Style (12 questions)

13. "Meetings: camera on or off?"
14. "Deadline approach: plan ahead or panic last-minute?"
15. "Do you prefer email or Slack communication?"
16. "How many monitors do you use for work?"
17. "Messy desk or pristine workspace?"
18. "Do you take breaks during work?"
19. "Code review: constructive or brutal honesty?"
20. "Do you use dark mode or light mode?"
21. "Notebooks: digital or paper?"
22. "Do you rename variables sensibly?"
23. "Coffee/energy drinks during coding marathons?"
24. "Do you debug with print statements or a debugger?"

#### Life Choices (13 questions)

25. "Pineapple on pizza: yes or no?"
26. "How do you eat cereal: milk first or cereal first?"
27. "Folding or rolling socks?"
28. "Do you alphabetize your spice rack?"
29. "Toilet paper: over or under?"
30. "Do you eat the pizza crust?"
31. "Pick a movie genre: comedy, drama, or horror?"
32. "Do you rewatch your favorite shows?"
33. "Netflix or theater for movies?"
34. "Do you read the book or watch the movie first?"
35. "Cake or pie?"
36. "Hot sauce: maximum spice or mild?"
37. "Do you separate your laundry by color?"

#### Quirks (12 questions)

38. "Do you name your houseplants?"
39. "Do you talk to yourself while coding?"
40. "Do you have a lucky object?"
41. "Do you check under the bed before sleeping?"
42. "Do you read book reviews before reading?"
43. "Do you organize your browser tabs?"
44. "Do you keep browser history?"
45. "Do you sing in the shower?"
46. "Do you organize your Spotify playlists?"
47. "Do you label your kitchen containers?"
48. "Do you have a morning routine?"
49. "Do you collect anything?"

#### Weird Stuff (9 questions)

50. "If you were a superhero, would your power be visible or invisible?"
51. "Would you rather have the ability to fly or be invisible?"
52. "If you could teleport, would you use it for work?"
53. "Do you believe in ghosts?"
54. "Would you rather fight one horse-sized duck or 100 duck-sized horses?"
55. "If you could have any accent, which would it be?"
56. "Do you think aliens exist?"
57. "Would you time travel to the past or future?"
58. "Do you think we're living in a simulation?"

#### Work Environment (7 questions)

59. "Noise-canceling headphones: always, sometimes, never?"
60. "Standing desk or sitting?"
61. "Do you wear shoes while working from home?"
62. "How many coffee/tea breaks per day?"
63. "Do you snack while working?"
64. "Would you work from a coffee shop?"
65. "Collaborate in silence or with background music?"

### Fake Metrics & Calculation

The "calculation" produces 4 meaningless metrics:

#### Metric 1: Synergy Oscillation Coefficient (0-100)
- Random value
- Represents "how well vibes sync"
- Higher = better compatibility

#### Metric 2: Quantum Preference Alignment (0-100)
- Random value
- Represents "quantum probability of preference matching"
- Scientifically nonsensical

#### Metric 3: Tea-Selection Entropy (0-100)
- Random value
- Literally just a number
- Has nothing to do with actual tea

#### Metric 4: Work Style Coherence Index (0-100)
- Random value
- Represents "how similar work styles are"
- Calculated using fake formula

**Calculation pseudocode:**
```
for each metric:
  value = random(0, 100)
  round to 1 decimal place
return metrics
```

### Reasons (60+ each for YES and NO)

#### YES Reasons (60+ "You CAN Work Together")

1. "Your synergy oscillation coefficient is off the charts!"
2. "Quantum probability indicates cosmic soulmate status."
3. "Your tea preference harmonization is flawless."
4. "Work-style coherence index detected: near-perfect alignment."
5. "Compatibility wave patterns are in harmony."
6. "Your preference oscillation frequencies match beautifully."
7. "Cosmic alignment suggests you're a power duo."
8. "Synergy metrics indicate supernatural compatibility."
9. "Your vibes are mutually beneficial and energetically positive."
10. "Work style friction coefficient: ZERO. You're golden."
11. "Quantum entanglement of preferences confirmed."
12. "Your partnership potential is astronomical."
13. "The universe is literally telling us you should team up."
14. "Your work styles are in perfect harmony."
15. "Communication flow prediction: EXCELLENT."
16. "You have complementary strengths. Science confirmed it."
17. "Collaboration probability: 99.9%. Almost certain success."
18. "Your teamwork resonance frequency is exceptional."
19. "Personality compatibility: MAXED OUT."
20. "The algorithm has spoken. You're basically soulmates."
21. "Your work rhythms are synchronized like clockwork."
22. "Conflict resolution potential: surprisingly high."
23. "You bring out each other's best qualities (statistically)."
24. "Your productivity vector is pointing the same direction."
25. "The stars have aligned. Go forth and build things."
26. "Your mutual interests overlap in unexpected ways."
27. "This partnership would defy quantum mechanics if it fails."
28. "You're basically a cheat code for project success."
29. "Your combined energy output: UNSTOPPABLE."
30. "The data suggests you finish each other's sentences."
31. "Your compatibility aura is blindingly bright."
32. "This is the kind of partnership stories are written about."
33. "Your work styles are different but complementary."
34. "You're like two puzzle pieces that fit perfectly."
35. "The algorithm is 87% confident you'll change the world together."
36. "Your teamwork coefficient just broke the scale (in a good way)."
37. "You have the kind of chemistry that makes great things happen."
38. "The universe placed you two in the same room for a reason."
39. "Your compatibility score: so high, we had to double-check it."
40. "Honestly, we're surprised the server didn't crash from YES-ing too hard."
41. "Your personality matrices just synchronized perfectly!"
42. "Harmonic resonance detected at maximum capacity."
43. "The algorithm ran backward and still said YES."
44. "Your work ethics are suspiciously aligned."
45. "You'd make a killer comedy duo if this doesn't work out."
46. "Compatibility levels: OVER 9000!"
47. "Your breakfast preferences suggest you're meant to be."
48. "The quantum foam is literally vibrating with approval."
49. "Two-person dream team protocol: ACTIVATED."
50. "Your collaborative energy is basically perpetual motion."
51. "The database just blushed. That's how compatible you are."
52. "You have a 'begin the friendship' aura."
53. "Your work-life balance philosophies are kissing."
54. "This pairing would make a TED Talk."
55. "You're not just compatible—you're cosmically destined."
56. "The algorithm suspects you might already be best friends."
57. "Your productivity forecast: LEGENDARY."
58. "Communication? You won't even need words."
59. "Your combined problem-solving power: unstoppable force."
60. "We've run this 1,000 times. Every single time: YES."

#### NO Reasons (60+ "You CANNOT Work Together")

1. "Fundamental incompatibility in fruit-selection entropy detected."
2. "Your work-style oscillation waves are 180 degrees out of phase."
3. "One prefers order. One prefers chaos. This is unrecoverable."
4. "Quantum preference misalignment beyond repair."
5. "Your communication styles are like two ships passing in the night."
6. "Synergy oscillation coefficient: critically low."
7. "The algorithm predicts constant misunderstandings."
8. "Your vibes are... not complementary. At all."
9. "Work environment preferences: incompatible."
10. "Collaboration potential: DOA (dead on arrival)."
11. "The universe suggests you find different teammates."
12. "Your personality types are adversarial by default."
13. "Conflict resolution potential: essentially zero."
14. "You would spend more time arguing than coding."
15. "Your work speeds are too different. You'll drive each other nuts."
16. "Tea preference harmonization: FAILED."
17. "The algorithm ran 10,000 simulations. Every single one ended in chaos."
18. "You're like magnets, but pointing the same direction. You'd repel."
19. "Your schedule preferences create a temporal paradox of incompatibility."
20. "This partnership would violate the laws of thermodynamics."
21. "The data strongly suggests you'd be at each other's throats."
22. "Your communication styles: a match that would burn the building down."
23. "Productivity prediction: NEGATIVE. You'd somehow lose momentum."
24. "This pairing would require negotiating every single decision."
25. "Your work habits are like oil and water. Plus some acid."
26. "The algorithm had an error. Then rechecked. Still a hard no."
27. "You're incompatible in ways we didn't even think were possible."
28. "One of you would definitely slow the other down."
29. "Your energy levels are out of sync. Constant frustration incoming."
30. "The universe is literally telling us to keep you apart."
31. "Your collaboration coefficient just went into the negatives."
32. "This is the kind of partnership that ends friendships."
33. "You'd spend 80% of time explaining yourself to each other."
34. "Compatibility score: our database doesn't go that low."
35. "The algorithm suggests you should work on literally anything else."
36. "Your work styles would create more problems than they solve."
37. "Teamwork resonance frequency: broken glass at full volume."
38. "The data says: find different teammates. Seriously."
39. "This partnership would be a cautionary tale."
40. "The server is literally begging us not to pair you two. We can feel it."
41. "Your personality profiles just filed for divorce."
42. "Dissonance levels: maximum pain detected."
43. "The algorithm quit three times during the analysis."
44. "Your work ethics are aggressively misaligned."
45. "You'd make enemies faster than teammates."
46. "Compatibility levels: BELOW ZERO."
47. "Your breakfast preferences suggest you're cosmic enemies."
48. "The quantum foam is actively vibrating away from you both."
49. "Danger-zone team protocol: DO NOT ACTIVATE."
50. "Your collaborative energy would create a black hole."
51. "The database just rejected this pairing with extreme prejudice."
52. "You have a 'run away screaming' aura together."
53. "Your work-life balance philosophies are in a cold war."
54. "This pairing would make a cautionary documentary."
55. "You're not just incompatible—you're dimensionally opposed."
56. "The algorithm suspects you're already nemeses."
57. "Your productivity forecast: APOCALYPTIC."
58. "Communication? You'd need a diplomatic envoy."
59. "Your combined problem-solving approach: unstoppable disaster."
60. "We've run this 1,000 times. Every single time: NO."

## Testing Strategy

### Unit Tests
Test the compatibility calculation engine:
- Random selection works
- Metrics are within expected ranges
- Verdicts are 50/50 distributed

### E2E Tests (Playwright)
Full user flow:
- Load page ✅
- Enter names ✅
- Answer questions ✅
- Get results ✅
- Results are different on re-run ✅

## Tips for Development

### Do

- ✅ Refill the question database frequently — the more questions, the more replay value
- ✅ Add funny reasons — the more varied, the better
- ✅ Test with multiple browsers (Chrome, Firefox, Safari)
- ✅ Verify results are actually random (run the test 10 times)
- ✅ Make the UI playful and colorful
- ✅ Add animations & funny loading text

### Don't

- ❌ Don't make it feel like actual science (even though it looks serious)
- ❌ Don't hardcode results (must be random)
- ❌ Don't repeat questions in a single quiz
- ❌ Don't use personal data (everything is anonymous)
- ❌ Don't keep results between sessions (they're temporary for fun)

## Deployment

### Vercel (Recommended for Next.js)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t team-vibe-checker .
docker run -p 3000:3000 team-vibe-checker
```

### Environment Variables

```
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=production
```

## API Endpoints

### GET `/api/questions`

Returns 15 random questions from the database.

**Response:**
```json
{
  "questions": [
    {
      "id": "q1",
      "text": "If you were a fruit...",
      "category": "personality"
    }
  ]
}
```

### POST `/api/compatibility`

Calculate compatibility between two people.

**Request:**
```json
{
  "person1": "Alice",
  "person2": "Bob",
  "answers1": ["...", "..."],
  "answers2": ["...", "..."]
}
```

**Response:**
```json
{
  "person1": "Alice",
  "person2": "Bob",
  "compatible": true,
  "percentage": 87.4,
  "reason": "Your synergy oscillation coefficient is perfect!",
  "metrics": {
    "synergyOscillation": 87.4,
    "quantumAlignment": 72.1,
    "teaPreferenceHarmonization": 91.3
  }
}
```

## Resources

- [Claude API Docs](https://docs.anthropic.com/en/api)
- [Next.js Documentation](https://nextjs.org/docs)
- [Playwright Testing](https://playwright.dev)
- [Tailwind CSS](https://tailwindcss.com)

## License

MIT — This is a parody/joke project. Use freely!

---

**Remember:** Results are 100% fake and made for fun. Any resemblance to actual compatibility is purely coincidental. 🎭✨
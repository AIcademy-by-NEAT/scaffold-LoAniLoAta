# 🚀 Team Vibe Checker — Implementation Guide

**Status:** Ready for Development  
**Last Updated:** March 17, 2025

---

## Quick Reference

### Database Stats
- **Total Questions:** 65
- **Questions per Quiz:** 12-15 (random)
- **Total YES Reasons:** 60
- **Total NO Reasons:** 60
- **Answer Type:** All multiple choice / binary (no text input needed)

### Key Files
| File | Purpose |
|------|---------|
| `README.md` | Project overview & feature list |
| `docs/PRD.md` | Detailed specs & question database |
| `database-template.json` | JSON template (ready to use!) |
| `CTO_UPDATE_SUMMARY.md` | Change log & implementation notes |

---

## Database Integration (Backend)

### Step 1: Load the Question Database

**Option A: Use JSON File**
```typescript
import questionData from '../database-template.json';

const questions = questionData.questions;
```

**Option B: Define as TypeScript**
```typescript
interface Question {
  id: string;
  text: string;
  category: 'personality' | 'workStyle' | 'lifeChoices' | 'quirks' | 'weirdStuff' | 'workEnvironment';
  type: 'choice' | 'text' | 'binary';
}

const questions: Question[] = [
  {
    id: 'q1',
    text: 'If you were a fruit, which would you be?',
    category: 'personality',
    type: 'choice'
  },
  // ... 64 more questions
];
```

### Step 2: Create Random Question Selector

**Backend Endpoint: GET `/api/questions`**

```typescript
// NO DUPLICATES - Fisher-Yates shuffle
function getRandomQuestions(count: number = 12): Question[] {
  const allQuestions = [...questions]; // Clone
  const selected: Question[] = [];

  for (let i = 0; i < count && allQuestions.length > 0; i++) {
    const randomIdx = Math.floor(Math.random() * allQuestions.length);
    selected.push(allQuestions[randomIdx]);
    allQuestions.splice(randomIdx, 1); // Remove to prevent duplicates
  }

  return selected;
}
```

### Step 3: Load the Reasons Database

```typescript
interface Reason {
  id: string;
  text: string;
  verdict: 'yes' | 'no';
}

const yesReasons: Reason[] = [
  { id: 'yes1', text: 'Your synergy oscillation coefficient is off the charts!' },
  // ... 59 more YES reasons
];

const noReasons: Reason[] = [
  { id: 'no1', text: 'Fundamental incompatibility in fruit-selection entropy detected.' },
  // ... 59 more NO reasons
];
```

### Step 4: Create Compatibility Calculator

**Backend Endpoint: POST `/api/compatibility`**

```typescript
interface CompatibilityRequest {
  person1: string;
  person2: string;
  answers1: string[]; // User 1's answers
  answers2: string[]; // User 2's answers
}

interface CompatibilityResult {
  person1: string;
  person2: string;
  compatible: boolean;
  percentage: number;
  reason: string;
  metrics: {
    synergyOscillation: number;
    quantumAlignment: number;
    teaPreferenceHarmonization: number;
    workStyleCoherence: number;
  };
  processingTime: number; // Fake: 2000-5000ms for drama
}

function calculateCompatibility(req: CompatibilityRequest): CompatibilityResult {
  // Step 1: Fake processing delay (for dramatic effect!)
  const processingTime = Math.random() * 3000 + 2000; // 2-5 seconds
  
  // Step 2: Generate fake metrics (completely random!)
  const metrics = {
    synergyOscillation: parseFloat((Math.random() * 100).toFixed(1)),
    quantumAlignment: parseFloat((Math.random() * 100).toFixed(1)),
    teaPreferenceHarmonization: parseFloat((Math.random() * 100).toFixed(1)),
    workStyleCoherence: parseFloat((Math.random() * 100).toFixed(1))
  };
  
  // Step 3: Random YES or NO (50/50)
  const compatible = Math.random() > 0.5;
  
  // Step 4: Pick random reason
  const reasonList = compatible ? yesReasons : noReasons;
  const reason = reasonList[Math.floor(Math.random() * reasonList.length)];
  
  // Step 5: Calculate fake percentage
  const percentage = parseFloat(
    (Math.random() * (100 - 50) + 50).toFixed(1)
  );
  
  return {
    person1: req.person1,
    person2: req.person2,
    compatible,
    percentage,
    reason: reason.text,
    metrics,
    processingTime
  };
}
```

---

## Frontend Implementation (React/Next.js)

### Step 1: Name Entry Component

```typescript
// pages/index.tsx
const [person1, setPerson1] = useState('');
const [person2, setPerson2] = useState('');

const handleStart = async () => {
  if (!person1.trim() || !person2.trim()) {
    alert('Please enter both names');
    return;
  }
  // Fetch questions and move to quiz
  router.push(`/quiz?p1=${person1}&p2=${person2}`);
};
```

### Step 2: Quiz Component

```typescript
// pages/quiz.tsx
const [questions, setQuestions] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState<string[]>([]);

useEffect(() => {
  async function fetchQuestions() {
    const res = await fetch('/api/questions');
    const data = await res.json();
    setQuestions(data.questions);
  }
  fetchQuestions();
}, []);

const handleAnswer = (answer: string) => {
  const newAnswers = [...answers];
  newAnswers[currentQuestion] = answer;
  setAnswers(newAnswers);
};

const handleNext = () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    // Go to results
    handleSubmit();
  }
};
```

### Step 3: Results Component

```typescript
// pages/results.tsx
const [loading, setLoading] = useState(true);
const [result, setResult] = useState<CompatibilityResult | null>(null);

useEffect(() => {
  async function calculateCompatibility() {
    // Simulate fake processing time
    setTimeout(async () => {
      const res = await fetch('/api/compatibility', {
        method: 'POST',
        body: JSON.stringify({
          person1,
          person2,
          answers1: userAnswers,
          answers2: otherAnswers
        })
      });
      const data = await res.json();
      setResult(data);
      setLoading(false);
    }, 2000 + Math.random() * 3000); // 2-5 second delay
  }
  
  calculateCompatibility();
}, []);

// Show fake "processing" animation while loading
if (loading) {
  return <LoadingScreen />;
}

// Show results
return (
  <div>
    <h1>{result.compatible ? '✅ YES!' : '❌ NO!'}</h1>
    <p>{result.reason}</p>
    <div className="metrics">
      <Metric name="Synergy Oscillation" value={result.metrics.synergyOscillation} />
      <Metric name="Quantum Alignment" value={result.metrics.quantumAlignment} />
      <Metric name="Tea Preference Harmonization" value={result.metrics.teaPreferenceHarmonization} />
      <Metric name="Work Style Coherence" value={result.metrics.workStyleCoherence} />
    </div>
    <button onClick={() => location.reload()}>Try Again!</button>
  </div>
);
```

---

## Testing Strategy

### Unit Tests

**Test 1: No Duplicate Questions**
```typescript
test('should not return duplicate questions', () => {
  const questions = getRandomQuestions(12);
  const ids = questions.map(q => q.id);
  expect(new Set(ids).size).toBe(ids.length);
});
```

**Test 2: Correct Reason Type**
```typescript
test('should return YES reason for YES verdict', () => {
  // Mock compatible = true
  const result = calculateCompatibility(mockRequest);
  expect(yesReasons.map(r => r.text)).toContain(result.reason);
});
```

**Test 3: Metrics in Range**
```typescript
test('should generate metrics between 0-100', () => {
  const result = calculateCompatibility(mockRequest);
  Object.values(result.metrics).forEach(value => {
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(100);
  });
});
```

### E2E Tests (Playwright)

**Test 1: Full Happy Path**
```typescript
test('should complete full quiz flow', async ({ page }) => {
  // Visit home page
  await page.goto('http://localhost:3000');
  
  // Enter names
  await page.fill('input[name="person1"]', 'Alice');
  await page.fill('input[name="person2"]', 'Bob');
  await page.click('button[type="submit"]');
  
  // Answer questions
  for (let i = 0; i < 12; i++) {
    await page.click('input[value="yes"]');
    if (i < 11) await page.click('button:has-text("Next")');
  }
  
  // Submit and wait for results
  await page.click('button:has-text("Get Results")');
  await page.waitForSelector('h1');
  
  // Check results
  const verdict = await page.locator('h1').textContent();
  expect(verdict).toMatch(/YES|NO/);
});
```

**Test 2: Results Are Random**
```typescript
test('should get different results on second attempt', async ({ page }) => {
  // Run quiz once, note the result
  const result1 = await getResult(page, 'Alice', 'Bob', answers);
  
  // Go back and run again with same answers
  const result2 = await getResult(page, 'Alice', 'Bob', answers);
  
  // Results should be different ~50% of the time
  // Run 10 times to verify ~50/50 split
  const results = [];
  for (let i = 0; i < 10; i++) {
    results.push(await getResult(page, 'Alice', 'Bob', answers));
  }
  
  const yesCount = results.filter(r => r.verdict === 'yes').length;
  expect(yesCount).toBeGreaterThan(2); // At least 2-3 of 10
  expect(yesCount).toBeLessThan(8);   // But not too many
});
```

---

## Deployment Checklist

### Before Launch

- [ ] All 65 questions are in database
- [ ] All 60 YES reasons are in database
- [ ] All 60 NO reasons are in database
- [ ] No duplicate questions in a single quiz (Fisher-Yates tested)
- [ ] Results are 50/50 YES/NO split (run quiz 100 times)
- [ ] Fake processing delay (2-5 seconds) shows before results
- [ ] Metrics are always random (not based on answers)
- [ ] Unit tests pass (>80% coverage)
- [ ] E2E tests pass (full flow, randomization)
- [ ] Mobile responsive (<800px widths)
- [ ] Accessibility (WCAG AA)
- [ ] No console errors
- [ ] Performance: Questions load in <500ms
- [ ] Performance: Results calculate in <100ms actual (2-5 seconds shown)

### Deployment

```bash
# Vercel
vercel

# Or Docker
docker build -t team-vibe-checker .
docker run -p 3000:3000 team-vibe-checker
```

### Environment Variables

```
ANTHROPIC_API_KEY=sk-ant-... (optional, not used)
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=production
```

---

## Helpful Tips

### Making It Funny

1. **Fake Processing Animation**
   - Show "Analyzing compatibility patterns..."
   - "Quantum calculations in progress..."
   - "Tea preference matrices aligning..."
   - "Work style frequencies synchronizing..."
   - Display for 2-5 seconds before showing results

2. **Funny Loading Texts**
   ```typescript
   const loadingTexts = [
     "🔬 Analyzing your vibes...",
     "🎲 Rolling the cosmic dice...",
     "☕ Brewing compatibility metrics...",
     "🌌 Consulting the quantum algorithm...",
     "🤖 Running 10,000 simulations...",
     "✨ Sprinkling some cosmic dust..."
   ];
   ```

3. **Playful UI**
   - Bright colors (especially for the verdict)
   - Emoji everywhere 🎉✨🎭
   - Animations and transitions
   - Confetti on YES 🎊
   - Sad trombone sound on NO 📯

### Common Mistakes to Avoid

❌ Don't hardcode results based on answers
❌ Don't repeat questions in a single quiz
❌ Don't store results (they're ephemeral)
❌ Don't use real algorithms (this is fake!)
❌ Don't make it feel too serious

---

## Questions?

- See `README.md` for feature overview
- See `docs/PRD.md` for detailed specifications
- See `database-template.json` for complete database
- See `CTO_UPDATE_SUMMARY.md` for change log

---

**Ready to build! 🚀**
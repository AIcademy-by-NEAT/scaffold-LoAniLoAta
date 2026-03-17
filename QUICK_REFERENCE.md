# 🎯 Team Vibe Checker — Quick Reference Card

**Project:** Team Vibe Checker - Fake Compatibility Test  
**CTO Update:** March 17, 2025  
**Status:** ✅ Ready for Development

---

## The Pitch (30 seconds)

A hilarious web app that pretends to scientifically evaluate whether two people can work together.

- Enter two names
- Answer 12-15 silly questions (from pool of **65**)
- Get random YES/NO verdict with a fake reason (from pool of **120**)
- Results are totally random (same answers → different results)
- Metrics are completely made up (Synergy Oscillation Coefficient, etc.)

---

## Key Numbers

```
Questions:    65 total (6 categories)
Questions/Quiz: 12-15 random
YES Reasons:  60
NO Reasons:   60
Total Reasons: 120

Database: ~15KB JSON
Average Response Time: <100ms (shown as 2-5s fake loading)
Quiz Duration: <3 minutes
```

---

## What's New (This Update)

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Questions | 46 | 65 | +41% |
| YES Reasons | 40 | 60 | +50% |
| NO Reasons | 40 | 60 | +50% |
| Total Reasons | 80 | 120 | +50% |

---

## Files You Need

| File | Purpose | For |
|------|---------|-----|
| `README.md` | Overview & features | Everyone |
| `docs/PRD.md` | Detailed specs | Devs & QA |
| `database-template.json` | Ready-to-use database | Backend |
| `IMPLEMENTATION_GUIDE.md` | Code examples | Developers |
| `CTO_UPDATE_SUMMARY.md` | What changed & why | Team leads |
| `CHANGES.md` | Change log | Verification |

---

## Implementation (TL;DR)

### Backend
1. Load `database-template.json`
2. Create `/api/questions` endpoint (return 12-15 random)
3. Create `/api/compatibility` endpoint (return random verdict)
4. No calculation logic — pure randomness!

### Frontend
1. Name entry form
2. Quiz component (12-15 questions)
3. Results component (verdict + 4 metrics + reason)
4. "Play Again" button

### Key Features
- ✅ No duplicate questions per quiz
- ✅ 50/50 YES/NO split
- ✅ Fake 2-5 second processing delay
- ✅ Metrics 0-100 (random)
- ✅ Different reason each time

---

## Testing Checklist

- [ ] All 65 questions in database
- [ ] All 60 YES reasons in database
- [ ] All 60 NO reasons in database
- [ ] No duplicate questions (test 10+ quizzes)
- [ ] 50/50 YES/NO split (test 100 quizzes)
- [ ] Different reason each time
- [ ] Metrics are random
- [ ] Mobile responsive
- [ ] Fake loading (2-5 seconds) works
- [ ] E2E tests pass

---

## Code Example: Random Question Selector

```typescript
// Get 12-15 random questions, NO DUPLICATES
function getRandomQuestions(count: number = 12) {
  const allQuestions = [...questions];
  const selected = [];
  
  for (let i = 0; i < count && allQuestions.length > 0; i++) {
    const randomIdx = Math.floor(Math.random() * allQuestions.length);
    selected.push(allQuestions[randomIdx]);
    allQuestions.splice(randomIdx, 1); // Remove to prevent duplicates
  }
  
  return selected;
}
```

---

## Code Example: Compatibility Calculator

```typescript
function calculateCompatibility(person1, person2, answers1, answers2) {
  // Generate 4 completely random metrics
  const metrics = {
    synergyOscillation: Math.random() * 100,
    quantumAlignment: Math.random() * 100,
    teaPreferenceHarmonization: Math.random() * 100,
    workStyleCoherence: Math.random() * 100
  };
  
  // 50/50 YES or NO
  const compatible = Math.random() > 0.5;
  
  // Pick random reason
  const reasons = compatible ? yesReasons : noReasons;
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  
  return {
    compatible,
    metrics,
    reason,
    percentage: Math.random() * 50 + 50 // 50-100%
  };
}
```

---

## API Endpoints

### GET `/api/questions`
```json
{
  "questions": [
    {
      "id": "q1",
      "text": "If you were a fruit, which would you be?",
      "category": "personality"
    }
  ]
}
```

### POST `/api/compatibility`
**Request:**
```json
{
  "person1": "Alice",
  "person2": "Bob",
  "answers1": ["apple", "morning", ...],
  "answers2": ["banana", "night", ...]
}
```

**Response:**
```json
{
  "compatible": true,
  "percentage": 87.4,
  "reason": "Your synergy oscillation coefficient is off the charts!",
  "metrics": {
    "synergyOscillation": 87.4,
    "quantumAlignment": 72.1,
    "teaPreferenceHarmonization": 91.3,
    "workStyleCoherence": 65.8
  }
}
```

---

## Question Categories

| Category | Count | Examples |
|----------|-------|----------|
| Personality | 12 | Morning person? Coffee or tea? |
| Work Style | 12 | Camera on in meetings? Dark mode? |
| Life Choices | 13 | Pineapple on pizza? Cake or pie? |
| Quirks | 12 | Sing in shower? Name plants? |
| Weird Stuff | 9 | Aliens exist? Time travel? |
| Work Environment | 7 | Standing desk? Headphones? |
| **TOTAL** | **65** | — |

---

## Reason Examples

### YES Reasons (Sample of 60)
- "Your synergy oscillation coefficient is off the charts!"
- "Cosmic alignment suggests you're a power duo."
- "The algorithm ran backward and still said YES."
- "Compatibility levels: OVER 9000!"

### NO Reasons (Sample of 60)
- "Fundamental incompatibility in fruit-selection entropy detected."
- "Your work-style oscillation waves are 180 degrees out of phase."
- "The algorithm quit three times during the analysis."
- "Communication? You'd need a diplomatic envoy."

---

## Success Criteria

✅ Quiz completes in <3 minutes  
✅ Results are random (50/50 YES/NO)  
✅ No duplicate questions per quiz  
✅ Different reason each attempt  
✅ Mobile responsive  
✅ No console errors  
✅ E2E tests pass  
✅ Users think it's hilarious  

---

## Timeline

```
Sprint 1: Database + API (Week 1)
Sprint 2: UI + Testing (Week 2)
Sprint 3: Polish + Deploy (Week 3)
```

---

## FAQ

**Q: Why is the result random?**  
A: That's the joke! Same answers should give same verdict, but we make it random.

**Q: Are metrics real?**  
A: No! 100% fake. Synergy Oscillation doesn't exist.

**Q: Can people share results?**  
A: Not in MVP. Results disappear after page reload.

**Q: What if someone complains about the verdict?**  
A: Tell them it's scientifically proven (it's not) and to take it again!

**Q: Is there any actual AI involved?**  
A: Nope! Just random number generation with funny names.

---

## Need More Info?

| Need | Read |
|------|------|
| High-level overview | README.md |
| Detailed specs | docs/PRD.md |
| Code examples | IMPLEMENTATION_GUIDE.md |
| Change summary | CTO_UPDATE_SUMMARY.md |
| Database schema | database-template.json |
| Verification guide | CHANGES.md |

---

**Ready to build? Let's go! 🚀**

Questions? See CTO_UPDATE_SUMMARY.md or IMPLEMENTATION_GUIDE.md
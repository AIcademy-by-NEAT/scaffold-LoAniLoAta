# Team Vibe Checker — Product Requirements Document

## Executive Summary

**Team Vibe Checker** is a playful web application that "scientifically" evaluates whether two people can work together.

Two users answer 10-15 silly questions. Our "proprietary compatibility algorithm" (random number generation with funny names) processes their answers, performs absurd calculations, and delivers a completely random YES/NO verdict with a ridiculous reason.

**The joke:** Results are 100% fake, intentionally random, and meaningless. Users know this and find it hilarious.

---

## 1. Core Features

### Feature 1: Quiz Flow
- **Home Page** → Enter two names
- **Quiz Page** → Answer 10-15 random questions
- **Results Page** → See verdict, metrics, and reason
- **Replay** → Take the quiz again (different questions/results)

### Feature 2: Random Question Selection
- Pull 10-15 questions from a pool of 65+
- No repeats in a single quiz
- Different random selection each quiz
- Questions from categories: personality, work style, quirks, life choices, weird stuff, work environment

### Feature 3: Fake Calculation Engine
- Parse answers (binary, multiple choice, or open text)
- Generate 4 "metrics" with random values 0-100
- Flip a coin: 50% YES, 50% NO
- Select a matching reason from a database of 60+ reasons per verdict
- Format as fake scientific result

### Feature 4: Results Display
- Show both names
- Display compatibility verdict (YES/NO) with emphasis
- Show 4 fake metrics (Synergy Oscillation, etc.)
- Show a ridiculous reason
- Offer to re-take the quiz

---

## 2. User Stories

### Story 1: Enter Names
```
As a user
I want to enter two names
So that the quiz can be personalized
```

**Acceptance Criteria:**
- ✅ Input fields for Person 1 and Person 2
- ✅ Button to proceed
- ✅ Basic validation (names not empty)
- ✅ Names displayed in results

### Story 2: Answer Questions
```
As a user
I want to answer silly questions about myself
So that the "algorithm" can process my data
```

**Acceptance Criteria:**
- ✅ Display 1 question at a time
- ✅ Show progress (e.g., "Question 3 of 15")
- ✅ Radio buttons or text input for answers
- ✅ Next/Previous navigation
- ✅ Submit button when all questions answered

### Story 3: See Results
```
As a user
I want to see a compatibility verdict
So that I can laugh at the absurd reasoning
```

**Acceptance Criteria:**
- ✅ Display YES/NO verdict prominently
- ✅ Show 4 fake metrics with percentages
- ✅ Display funny reason
- ✅ Show both names in context
- ✅ Re-take button at bottom

### Story 4: Different Results Every Time
```
As a user
I want different results when I retake the quiz with the same answers
So that the app remains unpredictable and funny
```

**Acceptance Criteria:**
- ✅ Results are random (50% YES, 50% NO)
- ✅ Reasons vary (different reason each time from 60+ options)
- ✅ Metrics are randomized
- ✅ Test: 10 runs, same answers → ~50% YES/NO split

---

## 3. Question Database (65+ Questions)

### Personality (12 questions)

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

### Work Style (12 questions)

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

### Life Choices (13 questions)

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

### Quirks (12 questions)

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

### Weird Stuff (9 questions)

50. "If you were a superhero, would your power be visible or invisible?"
51. "Would you rather have the ability to fly or be invisible?"
52. "If you could teleport, would you use it for work?"
53. "Do you believe in ghosts?"
54. "Would you rather fight one horse-sized duck or 100 duck-sized horses?"
55. "If you could have any accent, which would it be?"
56. "Do you think aliens exist?"
57. "Would you time travel to the past or future?"
58. "Do you think we're living in a simulation?"

### Work Environment (7 questions)

59. "Noise-canceling headphones: always, sometimes, never?"
60. "Standing desk or sitting?"
61. "Do you wear shoes while working from home?"
62. "How many coffee/tea breaks per day?"
63. "Do you snack while working?"
64. "Would you work from a coffee shop?"
65. "Collaborate in silence or with background music?"

---

## 4. Fake Metrics & Calculation

The "calculation" produces 4 meaningless metrics:

### Metric 1: Synergy Oscillation Coefficient (0-100)
- Random value
- Represents "how well vibes sync"
- Higher = better compatibility

### Metric 2: Quantum Preference Alignment (0-100)
- Random value
- Represents "quantum probability of preference matching"
- Scientifically nonsensical

### Metric 3: Tea-Selection Entropy (0-100)
- Random value
- Literally just a number
- Has nothing to do with actual tea

### Metric 4: Work Style Coherence Index (0-100)
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

---

## 5. Verdict Database (YES Reasons — 60+)

**60+ Reasons why two people CAN work together:**

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

---

## 6. Verdict Database (NO Reasons — 60+)

**60+ Reasons why two people CANNOT work together:**

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

---

## 7. Technical Requirements

### Frontend
- **Framework:** Next.js 15 (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React hooks (useState, useEffect)
- **HTTP Client:** fetch or axios
- **Forms:** React hook form or custom

### Backend
- **Framework:** Express or Fastify
- **Language:** TypeScript
- **Database:** In-memory (JSON) for questions/reasons
- **API:** RESTful JSON endpoints
- **CORS:** Enabled for localhost:3000

### Testing
- **Unit:** Jest or Vitest
- **E2E:** Playwright
- **Coverage:** >80% for critical logic

### Deployment
- **Frontend:** Vercel or Netlify
- **Backend:** Heroku, Railway, or Vercel Functions
- **Environment:** Node.js 18+

---

## 8. Non-Functional Requirements

### Performance
- ✅ Questions load in <500ms
- ✅ Compatibility calculation in <100ms
- ✅ Results display in <1s
- ✅ (Show fake loading for dramatic effect)

### Usability
- ✅ Mobile-friendly
- ✅ Accessible (WCAG AA)
- ✅ Fun & playful tone
- ✅ Clear progress indicators

### Reliability
- ✅ No errors on page reload
- ✅ Graceful error handling
- ✅ Recovery from network failures

### Security
- ✅ No personal data stored
- ✅ No authentication required
- ✅ No sensitive information logged
- ✅ CORS properly configured

---

## 9. Success Metrics

- ✅ Users complete quiz in <3 minutes
- ✅ Users re-take quiz (replay value)
- ✅ Results are actually random (50/50 split on repeat with same answers)
- ✅ No crashes or errors in E2E tests
- ✅ Mobile layout is usable (<800px screens)
- ✅ Fun factor: Users share screenshots
- ✅ Unique questions in 95% of quizzes (65+ questions = minimal repeats)
- ✅ Diverse reasons: Users see different explanations (60+ reasons per verdict)

---

## 10. Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Sprint 1** | 1 week | UI mockups, expanded question DB, basic API |
| **Sprint 2** | 1 week | Calculation engine, results display, E2E tests |
| **Sprint 3** | 1 week | Polish UI, animations, deploy |

---

## 11. Out of Scope (Don't Do This)

- ❌ Real compatibility science
- ❌ User accounts / authentication
- ❌ Result storage / history
- ❌ Analytics or tracking
- ❌ Email sharing
- ❌ Ads or monetization
- ❌ Mobile app (web only)

---

## 12. Acceptance Criteria

### MVP (Minimum Viable Product)

- ✅ Homepage with name entry
- ✅ Quiz with 10+ questions
- ✅ Results page with verdict + metrics + reason
- ✅ Re-take functionality
- ✅ Mobile-friendly layout
- ✅ No hardcoded results (must be random)
- ✅ 65+ questions in database
- ✅ 60+ YES reasons in database
- ✅ 60+ NO reasons in database
- ✅ E2E tests pass
- ✅ Deployed and live

---

## 13. Database Structure

### Questions Table Structure

Each question object should contain:
```typescript
{
  id: string;           // Unique identifier (q1, q2, etc.)
  text: string;         // The question text
  category: string;     // personality, work, quirks, life, weird, environment
  type: "choice" | "text" | "binary";  // Answer type
}
```

### Results Reasons Table Structure

Each reason object should contain:
```typescript
{
  id: string;           // Unique identifier
  text: string;         // The reason text
  verdict: "yes" | "no";  // YES or NO compatibility
  category?: string;    // Optional categorization
}
```

---

**Status:** Ready for Sprint 1  
**Last Updated:** 2025-03-17  
**Prepared by:** CTO  
**Reviewed by:** Team
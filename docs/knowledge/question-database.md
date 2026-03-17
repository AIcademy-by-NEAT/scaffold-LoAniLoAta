# Team Vibe Checker — Complete Question & Reason Database

## Overview

This file contains the complete, exhaustive database of questions and reasons used by Team Vibe Checker. Use this as the authoritative source for all content.

**Total Questions:** 50+  
**Total YES Reasons:** 40+  
**Total NO Reasons:** 40+

This database should be imported into your backend as JSON or a database.

---

## Questions Database

```json
{
  "questions": [
    {
      "id": "q1",
      "text": "If you were a fruit, which would you be and why?",
      "category": "personality",
      "options": null
    },
    {
      "id": "q2",
      "text": "Are you a morning person or night owl?",
      "category": "personality",
      "options": ["Morning person", "Night owl", "Depends"]
    },
    {
      "id": "q3",
      "text": "Do you organize your bookshelf by color or by title?",
      "category": "personality",
      "options": ["By color", "By title", "Random chaos"]
    },
    {
      "id": "q4",
      "text": "Introvert or extrovert at parties?",
      "category": "personality",
      "options": ["Introvert", "Extrovert", "Depends on the crowd"]
    },
    {
      "id": "q5",
      "text": "Do you plan everything or just wing it?",
      "category": "personality",
      "options": ["Plan everything", "Wing it", "A mix of both"]
    },
    {
      "id": "q6",
      "text": "Coffee or tea person?",
      "category": "personality",
      "options": ["Coffee", "Tea", "Neither"]
    },
    {
      "id": "q7",
      "text": "Do you prefer working alone or in teams?",
      "category": "personality",
      "options": ["Alone", "Teams", "Either way"]
    },
    {
      "id": "q8",
      "text": "Optimist or pessimist by default?",
      "category": "personality",
      "options": ["Optimist", "Pessimist", "Realist"]
    },
    {
      "id": "q9",
      "text": "Meetings: camera on or off?",
      "category": "work_style",
      "options": ["Camera on", "Camera off", "Depends"]
    },
    {
      "id": "q10",
      "text": "Deadline approach: plan ahead or panic last-minute?",
      "category": "work_style",
      "options": ["Plan ahead", "Last-minute panic", "A bit of both"]
    },
    {
      "id": "q11",
      "text": "Do you prefer email or Slack communication?",
      "category": "work_style",
      "options": ["Email", "Slack", "Phone call"]
    },
    {
      "id": "q12",
      "text": "How many monitors do you use for work?",
      "category": "work_style",
      "options": ["One", "Two", "Three or more"]
    },
    {
      "id": "q13",
      "text": "Messy desk or pristine workspace?",
      "category": "work_style",
      "options": ["Messy", "Pristine", "Organized mess"]
    },
    {
      "id": "q14",
      "text": "Do you take breaks during work?",
      "category": "work_style",
      "options": ["Frequently", "Rarely", "When I remember"]
    },
    {
      "id": "q15",
      "text": "Code review: constructive or brutal honesty?",
      "category": "work_style",
      "options": ["Constructive", "Brutal honesty", "Who cares"]
    },
    {
      "id": "q16",
      "text": "Pineapple on pizza: yes or no?",
      "category": "life_choices",
      "options": ["Yes", "No", "Maybe"]
    },
    {
      "id": "q17",
      "text": "How do you eat cereal: milk first or cereal first?",
      "category": "life_choices",
      "options": ["Milk first", "Cereal first", "I don't eat cereal"]
    },
    {
      "id": "q18",
      "text": "Folding or rolling socks?",
      "category": "life_choices",
      "options": ["Folding", "Rolling", "Ball them up"]
    },
    {
      "id": "q19",
      "text": "Do you alphabetize your spice rack?",
      "category": "life_choices",
      "options": ["Yes", "No", "I tried once"]
    },
    {
      "id": "q20",
      "text": "Toilet paper: over or under?",
      "category": "life_choices",
      "options": ["Over", "Under", "Don't care"]
    },
    {
      "id": "q21",
      "text": "Do you eat the pizza crust?",
      "category": "life_choices",
      "options": ["Always", "Never", "Sometimes"]
    },
    {
      "id": "q22",
      "text": "Pick a movie genre: comedy, drama, or horror?",
      "category": "life_choices",
      "options": ["Comedy", "Drama", "Horror"]
    },
    {
      "id": "q23",
      "text": "Do you rewatch your favorite shows?",
      "category": "life_choices",
      "options": ["All the time", "Rarely", "Never"]
    },
    {
      "id": "q24",
      "text": "Do you name your houseplants?",
      "category": "quirks",
      "options": ["Yes", "No", "Sometimes"]
    },
    {
      "id": "q25",
      "text": "Do you talk to yourself while coding?",
      "category": "quirks",
      "options": ["Always", "Sometimes", "Never"]
    },
    {
      "id": "q26",
      "text": "Do you have a lucky object?",
      "category": "quirks",
      "options": ["Yes", "No", "Not really"]
    },
    {
      "id": "q27",
      "text": "Do you check under the bed before sleeping?",
      "category": "quirks",
      "options": ["Always", "Sometimes", "Never"]
    },
    {
      "id": "q28",
      "text": "Do you read book reviews before reading?",
      "category": "quirks",
      "options": ["Yes", "No", "Sometimes"]
    },
    {
      "id": "q29",
      "text": "Do you organize your browser tabs?",
      "category": "quirks",
      "options": ["Obsessively", "Sometimes", "What tabs?"]
    },
    {
      "id": "q30",
      "text": "Do you keep browser history?",
      "category": "quirks",
      "options": ["Always", "I clear it daily", "What history?"]
    },
    {
      "id": "q31",
      "text": "Do you sing in the shower?",
      "category": "quirks",
      "options": ["Yes", "No", "Only sad songs"]
    },
    {
      "id": "q32",
      "text": "If you were a superhero, would your power be visible or invisible?",
      "category": "weird_stuff",
      "options": ["Visible", "Invisible", "Both"]
    },
    {
      "id": "q33",
      "text": "Would you rather have the ability to fly or be invisible?",
      "category": "weird_stuff",
      "options": ["Fly", "Invisible", "Neither"]
    },
    {
      "id": "q34",
      "text": "If you could teleport, would you use it for work?",
      "category": "weird_stuff",
      "options": ["Yes", "No", "Every day"]
    },
    {
      "id": "q35",
      "text": "Do you believe in ghosts?",
      "category": "weird_stuff",
      "options": ["Yes", "No", "Maybe"]
    },
    {
      "id": "q36",
      "text": "Would you rather fight one horse-sized duck or 100 duck-sized horses?",
      "category": "weird_stuff",
      "options": ["Horse-sized duck", "100 duck-sized horses", "Neither"]
    },
    {
      "id": "q37",
      "text": "If you could have any accent, which would it be?",
      "category": "weird_stuff",
      "options": ["British", "Australian", "Something else"]
    },
    {
      "id": "q38",
      "text": "Do you think aliens exist?",
      "category": "weird_stuff",
      "options": ["Yes", "No", "Probably"]
    },
    {
      "id": "q39",
      "text": "Would you time travel to the past or future?",
      "category": "weird_stuff",
      "options": ["Past", "Future", "Neither"]
    },
    {
      "id": "q40",
      "text": "Do you think we're living in a simulation?",
      "category": "weird_stuff",
      "options": ["Yes", "No", "Maybe"]
    },
    {
      "id": "q41",
      "text": "Noise-canceling headphones: always, sometimes, never?",
      "category": "work_environment",
      "options": ["Always", "Sometimes", "Never"]
    },
    {
      "id": "q42",
      "text": "Standing desk or sitting?",
      "category": "work_environment",
      "options": ["Standing", "Sitting", "Both"]
    },
    {
      "id": "q43",
      "text": "Do you wear shoes while working from home?",
      "category": "work_environment",
      "options": ["Always", "Sometimes", "Never"]
    },
    {
      "id": "q44",
      "text": "How many coffee/tea breaks per day?",
      "category": "work_environment",
      "options": ["0-2", "3-5", "More than 5"]
    },
    {
      "id": "q45",
      "text": "Do you snack while working?",
      "category": "work_environment",
      "options": ["Always", "Sometimes", "Never"]
    },
    {
      "id": "q46",
      "text": "Would you work from a coffee shop?",
      "category": "work_environment",
      "options": ["Yes", "No", "Depends"]
    },
    {
      "id": "q47",
      "text": "What's your ideal team size?",
      "category": "personality",
      "options": ["2-3 people", "5-10 people", "Large team"]
    },
    {
      "id": "q48",
      "text": "How do you handle disagreements?",
      "category": "work_style",
      "options": ["Discuss calmly", "Avoid conflict", "Stand your ground"]
    },
    {
      "id": "q49",
      "text": "Do you prefer remote or in-office work?",
      "category": "work_environment",
      "options": ["Remote", "In-office", "Hybrid"]
    },
    {
      "id": "q50",
      "text": "How important is work-life balance to you?",
      "category": "life_choices",
      "options": ["Very important", "Somewhat", "Not really"]
    }
  ]
}
```

---

## YES Reasons Database

```json
{
  "yes_reasons": [
    "Your synergy oscillation coefficient is off the charts!",
    "Quantum probability indicates cosmic soulmate status.",
    "Your tea preference harmonization is flawless.",
    "Work-style coherence index detected: near-perfect alignment.",
    "Compatibility wave patterns are in harmony.",
    "Your preference oscillation frequencies match beautifully.",
    "Cosmic alignment suggests you're a power duo.",
    "Synergy metrics indicate supernatural compatibility.",
    "Your vibes are mutually beneficial and energetically positive.",
    "Work style friction coefficient: ZERO. You're golden.",
    "Quantum entanglement of preferences confirmed.",
    "Your partnership potential is astronomical.",
    "The universe is literally telling us you should team up.",
    "Your work styles are in perfect harmony.",
    "Communication flow prediction: EXCELLENT.",
    "You have complementary strengths. Science confirmed it.",
    "Collaboration probability: 99.9%. Almost certain success.",
    "Your teamwork resonance frequency is exceptional.",
    "Personality compatibility: MAXED OUT.",
    "The algorithm has spoken. You're basically soulmates.",
    "Your work rhythms are synchronized like clockwork.",
    "Conflict resolution potential: surprisingly high.",
    "You bring out each other's best qualities (statistically).",
    "Your productivity vector is pointing the same direction.",
    "The stars have aligned. Go forth and build things.",
    "Your mutual interests overlap in unexpected ways.",
    "This partnership would defy quantum mechanics if it fails.",
    "You're basically a cheat code for project success.",
    "Your combined energy output: UNSTOPPABLE.",
    "The data suggests you finish each other's sentences.",
    "Your compatibility aura is blindingly bright.",
    "This is the kind of partnership stories are written about.",
    "Your work styles are different but complementary.",
    "You're like two puzzle pieces that fit perfectly.",
    "The algorithm is 87% confident you'll change the world together.",
    "Your teamwork coefficient just broke the scale (in a good way).",
    "You have the kind of chemistry that makes great things happen.",
    "The universe placed you two in the same room for a reason.",
    "Your compatibility score: so high, we had to double-check it.",
    "Honestly, we're surprised the server didn't crash from YES-ing too hard.",
    "Your combined problem-solving abilities: borderline superhuman.",
    "The compatibility matrix literally glitched from the sheer YES-ness.",
    "You're the kind of team that other teams want to be.",
    "Your mutual respect levels: through the roof.",
    "This partnership was written in the stars (literally, we checked).",
    "You complement each other like peanut butter and jelly.",
    "The algorithm is confident you'd dominate any project together.",
    "Your team dynamic would be legendary.",
    "The synergy between you two is palpable even to machines.",
    "You're destined to create something amazing together."
  ]
}
```

---

## NO Reasons Database

```json
{
  "no_reasons": [
    "Fundamental incompatibility in fruit-selection entropy detected.",
    "Your work-style oscillation waves are 180 degrees out of phase.",
    "One prefers order. One prefers chaos. This is unrecoverable.",
    "Quantum preference misalignment beyond repair.",
    "Your communication styles are like two ships passing in the night.",
    "Synergy oscillation coefficient: critically low.",
    "The algorithm predicts constant misunderstandings.",
    "Your vibes are... not complementary. At all.",
    "Work environment preferences: incompatible.",
    "Collaboration potential: DOA (dead on arrival).",
    "The universe suggests you find different teammates.",
    "Your personality types are adversarial by default.",
    "Conflict resolution potential: essentially zero.",
    "You would spend more time arguing than coding.",
    "Your work speeds are too different. You'll drive each other nuts.",
    "Tea preference harmonization: FAILED.",
    "The algorithm ran 10,000 simulations. Every single one ended in chaos.",
    "You're like magnets, but pointing the same direction. You'd repel.",
    "Your schedule preferences create a temporal paradox of incompatibility.",
    "This partnership would violate the laws of thermodynamics.",
    "The data strongly suggests you'd be at each other's throats.",
    "Your communication styles: a match that would burn the building down.",
    "Productivity prediction: NEGATIVE. You'd somehow lose momentum.",
    "This pairing would require negotiating every single decision.",
    "Your work habits are like oil and water. Plus some acid.",
    "The algorithm had an error. Then rechecked. Still a hard no.",
    "You're incompatible in ways we didn't even think were possible.",
    "One of you would definitely slow the other down.",
    "Your energy levels are out of sync. Constant frustration incoming.",
    "The universe is literally telling us to keep you apart.",
    "Your collaboration coefficient just went into the negatives.",
    "This is the kind of partnership that ends friendships.",
    "You'd spend 80% of time explaining yourself to each other.",
    "Compatibility score: our database doesn't go that low.",
    "The algorithm suggests you should work on literally anything else.",
    "Your work styles would create more problems than they solve.",
    "Teamwork resonance frequency: broken glass at full volume.",
    "The data says: find different teammates. Seriously.",
    "This partnership would be a cautionary tale.",
    "The server is literally begging us not to pair you two. We can feel it.",
    "Your personality clash would be the stuff of legend (bad legend).",
    "The incompatibility quotient is so high, we invented new negative numbers.",
    "You two would spend more time in meetings about meetings.",
    "Your work styles would create a vortex of misunderstanding.",
    "This team would define the term 'dysfunctional.'",
    "The algorithm actually cried when processing this combo.",
    "Fundamental differences would overshadow any potential synergy.",
    "Your approaches are so different, you'd never sync up.",
    "This partnership would test the patience of saints.",
    "The data is clear: you need very different people to work with."
  ]
}
```

---

## Implementation Notes

### For Backend Developers

1. **Import this database** as JSON or populate your database
2. **Shuffle questions** when pulling 15 for a quiz
3. **Never repeat questions** in a single quiz session
4. **Random selection** for reasons (use `Math.random()` or similar)
5. **Random verdict** (50/50 YES/NO flip)

### For Frontend Developers

1. **Fetch questions** from `/api/questions` endpoint
2. **Display one question at a time**
3. **Collect answers** in an array
4. **Submit answers** to `/api/compatibility` endpoint
5. **Display results** with fancy animations

### Database Format

Use this structure in your backend:

```typescript
interface Question {
  id: string;           // Unique ID (q1, q2, etc.)
  text: string;         // The question text
  category: string;     // Category (personality, work_style, etc.)
  options?: string[];   // Optional multiple choice answers
}

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

## Adding More Questions/Reasons

### Template for New Questions

```json
{
  "id": "q51",
  "text": "Your question here?",
  "category": "category_name",
  "options": ["Option 1", "Option 2", "Option 3"]
}
```

### Template for New Reasons

```
"Your reason here that explains why they are/aren't compatible.",
```

---

**Last Updated:** 2025-03-17  
**Total Questions:** 50  
**Total YES Reasons:** 50  
**Total NO Reasons:** 50  
**Ready for Implementation:** YES ✅
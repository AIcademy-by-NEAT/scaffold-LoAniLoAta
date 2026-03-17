export interface Question {
  id: string;
  text: string;
  category: 'personality' | 'work_style' | 'life_choices' | 'quirks' | 'weird_stuff' | 'work_environment';
  options?: string[];
}

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'If you were a fruit, which would you be and why?',
    category: 'personality',
  },
  {
    id: 'q2',
    text: 'Are you a morning person or night owl?',
    category: 'personality',
    options: ['Morning person', 'Night owl', 'Depends'],
  },
  {
    id: 'q3',
    text: 'Do you organize your bookshelf by color or by title?',
    category: 'personality',
    options: ['By color', 'By title', 'Random chaos'],
  },
  {
    id: 'q4',
    text: 'Introvert or extrovert at parties?',
    category: 'personality',
    options: ['Introvert', 'Extrovert', 'Depends on the crowd'],
  },
  {
    id: 'q5',
    text: 'Do you plan everything or just wing it?',
    category: 'personality',
    options: ['Plan everything', 'Wing it', 'A mix of both'],
  },
  {
    id: 'q6',
    text: 'Coffee or tea person?',
    category: 'personality',
    options: ['Coffee', 'Tea', 'Neither'],
  },
  {
    id: 'q7',
    text: 'Do you prefer working alone or in teams?',
    category: 'personality',
    options: ['Alone', 'Teams', 'Either way'],
  },
  {
    id: 'q8',
    text: 'Optimist or pessimist by default?',
    category: 'personality',
    options: ['Optimist', 'Pessimist', 'Realist'],
  },
  {
    id: 'q9',
    text: 'Meetings: camera on or off?',
    category: 'work_style',
    options: ['Camera on', 'Camera off', 'Depends'],
  },
  {
    id: 'q10',
    text: 'Deadline approach: plan ahead or panic last-minute?',
    category: 'work_style',
    options: ['Plan ahead', 'Last-minute panic', 'A bit of both'],
  },
  {
    id: 'q11',
    text: 'Do you prefer email or Slack communication?',
    category: 'work_style',
    options: ['Email', 'Slack', 'Phone call'],
  },
  {
    id: 'q12',
    text: 'How many monitors do you use for work?',
    category: 'work_style',
    options: ['One', 'Two', 'Three or more'],
  },
  {
    id: 'q13',
    text: 'Messy desk or pristine workspace?',
    category: 'work_style',
    options: ['Messy', 'Pristine', 'Organized mess'],
  },
  {
    id: 'q14',
    text: 'Do you take breaks during work?',
    category: 'work_style',
    options: ['Frequently', 'Rarely', 'When I remember'],
  },
  {
    id: 'q15',
    text: 'Code review: constructive or brutal honesty?',
    category: 'work_style',
    options: ['Constructive', 'Brutal honesty', 'Who cares'],
  },
];

export const YES_REASONS: string[] = [
  'Your synergy oscillation coefficient is off the charts!',
  'Quantum probability indicates cosmic soulmate status.',
  'Your tea preference harmonization is flawless.',
  'Work-style coherence index detected: near-perfect alignment.',
  'Compatibility wave patterns are in harmony.',
  'Your preference oscillation frequencies match beautifully.',
  'Cosmic alignment suggests you\'re a power duo.',
  'Synergy metrics indicate supernatural compatibility.',
  'Your vibes are mutually beneficial and energetically positive.',
  'Work style friction coefficient: ZERO. You\'re golden.',
  'Quantum entanglement of preferences confirmed.',
  'Your partnership potential is astronomical.',
  'The universe is literally telling us you should team up.',
  'Your work styles are in perfect harmony.',
  'Communication flow prediction: EXCELLENT.',
  'You have complementary strengths. Science confirmed it.',
  'Collaboration probability: 99.9%. Almost certain success.',
  'Your teamwork resonance frequency is exceptional.',
  'Personality compatibility: MAXED OUT.',
  'The algorithm has spoken. You\'re basically soulmates.',
  'Your work rhythms are synchronized like clockwork.',
  'Conflict resolution potential: surprisingly high.',
  'You bring out each other\'s best qualities (statistically).',
  'Your productivity vector is pointing the same direction.',
  'The stars have aligned. Go forth and build things.',
];

export const NO_REASONS: string[] = [
  'Fundamental incompatibility in fruit-selection entropy detected.',
  'Your work-style oscillation waves are 180 degrees out of phase.',
  'One prefers order. One prefers chaos. This is unrecoverable.',
  'Quantum preference misalignment beyond repair.',
  'Your communication styles are like two ships passing in the night.',
  'Synergy oscillation coefficient: critically low.',
  'The algorithm predicts constant misunderstandings.',
  'Your vibes are... not complementary. At all.',
  'Work environment preferences: incompatible.',
  'Collaboration potential: DOA (dead on arrival).',
  'The universe suggests you find different teammates.',
  'Your personality types are adversarial by default.',
  'Conflict resolution potential: essentially zero.',
  'You would spend more time arguing than coding.',
  'Your work speeds are too different. You\'ll drive each other nuts.',
  'Tea preference harmonization: FAILED.',
  'The algorithm ran 10,000 simulations. Every single one ended in chaos.',
  'You\'re like magnets, but pointing the same direction. You\'d repel.',
  'Your schedule preferences create a temporal paradox of incompatibility.',
  'This partnership would violate the laws of thermodynamics.',
  'The data strongly suggests you\'d be at each other\'s throats.',
  'Your communication styles: a match that would burn the building down.',
  'Productivity prediction: NEGATIVE. You\'d somehow lose momentum.',
  'This pairing would require negotiating every single decision.',
  'Your work habits are like oil and water. Plus some acid.',
];

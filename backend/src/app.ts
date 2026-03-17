import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { getRandomQuestions } from './questionsService.js';
import { calculateCompatibility } from './calculator.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Routes

/**
 * GET /api/questions
 * Returns 15 random questions
 */
app.get('/api/questions', (req: Request, res: Response) => {
  try {
    const questions = getRandomQuestions(15);
    res.json({
      success: true,
      data: {
        questions,
        count: questions.length,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

/**
 * POST /api/compatibility
 * Calculate compatibility between two people
 */
app.post('/api/compatibility', (req: Request, res: Response) => {
  try {
    const { person1, person2, person1_answers, person2_answers } = req.body;

    // Validation
    if (!person1 || !person2) {
      return res.status(400).json({ error: 'Missing person names' });
    }
    if (!Array.isArray(person1_answers) || !Array.isArray(person2_answers)) {
      return res.status(400).json({ error: 'Invalid answers format' });
    }

    const result = calculateCompatibility(
      person1,
      person2,
      person1_answers,
      person2_answers
    );

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate compatibility' });
  }
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

/**
 * 404 handler
 */
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;

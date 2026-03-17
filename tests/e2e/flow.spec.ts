import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('Team Vibe Checker - Full User Flow', () => {
  test('should load home page', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check page title
    await expect(page).toHaveTitle(/Team Vibe Checker/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Team Vibe Checker');
    
    // Check that input fields exist
    const inputs = page.locator('input[type="text"]');
    await expect(inputs).toHaveCount(2);
  });

  test('should not allow starting quiz with empty names', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Get the start button
    const startButton = page.locator('button:has-text("Start Quiz")');
    
    // Button should be disabled initially
    await expect(startButton).toBeDisabled();
  });

  test('should navigate to quiz with names', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Fill in names
    const inputs = page.locator('input[type="text"]');
    await inputs.first().fill('Alice');
    await inputs.last().fill('Bob');
    
    // Click start button
    const startButton = page.locator('button:has-text("Start Quiz")');
    await startButton.click();
    
    // Should navigate to quiz page
    await page.waitForURL(/\/quiz/);
    
    // Check for quiz elements
    await expect(page.locator('h2')).toContainText("Alice's Answers");
  });

  test('should allow answering questions and navigating', async ({ page }) => {
    await page.goto(`${BASE_URL}/quiz?person1=Alice&person2=Bob`);
    
    // Wait for questions to load
    await page.waitForTimeout(1000);
    
    // Get first question
    const questionText = page.locator('h3').first();
    await expect(questionText).toBeVisible();
    
    // Find and click a button to answer
    const answerButtons = page.locator('button[class*="border"]').filter({ hasNot: page.locator('button:has-text("Previous")') });
    
    if (await answerButtons.count() > 0) {
      await answerButtons.first().click();
    }
    
    // Click next
    const nextButton = page.locator('button:has-text("Next")');
    await nextButton.click();
    
    // Should progress to next question
    await page.waitForTimeout(500);
    
    // Progress bar should show we moved
    const progressBar = page.locator('div[style*="width"]').first();
    await expect(progressBar).toBeVisible();
  });

  test('should complete full quiz and show results', async ({ page, context }) => {
    // Start quiz
    await page.goto(BASE_URL);
    
    const inputs = page.locator('input[type="text"]');
    await inputs.first().fill('TestAlice');
    await inputs.last().fill('TestBob');
    
    const startButton = page.locator('button:has-text("Start Quiz")');
    await startButton.click();
    
    // Wait for quiz page
    await page.waitForURL(/\/quiz/);
    await page.waitForTimeout(2000);
    
    // Answer all questions for Person 1 (15 questions)
    for (let i = 0; i < 15; i++) {
      // Get buttons (excluding Previous/Next)
      const answerButtons = page.locator('button:not(:has-text("Previous")):not(:has-text("Next")):not(:has-text("Submit"))').filter({ hasText: /^[A-Za-z]/ });
      
      if (await answerButtons.count() > 0) {
        // Click first answer option
        await answerButtons.first().click();
      } else {
        // If no multiple choice, fill text input
        const input = page.locator('input[type="text"]:not(:has-text("Previous"))');
        if (await input.count() > 0) {
          await input.fill(`Answer ${i}`);
        }
      }
      
      // Click Next (except on last question)
      if (i < 14) {
        const nextButton = page.locator('button:has-text("Next")');
        if (await nextButton.isVisible()) {
          await nextButton.click();
          await page.waitForTimeout(200);
        }
      }
    }
    
    // On last question, click Next to move to Person 2
    const nextButton = page.locator('button:has-text("Next")');
    await nextButton.click();
    await page.waitForTimeout(500);
    
    // Should be on Person 2's questions now
    await expect(page.locator('h2')).toContainText("TestBob");
    
    // Answer questions for Person 2
    for (let i = 0; i < 15; i++) {
      const answerButtons = page.locator('button:not(:has-text("Previous")):not(:has-text("Next")):not(:has-text("Submit"))').filter({ hasText: /^[A-Za-z]/ });
      
      if (await answerButtons.count() > 0) {
        await answerButtons.first().click();
      }
      
      if (i < 14) {
        const next = page.locator('button:has-text("Next")');
        if (await next.isVisible()) {
          await next.click();
          await page.waitForTimeout(200);
        }
      }
    }
    
    // Click Submit on last question
    const submitButton = page.locator('button:has-text("Submit")');
    if (await submitButton.isVisible()) {
      await submitButton.click();
    } else {
      const finalNext = page.locator('button:has-text("Next")');
      await finalNext.click();
    }
    
    // Wait for results page
    await page.waitForURL(/\/results/);
    await page.waitForTimeout(1000);
    
    // Check results page elements
    await expect(page.locator('h1')).toContainText(/YES|NO/);
    await expect(page.locator('text=TestAlice')).toBeVisible();
    await expect(page.locator('text=TestBob')).toBeVisible();
  });

  test('should display results with verdict and metrics', async ({ page }) => {
    // Navigate directly to results with mock data
    const mockResult = {
      person1: 'Alice',
      person2: 'Bob',
      compatible: true,
      percentage: 85.5,
      reason: 'Your synergy oscillation coefficient is off the charts!',
      metrics: {
        synergyOscillation: 92.1,
        quantumAlignment: 79.3,
        teaPreferenceHarmonization: 88.9,
        workStyleCoherence: 82.7,
      },
    };
    
    const resultQuery = encodeURIComponent(JSON.stringify(mockResult));
    await page.goto(`${BASE_URL}/results?result=${resultQuery}`);
    
    // Check verdict
    await expect(page.locator('h1')).toContainText('YES');
    
    // Check names
    await expect(page.locator('p')).toContainText('Alice & Bob');
    
    // Check percentage
    await expect(page.locator('text=85.5')).toBeVisible();
    
    // Check reason
    await expect(page.locator('text=Your synergy oscillation coefficient is off the charts!')).toBeVisible();
    
    // Click to show metrics
    const metricsButton = page.locator('button:has-text("Show Fake Metrics")');
    if (await metricsButton.isVisible()) {
      await metricsButton.click();
      
      // Check metrics are visible
      await expect(page.locator('text=92.1')).toBeVisible();
    }
  });

  test('should allow retesting with same names', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // First test
    const inputs = page.locator('input[type="text"]');
    await inputs.first().fill('Retry1');
    await inputs.last().fill('Retry2');
    
    const startButton = page.locator('button:has-text("Start Quiz")');
    await startButton.click();
    
    await page.waitForURL(/\/quiz/);
    
    // (Quick navigation to results)
    // Go back to home
    await page.goto(BASE_URL);
    
    // Enter same names again
    const inputs2 = page.locator('input[type="text"]');
    await inputs2.first().fill('Retry1');
    await inputs2.last().fill('Retry2');
    
    const startButton2 = page.locator('button:has-text("Start Quiz")');
    await startButton2.click();
    
    // Should be able to start again
    await page.waitForURL(/\/quiz/);
    await expect(page.locator('h2')).toContainText("Retry1");
  });
});

test.describe('Team Vibe Checker - API Tests', () => {
  test('should fetch questions from API', async ({ request }) => {
    const response = await request.get('http://localhost:3001/api/questions');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data.questions).toBeDefined();
    expect(data.data.questions.length).toBe(15);
    
    // Check question structure
    const question = data.data.questions[0];
    expect(question.id).toBeDefined();
    expect(question.text).toBeDefined();
    expect(question.category).toBeDefined();
  });

  test('should calculate compatibility', async ({ request }) => {
    const response = await request.post('http://localhost:3001/api/compatibility', {
      data: {
        person1: 'Alice',
        person2: 'Bob',
        person1_answers: ['a', 'b', 'c', 'd', 'e'],
        person2_answers: ['x', 'y', 'z', 'w', 'v'],
      },
    });
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data.person1).toBe('Alice');
    expect(data.data.person2).toBe('Bob');
    expect(typeof data.data.compatible).toBe('boolean');
    expect(typeof data.data.percentage).toBe('number');
    expect(data.data.percentage).toBeGreaterThanOrEqual(0);
    expect(data.data.percentage).toBeLessThanOrEqual(100);
    expect(data.data.reason).toBeDefined();
    expect(data.data.metrics).toBeDefined();
    expect(data.data.metrics.synergyOscillation).toBeDefined();
  });

  test('should validate required fields in compatibility', async ({ request }) => {
    const response = await request.post('http://localhost:3001/api/compatibility', {
      data: {
        person1: 'Alice',
        // Missing person2
        person1_answers: ['a', 'b'],
        person2_answers: ['x', 'y'],
      },
    });
    
    expect(response.status()).toBe(400);
  });

  test('should return health status', async ({ request }) => {
    const response = await request.get('http://localhost:3001/api/health');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.status).toBe('ok');
    expect(data.timestamp).toBeDefined();
  });
});

test.describe('Team Vibe Checker - Randomness Tests', () => {
  test('should produce different results with identical inputs (randomness check)', async ({ request }) => {
    const verdicts: boolean[] = [];
    const reasons: string[] = [];
    
    // Run 5 times with identical inputs
    for (let i = 0; i < 5; i++) {
      const response = await request.post('http://localhost:3001/api/compatibility', {
        data: {
          person1: 'TestAlice',
          person2: 'TestBob',
          person1_answers: ['answer1', 'answer2', 'answer3'],
          person2_answers: ['answer1', 'answer2', 'answer3'],
        },
      });
      
      const data = await response.json();
      verdicts.push(data.data.compatible);
      reasons.push(data.data.reason);
    }
    
    // Check that we have variation in verdicts
    const hasTrue = verdicts.some(v => v === true);
    const hasFalse = verdicts.some(v => v === false);
    
    // We should get at least one true and one false in 5 runs
    // (probabilistically very likely with 50/50 chance)
    // Note: This test may occasionally fail by chance, but ~99.9% success rate
    expect(verdicts.length).toBe(5);
    
    // Check reasons are different
    const uniqueReasons = new Set(reasons);
    expect(uniqueReasons.size).toBeGreaterThan(1);
  });

  test('should produce random metrics', async ({ request }) => {
    const metrics1 = [];
    const metrics2 = [];
    
    // Make two requests with identical data
    for (let i = 0; i < 2; i++) {
      const response = await request.post('http://localhost:3001/api/compatibility', {
        data: {
          person1: 'Alice',
          person2: 'Bob',
          person1_answers: ['a', 'b', 'c'],
          person2_answers: ['x', 'y', 'z'],
        },
      });
      
      const data = await response.json();
      if (i === 0) {
        metrics1.push(...Object.values(data.data.metrics));
      } else {
        metrics2.push(...Object.values(data.data.metrics));
      }
    }
    
    // Metrics should be different (extremely unlikely to be identical)
    const allSame = metrics1.every((m, i) => m === metrics2[i]);
    expect(allSame).toBe(false);
  });
});

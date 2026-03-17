# Contributing to Team Vibe Checker

Thank you for your interest in contributing! This guide will help you get started.

## 🎯 What We Need

We're especially interested in:

- **New Questions** - Add more silly questions to the database
- **New Reasons** - Create more hilarious YES/NO reasons
- **UI Improvements** - Make the interface even more fun
- **Animations** - Add confetti, transitions, visual effects
- **Localizations** - Translate questions and reasons to other languages
- **Bug Fixes** - Fix any issues you find
- **Tests** - Add more E2E and unit tests
- **Documentation** - Improve docs and examples

## 🚀 Getting Started

### 1. Fork & Clone

```bash
# Fork on GitHub, then:
git clone https://github.com/your-username/team-vibe-checker.git
cd team-vibe-checker
npm install-all
npm run dev
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive names:
- `feature/add-more-questions`
- `fix/cors-error`
- `improve/ui-animations`

### 3. Make Your Changes

Follow the existing code style:

**Backend (TypeScript):**
- Use strict mode
- Add types for all functions
- Keep functions small and focused
- Add comments for complex logic

**Frontend (React):**
- Use functional components
- Use hooks (useState, useEffect)
- Keep components small
- Use Tailwind for styling

### 4. Test Your Changes

```bash
# Type check
npm run backend:type-check
npm run frontend:type-check

# Build
npm run build

# Run E2E tests
npm run e2e

# Test manually
npm run dev
```

### 5. Commit & Push

```bash
# Make meaningful commits
git add .
git commit -m "feature: Add 10 new questions"
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

On GitHub:
1. Create PR from your fork to main
2. Describe what you changed
3. Reference any issues
4. Wait for review

## 📋 Guidelines

### Code Style

- **2-space indentation** (not tabs)
- **Trailing commas** in objects/arrays
- **Semicolons** at end of statements
- **Double quotes** for strings
- **camelCase** for variables/functions
- **PascalCase** for components/classes

### Commit Messages

Be descriptive:
- ✅ `feat: Add 5 new personality questions`
- ✅ `fix: CORS error on localhost`
- ✅ `docs: Update setup instructions`
- ❌ `update`
- ❌ `fix bug`
- ❌ `changes`

Use prefixes:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Adding tests

### File Naming

- Components: `PascalCase.tsx` (e.g., `QuestionCard.tsx`)
- Utils: `camelCase.ts` (e.g., `questionsService.ts`)
- Files: lowercase with hyphens (e.g., `ci.yml`)

## 🎨 Adding Questions

**Location:** `backend/src/data.ts`

**Format:**
```typescript
{
  id: 'q51',
  text: 'Your question here?',
  category: 'personality', // or work_style, life_choices, quirks, weird_stuff
  options: ['Option A', 'Option B', 'Option C'], // optional
}
```

**Categories:**
- `personality` - Personal traits
- `work_style` - Work preferences
- `life_choices` - Life decisions
- `quirks` - Silly habits
- `weird_stuff` - Absurd hypotheticals
- `work_environment` - Office preferences

**Examples that work:**
- "If you were a vegetable, which would you be?"
- "Do you alphabetize your spices?"
- "Meetings: camera on or off?"
- "Would you rather fight a horse-sized duck or 100 duck-sized horses?"

## 💬 Adding Reasons

**Location:** `backend/src/data.ts`

**Format:**
```typescript
YES_REASONS.push(
  'Your synergy oscillation coefficient is extraordinary!',
);

NO_REASONS.push(
  'Fundamental incompatibility in preference-matching detected.',
);
```

**Tips:**
- Use scientific-sounding jargon
- Be self-aware about the absurdity
- Reference questions or answers
- Keep to 1 sentence
- Make it funny!

## 🧪 Adding Tests

**Location:** `tests/e2e/flow.spec.ts`

**Example:**
```typescript
test('should validate new feature', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Your test here
  await expect(page.locator('h1')).toContainText('Expected Text');
});
```

## 🎨 Improving UI

Tailwind classes we use:
- Colors: `bg-purple-500`, `text-cyan-600`
- Layout: `flex`, `grid`, `gap-4`
- Spacing: `p-4`, `m-2`, `py-6`
- Effects: `hover:shadow-lg`, `transition`
- Responsive: `md:`, `lg:` prefixes

See [tailwind.config.js](frontend/tailwind.config.js) for tokens.

## 📖 Updating Docs

Docs files:
- `README.md` - Main project readme
- `GITHUB_README.md` - GitHub-specific readme
- `SETUP_AND_TESTING.md` - Setup guide
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `docs/PRD.md` - Product requirements
- `docs/ARCHITECTURE.md` - Technical architecture

Keep them:
- ✅ Up to date
- ✅ Clear and concise
- ✅ With examples
- ✅ Well organized

## 🔍 Code Review Checklist

Before submitting a PR, check:

- [ ] Code compiles (`npm run build`)
- [ ] No TypeScript errors (`npm run *:type-check`)
- [ ] Tests pass (`npm run e2e`)
- [ ] No console errors
- [ ] Follows code style
- [ ] Good commit messages
- [ ] Documentation updated

## 🤝 Community

- **Be respectful** - Everyone belongs here
- **Be helpful** - Help others learn
- **Be clear** - Explain your changes
- **Be open** - Accept feedback gracefully
- **Be curious** - Ask questions

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Playwright Testing](https://playwright.dev)

## 🚫 Things Not to Do

- ❌ No adding secrets/API keys in code
- ❌ No importing modules without adding to package.json
- ❌ No console.log spam (remove before committing)
- ❌ No breaking existing tests
- ❌ No hardcoding values
- ❌ No PRs without description

## ❓ Questions?

- Open an issue on GitHub
- Check existing documentation
- Ask in PR comments
- Start a discussion

## 🎉 Thank You!

Your contributions make Team Vibe Checker better. We appreciate you! 

---

**Happy Contributing!** 🚀

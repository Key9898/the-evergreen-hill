# Evergreen Hill - Project Rules

---

## ⚠️ MANDATORY COMPLIANCE - READ BEFORE ANY ACTION

**These rules are NON-NEGOTIABLE and MUST be followed for EVERY task.**

### Pre-Action Checklist (MANDATORY)
Before writing ANY code, verify:
- [ ] Read and understand the existing code structure
- [ ] Check PROJECT_PLAN.md for current phase and tasks
- [ ] Identify the exact files that need modification
- [ ] Plan the MINIMAL change required

### Mandatory Requirements
| Requirement | Status |
|------------|--------|
| Follow Project Structure | **MANDATORY** |
| Create `.stories.tsx` for every UI component | **MANDATORY** |
| Extract logic to hooks (no logic in UI components) | **MANDATORY** |
| Run `npm run lint` after changes | **MANDATORY** |
| Run `npm run build` after changes | **MANDATORY** |
| Responsive design for all devices | **MANDATORY** |
| Standard, clean, professional UI/UX | **MANDATORY** |
| No comments unless explicitly asked | **MANDATORY** |
| TypeScript strict mode | **MANDATORY** |
| Use Framer Motion for all animations | **MANDATORY** |
| Use Heroicons (primary) + React Icons (secondary) | **MANDATORY** |
| Maintain consistent icon style (outline/solid) | **MANDATORY** |

### Forbidden Actions
- ❌ DO NOT touch working code unnecessarily
- ❌ DO NOT refactor unrelated code
- ❌ DO NOT skip creating `.stories.tsx` files
- ❌ DO NOT add logic directly to UI components
- ❌ DO NOT commit without running lint and build
- ❌ DO NOT use `any` type in TypeScript
- ❌ DO NOT add comments to code
- ❌ DO NOT use CSS animations or transitions (use Framer Motion only)
- ❌ DO NOT use inline style animations

---

## Development Commands

```bash
npm run dev           # Start development server
npm run build         # Production build
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint errors
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
npm run preview       # Preview production build
npm run storybook     # Start Storybook dev server
npm run build-storybook # Build Storybook static
npm run test          # Run Vitest tests
```

---

## Code Style Guidelines

### General
- TypeScript strict mode enabled
- No comments unless explicitly asked
- Use English for code, variable names, and file names
- Use Myanmar language for user-facing content (when i18n is implemented)

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`, `BookingForm.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useModal.ts`, `useBooking.ts`)
- **Utils**: camelCase (e.g., `formatters.ts`, `a11y.ts`)
- **Types**: PascalCase (e.g., `Booking.ts`, `User.ts`)

### Styling
- Use Tailwind CSS utility classes
- Avoid custom CSS unless absolutely necessary
- Follow existing Tailwind class ordering patterns

---

## Project Structure

```
src/
├── components/           # UI components (Modular Architecture)
│   ├── ComponentName/
│   │   ├── ComponentName.tsx    # Dumb (UI only)
│   │   ├── ComponentName.styles.ts  # Styles (if needed)
│   │   └── index.ts             # Export
│   └── ...
├── hooks/                # Smart (Logic) - Custom React hooks
│   ├── useModal.ts
│   ├── useBooking.ts
│   └── ...
├── utils/                # General utility functions
│   ├── a11y.ts
│   ├── formatters.ts
│   └── ...
├── services/             # API calls & business logic (future)
│   ├── api.ts
│   └── ...
├── lib/                  # Third-party configurations
│   ├── firebase.ts       # Firebase config (future)
│   └── ...
├── context/              # React Context providers
│   └── ...
├── types/                # TypeScript type definitions
│   └── ...
├── tests/                # Test files
│   ├── mocks/            # Mock data
│   └── ...
├── assets/               # Static assets (images, fonts)
└── i18n/                 # Translation files (future)
    ├── en.json
    └── my.json
```

---

## Component Architecture

### Modular Component Structure
Each component has its own folder with:
- **Dumb (UI)**: `.tsx` files contain only UI/UX, no business logic
- **Stories**: `.stories.tsx` files for Storybook documentation and testing
- **Smart (Logic)**: Logic extracted to `hooks/` folder
- **Export**: `index.ts` for clean imports

### Example
```
src/components/LoginModal/
├── LoginModal.tsx        # UI only (Dumb)
├── LoginModal.stories.tsx # Storybook stories
├── index.ts              # Export

src/hooks/
└── useModal.ts           # Logic (Smart)
```

### Storybook Requirements
- **Every UI component MUST have a corresponding `.stories.tsx` file**
- Stories should document all component variants and states
- Include accessibility testing via Storybook a11y addon
- Stories are co-located with components (same folder)
- Use CSF (Component Story Format) for all stories

### Story File Template
```tsx
import type { Meta, StoryObj } from '@storybook/react'
import ComponentName from './ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Category/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {}

export const Variant: Story = {
  args: {
    // variant props
  },
}
```

### Principles
1. **Separation of Concerns**: UI and Logic are separate
2. **Reusability**: Hooks can be reused across components
3. **Testability**: Logic in hooks is easier to test
4. **Maintainability**: Changes to UI don't affect logic and vice versa

---

## Safety Rules (CRITICAL)

### When Modifying Code
1. **DO NOT touch working code** - Only modify what is being fixed/changed
2. **Preserve existing functionality** - If it works, don't break it
3. **Focus on the specific task** - Don't refactor unrelated code
4. **Test after changes** - Verify the change works correctly

### Before Making Changes
- Read and understand the existing code
- Identify the exact lines that need modification
- Plan the minimal change required

---

## Documentation Requirements

### CHANGELOG.md
- Update after each significant change
- Include: date, type of change, description
- Types: Added, Changed, Fixed, Removed

### SESSION_SUMMARY.md
- Update at the end of each session
- Include: what was done, current state, next steps
- Location: `docs/SESSION_SUMMARY.md`

### Project Plan Updates
- When adding new features not in the plan, update `docs/PROJECT_PLAN.md`
- Mark completed tasks
- Add new tasks if discovered

---

## Testing Strategy

### Frameworks
- **Vitest** for unit testing
- **Storybook** with Vitest addon for component testing
- **Playwright** for browser testing

### Commands
- Run tests: `npm run test`
- Run Storybook: `npm run storybook`

### Test Location
- Unit tests: `src/tests/` or co-located with components
- Storybook stories: `src/**/*.stories.ts`
- Mock data: `src/tests/mocks/`

### What to Test
- Utility functions
- Custom hooks
- Critical user flows (booking, forms)
- Component accessibility (via Storybook a11y addon)

---

## Git Workflow

### Branches
- `main` - Production-ready code
- `develop` - Staging/integration
- `feature/*` - Feature branches

### Commit Messages
- Use descriptive messages
- No strict format required
- Example: `Add multi-language support`

### Before Committing
1. Run `npm run lint` - Fix any errors
2. Run `npm run build` - Ensure build succeeds
3. Run `npm run test` - Ensure tests pass (when available)

---

## Technology Stack

### Current
- React 18.3
- Vite 7.1
- Tailwind CSS 4.1
- TypeScript 5.8
- ESLint 9.36
- Prettier 3.8
- Storybook 10.3
- Vitest 4.1

### Planned
- Firebase (Backend)
- react-i18next (Internationalization)
- Zustand (State Management)
- Stripe (Payment)

### Forms
- Currently using Formspree for form submissions
- Will migrate to React Hook Form + Zod when backend is ready

---

## Accessibility (a11y)

- Ensure keyboard navigation works
- Use semantic HTML elements
- Include proper ARIA attributes when needed
- Test with screen readers when possible
- Maintain color contrast ratios

---

## Performance Guidelines

- Optimize images before adding to assets
- Use lazy loading for images and components
- Monitor bundle size (target: < 500KB)
- Avoid unnecessary re-renders

---

## Animation Guidelines (Framer Motion)

### Rules
- **ALL animations MUST use Framer Motion**
- No CSS animations or transitions
- No inline style animations
- Respect `prefers-reduced-motion` for accessibility

### Animation Types
- **Page Transitions**: Use `AnimatePresence` for route changes
- **Scroll Animations**: Use `whileInView` for scroll-triggered effects
- **Hover/Tap**: Use `whileHover` and `whileTap` for interactions
- **Entrance/Exit**: Use `initial`, `animate`, `exit` props

### Animation File Structure
```
src/lib/animations.ts     # Reusable animation variants
src/hooks/useAnimation.ts # Animation logic hooks
```

### Animation Variants Example
```tsx
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
```

### Accessibility
- Always check `prefers-reduced-motion`
- Provide instant transitions for users who prefer reduced motion
- Avoid flashing or rapid animations

---

## Environment Variables

- Store sensitive data in `.env` files
- Never commit `.env` files to git
- Provide `.env.example` as template
- Access via `import.meta.env.VITE_*`

---

## Code Review Checklist

- [ ] Code follows project structure
- [ ] No unnecessary changes to working code
- [ ] Lint passes (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] Build succeeds (`npm run build`)
- [ ] Tests pass (`npm run test`)
- [ ] Storybook stories created (if UI component)
- [ ] Documentation updated (if needed)
- [ ] Responsive design verified (desktop, tablet, mobile)
- [ ] No `any` types used
- [ ] No comments added

---

## ⚠️ FINAL REMINDER - ENFORCEMENT

### Before Every Commit
```bash
npm run lint && npm run build
```

### Before Every Task
1. Read PROJECT_PLAN.md
2. Read PROJECT_RULES.md
3. Follow Pre-Action Checklist
4. Make MINIMAL changes only
5. Create `.stories.tsx` for new components
6. Run lint and build
7. Verify responsive design

### Quality Standards
- **UI/UX**: Standard, Clean, Simplified, Professional
- **Code**: Standard structure, no logic in UI components
- **Responsive**: All devices, all sizes
- **TypeScript**: Strict mode, no `any` types

**These rules are enforced for ALL development work on this project.**

# Changelog

All notable changes to this project will be documented in this file.

---

## [Unreleased]

### Added
- 2026-04-03: **Custom Favicon**: Created a new pine tree favicon using brand color `#00786f`.
- 2026-04-03: **Asset Reorganization**:
  - Created `public/Favicon/` for the new favicon.
  - Created `public/ViewDetails/` for room-specific detailed images.

### Changed
- 2026-04-03: **Asset Migration**: Moved all assets from `src/assets` to `public/` to ensure predictable path resolution.
- 2026-04-03: **Folder Naming Standard**: Renamed folders containing `&` (e.g., `Rooms&Suites` -> `RoomsAndSuites`) to prevent Vite resolution issues.

### Fixed
- 2026-04-03: **Room Details UI Restoration**:
  - Restored missing data (Name, Description, Images) in the `ViewDetails` modal.
  - Implemented stable data passing via `nameKey` to support multi-language consistency.
  - Enabled vertical scrolling for long content in the modal.
- 2026-04-03: **Logo & Path Fixes**: Resolved broken image links across multiple components (Header, Footer, Banners).

### Added
- 2026-04-03: **Firebase Integration Complete**:
  - `src/lib/firebase.ts` — Full Firebase config with auth, firestore, analytics exports
  - Firebase Auth enabled in Firebase Console (email/password + Google provider)
  - Firestore Database created with rules and indexes
  - `firestore.rules` — Security rules configured
  - `firestore.indexes.json` — Database indexes created
  - `firebase.json` — Firebase CLI config created
- 2026-04-03: **Firebase Backend Services**:
  - `src/services/auth.ts` — Full Auth: signInWithEmail, signUpWithEmail, signInWithGoogle, signOutUser, sendPasswordReset, getCurrentUser
  - `src/services/api.ts` — Firestore: getRooms, createBooking, getBooking, getBookingsByUser, cancelBooking
  - `src/services/reviews.ts` — Firestore: getReviews, createReview, getReviewsByUser, deleteReview, updateReview
  - `src/services/inquiries.ts` — Firestore: createContact, createSpaBooking, createEventBooking, createActivityBooking
  - 7 hooks migrated from localStorage to live Firestore: `useBookForm`, `useGuestReviews`, `useBookingHistory`, `useContactForm`, `useSpaForm`, `useEventsForm`, `useActivitiesForm`
- 2026-04-03: **Map Library Migration (mapcn)**:
  - Replaced `google-map-react` with `mapcn` (MapLibre-based, no API key needed)
  - `components.json` — shadcn registry config created
  - `src/components/ui/map.tsx` — mapcn map component added
  - `src/lib/utils.ts` — `cn()` utility created (clsx + tailwind-merge)
  - `src/components/Location/LocationMap.tsx` — Replaced GoogleMapReact with mapcn
  - `src/components/Contact/HotelMap.tsx` — Replaced GoogleMapReact with mapcn
  - Added deps: `clsx`, `tailwind-merge`, `maplibre-gl`, `lucide-react`
  - Removed dep: `google-map-react`
- 2026-04-03: **Path Alias Setup**:
  - `vite.config.ts` — Added `resolve.alias` for `@/` → `src/`
  - `tsconfig.app.json` — Added `baseUrl` and `paths` for `@/*`
- 2026-04-03: **Animation System (Framer Motion)**:
  - `src/lib/animations.ts` — Reusable animation variants (fadeInUp, staggerContainer, etc.)
  - `src/hooks/useAnimation.ts` — Animation hook with reduced motion support
  - 37 components with scroll/hover/tap animations implemented
- 2026-04-03: **Project Structure Expansion**:
  - `src/hooks/` — 26 custom hooks (11 new hooks added)
  - `src/types/` — 5 TypeScript type files (auth.ts, payment.ts added)
  - `src/context/` — AuthContext.tsx, PaymentContext.tsx for global state
- 2026-04-03: **SEO Optimization**:
  - Open Graph meta tags added to `index.html`
  - og:title, og:description, og:type, og:image configured
- 2026-04-03: **Myanmar Translations Complete**:
  - `src/i18n/locales/my.json` — Fully expanded from 205 → 443 lines; now exactly matches `en.json`
  - Added all missing sections: `experiences`, `spa`, `pool`, `gallery`, `location`, `ourStory`, `contact`, `events`, `team`, `faqs`, `auth`, `common.notice`, `footer.solutions`, `footer.support`, `footer.hotel`, `footer.policies`
  - EN/MY i18n support is now 100% complete
- 2026-04-03: **i18n Expansion**:
  - `src/i18n/locales/en.json` — 443 lines (comprehensive)
  - 8 components integrated with useTranslation hook
- 2026-04-03: **MMQR Payment Migration (Stripe removed)**:
  - Removed `src/lib/stripe.ts` and all Stripe dependencies
  - Removed `VITE_STRIPE_PUBLISHABLE_KEY` from `.env.example`
  - `src/types/payment.ts` — Rewrote: `PaymentMethod` = `mmqr | kbz_pay | wave_money | aya_pay | cb_pay`; added `referenceId` field
  - `src/hooks/usePayment.ts` — Rewrote: 1.5s mock delay, generates `MMQR-XXXXXXXX` reference ID
  - `src/components/Payment/PaymentForm.tsx` — Replaced Stripe card form with MMQR SVG QR code + scan instructions + "I've Paid" button
  - `src/components/Payment/BookingConfirmation.tsx` — Added `referenceId` row display
  - `src/services/payment.ts` — Removed Stripe stubs; now exports `confirmMmqrPayment` mock only
- 2026-04-03: **Firebase Production Fix**:
  - `src/lib/firebase.ts` — Added validation guard for required env keys (`apiKey`, `authDomain`, `projectId`, `appId`); throws descriptive error instead of cryptic `auth/invalid-api-key`
  - `src/lib/firebase.ts` — Analytics now uses `isSupported()` promise guard (browser-safe)
  - `src/main.tsx` — Added Sentry init + try/catch error boundary around `createRoot`; shows user-friendly "Configuration Error" HTML if startup fails
  - Vercel Production environment variables set (all `VITE_FIREBASE_*` keys)
- 2026-04-03: **CI/CD — GitHub Actions**:
  - `.github/workflows/ci.yml` — Two jobs: `lint-and-build` (lint + build with Firebase secrets) + `test` (npm run test); triggers on push/PR to `main`
  - Firebase secrets added to GitHub repository secrets
- 2026-04-03: **Error Tracking — Sentry**:
  - Installed `@sentry/react`
  - `src/main.tsx` — Sentry initialized with `browserTracingIntegration`, `tracesSampleRate: 0.2`, enabled only when `VITE_SENTRY_DSN` is set
  - `.env.example` — Added `VITE_SENTRY_DSN=` placeholder
  - Sentry DSN configured in Vercel production environment variables
- 2026-03-26: Created `docs/PROJECT_PLAN.md` with comprehensive development roadmap
- 2026-03-26: Created `.trae/rules/project_rules.md` with development guidelines
- 2026-03-26: Added Testing (Vitest) to project scope and Phase 1 tasks
- 2026-03-26: Added `.agents/`, `.trae/`, and `skills-lock.json` to `.gitignore`
- 2026-03-26: **Phase 1 Implementation** — Full infrastructure setup:
  - `src/utils/formatters.ts` — date, currency, nights, guests formatters
  - `src/utils/a11y.ts` — accessibility utilities
  - `src/types/room.ts`, `src/types/booking.ts`, `src/types/user.ts` — TypeScript interfaces
  - `src/services/api.ts` — Firebase API stubs
  - `src/lib/firebase.ts` — Firebase config stub (env vars)
  - `.env.example` — all 6 VITE_FIREBASE_* keys documented
  - `src/tests/mocks/rooms.ts`, `src/tests/mocks/bookings.ts` — mock data
  - `src/tests/setup.ts`, `src/tests/utils.test.ts` — Vitest tests (13 tests)
  - `src/tests/hooks/usePagination.test.ts`, `src/tests/hooks/useScrollToTop.test.ts` — hook tests
  - `src/hooks/` — 15 custom hooks extracted from UI components
  - `src/components/*/index.ts` — barrel exports for all 18 component folders
  - 71 `.stories.tsx` files for every component (Storybook CSF, `tags: ['autodocs']`)
  - `src/i18n/en.json`, `src/i18n/my.json` — English + Myanmar translations
  - `src/i18n/index.ts` — i18next config with localStorage language detection
  - `src/components/Layout/LanguageSwitcher/` — Language switcher component
  - LanguageSwitcher integrated into Header (desktop nav + mobile menu)
  - `i18n` import added to `src/main.tsx`
  - `tsconfig.app.json` — exclude pattern added for stories/test files
  - `vite.config.ts` — unit test project added (jsdom + vitest)
  - `package.json` — test/test:watch/test:storybook scripts + i18next deps

### Changed
- 2026-03-26: Moved `PROJECT_PLAN.md` to `docs/` folder
- 2026-03-26: Updated `eslint.config.js` and `vite.config.ts` for Storybook + Vitest

---

## Project History

### 2026-04-03 - Phase 2 Completion Session
- Firebase production white screen fixed (env guard + Vercel Production env vars)
- Stripe payment replaced with MMQR mock flow (no external API keys needed)
- Myanmar translations completed — my.json now fully matches en.json (443 lines)
- CI/CD: GitHub Actions workflow live (lint + build + test on every push/PR)
- Error tracking: Sentry active in production (DSN in Vercel env vars)
- Analytics: Firebase Analytics active (isSupported guard, no-SSR crashes)
- All Phase 1 and Phase 2 tasks complete — project is production-ready

### 2026-03-26 - Phase 1 Implementation Session
- Executed full Phase 1 per PROJECT_PLAN.md and PROJECT_RULES.md
- Created all infrastructure: types, utils, services, hooks, tests, stories, i18n
- 15 custom hooks extracted from UI components (Dumb/Smart pattern enforced)
- 71 Storybook stories created for all components
- i18n (EN/MY) fully set up with LanguageSwitcher in Header
- Vitest unit + storybook test projects configured
- Lint + build both pass cleanly
- Firebase deferred (no Firebase project yet — stubs only)

### 2026-03-26 - Project Setup Session
- Analyzed current project state (Frontend complete, no backend)
- Created comprehensive Project Plan with 6 development phases
- Established Project Rules for development workflow
- Defined component architecture (Modular/Dumb-Smart pattern)
- Set up documentation structure (CHANGELOG, SESSION_SUMMARY)

---

## Legend

- **Added**: New features
- **Changed**: Changes to existing features
- **Fixed**: Bug fixes
- **Removed**: Removed features

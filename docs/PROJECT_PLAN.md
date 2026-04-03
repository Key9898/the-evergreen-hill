# Evergreen Hill Hotel - Project Plan

## Project Overview

**Project Name:** Evergreen Hill Hotel - Full Hotel Website  
**Target Market:** Myanmar (Primary)  
**Goal:** Production-ready hotel marketing website with multi-language support

---

## Current State

| Component | Status | Notes |
|-----------|--------|-------|
| Frontend (React + Vite + Tailwind) | ✅ Complete | All pages built |
| Multi-language (i18n) | ✅ Complete | i18next configured, EN/MY translations |
| Testing (Vitest) | ✅ Complete | 23 tests passing |
| Storybook | ✅ Complete | 80+ stories created |
| Animation (Framer Motion) | ✅ Complete | 37 components with animations |
| Firebase Config | ✅ Complete | .env configured, firebase.ts updated |
| Firebase Auth | ✅ Complete | auth.ts service + Auth Console enabled |
| Firebase Auth (Code) | ✅ Complete | signInWithEmail, signUpWithEmail, signInWithGoogle, signOut, resetPassword |
| Firestore Database | ✅ Complete | Database created |
| Firestore Rules | ✅ Complete | firestore.rules created |
| Firestore Indexes | ✅ Complete | firestore.indexes.json created |
| Firestore Services | ✅ Complete | api.ts, reviews.ts, inquiries.ts — all hooks live |
| Firebase Analytics | ✅ Complete | Analytics exported from firebase.ts |
| Custom Hooks | ✅ Complete | 26 hooks in /src/hooks/ (7 updated to Firestore) |
| TypeScript Types | ✅ Complete | 5 type files in /src/types/ |
| Context API | ✅ Complete | AuthContext, PaymentContext |
| SEO Meta Tags | ✅ Complete | Open Graph tags in index.html |
| Map Library | ✅ Complete | mapcn (MapLibre) replaces google-map-react |
| MMQR Payment | ✅ Complete | Stripe removed; MMQR mock flow (QR SVG + 1.5s delay + reference ID) |
| CI/CD | ✅ Complete | GitHub Actions — lint + build + test on every push/PR |
| Error Tracking | ✅ Complete | Sentry (@sentry/react, browserTracingIntegration, 20% sample rate) |

---

## Technology Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **TypeScript** - Type Safety

### Animation
- **Framer Motion**
  - Industry standard for React animations
  - Declarative animation API
  - Smooth page transitions
  - Scroll-triggered animations
  - Gesture support (hover, tap, drag)

### Internationalization
- **react-i18next**
  - Industry standard for React
  - JSON-based translations
  - Language detection & switching

### Maps
- **mapcn** (MapLibre-based)
  - Copy-paste style map components via shadcn registry
  - No API key required (free CARTO tiles)
  - Components: `Map`, `MapMarker`, `MarkerContent`, `MapControls`
  - Used in: `LocationMap.tsx`, `HotelMap.tsx`

### Icons
- **Heroicons** (Primary)
  - Tailwind CSS official icon library
  - Clean, minimal, professional design
  - Best for: Navigation, Forms, Actions
  - Use: Outline style for UI, Solid style for emphasis
- **React Icons** (Secondary)
  - 10,000+ icons from multiple icon sets
  - Best for: Hotel-specific amenities, facilities, services
  - Use: Lucide (`Lu`), Tabler (`Tb`), FontAwesome (`Fa`) prefixes

---

## Development Phases

### Phase 1: Foundation & Infrastructure
**Priority: HIGH | Impact: HIGH**

#### 1.1 Multi-language Setup
- [x] Install react-i18next
- [x] Create translation files structure
- [x] Implement language switcher component
- [x] Translate all existing content to Myanmar language (expanded my.json to cover room details)
- [x] Add language persistence (localStorage)
- [x] Components using useTranslation (8 components integrated)

#### 1.2 Project Structure Refactor
- [x] Create `/src/hooks/` for custom hooks (26 hooks created)
- [x] Create `/src/types/` for TypeScript types (5 type files created)
- [x] Create `/src/context/` for global state (AuthContext, PaymentContext)

#### 1.6 Firebase Backend Services
- [x] `src/services/auth.ts` — Full Firebase Auth (email/password + Google provider)
- [x] `src/services/api.ts` — Firestore: getRooms, createBooking, getBooking, getBookingsByUser, cancelBooking
- [x] `src/services/reviews.ts` — Firestore: getReviews, createReview, getReviewsByUser, deleteReview, updateReview
- [x] `src/services/inquiries.ts` — Firestore: createContact, createSpaBooking, createEventBooking, createActivityBooking
- [x] 7 hooks updated from localStorage to Firestore (useBookForm, useGuestReviews, useBookingHistory, useContactForm, useSpaForm, useEventsForm, useActivitiesForm)
- [x] `firebase.json` created for Firebase CLI
- [x] Google Auth provider enabled in Firebase Console

#### 1.7 Map Library Migration
- [x] Created `components.json` for shadcn registry
- [x] Installed mapcn via `npx shadcn@latest add @mapcn/map`
- [x] `src/components/ui/map.tsx` — MapLibre-based map component
- [x] `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- [x] `src/components/Location/LocationMap.tsx` — Replaced GoogleMapReact with mapcn
- [x] `src/components/Contact/HotelMap.tsx` — Replaced GoogleMapReact with mapcn
- [x] Uninstalled `google-map-react`; added `clsx`, `tailwind-merge`, `maplibre-gl`, `lucide-react`
- [x] `vite.config.ts` + `tsconfig.app.json` — Added `@/` path alias

#### 1.3 Animation Setup (Framer Motion)
- [x] Install framer-motion package
- [x] Create `/src/lib/animations.ts` for reusable animation variants
- [x] Create `/src/hooks/useAnimation.ts` for animation logic
- [x] Implement page transition animations
- [x] Implement scroll-triggered animations (37 components)
- [x] Add hover/tap animations for interactive elements
- [x] Ensure animations respect `prefers-reduced-motion`

#### 1.4 Testing Setup (Vitest)
- [x] Install Vitest and related dependencies
- [x] Configure Vitest for Vite project
- [x] Create test utilities and helpers
- [x] Set up mock data structure in `src/tests/mocks/`
- [x] Add test scripts to package.json
- [x] Write initial tests for utility functions

#### 1.5 Storybook Stories for All Components
- [x] Create `.stories.tsx` file for every UI component (Dumb components)
- [x] Document all component variants and states
- [x] Add accessibility tests using Storybook a11y addon
- [x] Create stories for: Layout components (Header, Footer, Breadcrumbs, ScrollToTopButton)
- [x] Create stories for: Hero components (HeroSection)
- [x] Create stories for: Rooms & Suites components (Rooms&Suites, Rooms&SuitesBanner, ViewDetails, Rooms&SuitesPagination)
- [x] Create stories for: Dining & Bar components (Dining&Bar, Dining&BarBanner, Dining&BarTabs, AllDayDining, Breakfast, Dinner, Bar&Lounge, ChefSection, Dining&BarPagination)
- [x] Create stories for: Spa & Wellness components (Spa&WellnessCenter, Spa&WellnessCenterBanner, SpaForm, SpaCTA, Spa&WellnessManager)
- [x] Create stories for: Activities components (Activities, ActivitiesBanner, ActivitiesForm, LeadConcierge)
- [x] Create stories for: Events components (Events, EventsBanner, EventsForm, EventSpaces, EventsCTA)
- [x] Create stories for: Gallery components (Gallery, GalleryBanner, GalleryTabs, GalleryPagination)
- [x] Create stories for: Location components (Location, LocationBanner, LocationMap, ExploreNearby, GettingHere)
- [x] Create stories for: Contact components (Contact, ContactBanner, ContactForm, HotelMap)
- [x] Create stories for: Our Story components (OurStory, OurStoryBanner, AmenitiesCards, OurStoryCTA)
- [x] Create stories for: Team components (Team, TeamBanner, Founders)
- [x] Create stories for: Guest Reviews components (GuestReviews, ReviewsBanner, ReviewsForm, ReviewsPagination)
- [x] Create stories for: Swimming Pool components (SwimmingPool, SwimmingPoolBanner, GeneralManager)
- [x] Create stories for: Experiences components (Experiences, ExperiencesBanner)
- [x] Create stories for: FAQs components (FAQs, FAQsBanner)
- [x] Create stories for: Legal components (PrivacyPolicy, PrivacyBanner, TermsOfService, TermsBanner)

#### 1.8 Payment Migration (Stripe → MMQR)
- [x] Removed `src/lib/stripe.ts` and `@stripe/stripe-js` dependency
- [x] Removed `VITE_STRIPE_PUBLISHABLE_KEY` from `.env.example`
- [x] Rewrote `src/types/payment.ts` — `PaymentMethod` type: `mmqr | kbz_pay | wave_money | aya_pay | cb_pay`; added `referenceId`
- [x] Rewrote `src/hooks/usePayment.ts` — 1.5s mock delay, generates `MMQR-XXXXXXXX` reference ID
- [x] Rewrote `src/components/Payment/PaymentForm.tsx` — MMQR SVG QR code + scan instructions + "I've Paid" button
- [x] Updated `src/components/Payment/BookingConfirmation.tsx` — shows `referenceId` row
- [x] Rewrote `src/services/payment.ts` — removed Stripe stubs, added `confirmMmqrPayment` mock

---

### Phase 2: Production Deployment
**Priority: HIGH | Impact: HIGH**

#### 2.1 Pre-deployment
- [x] Environment variables setup (Vercel dashboard — Production + Preview)
- [x] Error handling & logging (firebase.ts guard + main.tsx error boundary)
- [ ] ~~Performance optimization~~ (optional — not required)
- [x] SEO optimization (meta tags, Open Graph) - Added to index.html

#### 2.2 Deployment
- [x] Deploy to Vercel (live at vercel.app domain)
- [ ] ~~Configure custom domain~~ (using Vercel domain — not needed)
- [x] SSL certificate (Vercel auto-managed)
- [x] CI/CD — GitHub Actions `.github/workflows/ci.yml` (lint + build + test on every push/PR)

#### 2.3 Post-deployment
- [ ] Monitoring setup (future)
- [x] Error tracking — Sentry (`@sentry/react`, browserTracingIntegration, 20% sample rate)
- [x] Analytics — Firebase Analytics (isSupported guard, active in firebase.ts)

---

## Success Criteria

### Phase 1 Complete When:
- [x] Users can switch between English/Myanmar
- [x] All existing content translated (my.json fully matches en.json — 443 lines)
- [x] Vitest configured and initial tests passing
- [x] All Storybook stories created
- [x] Project structure refactored (hooks, types, context)
- [x] Framer Motion animations implemented

### Phase 2 Complete When:
- [x] Site live on production domain (Vercel)
- [x] Firebase env vars set in Vercel (Production environment)
- [x] CI/CD pipeline active (GitHub Actions)
- [x] Error tracking active (Sentry)
- [x] Analytics active (Firebase Analytics)
- [ ] ~~Performance optimization~~ (optional — not required)

---

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Translation quality | LOW | Use professional translator for Myanmar content |
| SEO with client-side rendering | MEDIUM | Consider SSR/SSG for production |

---

## Recommended Next Steps

1. ~~Firebase Setup~~ - ✅ Complete (auth, firestore, analytics configured)
2. ~~Firebase Backend Services~~ - ✅ Complete (auth.ts, api.ts, reviews.ts, inquiries.ts — all hooks live)
3. ~~Map Library Migration~~ - ✅ Complete (mapcn replaces google-map-react)
4. ~~Complete Myanmar Translations~~ - ✅ Complete (my.json fully matches en.json)
5. ~~Phase 2~~ - ✅ Complete (Vercel live, CI/CD, Sentry, Firebase Analytics)

---

## Notes

- No strict deadline, but prioritize speed
- Focus on Myanmar market first
- This is a **Full Hotel Website** — includes booking functionality (rooms, spa, events, activities)
- Branch strategy: `main` (production), `develop` (staging), feature branches

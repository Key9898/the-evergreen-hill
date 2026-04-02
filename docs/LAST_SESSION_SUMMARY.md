# Session Summary

## Session Date: 2026-04-03 (Firebase Backend + mapcn Migration)

---

## What Was Done

### Firebase Backend Services — Complete
- `src/lib/firebase.ts` — Full config with auth, firestore, analytics exports
- `src/services/auth.ts` — Full Firebase Auth implementation:
  - `signInWithEmail`, `signUpWithEmail`, `signInWithGoogle` (GoogleAuthProvider + popup)
  - `signOutUser`, `sendPasswordResetEmail` (aliased as `firebaseSendPasswordResetEmail`)
  - `getCurrentUser` (onAuthStateChanged Promise wrapper)
  - `mapFirebaseUser(user: User): AuthUser` mapper
- `src/services/api.ts` — Firestore CRUD:
  - `getRooms` (getDocs), `createBooking` (addDoc + serverTimestamp)
  - `getBooking` (getDoc), `getBookingsByUser` (query + orderBy)
  - `cancelBooking` (updateDoc status cancelled)
- `src/services/reviews.ts` — NEW file:
  - `getReviews`, `createReview`, `getReviewsByUser`, `deleteReview`, `updateReview`
- `src/services/inquiries.ts` — NEW file:
  - `createContact`, `createSpaBooking`, `createEventBooking`, `createActivityBooking`
  - All use `addDoc` with `serverTimestamp`
- `src/types/booking.ts` — Added `BookingWithUser extends Booking { userId: string }`
- `firebase.json` — Firebase CLI config created
- Google Auth provider enabled in Firebase Console

### Hooks Migrated to Firestore (7 hooks)
| Hook | Before | After |
|------|--------|-------|
| `useBookForm` | no submit | async `createBooking` |
| `useGuestReviews` | localStorage | `getReviews` / `createReview` |
| `useBookingHistory` | localStorage | `getBookingsByUser` + `cancelBooking` |
| `useContactForm` | no submit | async `createContact` |
| `useSpaForm` | no submit | async `createSpaBooking` |
| `useEventsForm` | no submit | async `createEventBooking` |
| `useActivitiesForm` | no submit | async `createActivityBooking` |

All hooks now expose `isSubmitting`, `isSuccess`, and `error` states.

### Animation System (Framer Motion) — Complete
- `src/lib/animations.ts` — Reusable animation variants (fadeInUp, fadeInLeft, staggerContainer, etc.)
- `src/hooks/useAnimation.ts` — Animation hook with `prefers-reduced-motion` support
- 37 components with scroll-triggered (`whileInView`), hover (`whileHover`), and tap (`whileTap`) animations

### Map Library Migration — Complete
- Replaced `google-map-react` (requires Google API key) with `mapcn` (MapLibre, no key needed)
- `components.json` — shadcn registry config created at project root
- `src/components/ui/map.tsx` — mapcn component (MapLibre-based, auto light/dark theme)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `src/index.css` — Updated with maplibre CSS + CSS variables by shadcn CLI
- `src/components/Location/LocationMap.tsx` — Now uses `Map` + `MapMarker` + `MarkerContent`
- `src/components/Contact/HotelMap.tsx` — Now uses `Map` + `MapMarker` + `MarkerContent`
- Hotel coordinates: `[96.566666, 20.633333]` (lng, lat — Kalaw, Myanmar)
- Deps added: `clsx`, `tailwind-merge`, `maplibre-gl`, `lucide-react`
- Dep removed: `google-map-react`

### Path Alias Setup
- `vite.config.ts` — Added `resolve.alias` for `@/` → `./src`
- `tsconfig.app.json` — Added `baseUrl: "."` and `paths: { "@/*": ["./src/*"] }`

### SEO Optimization
- Open Graph meta tags in `index.html` (og:title, og:description, og:type, og:image)

### i18n Progress
- `en.json` — 443 lines (comprehensive)
- `my.json` — 205 lines (needs ~240 more lines for full coverage)
- 8 components using useTranslation hook

---

## Current State

| Component | Status |
|-----------|--------|
| Frontend UI | ✅ Complete |
| Project Structure | ✅ Complete (26 hooks, 5 types, 2 contexts) |
| Storybook Stories | ✅ 80+ stories — all components covered |
| i18n (EN/MY) | ⏳ EN complete, MY needs ~240 more lines |
| Unit Tests | ✅ 23 tests passing |
| Firebase Config | ✅ Complete (firebase.ts, .env) |
| Firebase Auth | ✅ Complete (auth.ts service + Console enabled) |
| Firestore Services | ✅ Complete (api.ts, reviews.ts, inquiries.ts) |
| Firestore Rules | ✅ Complete |
| Firestore Indexes | ✅ Complete |
| Animations | ✅ 37 components with Framer Motion |
| Map Library | ✅ mapcn (MapLibre) — no API key needed |
| SEO | ✅ Open Graph tags configured |
| Lint | ✅ Passes |
| Build | ✅ Passes |
| Phase 2 | ⏳ Ready to start |

---

## Key Decisions Made

1. **Firebase Auth**: Google + email/password providers — both enabled
2. **Firestore Collections**: `bookings`, `reviews`, `contacts`, `spa-bookings`, `event-bookings`, `activity-bookings`, `rooms`, `users`
3. **Map**: mapcn (MapLibre + CARTO tiles) — no Google API key dependency
4. **Path alias**: `@/` wired in both vite.config.ts and tsconfig.app.json for shadcn compatibility
5. **cn utility**: `src/lib/utils.ts` with clsx + tailwind-merge (required by mapcn)

---

## Known Limitations

- `useBookForm` maps single `name` field to `leadGuest.firstName` with empty `lastName` and `country` — form needs a future update to collect full guest details
- `my.json` still needs ~240 lines to fully match `en.json`

---

## Remaining Tasks

1. **Myanmar Translations** — Expand my.json (~240 lines: experiences, spa, pool, gallery, location, ourStory, events, team, faqs, auth, footer nested, common.notice)
2. **Phase 2** — Production Deployment (Vercel/Netlify, custom domain, CI/CD, Sentry, GA)

---

## Important Notes for Next Session

- Firestore collections: `bookings`, `reviews`, `contacts`, `spa-bookings`, `event-bookings`, `activity-bookings`, `rooms`, `users`
- localStorage keys still in use: `eh_language` (i18n)
- `eh_bookings`, `eh_check_search`, `eh_featured_reviews` keys have been removed (now Firestore)
- Map components: import from `@/components/ui/map` — uses `[lng, lat]` coordinate order (MapLibre convention)
- Hotel coordinates: `longitude: 96.566666, latitude: 20.633333` (Kalaw, Myanmar)
- All component logic is in `src/hooks/` — UI components are dumb (display only)
- Storybook: `npm run storybook` (port 6006)
- Tests: `npm run test` (unit), `npm run test:storybook` (Storybook/Playwright)
- Build: `npm run build` — currently ~2.4MB bundle (chunk size warning expected, pre-existing)

---

## Files Created/Modified This Session

| File | Action |
|------|--------|
| `src/lib/firebase.ts` | Modified — full init (auth, db, analytics) |
| `src/services/auth.ts` | Created — full Firebase Auth |
| `src/services/api.ts` | Modified — full Firestore CRUD |
| `src/services/reviews.ts` | Created — reviews CRUD |
| `src/services/inquiries.ts` | Created — inquiry create functions |
| `src/types/booking.ts` | Modified — added BookingWithUser |
| `src/hooks/useBookForm.ts` | Modified — Firestore createBooking |
| `src/hooks/useGuestReviews.ts` | Modified — Firestore getReviews/createReview |
| `src/hooks/useBookingHistory.ts` | Modified — Firestore getBookingsByUser |
| `src/hooks/useContactForm.ts` | Modified — Firestore createContact |
| `src/hooks/useSpaForm.ts` | Modified — Firestore createSpaBooking |
| `src/hooks/useEventsForm.ts` | Modified — Firestore createEventBooking |
| `src/hooks/useActivitiesForm.ts` | Modified — Firestore createActivityBooking |
| `firebase.json` | Created |
| `firestore.rules` | Created |
| `firestore.indexes.json` | Created |
| `components.json` | Created — shadcn registry config |
| `src/components/ui/map.tsx` | Created — mapcn map component |
| `src/lib/utils.ts` | Created — cn() utility |
| `src/index.css` | Modified — maplibre CSS + CSS vars |
| `src/components/Location/LocationMap.tsx` | Modified — mapcn |
| `src/components/Contact/HotelMap.tsx` | Modified — mapcn |
| `vite.config.ts` | Modified — @/ alias + Storybook vitest |
| `tsconfig.app.json` | Modified — baseUrl + paths |
| `src/components/Contact/Contact.tsx` | Fixed — removed unused fadeInRight |
| `index.html` | Modified — Open Graph meta tags |

---

## Previous Session (2026-03-26)

See bottom of file for full 2026-03-26 session details.

### Phase 1 — Full Infrastructure Implementation

All Phase 1 tasks from `PROJECT_PLAN.md` completed per `PROJECT_RULES.md`.

- Created `src/hooks/`, `src/utils/`, `src/types/`, `src/services/`, `src/lib/`, `src/tests/`, `src/i18n/`
- 15 custom hooks extracted from UI components (Dumb/Smart pattern enforced)
- 71 Storybook stories created for all components
- i18n (EN/MY) fully set up with LanguageSwitcher in Header
- Vitest unit + storybook test projects configured
- Lint + build both pass cleanly

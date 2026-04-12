# Changelog

All notable changes to this project will be documented in this file.

---

## [Unreleased]

### Added
- 2026-04-12: **Experiences Page Enhancements**:
  - Quick Info Cards: Pool (7AM-9PM), Spa (9AM-9PM), Dining (6:30AM-11PM) hours with clickable navigation
  - Explore Nearby Link: Section linking to Location page with nearby attractions description
  - Booking CTA: Gradient section with contact info (phone/email) and action buttons
  - Price Ranges: Added to Spa ($50-$200) and Activities ($30-$150) cards
  - Created `src/components/Experiences/QuickInfoCards.tsx` — clickable hours cards with color-coded styling
  - Created `src/components/Experiences/ExploreNearbyLink.tsx` — Location page link component
  - Created `src/components/Experiences/BookingCTA.tsx` — booking call-to-action section

### Fixed
- 2026-04-12: **QuickInfoCards Icon Error**:
  - `QuickInfoCards.tsx` — `TbSwim` icon doesn't exist in react-icons/tb → Replaced with `TbBeach` (consistent with SwimmingPool.tsx)
- 2026-04-12: **Contact Page — Map Attribution Control Bug**:
  - `map.tsx` — MapLibre GL JS auto-adds `open` attribute and `maplibregl-compact-show` class on init with `compact: true` → Added `useEffect` to remove initial `open` attribute and `maplibregl-compact-show` class on map load
  - `index.css` — CSS selector only checked for `.maplibregl-compact-show` class but not `[open]` attribute → Updated selector to include `:not([open])`
  - Result: ⓘ icon shows by default; click reveals "© CARTO, © OpenStreetMap contributors" text
- 2026-04-12: **Contact Page — ContactForm Firestore Integration**:
  - `ContactForm.tsx` — Was not properly saving to Firestore → Migrated to use `createContact` from `src/services/inquiries.ts`
  - Result: Contact form submissions now save to `contacts` collection in Firestore
- 2026-04-12: **Contact Page — ContactForm Accessibility**:
  - `ContactForm.tsx` — Select element missing accessible name for screen readers → Added `aria-label` to the subject select element

### Added
- 2026-04-12: **RoomsAndSuites Page Enhancements**:
  - Room Type Filter: Filter by All/Rooms/Suites with dropdown UI
  - Price Sorting: Sort by Default/Low to High/High to Low
  - Real-time Availability Badge: Shows available room count from Firestore bookings
  - Real-time Guest Reviews Rating: Displays average rating and review count per room
  - Created `src/hooks/useFirestoreReviews.ts` — hook for real-time reviews aggregation
  - Created `src/hooks/useFirestoreBookings.ts` — hook for real-time availability computation
  - Added filter/sort translations to `en.json` and `my.json`

### Fixed
- 2026-04-12: **RoomsAndSuites Accessibility**:
  - `RoomsAndSuites.tsx` — Select element missing accessible name → Added `aria-label={t('rooms.sortByPrice')}` to price sort dropdown
- 2026-04-12: **Check Now Modal Real-time Fix**:
  - `CheckForm.tsx` — Was using localStorage for availability check → Migrated to Firestore real-time via `useFirestoreBookings` hook
  - `CheckForm.tsx` — Changed imports from `ROOM_NAMES` to `ROOM_DATA` for consistent room identification
  - `CheckForm.tsx` — Fixed TypeScript error: `room.name` doesn't exist on ROOM_DATA → Changed to `room.imageAlt`
- 2026-04-12: **RoomsAndSuites Filter/Sort Bugs**:
  - `RoomsAndSuites.tsx` — `key={currentPage}` caused no re-render on filter/sort change → Changed to `key={roomTypeFilter}-${priceSort}-${currentPage}`
  - `RoomsAndSuites.tsx` — `whileInView` with `viewport={{ once: true }}` prevented animation replay → Changed to `animate="visible"`
  - `RoomsAndSuites.tsx` — Pagination `totalPosts={rooms.length}` showed wrong count when filtering → Fixed to `totalPosts={filteredAndSortedRooms.length}`
  - `RoomsAndSuites.tsx` — Price Sort showed only Suites on first page due to pagination → Expected behavior (High-to-Low shows Suites first; Low-to-High shows Rooms first)

### Added
- 2026-04-11: **Location Page Enhancements**:
  - Real-time weather integration via Open-Meteo API (free, no API key required)
  - Created `src/hooks/useWeather.ts` — custom hook for fetching weather data
  - Weather displays: temperature, humidity, wind speed, weather condition with dynamic icons
  - Added weather refresh button with loading state
  - Open-Meteo attribution in footer
  - Updated all 8 attraction card images from `/Location/` folder
  - Responsive image grid: 1 col (mobile) → 2 cols (tablet) → 4 cols (desktop)
  - Image aspect ratio 4:3 with hover zoom effect

### Changed
- 2026-04-11: **Location Page Image Update**:
  - `ExploreNearby.tsx` — Updated all 8 attraction card images to use local files from `/Location/` folder
  - Removed obsolete `train_station_icon.png`

### Fixed
- 2026-04-11: **Events Page Bugs Fixed**:
  - `EventsForm.tsx` — Date field validation bug: `max` attribute allowed only past dates for event booking → Changed to `min` attribute to allow only future dates
  - `Events.tsx` — activePage prop bug: Set to `"gallery"` instead of `"events"` → Fixed to correct page highlighting

### Added
- 2026-04-04: **Wave-Notch Header Design Concept**:
  - Implemented 3-column grid layout (`grid-cols-3`) for `Header.tsx` and `HeroSection.tsx`.
  - Centered `Logo` for brand prominence; left-aligned `LanguageSwitcher`.
  - Right-aligned `Hamburger icon` (mobile/tablet) or `AuthButtons` (desktop).
  - Designed "Wave-Notch" background (mockup) to host centered logo with a curve.
  - Removed redundant "Book Now" button from header row.
- 2026-04-04: **Floating Button Responsive Positioning**:
  - Components: `FloatingBookButton`, `ScrollToTopButton`.
  - Adjusted mobile/tablet side-padding to **`6` (24px)** for better ergonomics.
  - Set mobile/tablet bottom spacing to **`6` (24px)**.
  - Desktop remains **`8` (32px)** for a professional look.

### Changed
- 2026-04-04: **Map Attribution Improvements**:
  - Component: `src/components/ui/map.tsx`.
  - Switched to built-in `attributionControl: { compact: true }` in MapOptions.
  - Injected CSS to hide attribution text until the user manually clicks the 'i' icon.
  - Removed manual DOM manipulation logic on lines 232-236.

- 2026-04-03: **Map UX — CARTO Voyager + Custom Pin**:
  - `LocationMap.tsx` + `HotelMap.tsx` — CARTO Voyager tiles (Google Maps-like style, free, no API key)
  - Custom SVG teardrop pin: 36×46px, teal `#00786f` fill, white circle, "H" center text
  - `MarkerPopup` — click-only (no auto-open); `offset={52}` positions popup above pin body; white bg + border
  - "Get Directions" — floating overlay button (bottom-left) + popup link → `google.com/maps/dir/?api=1&destination=lat,lng`
  - `Location.tsx` — "You can get directions on Google Maps" wired as `<a href={DIRECTIONS_URL}>`
- 2026-04-03: **Layout Folder Restructure**:
  - Created 6 subfolders: `AuthButtons/`, `BookForm/`, `Breadcrumbs/`, `FloatingBookButton/`, `Footer/`, `ScrollToTopButton/`
  - Each has `index.tsx` + `.stories.tsx`; deleted old flat files
  - `Layout/index.ts` barrel updated; `AuthButtons` export added
  - 33 consumer files bulk-updated to use `import { X } from '../Layout'` barrel imports
  - `FloatingBookButton`: mobile icon-only (no ping, no text), tablet compact, desktop full; all `rounded-md`
  - `ScrollToTopButton`: consistent `bottom-8 right-8 w-12 h-12 rounded-md` all screen sizes
- 2026-04-03: **Noto Sans Myanmar Font**:
  - `index.html` — Google Fonts link for Noto Sans Myanmar (`wght@400;500;600;700`)
  - `src/index.css` — `:lang(my)` selector with `font-family`, `line-height: 1.9`, `word-break: break-word`
  - `LanguageSwitcher.tsx` — `document.documentElement.lang` synced on mount + on every toggle
- 2026-04-03: **HeroSection i18n**:
  - `HeroSection.tsx` — `useTranslation` added; hero badge, h1 titles, description, CTA buttons use `t()` keys
  - Nav items (`Rooms & Suites`, `Experiences`, etc.) stay hardcoded English — never translate
  - `en.json` `hero.*` keys rewritten: `welcome`, `title1`, `title2`, `description`, `bookYourStay`, `viewGallery`
- 2026-04-03: **Page Persistence on Reload (URL Hash)**:
  - `App.tsx` — `getInitialPage()` reads `window.location.hash` on mount
  - `useEffect` syncs hash whenever `currentPage` changes
  - `VALID_PAGES` Set guards against invalid/injected hash values
  - Home page = clean URL (`hash = ''`); inner pages = `/#pageKey`

### Fixed
- 2026-04-03: **Map Attribution Always Showing (root cause found)**:
  - Root cause: MapLibre's `_updateCompact()` fires on `addControl` and adds `maplibregl-compact-show`; `_updateCompactMinimize` only fires on `drag` — so text stayed visible until user dragged
  - Fix 1 (partial): `attributionControl: false` + `map.addControl(new AttributionControl({ compact: true }))` — prevents resize handler expanding it, but init still shows text
  - Fix 2 (final): After `addControl`, immediately `querySelector('.maplibregl-ctrl-attrib')` and remove `maplibregl-compact-show` + `open` attribute — MapLibre's own CSS hides the text (`compact` class present, `compact-show` absent)
- 2026-04-03: **Myanmar Mistranslations (Deep Scan)**:
  - `pool.features.views.title`: "မျက်ကန်းနျ မြင်ကွင်းများ" (blindness) → "ကျယ်ပြန့်သောမြင်ကွင်းများ"
  - `rooms.roomTypes.honeymoonSuite`: "လမ်းသွယ် ဆူတ်" (byway suite) → "Honeymoon Suite"
  - `dining.barLounge`: "ဘားနှင့် လောင်းချိုးခန်း" (locker room) → "ဘားနှင့် Lounge"
  - `ourStory.hospitalityP1`: removed Japanese character "身振りများ"
  - `rooms.features.luxuryAmenities`: "贅沢なアメニティ" (Japanese) → "အဆင့်မြင့်အထောက်အပံ့များ"
  - Mixed EN/MY strings cleaned; hotel brand name standardized to "The Evergreen Hill"
- 2026-04-03: **hero.welcome text**: "The Evergreen Hill, ကလောသို့ ကြိုဆိုပါသည်" → "The Evergreen Hill, ကလောမှ ကြိုဆိုပါ၏"
- 2026-04-03: **hero.title2 meaningless phrase**: "Evergreen ငြိမ်ချမ်းဆုတ်ကပ်" → "Evergreen တည်ငြိမ်ချမ်းသာမှု"
- 2026-04-03: **hero.description phrases**: "ကိုလိုနီလက္ခဏာဆောင် ဧည့်ခန်းသည်" → "ကိုလိုနီခေတ် အဆောက်အဦးသည်"; "ပြေလျော့ကာ" → "ပြေလျှော့ကာ"
- 2026-04-03: **Inner-pages Header nav translation** (reverted): Header.tsx nav items temporarily wired to `useTranslation` causing Myanmar translation — reverted to hardcoded English names only
- 2026-04-03: **HeroSection nav translation** (fixed): leftNavigation/rightNavigation arrays had `tKey` entries causing nav to translate — switched back to hardcoded `name` strings

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

### 2026-04-03 - UI Polish + i18n Deep Fix Session
- Map redesign: CARTO Voyager tiles, custom teal SVG pin, click-only popup with Get Directions
- Map attribution bug fixed (root cause: MapLibre `_updateCompact()` + `_updateCompactMinimize` timing)
- Layout folder restructure: 6 subfolders, barrel exports, 33 consumer imports fixed
- FloatingBookButton + ScrollToTopButton: responsive redesign, `rounded-md` consistent
- Noto Sans Myanmar font: loaded via Google Fonts, `:lang(my)` CSS, LanguageSwitcher `document.documentElement.lang` sync
- Myanmar i18n deep scan: fixed critical mistranslations (blindness, locker room, Japanese chars, byway suite)
- HeroSection: wired to `useTranslation` for hero content; nav items stay English always
- Hero Myanmar translations: welcome text corrected, title2 natural phrase, description phrases fixed
- Page persistence: URL hash (#pageKey) — reload restores user's current page
- Commits: 922786d → ebc768c → effa688 → 12a5de0 → b2e059c → 77c319b → 84c3a7c → 28ec339

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

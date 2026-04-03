# Session Summary

## Session Date: 2026-04-03 (UI Polish + i18n Deep Fix)

---

## What Was Done

### 1. Map Redesign — CARTO Voyager + Custom Pin
- **Both** `LocationMap.tsx` and `HotelMap.tsx` redesigned:
  - CARTO Voyager tiles (`https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json`) — Google Maps-like appearance, free, no API key
  - Custom SVG teardrop pin: 36×46px, `fill="#00786f"` (teal), white circle, "H" center text
  - `MarkerPopup` — click-only (no auto-open); `offset={52}` places popup above pin body; `!bg-white !border-gray-200 !shadow-xl`
  - "Get Directions" — floating overlay button at `absolute bottom-3 left-3` → Google Maps `dir/?api=1&destination=lat,lng`
  - `Location.tsx` — "You can get directions on Google Maps" span → `<a href={DIRECTIONS_URL}>` link
- `src/index.css`:
  - `:root { --color-popover, --color-popover-foreground, --color-border }` CSS variables added
  - `.maplibregl-popup-content { @apply bg-transparent! shadow-none! p-0! rounded-none! }`

### 2. Map Attribution Bug — Root Cause Found & Fixed (3 iterations)

**Root cause (found by reading MapLibre source):**
- `AttributionControl._updateCompact()` fires immediately on `addControl()` and adds `maplibregl-compact-show` class + `open` attribute (making text visible)
- `_updateCompactMinimize()` only fires on the `drag` event — so text stayed fully visible until user physically dragged the map

**Fix iterations:**
1. CSS-only (did not work): `.maplibregl-ctrl-attrib:not(.maplibregl-compact-show) .maplibregl-ctrl-attrib-inner { display: none !important }` — failed because the class was always present
2. `attributionControl: false` + `map.addControl(new AttributionControl({ compact: true }))` — fixed resize handler expanding it, but init still showed text
3. **Final fix** (`map.tsx`): After `addControl`, immediately `querySelector('.maplibregl-ctrl-attrib')` and remove `maplibregl-compact-show` + `open` attribute — MapLibre's own CSS (`compact` present, `compact-show` absent) hides the text; ⓘ click still works normally

### 3. Layout Folder Restructure

Moved 6 flat files from `src/components/Layout/` into proper subfolders:

| Subfolder | Notes |
|-----------|-------|
| `AuthButtons/index.tsx` | Fixed `../../hooks/useAuth` → `../../../hooks/useAuth` |
| `BookForm/index.tsx` | No path changes needed |
| `Breadcrumbs/index.tsx` | No path changes needed |
| `Footer/index.tsx` | Fixed `../../hooks/useAnimation` → `../../../hooks/useAnimation`; `./BookForm` → `../BookForm` |
| `FloatingBookButton/index.tsx` | Redesigned (see below) |
| `ScrollToTopButton/index.tsx` | Redesigned (see below) |

- All `.stories.tsx` files: `import X from './X'` → `import X from '.'`
- `Layout/index.ts` barrel: added `export { default as AuthButtons } from './AuthButtons'`
- **33 consumer files** bulk-updated via Node.js script: `import X from '../Layout/X'` → `import { X } from '../Layout'`
- Old flat files deleted after subfolder creation

**FloatingBookButton redesign:**
- Mobile: `p-3`, icon only (`hidden md:inline` text), ping `hidden lg:block`
- Tablet: `md:px-5 md:py-3 md:gap-2 md:text-xs` with text
- Desktop: `lg:px-6 lg:py-4 lg:gap-3 lg:text-sm` full
- `rounded-md` (not `rounded-full`)

**ScrollToTopButton fix:**
- Consistent `fixed bottom-8 right-8 z-40 w-12 h-12 rounded-md` — all screen sizes (removed `sm:w-14 sm:h-14`)

### 4. Noto Sans Myanmar Font

- `index.html` — Google Fonts `<link>` for `Noto Sans Myanmar:wght@400;500;600;700`
- `src/index.css` — `:lang(my), [lang="my"] { font-family: 'Noto Sans Myanmar'...; line-height: 1.9; word-break: break-word; }`
- `LanguageSwitcher.tsx`:
  - Added `useEffect` → `document.documentElement.lang = currentLang` on mount
  - Toggle also sets `document.documentElement.lang = next`
  - Required because i18next does NOT auto-update the HTML `lang` attribute, so `:lang(my)` CSS selector never fired before this fix

### 5. Myanmar i18n Deep Scan & Fix

Complete rewrite of `src/i18n/locales/my.json`. Critical fixes:

| Key | Before (wrong) | After (correct) |
|-----|----------------|-----------------|
| `pool.features.views.title` | "မျက်ကန်းနျ မြင်ကွင်းများ" (blindness!) | "ကျယ်ပြန့်သောမြင်ကွင်းများ" |
| `rooms.roomTypes.honeymoonSuite` | "လမ်းသွယ် ဆူတ်" (byway suite!) | "Honeymoon Suite" |
| `dining.barLounge` | "ဘားနှင့် လောင်းချိုးခန်း" (locker room!) | "ဘားနှင့် Lounge" |
| `ourStory.hospitalityP1` | contained "身振りများ" (Japanese char) | removed |
| `ourStory.hospitalityP2` | "ဒြမ်ဖဲ့ချက်" (garbled) + "မျက်မြင်ကျင်းပ်" | corrected Myanmar |
| `ourStory.storyP2` | "ကလပ်ဒြားဖ ဗိသုကာ" | "ကိုလိုနီ ဗိသုကာ" |
| `rooms.features.luxuryAmenities` | "贅沢なアメニティ" (Japanese!) | "အဆင့်မြင့်အထောက်အပံ့များ" |
| Mixed EN/MY | "အခန်းအထူး features များ" | "အခန်းအထူးအင်္ဂါရပ်များ" |

- Hotel industry terms kept as-is: "Suite", "Deluxe", "Twin", "Butler", "Jacuzzi", "Lounge", "Concierge"
- Hotel brand name standardized to "The Evergreen Hill" (not transliterated)

### 6. HeroSection i18n (Home Page)

- `HeroSection.tsx` — Added `useTranslation`; replaced hardcoded strings with `t()` calls:
  - Welcome badge: `t('hero.welcome')`
  - H1 lines: `t('hero.title1')` / `t('hero.title2')`
  - Description: `t('hero.description')`
  - Buttons: `t('hero.bookYourStay')` / `t('hero.viewGallery')`
- **Nav items stay English always** — `leftNavigation` / `rightNavigation` arrays use hardcoded `name` strings, never `t()` (user requirement: home page nav = English only)
- `en.json` `hero.*` keys updated to match actual UI (old stale keys `tagline`, `bookNow`, `explore` → `title1`, `title2`, `description`, `bookYourStay`, `viewGallery`)

### 7. Hero Myanmar Translations Fixed

| Key | Before | After |
|-----|--------|-------|
| `hero.welcome` | "The Evergreen Hill, ကလောသို့ ကြိုဆိုပါသည်" | "The Evergreen Hill, ကလောမှ ကြိုဆိုပါ၏" |
| `hero.title1` | "ထာဝရ ကျည်းနည်းသော လှပမှု" | "ထာဝရ ကျက်သရေ" |
| `hero.title2` | "Evergreen ငြိမ်ချမ်းဆုတ်ကပ်" (meaningless) | "Evergreen တည်ငြိမ်ချမ်းသာမှု" |
| `hero.description` | "ကိုလိုနီလက္ခဏာဆောင် ဧည့်ခန်းသည် ရှေးဟောင်းသော" | "ကိုလိုနီခေတ် အဆောက်အဦးသည် ရှေးဟောင်း" |
| `hero.description` | "ပြေလျော့ကာ" | "ပြေလျှော့ကာ" |

### 8. Inner-Pages Header — useTranslation (added then reverted)

- Added `useTranslation` + `tKey` nav arrays to `Header.tsx` — caused nav to translate to Myanmar
- User requested revert: Header nav stays English always
- Reverted: `name` hardcoded strings restored; `useTranslation` removed from Header.tsx

### 9. Page Persistence on Reload (URL Hash)

- **Problem**: `useState('home')` always reset to home on reload
- **Fix** (`App.tsx`):
  ```ts
  const VALID_PAGES = new Set(['home', 'roomsAndSuites', 'experiences', ...])
  function getInitialPage() {
    const hash = window.location.hash.slice(1)
    return VALID_PAGES.has(hash) ? hash : 'home'
  }
  const [currentPage, setCurrentPage] = useState(getInitialPage)
  useEffect(() => {
    window.location.hash = currentPage === 'home' ? '' : currentPage
  }, [currentPage])
  ```
- Home = clean URL; inner pages = `/#pageKey`; reload restores exact page

### 10. Header Logo Overflow (tried + reverted)

- Implemented mobile/tablet logo overflow below nav bar (`absolute top-1/2 h-28/h-32`, header `pb-20/pb-24`)
- User requested revert → restored to original: `h-10 mobile / h-14 tablet / h-16 desktop` in grid flow

---

## Git Commits This Session

| Hash | Message |
|------|---------|
| 922786d | feat: map redesign, Layout restructure, Myanmar i18n deep fix |
| ebc768c | fix: force map attribution to always stay compact |
| effa688 | feat(i18n): wire translations into HeroSection — nav + hero content |
| 12a5de0 | fix: map attribution, inner-pages header i18n+logo, hero MY translations |
| b2e059c | fix: revert header nav to English, fix title2 MY, persist page on reload |
| 77c319b | fix: HeroSection nav items always stay English regardless of language |
| 84c3a7c | feat: mobile/tablet header logo overflows below nav bar |
| 28ec339 | revert: restore Header logo to original size and layout |

---

## Files Created/Modified This Session

| File | Action |
|------|--------|
| `src/components/Location/LocationMap.tsx` | Rewritten — CARTO Voyager, custom SVG pin, click popup, Get Directions |
| `src/components/Contact/HotelMap.tsx` | Rewritten — same as LocationMap |
| `src/components/Location/Location.tsx` | Modified — directions span → `<a>` link; barrel imports |
| `src/components/ui/map.tsx` | Modified — attribution fix (addControl + remove compact-show) |
| `src/index.css` | Modified — CSS vars, popup transparent, attribution CSS, Myanmar font |
| `index.html` | Modified — Noto Sans Myanmar Google Fonts link |
| `src/components/Layout/LanguageSwitcher/LanguageSwitcher.tsx` | Modified — document.documentElement.lang sync |
| `src/i18n/locales/my.json` | Rewritten — all mistranslations fixed, luxuryAmenities Japanese fixed |
| `src/i18n/locales/en.json` | Modified — hero.* keys rewritten to match actual UI |
| `src/components/Hero/HeroSection.tsx` | Modified — useTranslation for hero content; nav stays English |
| `src/App.tsx` | Modified — URL hash page persistence |
| `src/components/Layout/AuthButtons/index.tsx` | Created (moved from flat file) |
| `src/components/Layout/BookForm/index.tsx` | Created (moved from flat file) |
| `src/components/Layout/Breadcrumbs/index.tsx` | Created (moved from flat file) |
| `src/components/Layout/FloatingBookButton/index.tsx` | Created (moved + redesigned) |
| `src/components/Layout/Footer/index.tsx` | Created (moved from flat file) |
| `src/components/Layout/ScrollToTopButton/index.tsx` | Created (moved + fixed sizing) |
| `src/components/Layout/AuthButtons.tsx` | Deleted (moved to subfolder) |
| `src/components/Layout/BookForm.tsx` | Deleted (moved to subfolder) |
| `src/components/Layout/Breadcrumbs.tsx` | Deleted (moved to subfolder) |
| `src/components/Layout/FloatingBookButton.tsx` | Deleted (moved to subfolder) |
| `src/components/Layout/Footer.tsx` | Deleted (moved to subfolder) |
| `src/components/Layout/ScrollToTopButton.tsx` | Deleted (moved to subfolder) |
| `src/components/Layout/index.ts` | Modified — AuthButtons export added |
| 33 × consumer `.tsx` files | Modified — barrel import paths fixed |
| `src/components/Layout/Header/Header.tsx` | Modified — logo revert; nav English only |
| `docs/PROJECT_PLAN.md` | Updated — sections 1.9–1.12 added |
| `docs/CHANGELOG.md` | Updated — all session entries added |

---

## Current State

| Component | Status | Notes |
|-----------|--------|-------|
| Frontend UI | ✅ Complete | All pages built |
| Multi-language (i18n) | ✅ Complete | EN/MY; Myanmar font; mistranslations fixed |
| Hero i18n | ✅ Complete | Content translates; nav stays English |
| Map UX | ✅ Complete | CARTO Voyager, custom pin, click popup, Get Directions |
| Map Attribution | ✅ Complete | Compact-only — text hidden until ⓘ clicked |
| Layout Folder | ✅ Complete | 6 subfolders, barrel exports, 33 files fixed |
| FloatingBookButton | ✅ Complete | Responsive: mobile icon-only, tablet compact, desktop full |
| ScrollToTopButton | ✅ Complete | Consistent rounded-md, fixed sizing all screens |
| Page Persistence | ✅ Complete | URL hash — reload restores current page |
| Firebase Auth | ✅ Complete | email/password + Google provider |
| Firestore Services | ✅ Complete | api.ts, reviews.ts, inquiries.ts |
| MMQR Payment | ✅ Complete | QR mock flow, Stripe fully removed |
| CI/CD | ✅ Complete | GitHub Actions — lint + build + test |
| Error Tracking | ✅ Complete | Sentry active in production |
| Deployment | ✅ Complete | Live on Vercel |
| Build | ✅ Passes | ~2.54MB (chunk warning pre-existing) |

---

## Key Technical Notes for Next Session

- **Map coordinates**: `longitude: 96.566666, latitude: 20.633333` (Kalaw, Myanmar)
- **Map attribution**: Fixed in `map.tsx` — `attributionControl: false` + `addControl(new AttributionControl({compact:true}))` + immediately remove `.maplibregl-compact-show` + `open` attribute
- **Myanmar font activation**: Requires `document.documentElement.lang = 'my'` — handled by `LanguageSwitcher.tsx`
- **Home page nav**: Always English — `HeroSection.tsx` uses hardcoded `name` strings, NOT `t()`
- **Inner-pages Header nav**: Also always English — `Header.tsx` uses hardcoded `name` strings
- **Page routing**: `App.tsx` state machine with URL hash sync — no React Router
- **Layout imports**: Use barrel `import { Footer, ScrollToTopButton } from '../Layout'` — never direct path
- **Build**: `npm run build` — clean, no TS errors
- **Hotel brand name**: Always "The Evergreen Hill" in English (never transliterated in MY)

---

## Previous Session (2026-04-03 — Phase 2 Completion)

- Firebase production white screen fixed (env guard + Vercel Production env vars)
- Stripe payment replaced with MMQR mock flow
- Myanmar translations completed — my.json fully matches en.json (443 lines)
- CI/CD: GitHub Actions workflow live
- Error tracking: Sentry active in production
- Analytics: Firebase Analytics active
- All Phase 1 and Phase 2 tasks complete — project production-ready

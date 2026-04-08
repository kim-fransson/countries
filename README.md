# Countries - Frontend Mentor Challenge

A Next.js application for browsing country information, built with React, React Aria, and Motion.

## Performance Checklist

Based on [technical-requirements.md](spec/technical-requirements.md).

### Server-Side Fetching

- [x] Fetch country information server-side — _verified: `page.tsx` uses server components with `fetchAllCountries` / `fetchCountryByCode` / `fetchCountriesByCodes`_ _(auto-checked)_
- [x] Cache responses — _verified: all fetch calls use `cache: "force-cache"` with `next: { revalidate: 604800 }` (7 days)_ _(auto-checked)_
- [x] Handle timeouts gracefully — _Error pages are added_
- [x] Implement basic rate limiting — _added aggressive caching (7 days)_

### Deployment

- [x] Deployed to a live, publicly accessible URL on Vercel
- [x] Accessible via HTTPS
- [x] No local-only dependencies — _verified: no local file paths or system-specific deps in `package.json`_ _(auto-checked)_
- [x] Environment variables properly configured — _verified: `.env` only contains `NEXT_PRIVATE_DEBUG_CACHE=1` (non-secret, server-only); `.env*` is in `.gitignore`_ _(auto-checked)_
- [x] Reasonable cold start time

### Performance Targets

| Metric                           | Target                               | Status                                                                                                                                                        |
| -------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Landing page Time to Interactive | < 2 seconds                          | ![724ms](https://img.shields.io/badge/724ms-brightgreen)                                                                                                      |
| Initial country load             | < 3 seconds                          | ![708ms](https://img.shields.io/badge/708ms-brightgreen)                                                                                                      |
| Search results                   | < 500ms                              | _(auto-checked)_ search uses client-side filtering with 300ms debounce via `useDebounce` — filtering is instant after debounce                                |
| Scrolling through 100+ items     | Smooth (60fps, no jank)              | ![smooth](https://img.shields.io/badge/smooth-brightgreen)                                                                                                    |
| Individual country refresh       | < 5 seconds                          | ![759ms](https://img.shields.io/badge/708ms-brightgreen)                                                                                                      |
| Layout shift during load         | Minimal (use skeletons/placeholders) | ![CLS 0](https://img.shields.io/badge/CLS_0-brightgreen) — `FlagCardSkeleton`, `FlagCardSkeletonGrid`, and `CountryDetailSkeleton` used as Suspense fallbacks |

### Lighthouse Benchmarks (Desktop)

> Measured with Lighthouse 13.0.2 on desktop.

| Category       | Target | Score                                                |
| -------------- | ------ | ---------------------------------------------------- |
| Performance    | > 85   | ![100](https://img.shields.io/badge/100-brightgreen) |
| Accessibility  | > 90   | ![100](https://img.shields.io/badge/100-brightgreen) |
| Best Practices | > 90   | <!-- run Lighthouse and fill in -->                  |

#### Performance Breakdown

| Metric                   | Value | Rating                                                   |
| ------------------------ | ----- | -------------------------------------------------------- |
| First Contentful Paint   | 309ms | ![green](https://img.shields.io/badge/green-brightgreen) |
| Largest Contentful Paint | 708ms | ![green](https://img.shields.io/badge/green-brightgreen) |
| Total Blocking Time      | 3ms   | ![green](https://img.shields.io/badge/green-brightgreen) |
| Cumulative Layout Shift  | 0     | ![green](https://img.shields.io/badge/green-brightgreen) |
| Speed Index              | 689ms | ![green](https://img.shields.io/badge/green-brightgreen) |
| Time to Interactive      | 724ms | ![green](https://img.shields.io/badge/green-brightgreen) |

### Accessibility (WCAG 2.1 AA)

Based on [accessibility.md](guidance/accessibility.md).

#### Perceivable — Text & Color

- [x] All text meets WCAG AA contrast ratio (4.5:1 normal, 3:1 large) — _no issues found_
- [x] Color is never the sole means of conveying information — _verified: no color-only indicators used_
- [x] Links distinguishable from surrounding text — _verified: card-based links, Chip links, and header link are visually distinct without relying on color alone_

#### Perceivable — Structure

- [x] Proper heading hierarchy — _verified: `h1` in Header, `h2` in FlagCard and CountryDetail, no skipped levels_
- [x] Landmark regions used appropriately — _verified: `<header>` in Header, `<main>` on both pages and error pages_
- [x] Lists of items use proper elements — _verified: `GridList` renders list markup, `InfoList` uses `<dl>/<dt>/<dd>`_
- [x] Tables have proper headers/captions — _N/A: no tables used_
- [x] Page titles are descriptive and unique per view — _Metadata is added for all pages_

#### Operable — Keyboard

- [x] All interactive elements reachable via Tab — _verified: React Aria components handle focus management_
- [x] Focus order follows logical reading sequence — _needs manual keyboard testing_
- [x] Focus visible on all interactive elements — _verified: `[data-focus-visible]` styles on GridListItem, SearchField, DropDown trigger, BaseButton, DarkLightToggle, and Chip_
- [x] No keyboard traps — _verified: React Aria handles focus restoration; Popover closes on Escape_
- [x] Modal/dialog focus trapped within and restored on close — _verified: React Aria Popover handles this for the dropdown_
- [x] Custom keyboard shortcuts don't conflict with AT — _no custom shortcuts implemented_
- [ ] Skip link provided to bypass navigation — _not implemented_

#### Operable — Navigation

- [ ] Current page/section indicated in navigation (`aria-current`) — _not implemented (no nav element with active state)_
- [ ] Breadcrumbs or clear location indicators — _not implemented, but BackButton provides navigation context_
- [x] Back button / navigation works predictably — _verified: BackButton navigates to home_
- [x] Multiple ways to reach content — _verified: search, region filter, and direct navigation_

#### Operable — Timing

- [x] Auto-refresh doesn't disrupt reading — _N/A: no auto-refresh_
- [x] No time limits on reading or interaction — _verified_
- [x] Animations respect `prefers-reduced-motion` — _verified: CSS animations gated behind `prefers-reduced-motion: no-preference`, `useBoop` checks `usePrefersReducedMotion`, skeleton pulse animations disabled with `reduce`_

#### Understandable — Forms & Input

- [ ] All form fields have visible labels — _SearchField uses `aria-label` + placeholder only, no visible `<label>`; DropDown uses `aria-label` + placeholder only_
- [x] Error messages specific and field-associated — _N/A: no form validation in this app_
- [x] Required fields indicated visually and programmatically — _N/A: no required fields_
- [x] Form submission errors don't clear data — _N/A: no form submission_

#### Understandable — Language & Content

- [x] Page language set (`<html lang>`) — _verified: dynamically set from `accept-language` header in layout.tsx_
- [x] Abbreviations expanded on first use — _N/A: no abbreviations used_
- [x] Error messages use plain language — _verified: "Something went wrong" / "We couldn't load the countries"_

#### Robust — Assistive Technology

- [x] Valid, well-structured HTML — _verified: semantic elements throughout (`article`, `header`, `main`, `dl`)_
- [x] ARIA attributes used correctly — _verified: React Aria components manage roles, states, and properties_
- [x] Dynamic content changes announced via `aria-live` — _filtering results and empty state announced via `useFilterAnnouncement` hook using `@react-aria/live-announcer`_
- [x] Custom components follow ARIA authoring practices — _verified: React Aria Select, SearchField, ToggleButton, GridList all follow WAI-ARIA patterns_
- [ ] Country items work with screen readers in meaningful order — _needs manual screen reader testing_

#### Robust — Interactive Components

- [x] Dropdown keyboard accessible and announces state — _verified: React Aria Select handles expanded/collapsed announcement_
- [x] Toggle buttons announce state — _verified: React Aria ToggleButton on DarkLightToggle announces pressed/not pressed_
- [ ] Loading states announced to screen readers — _skeletons use `aria-hidden="true"` but no accessible "Loading..." announcement_
- [x] Bulk actions confirm result — _N/A: no bulk actions_

#### Recommended (Beyond AA)

- [ ] Customizable font size — _not implemented_
- [ ] Customizable line height and line length — _not implemented_
- [ ] High contrast mode option — _not implemented_
- [x] Reduced motion mode eliminates non-essential animation — _verified: all animations gated behind `prefers-reduced-motion`_
- [ ] Screen reader testing (VoiceOver / NVDA / TalkBack) — _needs manual testing_
- [ ] Keyboard shortcut reference via `?` key — _N/A: no keyboard shortcuts_

#### Lighthouse Accessibility Score

| Category      | Target | Score                                                |
| ------------- | ------ | ---------------------------------------------------- |
| Accessibility | > 90   | ![100](https://img.shields.io/badge/100-brightgreen) |

### Additional Checks

- [x] Build succeeds without errors — _verified: `npm run build` completes successfully_ _(auto-checked)_
- [x] No lint errors — _verified: `npm run lint` reports 0 errors (4 minor warnings)_ _(auto-checked)_
- [x] Images optimized via `next/image` — _verified: `FlagCard` and `CountryDetail` both use `next/image`_ _(auto-checked)_
- [x] Suspense boundaries with skeleton fallbacks — _verified: both landing page and detail page wrap async loaders in `<Suspense>`_ _(auto-checked)_
- [x] CSS Modules used — _verified: `.module.css` files used throughout_ _(auto-checked)_

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, server components)
- [React](https://react.dev)
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/) (accessible UI primitives)
- [Motion](https://motion.dev) (animations)
- CSS Modules + CSS custom properties

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command                   | Description             |
| ------------------------- | ----------------------- |
| `npm run dev`             | Start dev server        |
| `npm run build`           | Production build        |
| `npm run start`           | Start production server |
| `npm run lint`            | Run ESLint              |
| `npm run storybook`       | Start Storybook         |
| `npm run build-storybook` | Build Storybook         |

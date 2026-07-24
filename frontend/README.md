# Khammam Eye Bank — Frontend

React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router + i18next.

## Local setup

```bash
cd frontend
npm install
cp .env.example .env      # then set VITE_EYE_DONATION_FORM_URL to your real Google Form link
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Project layout

```
src/
  api/            (reserved for generated/typed API clients)
  assets/         images and static assets
  components/     reusable UI components (Navbar, Footer, Button, Card, Accordion, ...)
  config/         site.ts — organisation data, nav structure, feature flags
  content/        page copy sourced from the master content blueprint
  contexts/       (reserved for future shared state, e.g. auth)
  hooks/          useSeo and other custom hooks
  locales/        en / te translation JSON for i18next
  pages/          one file per route
  services/       api.ts — typed fetch wrapper for the FastAPI backend
  types/          (reserved for shared TypeScript types)
  App.tsx         route definitions
  main.tsx        app entry point
```

## Notes on content & translation

All page copy lives in `src/content/*.ts`, transcribed directly from the supplied
master content blueprint without summarising or omitting sections. The `en`
locale file covers interface chrome (navigation, buttons, labels). Full Telugu
translation of the medical/organisational body content has intentionally **not**
been auto-generated — machine-translating medical eligibility and safety
information risks introducing inaccuracies. The i18next architecture is fully
wired up (see `LanguageSwitch`), so once a qualified translator supplies
reviewed Telugu copy, it can be dropped into `src/content/te/*.ts` (mirroring
the English files) with minimal code changes.

## Hidden pages

`Research`, `Careers` and `Gallery` are fully built at `/research`, `/careers`
and `/gallery`, but intentionally left out of `primaryNav` in
`src/config/site.ts`. Flip the corresponding flag in `featureFlags` and add the
route to `primaryNav` when you're ready to publish each section.

## Registration button

The "Register for Eye Donation" button opens the URL configured in
`VITE_EYE_DONATION_FORM_URL` (see `.env.example`). Replace the placeholder with
your real Google Form link before deploying.

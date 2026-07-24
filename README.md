# The Khammam Eye Bank — Website

A production-oriented website for **The Khammam Eye Bank**, a nonprofit eye
bank serving Khammam, Telangana since 2001. Built with React + TypeScript +
Vite + Tailwind CSS + Framer Motion + React Router on the frontend, and
FastAPI + PostgreSQL on the backend.

```
khammam-eye-bank/
├── frontend/     React + TypeScript + Vite website
├── backend/      FastAPI REST API
├── database/     PostgreSQL schema.sql and seed.sql
└── README.md     you are here
```

## Quickstart (local development)

**1. Frontend**
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Visit http://localhost:5173

**2. Backend**
```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
createdb khammam_eye_bank
psql -d khammam_eye_bank -f ../database/schema.sql
psql -d khammam_eye_bank -f ../database/seed.sql
uvicorn app.main:app --reload --port 8000
```
API docs at http://localhost:8000/docs

The frontend calls the backend at `VITE_API_BASE_URL` (default
`http://localhost:8000/api`) for the contact form, news and partner listings.
The site runs and looks complete even without the backend running — only the
contact form submission requires it.

See `DEPLOYMENT.md` for deploying to Vercel (frontend), Render (backend +
PostgreSQL), and connecting a GoDaddy domain.

## What's implemented

- All ten primary pages (Home, About, Services, Resources, Public Health,
  Education, Partners, Contact) plus three fully built but nav-hidden pages
  (Research, Careers, Gallery — see `frontend/README.md`).
- Every section of content from the supplied master blueprint, reorganised
  into page sections without summarising or omitting information.
- Reusable component library (Navbar, Footer, Card, Accordion, Timeline,
  StatCounter, ContactForm, CallToAction, etc.), Tailwind design tokens
  matching the supplied palette/typography, Framer Motion scroll/hover/page
  transitions, keyboard-accessible interactive components, per-page SEO
  (title/description/canonical/OG tags), `robots.txt` and `sitemap.xml`.
- FastAPI backend with a contact endpoint (wired into the UI), a pledge
  endpoint (ready for a future in-site registration form), and news/partner
  read endpoints, backed by a PostgreSQL schema.
- i18next is fully wired for English/Telugu switching; interface chrome is
  translated. Full Telugu translation of medical content is deliberately left
  for a qualified human translator rather than machine-generated — see
  `frontend/README.md` for why, and how to add it.

## What you'll still want to do before launch

- Replace `ImageBlock` placeholders with real photography.
- Set `VITE_EYE_DONATION_FORM_URL` to your real Google Form link.
- Add your official logo (currently a text mark, "KE").
- Point the contact map at your final address once confirmed.
- Have a qualified translator review/complete the Telugu content.
- Replace placeholder resource file links with real PDFs once available.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router ·
i18next · FastAPI · SQLAlchemy · PostgreSQL

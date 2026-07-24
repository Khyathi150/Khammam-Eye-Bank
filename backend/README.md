# Khammam Eye Bank — Backend (FastAPI)

REST API supporting the website's contact form, pledge registration, news and partner listings.

## Local setup

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env             # then edit DATABASE_URL if needed
```

Create the database and load the schema (see `../database/schema.sql`):

```bash
createdb khammam_eye_bank
psql -d khammam_eye_bank -f ../database/schema.sql
psql -d khammam_eye_bank -f ../database/seed.sql   # optional demo data
```

Run the API:

```bash
uvicorn app.main:app --reload --port 8000
```

Interactive API docs: http://localhost:8000/docs

## Project layout

```
app/
  core/     settings, logging
  db/       SQLAlchemy engine/session
  models/   ORM models
  schemas/  Pydantic request/response models
  routers/  route handlers (contact, pledges, news, partners, health)
  main.py   FastAPI app + CORS + router registration
```

## Environment variables

| Variable       | Description                              |
|----------------|-------------------------------------------|
| DATABASE_URL   | PostgreSQL connection string              |
| CORS_ORIGINS   | Comma-separated list of allowed origins   |
| ENVIRONMENT    | development / production                  |
| LOG_LEVEL      | Python logging level                       |

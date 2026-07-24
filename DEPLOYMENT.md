# Deployment Guide

## 1. Database — Render PostgreSQL

1. In the Render dashboard, create a new **PostgreSQL** instance.
2. Once provisioned, open its **Connect** tab and copy the **External
   Database URL**.
3. Load the schema:
   ```bash
   psql "<external-database-url>" -f database/schema.sql
   psql "<external-database-url>" -f database/seed.sql   # optional
   ```

## 2. Backend — Render Web Service

1. Push this repository to GitHub.
2. In Render, create a new **Web Service** pointing at the `backend/` folder
   (set the root directory to `backend`).
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables:
   - `DATABASE_URL` — the Render PostgreSQL **Internal Database URL**
   - `CORS_ORIGINS` — your production frontend URL, e.g.
     `https://www.khammameyebank.org`
   - `ENVIRONMENT=production`
6. Deploy. Confirm `https://<your-service>.onrender.com/api/health` returns
   `{"status": "ok"}`.

## 3. Frontend — Vercel

1. Import the repository into Vercel.
2. Set the project root to `frontend`.
3. Framework preset: Vite. Build command: `npm run build`. Output directory:
   `dist`.
4. Add environment variables:
   - `VITE_API_BASE_URL` — `https://<your-render-service>.onrender.com/api`
   - `VITE_EYE_DONATION_FORM_URL` — your real Google Form link
   - `VITE_GOOGLE_MAPS_LAT` / `VITE_GOOGLE_MAPS_LNG` — final office coordinates
5. Deploy.

## 4. Custom domain — GoDaddy

1. In Vercel, go to your project → **Settings → Domains** → add
   `www.khammameyebank.org` (and the bare apex domain if desired).
2. Vercel will show the DNS records to add. In GoDaddy's DNS management for
   your domain:
   - For the apex domain: add an **A** record pointing to Vercel's IP
     (Vercel shows the current value on the domain settings screen).
   - For `www`: add a **CNAME** record pointing to `cname.vercel-dns.com`.
3. Wait for DNS propagation (usually minutes, can take up to 24–48 hours),
   then confirm the domain shows "Valid Configuration" in Vercel.
4. Update `CORS_ORIGINS` on the Render backend to include the final domain,
   and redeploy.
5. Update `sitemap.xml` and `robots.txt` in `frontend/public/` if the final
   domain differs from `khammameyebank.org`, then redeploy the frontend.

## Post-deploy checklist

- [ ] Real Google Form URL set and tested end-to-end
- [ ] Contact form successfully reaches the backend and appears in
      `contact_submissions`
- [ ] HTTPS is active on the custom domain (Vercel provisions this
      automatically)
- [ ] `robots.txt` / `sitemap.xml` reference the live domain
- [ ] Placeholder images replaced with real photography

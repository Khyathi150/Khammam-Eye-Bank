-- Khammam Eye Bank — PostgreSQL schema
-- Run with: psql -U khammam_eye_bank -d khammam_eye_bank -f schema.sql

CREATE TABLE IF NOT EXISTS contact_submissions (
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(120) NOT NULL,
    email         VARCHAR(160) NOT NULL,
    phone         VARCHAR(20),
    subject       VARCHAR(200) NOT NULL,
    message       TEXT NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pledge_registrations (
    id                        SERIAL PRIMARY KEY,
    full_name                 VARCHAR(120) NOT NULL,
    date_of_birth             VARCHAR(20),
    gender                    VARCHAR(20),
    mobile_number             VARCHAR(20) NOT NULL,
    email                     VARCHAR(160),
    address                   TEXT NOT NULL,
    district                  VARCHAR(80),
    state                     VARCHAR(80),
    next_of_kin_name          VARCHAR(120),
    next_of_kin_relationship  VARCHAR(80),
    next_of_kin_contact       VARCHAR(20),
    created_at                TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS news_items (
    id            SERIAL PRIMARY KEY,
    title         VARCHAR(200) NOT NULL,
    summary       TEXT NOT NULL,
    body          TEXT,
    published_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    is_published  BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS partners (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(200) NOT NULL,
    category    VARCHAR(80) NOT NULL,
    is_active   BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS resource_files (
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(200) NOT NULL,
    category    VARCHAR(60) NOT NULL CHECK (category IN ('form', 'brochure', 'annual_report')),
    file_url    VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS career_listings (
    id            SERIAL PRIMARY KEY,
    title         VARCHAR(150) NOT NULL,
    description   TEXT NOT NULL,
    is_active     BOOLEAN NOT NULL DEFAULT TRUE
);

-- Simple key/value store, reserved for a future admin panel
-- (e.g. language default, feature flags, contact numbers).
CREATE TABLE IF NOT EXISTS site_settings (
    key     VARCHAR(100) PRIMARY KEY,
    value   TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_news_items_published_at ON news_items (published_at DESC);
CREATE INDEX IF NOT EXISTS idx_partners_category ON partners (category);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions (created_at DESC);

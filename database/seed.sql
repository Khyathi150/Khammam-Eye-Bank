-- Optional seed data for local development / demos.
-- Run after schema.sql: psql -U khammam_eye_bank -d khammam_eye_bank -f seed.sql

INSERT INTO partners (name, category) VALUES
    ('GGH Khammam (Government General Hospital)', 'Medical Colleges'),
    ('Hindu Smasana Vatikala Nirvahana Committee, Khammam', 'NGOs'),
    ('Midday Daily Meals Welfare Society', 'NGOs'),
    ('District Blindness Control Society, Khammam (NPCBVI)', 'Government Organisations')
ON CONFLICT DO NOTHING;

INSERT INTO news_items (title, summary, is_published) VALUES
    ('Eye Donation Fortnight awareness drive', 'Community meetings, rallies and school sessions held across Khammam to mark the annual awareness fortnight.', TRUE),
    ('New donor transport van commissioned', 'A fourth van, contributed by a philanthropic donor, extends our respectful transport network to more districts.', TRUE),
    ('Hospital coordination training', 'Ongoing training for hospital coordination staff to strengthen timely retrieval and family counselling.', TRUE)
ON CONFLICT DO NOTHING;

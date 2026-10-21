CREATE TABLE IF NOT EXISTS enquiries (
 id TEXT PRIMARY KEY,
 created_at TEXT NOT NULL,
 payload TEXT NOT NULL,
 status TEXT NOT NULL DEFAULT 'new',
 notification_status TEXT NOT NULL DEFAULT 'pending'
);
CREATE INDEX IF NOT EXISTS enquiries_created ON enquiries(created_at);

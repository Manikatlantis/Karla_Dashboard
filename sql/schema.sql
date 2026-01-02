-- Database schema for the Faculty Appreciation & Recommendation Portal

-- Moderation status enumeration
CREATE TABLE IF NOT EXISTS moderation_status (
  id SERIAL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  description TEXT
);

-- Endorsement categories used as non‑numeric strength tags
CREATE TABLE IF NOT EXISTS endorsement_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Public appreciation entries
CREATE TABLE IF NOT EXISTS appreciation_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id UUID NOT NULL REFERENCES auth.users(id),
  display_name VARCHAR(128) NOT NULL,
  content TEXT NOT NULL,
  visibility VARCHAR(16) NOT NULL DEFAULT 'public',
  status_id INTEGER NOT NULL REFERENCES moderation_status(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Join table linking entries to endorsement categories
CREATE TABLE IF NOT EXISTS entry_endorsement (
  entry_id UUID NOT NULL REFERENCES appreciation_entries(id) ON DELETE CASCADE,
  category_id INTEGER NOT NULL REFERENCES endorsement_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (entry_id, category_id)
);

-- Letters of recommendation (PDF uploads)
CREATE TABLE IF NOT EXISTS letters_of_recommendation (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id UUID NOT NULL REFERENCES auth.users(id),
  relationship VARCHAR(128),
  context TEXT,
  timeframe VARCHAR(128),
  file_url TEXT NOT NULL,
  allow_use_for_promotion BOOLEAN DEFAULT FALSE,
  display_name VARCHAR(128),
  visibility VARCHAR(16) DEFAULT 'private',
  status_id INTEGER NOT NULL REFERENCES moderation_status(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Join table linking letters to endorsement categories
CREATE TABLE IF NOT EXISTS letter_endorsement (
  letter_id UUID NOT NULL REFERENCES letters_of_recommendation(id) ON DELETE CASCADE,
  category_id INTEGER NOT NULL REFERENCES endorsement_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (letter_id, category_id)
);

-- Administrator users
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  role VARCHAR(32) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- Supabase Schema for NoCode Academy
-- Execute these SQL statements in your Supabase SQL Editor

-- 1. Update leads table to add lead_type column
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS lead_type TEXT DEFAULT 'general' CHECK (lead_type IN ('general', 'programa')),
ADD COLUMN IF NOT EXISTS company TEXT;

-- 2. Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'NoCode Academy',
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  seo_title TEXT,
  seo_description TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- 3. Create FAQ table
CREATE TABLE IF NOT EXISTS faq (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_faq_category ON faq(category);
CREATE INDEX IF NOT EXISTS idx_faq_order ON faq("order");

-- 4. Enable Row Level Security (RLS) for blog_posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published posts
CREATE POLICY "Allow public read published posts" ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Allow authenticated users to insert/update/delete (for admin)
CREATE POLICY "Allow authenticated insert" ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated delete" ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- 5. Enable Row Level Security (RLS) for FAQ
ALTER TABLE faq ENABLE ROW LEVEL SECURITY;

-- Allow public read access to FAQ
CREATE POLICY "Allow public read FAQ" ON faq
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow authenticated users to insert/update/delete (for admin)
CREATE POLICY "Allow authenticated insert FAQ" ON faq
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update FAQ" ON faq
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated delete FAQ" ON faq
  FOR DELETE
  TO authenticated
  USING (true);

-- 6. Update existing leads to have lead_type = 'general'
UPDATE leads SET lead_type = 'general' WHERE lead_type IS NULL;


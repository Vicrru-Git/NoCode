-- Supabase Schema for NoCode Academy
-- Execute these SQL statements in your Supabase SQL Editor
-- This schema creates all necessary tables for the NoCode Academy website

-- ============================================================================
-- 1. CREATE LEADS TABLE
-- ============================================================================
-- This table stores submissions from BOTH form components (mismos campos):
-- - Formulario.tsx (home page): name, email, phone, project_idea, form_source='home'
-- - ProgramaEsquema.tsx (program page): name, email, phone, project_idea, form_source='programa'
-- form_source identifica el origen del formulario

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Required fields
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_idea TEXT NOT NULL,
  
  -- Optional fields for different form types
  company TEXT,
  lead_type TEXT DEFAULT 'general' CHECK (lead_type IN ('general', 'programa')),
  
  -- Form source: indicates where the form was submitted from
  form_source TEXT DEFAULT 'home' CHECK (form_source IN ('home', 'programa')),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_lead_type ON leads(lead_type);
CREATE INDEX IF NOT EXISTS idx_leads_form_source ON leads(form_source);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email_lead_type ON leads(email, lead_type);
CREATE INDEX IF NOT EXISTS idx_leads_form_source_created ON leads(form_source, created_at DESC);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on lead updates
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS) for leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public (anon) to insert leads (for form submissions)
CREATE POLICY "Allow public insert leads" ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all leads (for admin dashboard)
CREATE POLICY "Allow authenticated read leads" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update leads (for admin)
CREATE POLICY "Allow authenticated update leads" ON leads
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to delete leads (for admin)
CREATE POLICY "Allow authenticated delete leads" ON leads
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================================================
-- 2. CREATE BLOG_POSTS TABLE
-- ============================================================================
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

-- ============================================================================
-- 3. CREATE FAQ TABLE
-- ============================================================================
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

-- ============================================================================
-- 4. ENABLE ROW LEVEL SECURITY (RLS) FOR BLOG_POSTS
-- ============================================================================
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

-- ============================================================================
-- 5. ENABLE ROW LEVEL SECURITY (RLS) FOR FAQ
-- ============================================================================
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

-- ============================================================================
-- 6. DATA MIGRATION (if table already exists)
-- ============================================================================
-- Update existing leads to have lead_type = 'general' if null
UPDATE leads SET lead_type = 'general' WHERE lead_type IS NULL;

-- Update existing leads to have form_source based on lead_type
UPDATE leads SET form_source = 'programa' WHERE lead_type = 'programa' AND form_source IS NULL;
UPDATE leads SET form_source = 'home' WHERE form_source IS NULL;

-- If your existing leads are missing project_idea, you can set a placeholder before
-- applying NOT NULL (only needed if the column existed and was nullable):
-- UPDATE leads SET project_idea = '[placeholder]' WHERE project_idea IS NULL;

-- ============================================================================
-- SCHEMA COMPLETION NOTES
-- ============================================================================
-- 
-- The leads table is now fully configured to work with:
-- - Formulario.tsx component (fields: name, email, phone, project_idea, form_source: 'home')
-- - ProgramaEsquema.tsx component (fields: name, email, phone, project_idea, form_source: 'programa')
-- - /api/leads route (unified endpoint for both form types)
--
-- Form sources:
-- - 'home': Form submitted from the main landing page (Formulario.tsx)
-- - 'programa': Form submitted from the program page (ProgramaEsquema.tsx)
--
-- All tables have:
-- - Proper indexes for performance
-- - Row Level Security (RLS) enabled
-- - Appropriate policies for public/anonymous and authenticated users
-- - Automatic timestamp management
--
-- To verify the schema:
-- 1. Check that all tables exist: SELECT * FROM information_schema.tables WHERE table_schema = 'public';
-- 2. Test lead insertion: INSERT INTO leads (name, email, phone, project_idea) VALUES ('Test', 'test@test.com', '+1234567890', 'Test idea');
-- 3. Verify RLS policies: SELECT * FROM pg_policies WHERE tablename = 'leads';

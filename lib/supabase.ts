import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Lead {
  name: string
  email: string
  phone: string
  project_idea?: string
  company?: string
  lead_type?: 'general' | 'programa'
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  published_at: string
  category: string
  tags: string[]
  seo_title?: string
  seo_description?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

export async function saveLead(lead: Lead) {
  const { data, error } = await supabase
    .from('leads')
    .insert([{ ...lead, lead_type: lead.lead_type || 'general' }])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data as BlogPost[]
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data as BlogPost
}

export async function getFAQs() {
  const { data, error } = await supabase
    .from('faq')
    .select('*')
    .order('order', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return data as FAQ[]
}


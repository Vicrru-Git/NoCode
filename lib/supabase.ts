import { createClient } from '@supabase/supabase-js'

// Validar variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY'
  )
}

/**
 * Cliente de Supabase para uso en Server Components y API Routes
 * Este cliente se crea una vez y se reutiliza en el servidor
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // No persistir sesión en servidor
  },
})

/**
 * Función helper para crear cliente en Client Components
 * Úsala si necesitas un cliente específico en componentes del cliente
 */
export function createBrowserClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}

export interface Lead {
  name: string
  email: string
  phone: string
  project_idea?: string
  company?: string
  lead_type?: 'general' | 'programa'
  form_source?: 'home' | 'programa' // Indicates where the form was submitted from
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
    .insert([
      {
        ...lead,
        lead_type: lead.lead_type || (lead.form_source === 'programa' ? 'programa' : 'general'),
        form_source: lead.form_source || 'home',
      },
    ])
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


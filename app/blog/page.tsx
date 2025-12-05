import BlogList from '@/components/BlogList'
import { getAllBlogPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - NoCode Academy | Artículos sobre NoCode, IA y Emprendimiento',
  description: 'Descubre artículos sobre NoCode, Inteligencia Artificial, emprendimiento digital y cómo crear negocios rentables sin programar.',
  keywords: 'blog NoCode, artículos emprendimiento, NoCode blog, IA blog, crear negocio digital',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Blog{' '}
            <span className="gradient-text">NoCode Academy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Aprende sobre NoCode, Inteligencia Artificial y emprendimiento digital. 
            Guías, casos de éxito y estrategias para crear tu negocio digital.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  )
}


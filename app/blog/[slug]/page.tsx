import BlogPost from '@/components/BlogPost'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <BlogPost post={post} />
      </section>
    </main>
  )
}


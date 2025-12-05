'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const publishedDate = new Date(post.published_at).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="h-full p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col">
          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 px-2 py-1 rounded bg-gray-800"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}


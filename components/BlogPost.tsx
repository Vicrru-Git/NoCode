'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

interface BlogPostProps {
  post: BlogPost
}

export default function BlogPost({ post }: BlogPostProps) {
  const publishedDate = new Date(post.published_at).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al blog</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        {/* Category */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{publishedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm bg-gray-900/50 border border-gray-800 text-gray-300"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12 prose-h1:border-b prose-h1:border-gray-800 prose-h1:pb-4
          prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-primary
          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-secondary
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
          prose-strong:text-white prose-strong:font-semibold
          prose-ul:text-gray-300 prose-ol:text-gray-300
          prose-li:text-gray-300 prose-li:mb-2
          prose-code:text-primary prose-code:bg-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-lg prose-pre:p-4
          prose-blockquote:text-gray-400 prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
          prose-hr:border-gray-800 prose-hr:my-12
          prose-img:rounded-lg prose-img:my-8
        "
        dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
      />
      
      {/* Separator */}
      <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
    </article>
  )
}

function formatContent(content: string): string {
  // Convert markdown-like content to HTML with better formatting
  let html = content

  // Headers with proper hierarchy
  html = html.replace(/^#### (.*$)/gim, '<h4 class="text-xl font-semibold text-white mt-6 mb-3">$1</h4>')
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-secondary mt-8 mb-4">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-primary mt-10 mb-5 border-b border-gray-800 pb-3">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mt-12 mb-6 border-b border-gray-800 pb-4">$1</h1>')

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')

  // Lists - handle both unordered and ordered
  const lines = html.split('\n')
  let inList = false
  let listType = 'ul'
  let listItems: string[] = []
  const processedLines: string[] = []

  lines.forEach((line, index) => {
    const orderedMatch = line.match(/^\d+\.\s+(.*)$/)
    const unorderedMatch = line.match(/^[-*]\s+(.*)$/)

    if (orderedMatch || unorderedMatch) {
      if (!inList) {
        inList = true
        listType = orderedMatch ? 'ol' : 'ul'
      }
      const content = orderedMatch ? orderedMatch[1] : unorderedMatch![1]
      listItems.push(`<li class="mb-2 text-gray-300">${content}</li>`)
    } else {
      if (inList) {
        processedLines.push(`<${listType} class="my-6 space-y-2 list-disc list-inside text-gray-300">${listItems.join('')}</${listType}>`)
        listItems = []
        inList = false
      }
      processedLines.push(line)
    }
  })

  if (inList) {
    processedLines.push(`<${listType} class="my-6 space-y-2 list-disc list-inside text-gray-300">${listItems.join('')}</${listType}>`)
  }

  html = processedLines.join('\n')

  // Paragraphs with better spacing
  html = html.split('\n\n').map(para => {
    if (!para.trim()) return '<div class="my-6"></div>'
    if (para.trim().startsWith('<')) return para
    return `<p class="text-gray-300 leading-relaxed mb-6">${para.trim()}</p>`
  }).join('\n')

  // Add separators after headers
  html = html.replace(/(<\/h[1-2]>)/g, '$1<div class="my-6 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>')

  return html
}


'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import BlogCard from './BlogCard'
import type { BlogPost } from '@/lib/blog'

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    return Array.from(new Set(posts.map(post => post.category)))
  }, [posts])

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === null || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [posts, searchQuery, selectedCategory])

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-gray-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-gray-700'
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {filteredPosts.length > 0 && (
        <div className="mb-6 text-gray-400 text-sm">
          {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
        </div>
      )}

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg mb-2">No se encontraron artículos</p>
          <p className="text-gray-500 text-sm">
            Intenta con otros términos de búsqueda o selecciona otra categoría
          </p>
        </div>
      )}
    </div>
  )
}


'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, X } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

interface FAQProps {
  faqs: FAQItem[]
}

export default function FAQ({ faqs }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === null || faq.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar preguntas..."
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

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-900/30 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <div className="text-xs font-medium text-primary mb-1">
                    {faq.category}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openId === faq.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 pt-0 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-2">No se encontraron preguntas</p>
            <p className="text-gray-500 text-sm">
              Intenta con otros términos de búsqueda o selecciona otra categoría
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


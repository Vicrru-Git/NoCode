'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Formulario() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_idea: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario')
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        project_idea: '',
      })
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.message || 'Error al enviar el formulario. Por favor, intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="formulario" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Solicita tu{' '}
            <span className="gradient-text">plaza</span>
          </h2>
          <p className="text-lg text-gray-400">
            Completa el formulario y nos pondremos en contacto contigo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                placeholder="+34 600 000 000"
              />
            </div>

            <div>
              <label htmlFor="project_idea" className="block text-sm font-medium mb-2">
                ¿Qué quieres crear? *
              </label>
              <textarea
                id="project_idea"
                required
                rows={4}
                value={formData.project_idea}
                onChange={(e) => setFormData({ ...formData, project_idea: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Describe tu idea de negocio digital..."
              />
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary"
              >
                <CheckCircle className="w-5 h-5" />
                <span>¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
              >
                <AlertCircle className="w-5 h-5" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar solicitud
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Send, AlertCircle, Clock, Target, Rocket, Award, FileText, Code } from 'lucide-react'

const modulos = [
  {
    numero: 'Bloque 1',
    titulo: 'Validación modelo de negocio',
    duracion: '3 semanas',
    icon: Target,
    descripcion: 'Identifica oportunidades de mercado validadas y encuentra problemas que la gente está dispuesta a pagar por resolver',
    Contenido: ['Análisis de mercado', 'Validación de idea', 'Persona objetivo definida'],
    gradient: 'from-primary to-primary/50',
  },
  {
    numero: 'Bloque 2',
    titulo: 'Creación con NoCode',
    duracion: '4 semanas',
    icon: Code,
    descripcion: 'Domina herramientas NoCode como Lovable, N8N, Cursor y construye tu MVP funcional sin escribir código',
    Contenido: ['MVP funcional', 'Integraciones y arquitectura', 'Growth y CI/CD'],
    gradient: 'from-secondary to-secondary/50',
  },
  {
    numero: 'Bloque 3',
    titulo: 'Lanzamiento y Monetización',
    duracion: '3 semanas',
    icon: Rocket,
    descripcion: 'Implementa estrategias de GTM y monetización probadas. Aprende a escalar tu negocio digital con IA',
    Contenido: ['Estrategias de captación y GTM', 'Automatización de procesos y ventas', 'Cusomter Success y Feedback'],
    gradient: 'from-primary via-secondary to-primary',
  },
]

export default function ProgramaEsquema() {
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
        body: JSON.stringify({
          ...formData,
          form_source: 'programa', // Indicates this form comes from the program page
        }),
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">90 días intensivos</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Programa{' '}
              <span className="gradient-text">NoCode Academy</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Un programa intensivo de 3 meses diseñado para transformarte en creador de negocios digitales. 
              Desde la 
              <span className="text-primary font-semibold"> idea</span> hasta tu
              <span className="text-secondary font-semibold"> primer cliente</span> en 90 días.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>3 meses</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-secondary" />
                <span>10 plazas</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>100% práctico</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Esquema del Programa */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Estructura del <span className="gradient-text">programa</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tres módulos intensivos que te llevan desde la idea hasta tu negocio funcionando
            </p>
          </motion.div>

          <div className="space-y-8">
            {modulos.map((modulo, index) => {
              const Icon = modulo.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${modulo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon and number */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${modulo.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-4xl font-bold text-gray-700">{modulo.numero}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{modulo.titulo}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span>{modulo.duracion}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">{modulo.descripcion}</p>
                        
                        {/* Contenido*/}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Contenido
                          </h4>
                          <ul className="space-y-2">
                            {modulo.Contenido.map((Contenido, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-400">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{Contenido}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulario para Documento Completo */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Solicita el{' '}
              <span className="gradient-text">documento completo</span>
            </h2>
            <p className="text-lg text-gray-400">
              Completa el formulario y te enviaremos el programa detallado con toda la información 
              sobre metodología, contenido, horarios y más.
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
                  <span>¡Formulario enviado correctamente! Te enviaremos el documento completo por email en breve.</span>
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
                    Solicitar documento completo
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


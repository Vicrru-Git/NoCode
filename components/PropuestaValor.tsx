'use client'

import { motion } from 'framer-motion'
import { Target, Code, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const propuestas = [
  {
    icon: Target,
    title: 'Bloque 1: Validación modelo de negocio',
    description: 'Identifica oportunidades de mercado reales y validadas. Aprende a investigar nichos rentables y encontrar problemas que la gente está dispuesta a pagar por resolver.',
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: Code,
    title: 'Bloque 2: Creación con NoCode',
    description: 'Construye productos digitales sin escribir código. Domina herramientas como Lovable, N8N, Cursor y otras herramientas de NoCode para crear MVPs funcionales en días.',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: Rocket,
    title: 'Bloque 3: Lanzamiento y Monetización',
    description: 'Aprende estrategias de GTM y monetización. Desde SaaS hasta marketplaces, descubre cómo generar ingresos recurrentes y escalar tu negocio digital con automatización e IA.',
    gradient: 'from-primary via-secondary to-primary',
  },
]

export default function PropuestaValor() {
  return (
    <section id="propuesta-valor" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tu camino hacia el{' '}
            <span className="gradient-text">éxito digital</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un programa intensivo de 3 meses diseñado para transformarte en creador de negocios digitales.
            <br />
            Queremos  
            <span className="text-primary font-semibold"> builders!</span> Gente con ganas de crear y tener impacto{' '}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {propuestas.map((propuesta, index) => {
            const Icon = propuesta.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${propuesta.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{propuesta.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{propuesta.description}</p>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${propuesta.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/programa"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
          >
            Ver programa completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


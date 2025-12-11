'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('formulario')
    form?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Solo 10 plazas disponibles</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Crea tu{' '}
            <span className="gradient-text">Negocio Digital </span>
            <br />
            en 90 días
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Academia exclusiva que enseña a crear negocios digitales rentables con herramientas
            <br />
            <span className="text-primary font-semibold">NoCode</span> e{' '}
            <span className="text-secondary font-semibold">IA</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2"
            >
              Solicitar plaza
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">2.045€</span>
                <span>•</span>
                <span>3 meses intensivos</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-800"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">90</div>
              <div className="text-sm text-gray-400 mt-1">Días</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">10</div>
              <div className="text-sm text-gray-400 mt-1">Plazas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-gray-400 mt-1">Práctico</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

const casos = [
  {
    nombre: 'HairLab AI',
    descripcion: 'Plataforma SaaS para realizar simulaciones reales de implantes capilares, para clinicas de estética',
    metricas: {
      ingresos: '7.000€/mes',
      usuarios: '30+',
      margen: '+70%',
    },
    color: 'from-primary to-primary/50',
  },
  {
    nombre: 'Futura AI',
    descripcion: 'Call Center automatizado con AI y flujos NoCode, reduciendo los costes de atención al cliente y aumentando la satisfacción del cliente',
    metricas: {
      ingresos: '22.500€/mes',
      usuarios: '40+',
      margen: '+72%',
    },
    color: 'from-secondary to-secondary/50',
  },
  {
    nombre: 'MediBot',
    descripcion: 'Chatbot médico que gestiona citas responde preguntas frecuentes y conecta con historiales clínicos',
    metricas: {
      ingresos: '10.200€/mes',
      usuarios: '100+',
      margen: '+68%',
    },
    color: 'from-primary via-secondary to-primary',
  },
  {
    nombre: 'Lead Ressurrector',
    descripcion: 'Sistema NoCode que reactiva bases de datos de leads, para campañas automatizadas multicanal',
    metricas: {
      ingresos: '1.500€/mes',
      usuarios: '100+',
      margen: '+50%',
    },
    color: 'from-secondary via-primary to-secondary',
  },
]

export default function CasosExito() {
  return (
    <section id="casos-exito" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Casos de{' '}
            <span className="gradient-text">éxito reales</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Negocios creados por nuestros alumnos usando NoCode e IA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {casos.map((caso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caso.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{caso.nombre}</h3>
                <p className="text-gray-400 mb-6">{caso.descripcion}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-xs font-medium">Ingresos</span>
                    </div>
                    <div className="text-lg font-bold">{caso.metricas.ingresos}</div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-secondary mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">Usuarios</span>
                    </div>
                    <div className="text-lg font-bold">{caso.metricas.usuarios}</div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-medium">Margen</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{caso.metricas.margen}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


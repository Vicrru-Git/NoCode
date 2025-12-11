'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Rocket, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const beneficios = [
  {
    icon: Building2,
    title: 'Ecosistema empresarial',
    description: 'Acceso a una red de empresas y emprendedores consolidados',
  },
  {
    icon: Users,
    title: 'Comunidad exclusiva',
    description: 'Conecta con otros creadores y comparte experiencias',
  },
  {
    icon: Rocket,
    title: 'Aceleración',
    description: 'Programas de aceleración para proyectos destacados',
  },
  {
    icon: Award,
    title: 'Apoyo',
    description: 'Apoyo y mentoría constante durante el programa',
    link: 'https://konektorgroup.com/',
  },
]

export default function RespaldoKonektor() {
  return (
    <section id="respaldo" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm font-medium text-secondary">
              <a href="https://konektorgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                Respaldo Konektor
              </a>
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Respaldado por un{' '}
            <span className="gradient-text">ecosistema empresarial</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            NoCode Academy forma parte del{' '}
            <a href="https://konektorgroup.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              ecosistema Konektor
            </a>
            , una red de empresas y emprendedores que impulsan la innovación digital
          </p>

          {/* Logo Konektor - Parte superior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 relative"
          >
            <a
              href="https://konektorgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 hover:border-primary transition-all duration-300 hover:scale-105 relative"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <span className="text-white font-bold text-base">K</span>
              </div>
              <span className="text-2xl font-bold">Konektor</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Beneficios con líneas conectadas */}
        <div className="relative mb-12 min-h-[280px] -mt-16">
          {/* Líneas minimalistas desde el logo hacia cada beneficio */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
            <svg 
              viewBox="0 0 1200 280"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="konektor-line-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="konektor-line-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="konektor-line-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="konektor-line-4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              
              {/* Punto de origen - centro inferior del logo */}
              <circle cx="600" cy="0" r="4" fill="url(#konektor-line-1)" opacity="0.9" />
              
              {/* Línea 1 - Beneficio 1 (izquierda) - desde centro inferior del logo hacia centro superior del card 1 */}
              {/* Grid: 4 columnas iguales, centros en 12.5%, 37.5%, 62.5%, 87.5% */}
              {/* pt-24 = 96px, punto en -top-2 = -8px desde top del card, posición Y = 96 - 8 = 88px */}
              <line
                x1="600"
                y1="0"
                x2="12.5%"
                y2="88"
                stroke="url(#konektor-line-1)"
                strokeWidth="2.5"
                strokeDasharray="10 6"
                opacity="0.8"
              />
              
              {/* Línea 2 - Beneficio 2 */}
              <line
                x1="600"
                y1="0"
                x2="37.5%"
                y2="88"
                stroke="url(#konektor-line-2)"
                strokeWidth="2.5"
                strokeDasharray="10 6"
                opacity="0.8"
              />
              
              {/* Línea 3 - Beneficio 3 */}
              <line
                x1="600"
                y1="0"
                x2="62.5%"
                y2="88"
                stroke="url(#konektor-line-3)"
                strokeWidth="2.5"
                strokeDasharray="10 6"
                opacity="0.8"
              />
              
              {/* Línea 4 - Beneficio 4 (derecha) */}
              <line
                x1="600"
                y1="0"
                x2="87.5%"
                y2="88"
                stroke="url(#konektor-line-4)"
                strokeWidth="2.5"
                strokeDasharray="10 6"
                opacity="0.8"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-24">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative group"
                >
                  {/* Punto de conexión superior - donde llegan las líneas */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-secondary to-primary opacity-60 group-hover:opacity-100 transition-opacity z-10" />
                  
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{beneficio.title}</h3>
                  <p className="text-sm text-gray-400">{beneficio.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Image - Panel de discusión */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
            <Image
              src="/konektor-panel.jpg"
              alt="Panel de discusión del ecosistema Konektor - Mesa redonda sobre digitalización e innovación empresarial"
              fill
              className="object-cover"
              unoptimized
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-white text-sm font-medium">Eventos y conferencias del ecosistema Konektor</p>
              <p className="text-gray-300 text-xs mt-1">Mesa redonda sobre innovación y digitalización empresarial</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
          >
            Conoce más sobre el ecosistema
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


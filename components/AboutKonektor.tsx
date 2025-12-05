'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Rocket, Award, Target, Zap, Globe, Heart, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const valores = [
  {
    icon: Target,
    title: 'Innovación',
    description: 'Impulsamos la creación de soluciones digitales que transforman industrias',
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Una red de emprendedores y empresas que se apoyan mutuamente',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: Rocket,
    title: 'Crecimiento',
    description: 'Aceleramos el desarrollo de proyectos desde la idea hasta el mercado',
    gradient: 'from-primary via-secondary to-primary',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Estándares altos de calidad en cada proyecto y formación',
    gradient: 'from-secondary via-primary to-secondary',
  },
]

const hitos = [
  {
    año: '2020',
    titulo: 'Fundación',
    descripcion: 'Nacimiento del ecosistema Konektor con la visión de democratizar el emprendimiento digital',
  },
  {
    año: '2021',
    titulo: 'Primera Cohorte',
    description: 'Lanzamiento del primer programa de aceleración con 10 proyectos seleccionados',
  },
  {
    año: '2022',
    titulo: 'Expansión',
    description: 'Crecimiento a más de 50 empresas en el ecosistema y apertura de nuevas verticales',
  },
  {
    año: '2023',
    titulo: 'NoCode Academy',
    description: 'Creación de NoCode Academy para formar a la próxima generación de creadores digitales',
  },
  {
    año: '2024',
    titulo: 'Impacto Global',
    description: 'Más de 100 proyectos lanzados y una comunidad de más de 500 emprendedores',
  },
]

const estadisticas = [
  { icon: Building2, valor: '100+', label: 'Proyectos lanzados' },
  { icon: Users, valor: '500+', label: 'Emprendedores' },
  { icon: Zap, valor: '50+', label: 'Empresas en el ecosistema' },
  { icon: Globe, valor: '15+', label: 'Países' },
]

export default function AboutKonektor() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary">Ecosistema Konektor</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              El{' '}
              <span className="gradient-text">Ecosistema Konektor</span>
              <br />
              impulsando la{' '}
              <span className="gradient-text">innovación digital</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <a href="https://konektorgroup.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Konektor</a> es un ecosistema empresarial consolidado que conecta emprendedores, empresas y creadores digitales 
              para impulsar la innovación y transformar ideas en negocios exitosos. NoCode Academy forma parte de este 
              ecosistema, beneficiándose de una red de más de 50 empresas y 500+ emprendedores que comparten conocimiento, 
              recursos y oportunidades de crecimiento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido Principal sobre el Ecosistema */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Un ecosistema{' '}
                <span className="gradient-text">empresarial consolidado</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  El ecosistema Konektor nació con la visión de democratizar el emprendimiento digital y 
                  crear un espacio donde emprendedores, empresas y creadores puedan colaborar, aprender 
                  y crecer juntos.
                </p>
                <p>
                  A lo largo de los años, hemos construido una red sólida que incluye más de 50 empresas 
                  establecidas y una comunidad de más de 500 emprendedores activos. Este ecosistema no es 
                  solo una red de contactos, es un motor de innovación que proporciona acceso a recursos, 
                  conocimiento compartido y oportunidades de aceleración.
                </p>
                <p>
                  NoCode Academy se beneficia directamente de este ecosistema, ofreciendo a nuestros alumnos 
                  acceso a una red empresarial consolidada, programas de aceleración para proyectos destacados, 
                  y un certificado avalado por el ecosistema Konektor que abre puertas en el mundo empresarial.
                </p>
              </div>
            </motion.div>

            {/* Image 1 - Panel de discusión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
            >
              <Image
                src="/konektor-panel.jpg"
                alt="Panel de discusión del ecosistema Konektor - Mesa redonda con expertos sobre digitalización e innovación empresarial"
                fill
                className="object-cover"
                unoptimized
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
            </motion.div>
          </div>

          {/* Beneficios del Ecosistema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Beneficios del <span className="gradient-text">ecosistema</span>
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Ecosistema empresarial
                </h4>
                <p>
                  Acceso a una red de empresas y emprendedores consolidados que comparten recursos, 
                  conocimiento y oportunidades. Esta red te permite conectar con potenciales clientes, 
                  partners estratégicos y mentores experimentados que pueden acelerar el crecimiento de tu proyecto.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  Comunidad exclusiva
                </h4>
                <p>
                  Conecta con otros creadores y comparte experiencias en un ambiente colaborativo. 
                  La comunidad Konektor organiza eventos regulares, sesiones de networking y espacios 
                  de colaboración donde puedes aprender de otros emprendedores y compartir tus propios aprendizajes.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  Programas de aceleración
                </h4>
                <p>
                  Proyectos destacados tienen acceso a programas de aceleración diseñados para llevar 
                  tu negocio al siguiente nivel. Estos programas incluyen mentoría especializada, acceso 
                  a inversión, y conexiones con el ecosistema empresarial más amplio.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  Certificado avalado
                </h4>
                <p>
                  Al completar NoCode Academy, recibes un certificado avalado por el{' '}
                  <a href="https://konektorgroup.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    ecosistema Konektor
                  </a>{' '}
                  que valida tus conocimientos y te abre puertas en el mundo empresarial. Este certificado 
                  es reconocido por las empresas del ecosistema y puede ser un diferenciador importante 
                  en tu carrera profesional.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image 2 - Workshop/Presentación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
          >
            <Image
              src="/konektor-workshop.jpg"
              alt="Workshop del ecosistema Konektor - Presentación y formación práctica para emprendedores"
              fill
              className="object-cover"
              unoptimized
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-white text-sm font-medium">Formación y workshops del ecosistema</p>
              <p className="text-gray-300 text-xs mt-1">Sesiones prácticas y networking para emprendedores</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Quieres formar parte del{' '}
              <span className="gradient-text">ecosistema?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Únete a NoCode Academy y conviértete en parte de una comunidad que está transformando 
              el futuro del emprendimiento digital
            </p>
            <motion.a
              href="/programa"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Conoce nuestro programa
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


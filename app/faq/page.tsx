import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - NoCode Academy',
  description: 'Encuentra respuestas a las preguntas más frecuentes sobre NoCode Academy, el programa, inscripción, metodología y más.',
  keywords: 'FAQ NoCode Academy, preguntas frecuentes, información programa, inscripción',
}

// Mock FAQ data - In production, this should come from Supabase
const faqs = [
  {
    id: '1',
    question: '¿Qué es NoCode Academy?',
    answer: 'NoCode Academy es una academia exclusiva que enseña a crear negocios digitales rentables usando herramientas NoCode e Inteligencia Artificial. Nuestro programa intensivo de 90 días te lleva desde la idea hasta tu primer cliente.',
    category: 'General',
  },
  {
    id: '2',
    question: '¿Necesito saber programar?',
    answer: 'No, no necesitas saber programar. El programa está diseñado para personas sin experiencia técnica. Te enseñamos a usar herramientas NoCode que te permiten crear aplicaciones y sistemas sin escribir código.',
    category: 'Programa',
  },
  {
    id: '3',
    question: '¿Cuánto dura el programa?',
    answer: 'El programa tiene una duración de 90 días (3 meses) de forma intensiva. Durante este tiempo trabajarás en tu proyecto con el apoyo de mentores y la comunidad.',
    category: 'Programa',
  },
  {
    id: '4',
    question: '¿Cuántas plazas hay disponibles?',
    answer: 'Cada cohorte tiene solo 10 plazas disponibles para garantizar atención personalizada y un ambiente de aprendizaje óptimo.',
    category: 'Inscripción',
  },
  {
    id: '5',
    question: '¿Cuál es el precio del programa?',
    answer: 'El programa tiene un precio de 945€ por los 3 meses completos. Incluye acceso a todas las sesiones, materiales, comunidad y soporte durante el programa.',
    category: 'Pagos',
  },
  {
    id: '6',
    question: '¿Qué herramientas aprenderé a usar?',
    answer: 'Aprenderás a usar herramientas como Lovable para crear aplicaciones web, N8N para automatización, Cursor para desarrollo asistido por IA, y otras herramientas esenciales del ecosistema NoCode.',
    category: 'Programa',
  },
  {
    id: '7',
    question: '¿Qué pasa si no puedo asistir a una sesión?',
    answer: 'Todas las sesiones se graban y quedan disponibles para que puedas verlas cuando quieras. Además, tendrás acceso a la comunidad donde puedes hacer preguntas en cualquier momento.',
    category: 'Metodología',
  },
  {
    id: '8',
    question: '¿Obtendré un certificado?',
    answer: 'Sí, al completar el programa recibirás un certificado avalado por el ecosistema Konektor que valida tus conocimientos en NoCode y creación de negocios digitales.',
    category: 'Certificación',
  },
  {
    id: '9',
    question: '¿Puedo trabajar mientras hago el programa?',
    answer: 'Sí, el programa está diseñado para que puedas compaginarlo con otras actividades. Las sesiones son en horarios flexibles y el contenido está disponible 24/7.',
    category: 'Metodología',
  },
  {
    id: '10',
    question: '¿Qué tipo de proyectos puedo crear?',
    answer: 'Puedes crear cualquier tipo de negocio digital: SaaS, marketplaces, aplicaciones móviles, sistemas de automatización, chatbots, y más. Te ayudamos a encontrar el proyecto adecuado para ti.',
    category: 'Programa',
  },
  {
    id: '11',
    question: '¿Hay algún requisito previo?',
    answer: 'No hay requisitos técnicos previos. Solo necesitas ganas de aprender, compromiso con el programa y una idea de negocio (o ayuda para encontrarla).',
    category: 'Inscripción',
  },
  {
    id: '12',
    question: '¿Cómo funciona el proceso de inscripción?',
    answer: 'Completa el formulario de solicitud en nuestra web. Nos pondremos en contacto contigo para una breve entrevista y confirmar tu plaza. Una vez confirmada, procederás con el pago.',
    category: 'Inscripción',
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Preguntas{' '}
            <span className="gradient-text">Frecuentes</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre NoCode Academy, 
            nuestro programa y cómo podemos ayudarte a crear tu negocio digital.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Tienes más <span className="gradient-text">preguntas?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Si no encuentras la respuesta que buscas, contáctanos y estaremos encantados de ayudarte.
            </p>
            <a
              href="/#formulario"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-lg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Contactar con nosotros
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


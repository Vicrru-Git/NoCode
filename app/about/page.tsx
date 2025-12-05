import AboutKonektor from '@/components/AboutKonektor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Ecosistema Konektor | NoCode Academy',
  description: 'Conoce el ecosistema Konektor, una red de empresas y emprendedores que impulsan la innovación digital. Más de 100 proyectos lanzados y 500+ emprendedores.',
  keywords: 'Konektor, ecosistema empresarial, innovación digital, emprendimiento, NoCode Academy',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutKonektor />
    </main>
  )
}


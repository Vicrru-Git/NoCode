import ProgramaEsquema from '@/components/ProgramaEsquema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programa NoCode Academy - 90 Días para Crear tu Negocio Digital',
  description: 'Programa intensivo de 3 meses para crear negocios digitales con NoCode e IA. Desde la idea hasta tu primer cliente en 90 días.',
  keywords: 'programa NoCode, formación emprendimiento, curso NoCode, crear negocio digital, NoCode Academy',
}

export default function ProgramaPage() {
  return (
    <main className="min-h-screen">
      <ProgramaEsquema />
    </main>
  )
}


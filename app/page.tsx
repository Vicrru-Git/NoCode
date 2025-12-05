import Hero from '@/components/Hero'
import PropuestaValor from '@/components/PropuestaValor'
import CasosExito from '@/components/CasosExito'
import RespaldoKonektor from '@/components/RespaldoKonektor'
import Formulario from '@/components/Formulario'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropuestaValor />
      <RespaldoKonektor />
      <CasosExito />
      <Formulario />
    </main>
  )
}


import { NextRequest, NextResponse } from 'next/server'
import { saveLead } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company } = body

    // Validación básica
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Nombre, email y teléfono son requeridos' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    const lead = await saveLead({
      name,
      email,
      phone,
      company: company || '',
      lead_type: 'programa',
    })

    return NextResponse.json(
      { success: true, data: lead },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error saving programa lead:', error)
    return NextResponse.json(
      { error: error.message || 'Error al guardar el lead' },
      { status: 500 }
    )
  }
}


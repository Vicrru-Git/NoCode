import { NextRequest, NextResponse } from 'next/server'
import { saveLead } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, project_idea, company, form_source } = body

    // Validación básica - todos los formularios tienen los mismos campos requeridos
    if (!name || !email || !phone || !project_idea) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
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

    // Determinar form_source si no se proporciona (backward compatibility)
    const source = form_source || 'home'

    const lead = await saveLead({
      name,
      email,
      phone,
      project_idea,
      company: company || undefined,
      form_source: source,
      lead_type: source === 'programa' ? 'programa' : 'general',
    })

    return NextResponse.json(
      { success: true, data: lead },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error saving lead:', error)
    return NextResponse.json(
      { error: error.message || 'Error al guardar el lead' },
      { status: 500 }
    )
  }
}


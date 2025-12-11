'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const footerLinks = {
  academy: [
    { label: 'Inicio', href: '/' },
    { label: 'Programa', href: '/programa' },
    { label: 'Sobre Nosotros', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ],
  recursos: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Casos de Éxito', href: '/#casos-exito' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="NoCode Academy Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">NoCode Academy</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Academia exclusiva que enseña a crear negocios digitales con herramientas NoCode e IA
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Respaldado por</span>
              <a
                href="https://konektorgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-primary transition-colors"
              >
                <Image
                  src="/Konektor-Logo-rosa-texto-blanco.png"
                  alt="Konektor Logo"
                  width={200}
                  height={70}
                  className="h-12 sm:h-16 w-auto object-contain"
                  unoptimized
                />
              </a>
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h3 className="font-bold mb-4">Academia</h3>
            <ul className="space-y-2">
              {footerLinks.academy.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@nocodeacademy.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  ai@konektorgroup.com
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} NoCode Academy. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  )
}


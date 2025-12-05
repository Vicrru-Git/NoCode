# NoCode Academy - Sitio Web Completo

Sitio web completo para NoCode Academy, una academia exclusiva que enseña a crear negocios digitales con herramientas NoCode e IA en 90 días. Incluye landing page, blog, FAQ, página sobre nosotros y más.

## Stack Técnico

- Next.js 14 con App Router
- Tailwind CSS
- TypeScript
- Supabase (para leads)
- Framer Motion (animaciones)
- Deploy en Vercel

## Configuración

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
Crea un archivo `.env.local` con:
```
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Build para producción:
```bash
npm run build
```

## Estructura de Páginas

El sitio incluye las siguientes páginas:

- **/** - Landing page principal con Hero, Propuesta de Valor, Casos de Éxito, Respaldo Konektor y Formulario
- **/about** - Página sobre el ecosistema Konektor con historia, valores y estadísticas
- **/programa** - Esquema del programa con módulos y formulario para solicitar documento completo
- **/blog** - Listado de artículos del blog con búsqueda y filtros por categoría
- **/blog/[slug]** - Páginas dinámicas de artículos individuales del blog
- **/faq** - Preguntas frecuentes con acordeón interactivo y búsqueda

## Estructura de Supabase

### 1. Crear proyecto en Supabase
- Ve a [supabase.com](https://supabase.com) y crea un nuevo proyecto
- Copia la URL del proyecto y la clave anónima (anon key)

### 2. Ejecutar el esquema completo

Ejecuta el archivo `SUPABASE_SCHEMA.sql` en el SQL Editor de Supabase. Este archivo incluye:

- **Tabla `leads`** (actualizada): Con columnas `lead_type` y `company` para diferenciar tipos de leads
- **Tabla `blog_posts`**: Para gestionar artículos del blog con SEO
- **Tabla `faq`**: Para preguntas frecuentes con categorías

El esquema incluye:
- Row Level Security (RLS) configurado
- Políticas de acceso públicas para lectura
- Índices para optimización
- Validaciones y constraints

**Nota**: Actualmente el blog y FAQ usan datos mock en `lib/blog.ts` y `app/faq/page.tsx`. Para usar Supabase, actualiza las funciones en `lib/supabase.ts` para usar las funciones `getBlogPosts()`, `getBlogPostBySlug()` y `getFAQs()`.

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_aqui
```

## Componentes Principales

- **Navigation**: Navegación global con routing de Next.js
- **Footer**: Footer reutilizable con links a todas las páginas
- **Hero**: Sección hero de la landing page
- **PropuestaValor**: Propuesta de valor del programa
- **CasosExito**: Casos de éxito de alumnos
- **RespaldoKonektor**: Información sobre el respaldo del ecosistema
- **Formulario**: Formulario de contacto/inscripción
- **AboutKonektor**: Componente completo de la página About
- **ProgramaEsquema**: Esquema visual del programa con formulario
- **BlogList**: Listado de artículos con búsqueda y filtros
- **BlogCard**: Tarjeta individual de artículo
- **BlogPost**: Vista completa de artículo
- **FAQ**: Componente de preguntas frecuentes con acordeón

## Deploy en Vercel

1. Conecta tu repositorio con Vercel
2. Añade las variables de entorno en la configuración del proyecto:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Vercel detectará automáticamente Next.js y desplegará la aplicación

## Notas de Desarrollo

- El blog y FAQ actualmente usan datos mock. Para producción, actualiza las funciones en `lib/supabase.ts` para conectarse a Supabase.
- Las páginas de blog usan `generateStaticParams` para generar rutas estáticas en build time.
- Todos los componentes están optimizados para SEO con metadata dinámica.


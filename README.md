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

## Configuración de Supabase

### Paso 1: Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta (si no tienes una)
2. Haz clic en "New Project"
3. Completa el formulario:
   - **Name**: Nombre de tu proyecto (ej: "nocode-academy")
   - **Database Password**: Crea una contraseña segura (guárdala en un lugar seguro)
   - **Region**: Selecciona la región más cercana a tus usuarios
4. Haz clic en "Create new project"
5. Espera 2-3 minutos mientras Supabase configura tu proyecto

### Paso 2: Ejecutar el esquema SQL

1. Una vez que tu proyecto esté listo, ve al **SQL Editor** en el menú lateral
2. Haz clic en "New query"
3. Abre el archivo `SUPABASE_SCHEMA.sql` de este proyecto
4. Copia todo el contenido del archivo
5. Pégalo en el SQL Editor de Supabase
6. Haz clic en "Run" (o presiona Ctrl+Enter)
7. Verifica que no haya errores en la ejecución

El esquema incluye:
- **Tabla `leads`** (actualizada): Con columnas `lead_type` y `company` para diferenciar tipos de leads
- **Tabla `blog_posts`**: Para gestionar artículos del blog con SEO
- **Tabla `faq`**: Para preguntas frecuentes con categorías
- Row Level Security (RLS) configurado
- Políticas de acceso públicas para lectura
- Índices para optimización
- Validaciones y constraints

### Paso 3: Obtener credenciales de Supabase

1. En tu proyecto de Supabase, ve a **Settings** (icono de engranaje) en el menú lateral
2. Haz clic en **API** en el submenú
3. Encontrarás dos valores importantes:
   - **Project URL**: Copia este valor (ej: `https://xxxxx.supabase.co`)
   - **anon public key**: Copia esta clave (es una cadena larga que empieza con `eyJ...`)

### Paso 4: Configurar variables de entorno local

1. Copia el archivo `.env.local.example` a `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   
   O crea manualmente un archivo `.env.local` en la raíz del proyecto.

2. Abre `.env.local` y reemplaza los valores con tus credenciales:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_aqui
   ```

3. Guarda el archivo

**Importante**: El archivo `.env.local` está en `.gitignore` y no se subirá a Git. Esto es correcto por seguridad.

### Paso 5: Verificar configuración local

1. Reinicia tu servidor de desarrollo si está corriendo:
   ```bash
   npm run dev
   ```

2. Si hay algún error relacionado con Supabase, verifica que:
   - Las variables de entorno estén correctamente escritas en `.env.local`
   - No haya espacios extra antes o después de los valores
   - Las credenciales sean correctas (copia y pega directamente desde Supabase)

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

### Paso 1: Conectar repositorio

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Conecta tu repositorio de GitHub/GitLab/Bitbucket
4. Selecciona el repositorio de este proyecto

### Paso 2: Configurar variables de entorno en Vercel

**IMPORTANTE**: Debes configurar las variables de entorno antes del primer deploy para que Supabase funcione correctamente.

1. En la página de configuración del proyecto, ve a la sección **Environment Variables**
2. Añade las siguientes variables:

   **Variable 1:**
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Tu Project URL de Supabase (ej: `https://xxxxx.supabase.co`)
   - **Environments**: Selecciona todas (Production, Preview, Development)

   **Variable 2:**
   - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Tu anon public key de Supabase
   - **Environments**: Selecciona todas (Production, Preview, Development)

3. Haz clic en "Save" después de añadir cada variable

### Paso 3: Deploy

1. Haz clic en "Deploy"
2. Vercel detectará automáticamente Next.js y comenzará el build
3. Espera a que termine el deploy (generalmente 2-3 minutos)
4. Si el build falla, revisa los logs para verificar errores

### Paso 4: Verificar deploy

1. Una vez completado el deploy, visita tu URL de Vercel
2. Prueba el formulario de contacto para verificar que Supabase está funcionando
3. Si hay errores, revisa los logs en Vercel Dashboard → Deployments → [tu deploy] → Functions

### Notas importantes para Vercel

- Las variables de entorno con prefijo `NEXT_PUBLIC_` son expuestas al cliente
- Asegúrate de usar la misma anon key que en desarrollo (es segura para uso público)
- Si cambias las variables de entorno, necesitas hacer un nuevo deploy
- Puedes configurar variables diferentes para Production, Preview y Development si es necesario

## Notas de Desarrollo

- El blog y FAQ actualmente usan datos mock. Para producción, actualiza las funciones en `lib/supabase.ts` para conectarse a Supabase.
- Las páginas de blog usan `generateStaticParams` para generar rutas estáticas en build time.
- Todos los componentes están optimizados para SEO con metadata dinámica.


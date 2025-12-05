# Guía de Configuración de Supabase

Esta guía te ayudará a configurar Supabase para desarrollo local y producción en Vercel.

## Variables de Entorno Necesarias

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_aqui
```

## Paso a Paso

### 1. Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta
2. Haz clic en "New Project"
3. Completa el formulario:
   - **Name**: Nombre de tu proyecto
   - **Database Password**: Crea una contraseña segura
   - **Region**: Selecciona la región más cercana
4. Espera 2-3 minutos mientras se configura

### 2. Ejecutar Schema SQL

1. Ve al **SQL Editor** en Supabase
2. Abre el archivo `SUPABASE_SCHEMA.sql` de este proyecto
3. Copia todo el contenido
4. Pégalo en el SQL Editor
5. Haz clic en "Run"
6. Verifica que no haya errores

### 3. Obtener Credenciales

1. Ve a **Settings** → **API**
2. Copia el **Project URL**
3. Copia la **anon public** key

### 4. Configurar Desarrollo Local

1. Crea `.env.local` en la raíz del proyecto
2. Pega las credenciales:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_aqui
   ```
3. Reinicia el servidor de desarrollo: `npm run dev`

### 5. Configurar Vercel

1. Ve a tu proyecto en Vercel
2. **Settings** → **Environment Variables**
3. Añade:
   - `NEXT_PUBLIC_SUPABASE_URL` = tu Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = tu anon key
4. Selecciona todos los ambientes (Production, Preview, Development)
5. Haz clic en "Save"
6. Haz un nuevo deploy

## Verificación

- ✅ Desarrollo: Prueba el formulario de contacto localmente
- ✅ Producción: Verifica que el formulario funcione en Vercel
- ✅ Logs: Revisa la consola y los logs de Vercel si hay errores

## Troubleshooting

**Error: "Missing Supabase environment variables"**
- Verifica que `.env.local` existe y tiene las variables correctas
- Reinicia el servidor de desarrollo
- En Vercel, verifica que las variables estén configuradas

**Error de conexión a Supabase**
- Verifica que las credenciales sean correctas
- Asegúrate de que el proyecto de Supabase esté activo
- Revisa que no haya espacios extra en las variables


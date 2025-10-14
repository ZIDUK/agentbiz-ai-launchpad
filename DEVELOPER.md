# 👨‍💻 Guía para Desarrolladores - AgentBiz AI

> **Documentación técnica completa para desarrolladores**  
> Cómo contribuir, desarrollar y mantener el sitio web de AgentBiz AI

## 🚀 Inicio Rápido

### Prerrequisitos
- **Node.js 20.19+** (usar `nvm use` si tienes nvm)
- **npm** como gestor de paquetes
- **Git** para control de versiones
- **Editor de código** (VS Code recomendado)

### Configuración Inicial

```bash
# 1. Clonar el repositorio
git clone https://github.com/ZIDUK/agentbiz-ai-launchpad.git
cd agentbiz-ai-launchpad

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
agentbiz-ai-launchpad/
├── public/                 # Archivos estáticos
│   ├── 404.html           # Redirección SPA
│   ├── favicon.ico        # Icono del sitio
│   └── robots.txt         # SEO
├── src/
│   ├── components/        # Componentes React
│   │   ├── admin/         # Panel de administración
│   │   │   ├── Dashboard.tsx
│   │   │   ├── CandidateManagement.tsx
│   │   │   └── ...
│   │   ├── ui/            # Componentes shadcn/ui
│   │   ├── Hero.tsx       # Sección principal
│   │   ├── Solutions.tsx  # Servicios
│   │   └── Contact.tsx    # Formulario contacto
│   ├── pages/             # Páginas principales
│   │   ├── Index.tsx      # Landing page
│   │   ├── Admin.tsx      # Panel admin
│   │   └── NotFound.tsx   # 404
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilidades
│   ├── assets/            # Imágenes y recursos
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions
├── vite.config.mjs        # Configuración Vite
├── tailwind.config.ts     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
└── package.json           # Dependencias y scripts
```

### Tecnologías y Herramientas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.3.1 | Framework principal |
| TypeScript | 5.8.3 | Tipado estático |
| Vite | 5.4.20 | Build tool y dev server |
| Tailwind CSS | 3.4.17 | Framework de estilos |
| shadcn/ui | - | Componentes de UI |
| React Router | 6.30.1 | Navegación |
| TanStack Query | 5.83.0 | Gestión de estado |
| React Hook Form | 7.61.1 | Formularios |
| Lucide React | 0.462.0 | Iconos |

## 🎨 Sistema de Diseño

### Colores Principales

```css
/* Variables CSS en src/index.css */
--background: 0 0% 0%;           /* Negro */
--foreground: 220 11% 96%;       /* Blanco */
--primary: 212 100% 50%;         /* Azul */
--primary-accent: 271 76% 53%;   /* Púrpura */
--gradient-primary: linear-gradient(90deg, hsl(212 100% 50%), hsl(271 76% 53%));
```

### Tipografía

```css
.text-display    /* 5xl/6xl - Títulos principales */
.text-headline   /* 3xl/4xl - Títulos de sección */
.text-title      /* xl/2xl - Títulos de tarjetas */
.text-lead       /* lg/xl - Texto destacado */
```

### Componentes

- **Cards**: `.card-hover` - Tarjetas con efecto hover
- **Botones**: `.btn-primary` - Botón principal con gradiente
- **Secciones**: `.section` - Espaciado consistente

## 🔧 Desarrollo

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (localhost:5173)
npm run build        # Construir para producción
npm run preview      # Preview del build (localhost:4173)
npm run lint         # Verificar código con ESLint

# Utilidades
nvm use              # Usar Node.js correcto
npm install          # Instalar dependencias
```

### Flujo de Desarrollo

1. **Crear rama** para nueva funcionalidad
2. **Desarrollar** localmente con `npm run dev`
3. **Probar** con `npm run preview`
4. **Hacer commit** y push
5. **Crear Pull Request** para revisión

### Agregar Nuevas Páginas

1. **Crear componente** en `src/pages/`
2. **Agregar ruta** en `src/App.tsx`:

```tsx
<Route path="/nueva-pagina" element={<NuevaPagina />} />
```

3. **Agregar enlace** en navegación si es necesario

### Agregar Nuevos Componentes

1. **Crear archivo** en `src/components/`
2. **Exportar componente**:

```tsx
export const MiComponente = () => {
  return <div>Mi componente</div>;
};
```

3. **Importar** donde se necesite

### Personalizar Estilos

#### Usando Tailwind CSS
```tsx
<div className="bg-primary text-white p-4 rounded-lg">
  Contenido
</div>
```

#### Usando CSS Personalizado
```css
/* En src/index.css */
.mi-clase {
  @apply bg-primary text-white p-4 rounded-lg;
}
```

## 🚀 Despliegue

### Despliegue Automático

El sitio se despliega automáticamente cuando:
- Se hace push a la rama `main`
- Se crea un Pull Request

### Configuración de Despliegue

- **GitHub Actions**: `.github/workflows/deploy.yml`
- **Dominio**: `agentbiz.io` (configurado en GitHub Pages)
- **Base path**: `/` (raíz del dominio)

### Verificar Despliegue

1. **GitHub Actions**: [Ver workflows](https://github.com/ZIDUK/agentbiz-ai-launchpad/actions)
2. **Sitio web**: [https://agentbiz.io](https://agentbiz.io)
3. **Panel admin**: [https://agentbiz.io/admin](https://agentbiz.io/admin)

## 🐛 Debugging

### Problemas Comunes

#### Assets no cargan (404)
```bash
# Verificar configuración en vite.config.mjs
base: '/'  # Debe ser '/' para dominio personalizado
```

#### Rutas no funcionan
```tsx
// Verificar en src/App.tsx
<BrowserRouter basename="/">
```

#### Build falla
```bash
# Usar Node.js correcto
nvm use
# o instalar Node.js 20.19+
```

#### Estilos no se aplican
```bash
# Verificar que Tailwind esté configurado
# Revisar tailwind.config.ts
```

### Herramientas de Debug

- **React DevTools**: Extensión del navegador
- **Vite DevTools**: En el servidor de desarrollo
- **Console**: Para errores JavaScript
- **Network**: Para verificar carga de assets

## 📝 Convenciones de Código

### Naming

- **Componentes**: PascalCase (`MiComponente.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useMiHook.ts`)
- **Utilidades**: camelCase (`miUtilidad.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`MI_CONSTANTE`)

### Estructura de Componentes

```tsx
// 1. Imports
import React from 'react';
import { Button } from '@/components/ui/button';

// 2. Tipos/Interfaces
interface MiComponenteProps {
  title: string;
  onClick: () => void;
}

// 3. Componente
export const MiComponente: React.FC<MiComponenteProps> = ({
  title,
  onClick
}) => {
  // 4. Hooks
  const [state, setState] = useState('');

  // 5. Handlers
  const handleClick = () => {
    onClick();
  };

  // 6. Render
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};
```

### Comentarios

```tsx
// Comentarios de línea para explicar lógica compleja
const resultado = calcularAlgo(); // Resultado del cálculo

/**
 * Comentarios de bloque para funciones complejas
 * @param param1 - Descripción del parámetro
 * @returns Descripción del retorno
 */
const funcionCompleja = (param1: string): string => {
  // Implementación
};
```

## 🔍 Testing

### Testing Manual

1. **Desarrollo local**: `npm run dev`
2. **Preview build**: `npm run build && npm run preview`
3. **Verificar responsive**: Diferentes tamaños de pantalla
4. **Probar rutas**: Navegación entre páginas

### Checklist de Testing

- [ ] Página principal carga correctamente
- [ ] Panel admin funciona (`/admin`)
- [ ] Assets (CSS, JS) cargan sin errores
- [ ] Formulario de contacto funciona
- [ ] Diseño responsive en móviles
- [ ] Enlaces internos funcionan
- [ ] Navegación entre secciones

## 📚 Recursos Adicionales

### Documentación Oficial
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### Herramientas Recomendadas
- **VS Code** con extensiones:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Auto Rename Tag

### Enlaces Útiles
- **Repositorio**: https://github.com/ZIDUK/agentbiz-ai-launchpad
- **Sitio web**: https://agentbiz.io
- **GitHub Actions**: https://github.com/ZIDUK/agentbiz-ai-launchpad/actions

---

**¡Happy coding! 🚀**

*Para dudas técnicas, contacta al equipo de desarrollo.*
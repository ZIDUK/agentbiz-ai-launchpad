# 🚀 Guía de Despliegue - AgentBiz AI

> **Guía completa para desplegar el sitio web de AgentBiz AI**  
> Configuración optimizada para GitHub Pages con dominio personalizado

## 🌐 Sitio Web Desplegado

- **🌍 Sitio Principal**: [https://agentbiz.io](https://agentbiz.io)
- **⚙️ Panel Admin**: [https://agentbiz.io/admin](https://agentbiz.io/admin)
- **📊 GitHub Pages**: [https://ziduk.github.io/agentbiz-ai-launchpad](https://ziduk.github.io/agentbiz-ai-launchpad)

## ✅ Estado Actual

**¡El sitio ya está desplegado y funcionando!** 🎉

- ✅ **Dominio personalizado** configurado (`agentbiz.io`)
- ✅ **Despliegue automático** con GitHub Actions
- ✅ **Assets cargando** correctamente
- ✅ **Rutas funcionando** (incluyendo `/admin`)
- ✅ **Responsive design** en móviles y desktop

## 🔧 Configuración Técnica

### Archivos Clave
- `vite.config.mjs` - Base path `/` para dominio personalizado
- `src/App.tsx` - Router con `basename="/"`
- `.github/workflows/deploy.yml` - Workflow de GitHub Actions
- `public/404.html` - Redirección para SPA routing
- `.nvmrc` - Node.js 20.19+

### Tecnologías
- **Vite 5** - Build tool optimizado
- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes

## 🚀 Desarrollo Local

### Instalación Rápida

```bash
# 1. Clonar repositorio
git clone https://github.com/ZIDUK/agentbiz-ai-launchpad.git
cd agentbiz-ai-launchpad

# 2. Instalar dependencias
npm install

# 3. Ejecutar desarrollo
npm run dev
# Abre: http://localhost:5173
```

### Comandos Disponibles

```bash
npm run dev          # Desarrollo (localhost:5173)
npm run build        # Construir para producción
npm run preview      # Preview local (localhost:4173)
npm run lint         # Verificar código
```

## 🔄 Despliegue Automático

### ¿Cómo Funciona?

1. **Push a `main`** → GitHub Actions se ejecuta automáticamente
2. **Build** → Vite construye el proyecto
3. **Deploy** → Se sube a GitHub Pages
4. **Live** → Sitio actualizado en `agentbiz.io`

### Monitoreo

- **GitHub Actions**: [Ver workflows](https://github.com/ZIDUK/agentbiz-ai-launchpad/actions)
- **GitHub Pages**: [Configuración](https://github.com/ZIDUK/agentbiz-ai-launchpad/settings/pages)

## 🛠️ Para Desarrolladores

### Estructura del Proyecto

```
src/
├── components/
│   ├── admin/          # Panel de administración
│   ├── ui/             # Componentes shadcn/ui
│   ├── Hero.tsx        # Sección principal
│   ├── Solutions.tsx   # Servicios
│   └── Contact.tsx     # Formulario de contacto
├── pages/
│   ├── Index.tsx       # Landing page
│   ├── Admin.tsx       # Panel admin
│   └── NotFound.tsx    # 404
└── assets/             # Imágenes y recursos
```

### Agregar Nuevas Funcionalidades

1. **Crear componente** en `src/components/`
2. **Agregar ruta** en `src/App.tsx` si es necesario
3. **Hacer commit** y push
4. **Despliegue automático** en unos minutos

### Personalización

- **Colores**: Editar `src/index.css` (variables CSS)
- **Contenido**: Modificar componentes en `src/components/`
- **Estilos**: Usar Tailwind CSS o editar CSS personalizado

## 🔍 Solución de Problemas

### Problemas Comunes

| Problema | Solución |
|----------|----------|
| Assets no cargan | Verificar `base: '/'` en `vite.config.mjs` |
| Rutas no funcionan | Verificar `basename="/"` en `App.tsx` |
| Build falla | Usar Node.js 20.19+ (`nvm use`) |
| Despliegue falla | Verificar GitHub Pages habilitado |

### Verificación Post-Despliegue

- [ ] Página principal carga correctamente
- [ ] Panel admin funciona (`/admin`)
- [ ] Assets (CSS, JS) cargan sin errores
- [ ] Formulario de contacto (Calendly) funciona
- [ ] Diseño responsive en móviles

## 📊 URLs Importantes

### Producción
- **Sitio Principal**: https://agentbiz.io
- **Admin Panel**: https://agentbiz.io/admin
- **GitHub Pages**: https://ziduk.github.io/agentbiz-ai-launchpad

### Desarrollo
- **Local Dev**: http://localhost:5173
- **Local Preview**: http://localhost:4173

### Repositorio
- **GitHub**: https://github.com/ZIDUK/agentbiz-ai-launchpad
- **Actions**: https://github.com/ZIDUK/agentbiz-ai-launchpad/actions
- **Pages Settings**: https://github.com/ZIDUK/agentbiz-ai-launchpad/settings/pages

## 🎯 Próximos Pasos

### Mejoras Sugeridas
- [ ] Agregar Google Analytics
- [ ] Implementar SEO meta tags
- [ ] Crear sitemap.xml
- [ ] Agregar robots.txt
- [ ] Implementar tests automatizados

### Mantenimiento
- [ ] Actualizar dependencias regularmente
- [ ] Monitorear performance
- [ ] Backup de configuraciones
- [ ] Documentar cambios importantes

---

**¡El sitio web de AgentBiz AI está completamente funcional y desplegado! 🚀**

*Para soporte técnico, contacta al equipo de desarrollo.*
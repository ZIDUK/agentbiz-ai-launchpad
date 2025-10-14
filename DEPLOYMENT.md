# 🚀 Despliegue en GitHub Pages - AgentBiz AI

## Configuración Completada

El proyecto está configurado siguiendo la [documentación oficial de Vite para GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages). Aquí están los pasos para completar el despliegue:

### 1. Requisitos Previos

- **Node.js 20.19+** (especificado en `.nvmrc`)
- **npm** como gestor de paquetes
- **Repositorio en GitHub** con permisos de Pages

### 2. Configuración del Repositorio

1. **Habilita GitHub Pages** en tu repositorio:
   - Ve a `Settings` > `Pages`
   - En `Source`, selecciona `GitHub Actions`

2. **Configura el dominio** (opcional):
   - Si tienes un dominio personalizado, agrégalo en `Settings` > `Pages` > `Custom domain`

### 3. Despliegue Automático

El despliegue se ejecutará automáticamente cuando:
- Hagas push a la rama `main`
- Crear un Pull Request hacia `main`

### 4. Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build local
npm run preview
```

### 5. URLs del Sitio

- **Desarrollo local**: `http://localhost:5173`
- **Preview local**: `http://localhost:4173`
- **GitHub Pages**: `https://[tu-usuario].github.io/agentbiz-ai-launchpad/`

### 6. Configuración Técnica

#### Archivos Configurados:
- `vite.config.mjs` - Base path configurado para GitHub Pages (`/agentbiz-ai-launchpad/`)
- `src/App.tsx` - Router de React sin configuración adicional
- `.github/workflows/deploy.yml` - Workflow oficial de GitHub Actions
- `public/404.html` - Redirección para SPA routing
- `index.html` - Script de redirección para GitHub Pages
- `.nvmrc` - Versión de Node.js especificada

#### Características:
- ✅ Configuración oficial de Vite para GitHub Pages
- ✅ Despliegue automático con GitHub Actions
- ✅ Rutas de React Router funcionan correctamente
- ✅ Redirección automática para SPA
- ✅ Optimizado para producción

### 7. Verificación

Después del despliegue, verifica que:
- [ ] La página principal carga correctamente
- [ ] Las rutas `/admin` funcionan
- [ ] Los enlaces internos funcionan
- [ ] El formulario de contacto (Calendly) se integra correctamente
- [ ] El diseño es responsive en móviles

### 8. Solución de Problemas

Si encuentras problemas:

1. **Rutas no funcionan**: Verifica que el archivo `404.html` esté en la carpeta `public/`
2. **Assets no cargan**: Verifica que el `base` en `vite.config.mjs` sea `/agentbiz-ai-launchpad/`
3. **Build falla**: Verifica que uses Node.js 20.19+ localmente
4. **Workflow falla**: Verifica que GitHub Pages esté habilitado en `Settings` > `Pages`

### 9. Comandos Útiles

```bash
# Usar la versión correcta de Node.js (si tienes nvm)
nvm use

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build y preview
npm run build
npm run preview

# Linting
npm run lint
```

### 10. Próximos Pasos

- [ ] Configurar dominio personalizado
- [ ] Agregar analytics (Google Analytics, etc.)
- [ ] Configurar SEO meta tags
- [ ] Implementar sitemap.xml
- [ ] Configurar robots.txt

---

**¡Tu sitio web de AgentBiz AI está listo para desplegarse siguiendo las mejores prácticas de Vite! 🎉**
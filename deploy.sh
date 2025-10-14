#!/bin/bash

# Script seguro para desplegar a GitHub Pages
echo "🚀 Iniciando deploy a GitHub Pages..."

# Verificar si existe la carpeta dist
if [ ! -d "dist" ]; then
    echo "📦 Creando build estático..."
    mkdir -p dist
    cp index.html dist/
    cp -r public/* dist/
    echo "✅ Build estático creado"
fi

# Guardar la rama actual
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Rama actual: $CURRENT_BRANCH"

# Crear o cambiar a rama gh-pages
echo "🌿 Configurando rama gh-pages..."
if git show-ref --verify --quiet refs/heads/gh-pages; then
    git checkout gh-pages
else
    git checkout -b gh-pages
fi

# Limpiar archivos existentes (excepto .git)
echo "🧹 Limpiando archivos existentes..."
git rm -rf . --ignore-unmatch
git clean -fd

# Copiar archivos del build
echo "📋 Copiando archivos del build..."
cp -r dist/* .

# Agregar archivo .nojekyll para GitHub Pages
echo "" > .nojekyll

# Agregar todos los archivos
echo "➕ Agregando archivos al git..."
git add .

# Hacer commit
echo "💾 Haciendo commit..."
git commit -m "Deploy: AgentBiz AI Launchpad - $(date)"

# Push a la rama gh-pages
echo "🚀 Subiendo a GitHub Pages..."
git push origin gh-pages

# Volver a la rama original
echo "🔄 Volviendo a la rama $CURRENT_BRANCH..."
git checkout $CURRENT_BRANCH

echo "✅ Deploy completado! Tu sitio estará disponible en:"
echo "   https://ziduk.github.io/agentbiz-ai-launchpad/"
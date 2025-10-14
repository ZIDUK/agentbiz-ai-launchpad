#!/bin/bash

# Script simplificado para desplegar a GitHub Pages
echo "🚀 Iniciando deploy a GitHub Pages..."

# Verificar si existe la carpeta dist
if [ ! -d "dist" ]; then
    echo "❌ Error: No se encontró la carpeta dist. Ejecuta 'npm run build' primero."
    exit 1
fi

# Clonar el repositorio de GitHub Pages en una carpeta temporal
echo "📥 Clonando repositorio de GitHub Pages..."
rm -rf temp-pages
git clone https://github.com/ZIDUK/ZIDUK.github.io.git temp-pages
cd temp-pages

# Limpiar el repositorio (mantener solo .git)
echo "🧹 Limpiando repositorio..."
git rm -rf . --ignore-unmatch
git clean -fd

# Copiar los archivos del build
echo "📋 Copiando archivos del build..."
cp -r ../dist/* .

# Agregar todos los archivos
echo "➕ Agregando archivos al git..."
git add .

# Hacer commit
echo "💾 Haciendo commit..."
git commit -m "Deploy: AgentBiz AI Launchpad - $(date)"

# Push a GitHub Pages
echo "🚀 Subiendo a GitHub Pages..."
git push origin main

# Limpiar
echo "🧹 Limpiando archivos temporales..."
cd ..
rm -rf temp-pages

echo "✅ Deploy completado! Tu sitio estará disponible en:"
echo "   https://ziduk.github.io/ZIDUK.github.io/"
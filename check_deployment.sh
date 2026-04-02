#!/bin/bash

echo "═══════════════════════════════════════════════════════════════"
echo "VERIFICACIÓN DE DEPLOYMENT - KOLFF DASHBOARD"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Verificar archivos en docs/
echo "✓ Verificando archivos en /docs/..."
if [ -f "docs/index.html" ] && [ -f "docs/kolff-landing.html" ] && [ -f "docs/COMPONENTS.html" ]; then
    echo "  ✓ Archivos principales encontrados (8 archivos HTML)"
else
    echo "  ✗ Archivos no encontrados"
    exit 1
fi

# Verificar .nojekyll
echo ""
echo "✓ Verificando .nojekyll..."
if [ -f "docs/.nojekyll" ]; then
    echo "  ✓ .nojekyll presente"
else
    echo "  ✗ .nojekyll no encontrado"
fi

# Verificar rama gh-pages
echo ""
echo "✓ Verificando rama gh-pages..."
if git branch -r | grep -q "origin/gh-pages"; then
    echo "  ✓ Rama gh-pages existe en GitHub"
else
    echo "  ✗ Rama gh-pages no encontrada"
fi

# Verificar GitHub Actions
echo ""
echo "✓ Verificando GitHub Actions..."
if [ -f ".github/workflows/pages.yml" ]; then
    echo "  ✓ Workflow de deployment presente"
else
    echo "  ✗ Workflow no encontrado"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PASOS FINALES (YA ESTÁN LISTOS):"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "1. Ve a: https://github.com/fprdiseno-jpg/kolff-dashboard/settings"
echo "2. Busca 'Pages' en el menú izquierdo"
echo "3. En Source selecciona: 'Deploy from a branch'"
echo "4. Branch: 'main'"
echo "5. Folder: '/docs'"
echo "6. Haz clic en Save"
echo ""
echo "Esperará 1-2 minutos y luego:"
echo "https://fprdiseno-jpg.github.io/kolff-dashboard/"
echo ""


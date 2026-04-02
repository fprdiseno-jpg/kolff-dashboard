# 🚀 KOLFF Dashboard - GitHub Pages Setup Guide

## Status: PROYECTO COMPLETAMENTE LISTO

Todo está hecho. Solo necesitas activar GitHub Pages en 3 pasos.

---

## ✅ Lo que ya está configurado:

- ✓ Todos los archivos HTML en `/docs/` folder
- ✓ Root `index.html` con redirect automático a `/docs/`
- ✓ `.nojekyll` file para deshabilitar Jekyll
- ✓ `_config.yml` para Jekyll configuration
- ✓ GitHub Actions workflows para auto-deployment
- ✓ Scripts Python y Bash para configuración automática
- ✓ Todas las páginas listas para servirse

---

## 🎯 OPCIÓN 1: Setup Manual (3 clics - Recomendado)

### Paso 1: Abre Settings
Ve a tu repositorio settings:
```
https://github.com/fprdiseno-jpg/kolff-dashboard/settings
```

### Paso 2: Busca Pages
En el menú lateral izquierdo, haz clic en **"Pages"**

### Paso 3: Configura
En la sección **"Build and deployment"**:
- **Source**: Selecciona `Deploy from a branch`
- **Branch**: Selecciona `main`
- **Folder**: Selecciona `/docs`
- **Botón**: Haz clic en `Save`

**¡Listo!** Espera 1-2 minutos.

---

## 💻 OPCIÓN 2: Setup Automático con Script Bash

Si tienes un GitHub Personal Access Token:

```bash
export GITHUB_TOKEN="tu_token_aqui"
bash setup.sh
```

**Cómo obtener un Personal Access Token:**
1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Dale un nombre (ej: "KOLFF Setup")
4. Marca `repo` (acceso a repositorio)
5. Click "Generate token"
6. Copia el token y úsalo en el comando arriba

---

## 🤖 OPCIÓN 3: Setup Automático con GitHub Actions Workflow

GitHub Actions puede configurar GitHub Pages automáticamente:

1. Ve a tu repositorio en GitHub
2. Click en la pestaña **"Actions"**
3. En el panel izquierdo, busca **"Auto Configure GitHub Pages"**
4. Click en **"Run workflow"**
5. Selecciona rama **"main"** y click **"Run workflow"**

El workflow ejecutará la configuración automáticamente.

---

## 📍 URLs Resultantes

Una vez activado, tus páginas estarán disponibles en:

### Dashboard Principal
```
https://fprdiseno-jpg.github.io/kolff-dashboard/
```

### Landing Page
```
https://fprdiseno-jpg.github.io/kolff-dashboard/kolff-landing.html
```

### Design System
```
https://fprdiseno-jpg.github.io/kolff-dashboard/COMPONENTS.html
```

### Productos
```
https://fprdiseno-jpg.github.io/kolff-dashboard/productos-ups.html
https://fprdiseno-jpg.github.io/kolff-dashboard/productos-iluminacion.html
https://fprdiseno-jpg.github.io/kolff-dashboard/productos-datacenter.html
https://fprdiseno-jpg.github.io/kolff-dashboard/productos-sala-electrica.html
https://fprdiseno-jpg.github.io/kolff-dashboard/productos-renovables.html
```

---

## 🐛 Troubleshooting

### Sigo viendo 404

**Solución:**
1. Verifica que completaste los 3 pasos de setup manual
2. Espera 2-3 minutos (GitHub tarda en procesar)
3. Recarga el navegador con `Ctrl+Shift+R` (fuerza limpieza de caché)
4. Verifica que la rama sea `main` y folder sea `/docs` en Settings > Pages

### El sitio carga pero sin estilos

**Solución:**
1. Limpia caché: `Ctrl+Shift+R`
2. Verifica que `.nojekyll` existe en `/docs/.nojekyll`
3. Si el problema persiste, reinicia GitHub Actions:
   - Ve a Actions tab
   - Click en el workflow más reciente
   - Click "Re-run all jobs"

### Las páginas de productos no cargan links correctamente

**Solución:**
- Los links relativos funcionan automáticamente
- Si hay problemas, verifica que `/docs/` contiene todos los archivos HTML
- Ejecuta: `ls docs/*.html` para verificar

---

## 📋 Checklist Final

- [ ] Abrí Settings del repositorio
- [ ] Encontré la sección "Pages"
- [ ] Configuré Source a "Deploy from a branch"
- [ ] Seleccioné rama "main"
- [ ] Seleccioné carpeta "/docs"
- [ ] Hice click en "Save"
- [ ] Esperé 1-2 minutos
- [ ] Visité https://fprdiseno-jpg.github.io/kolff-dashboard/
- [ ] ¡El sitio está en vivo! 🎉

---

## 🔗 Links Útiles

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Your Repository Settings](https://github.com/fprdiseno-jpg/kolff-dashboard/settings)
- [Your Repository Pages Settings](https://github.com/fprdiseno-jpg/kolff-dashboard/settings/pages)

---

## 📞 Soporte Rápido

Si algo no funciona:

1. **Revisa los GitHub Actions logs:**
   - Ve a: https://github.com/fprdiseno-jpg/kolff-dashboard/actions
   - Busca errores en los workflows

2. **Verifica el caché:**
   - Presiona `Ctrl+Shift+R` (no solo `Ctrl+R`)
   - Usa Incognito/Private window si el problema persiste

3. **Reintenta la configuración:**
   - A veces GitHub tarda más de 2 minutos
   - Espera 5 minutos completos antes de suponer que hay un problema

---

## ✨ Resumen

**Estado**: Todo automáticamente configurado ✓
**Siguiente paso**: 3 clics en GitHub Settings
**Tiempo total**: 5 minutos (incluyendo espera de GitHub)

¡Tu KOLFF Dashboard estará en vivo en minutos! 🚀

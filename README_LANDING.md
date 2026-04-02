# KOLFF Landing Page - Guía de Uso

## Introducción

Este es el prototipo profesional de la página web de KOLFF - Soluciones de Energía Confiable. La página está construida con HTML5, CSS3 vanilla y JavaScript vanilla, sin dependencias externas, asegurando máxima compatibilidad y rendimiento.

## 📁 Estructura de Archivos

```
kolff-dashboard/
├── kolff-landing.html          # Página principal (completa, all-in-one)
├── DESIGN_SYSTEM.md            # Especificaciones del sistema de diseño
├── PAGE_SPECIFICATIONS.md      # Especificaciones técnicas detalladas
└── README_LANDING.md           # Este archivo
```

## 🚀 Inicio Rápido

### Abrir la página
1. Abre `kolff-landing.html` en tu navegador web
2. La página es completamente responsiva (mobile, tablet, desktop)
3. Prueba los links de navegación, botones e interacciones

### Personalización básica
- Colores: Busca las variables CSS en `:root` (líneas 12-62)
- Textos: Busca el contenido en las secciones HTML
- Imágenes: Reemplaza el placeholder en la sección hero

## 🎨 Paleta de Colores

### Colores Primarios
```css
--color-primary: #FFB81C        /* Amarillo KOLFF */
--color-black: #000000          /* Negro */
--color-white: #FFFFFF          /* Blanco */
```

### Escala de Grays
```css
--color-gray-50: #F8F8F8        /* Backgrounds claros */
--color-gray-900: #1A1A1A       /* Backgrounds oscuros */
```

## 📱 Responsiveness

La página se adapta automáticamente a:
- **Desktop**: 1440px+ (2 columnas en hero, 4 en productos)
- **Tablet**: 768px-1023px (1 columna, 2 en productos)
- **Mobile**: 375px-767px (stacked, single column)

Prueba redimensionando tu navegador o usando DevTools (F12 → Toggle device toolbar)

## 🧩 Componentes Principales

### 1. Header / Navegación
- Fijo en top, sticky
- Links smooth scroll a secciones
- Menú responsive (toggle en mobile)

**HTML**:
```html
<header class="header">
  <div class="container">
    <div class="header-content">
      <div class="logo">K KOLFF</div>
      <nav class="nav">
        <ul class="nav-menu">
          <li><a href="#productos">Productos</a></li>
          <!-- ... -->
        </ul>
      </nav>
    </div>
  </div>
</header>
```

### 2. Sección Hero
- Gradient background con decoraciones
- 2 columnas (desktop), 1 (mobile)
- CTA buttons principales

### 3. Productos
- Grid 4 columnas que se adapta
- Cards con hover effects
- Cada producto es una card reutilizable

**Añadir un nuevo producto**:
```html
<div class="producto-card">
  <div class="producto-icon">🔌</div>
  <h3>Nuevo Producto</h3>
  <p>Descripción...</p>
  <button class="btn btn-primary">Más Información</button>
</div>
```

### 4. Botones
Tres estilos disponibles:

```html
<!-- Primario (amarillo) -->
<button class="btn btn-primary">Conocer Soluciones</button>

<!-- Secundario (border black) -->
<button class="btn btn-secondary">Agendar Demo</button>

<!-- Light (blanco) -->
<button class="btn btn-light">Iniciar Sesión</button>
```

### 5. Formulario de Contacto
- Campos: Nombre, Email, Empresa, Mensaje
- Validación básica HTML5
- Styles oscuros (black background)

## ✨ Características Especiales

### Smooth Scrolling
Los links de navegación hacen scroll suave a las secciones:
```html
<a href="#productos">Productos</a>  <!-- Scrollea a #productos -->
```

### Decoraciones CSS
- Gradientes radiales sutiles
- Bordes animados en cards
- Transform effects en hover

### Accesibilidad (WCAG AA)
- Focus states visibles (outline 2px)
- Contraste de color 4.5:1+
- Semantic HTML
- Labels en formularios

## 🔧 Personalización Avanzada

### Cambiar colores primarios
Edita estas variables en CSS:
```css
:root {
    --color-primary: #FFB81C;      /* Cambiar aquí */
    --color-black: #000000;
}
```

### Modificar tipografía
```css
--font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Ajustar espaciado
```css
--space-80: 80px;   /* Padding de secciones */
--space-24: 24px;   /* Padding de container */
```

### Añadir nueva sección
1. Copia una sección existente (ej: `.productos`)
2. Cambia el ID (#ubicaciones)
3. Modifica el contenido
4. Añade link en nav: `<a href="#tu-seccion">Tu Sección</a>`

## 🎯 Funcionalidades JavaScript

### 1. Smooth Scroll
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```

### 2. Button Hover Effects
```javascript
btn.addEventListener('mouseenter', function() {
  this.style.transform = 'translateY(-2px)';
});
```

### 3. Form Submission
```javascript
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por tu mensaje.');
  form.reset();
});
```

### 4. Mobile Menu Toggle
```javascript
mobileMenuToggle.addEventListener('click', function() {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
```

## 📊 Estructura HTML

```
<body>
  <header class="header">        <!-- Navegación fija -->
  <section class="hero">          <!-- Hero principal -->
  <section class="productos">     <!-- Grid de 4 productos -->
  <section class="valores">       <!-- 3 valores: INSPIRED, GENUINE, TRUSTED -->
  <section class="ubicaciones">   <!-- 6 países -->
  <section class="contacto">      <!-- Formulario y info de contacto -->
  <footer class="footer">         <!-- Links, copyright, social -->
</body>
```

## 🔗 Secciones con Anchor Links

- `#productos` → Sección de productos
- `#valores` → Sección de valores
- `#ubicaciones` → Sección de ubicaciones
- `#contacto` → Sección de contacto

Úsalos en la navegación o en enlaces internos.

## 💾 Guardar Cambios

### En editor de código
1. Abre `kolff-landing.html` en VS Code/Sublime/etc
2. Edita el contenido HTML o CSS
3. Guarda (Ctrl+S)
4. Recarga el navegador (F5)

### En navegador
1. Abre las DevTools (F12)
2. Edita en la pestaña Elements
3. Los cambios son temporales (se pierden al recargar)

## 🌐 Despliegue

### Opción 1: GitHub Pages
```bash
git add kolff-landing.html
git commit -m "Add KOLFF landing page"
git push origin main
```
Accede a: `https://tu-usuario.github.io/kolff-dashboard/kolff-landing.html`

### Opción 2: Vercel/Netlify
Sube la carpeta `kolff-dashboard/` a Vercel o Netlify y obtén URL automática.

### Opción 3: Servidor web
Copia `kolff-landing.html` a tu servidor web y accede via URL.

## 🧪 Testing

### Responsive Design
- Abre DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Prueba: Mobile (375px), Tablet (768px), Desktop (1440px)

### Navegación
- Haz click en cada link del menú
- Verifica smooth scroll
- Comprueba que los anchor links funcionan

### Botones
- Hover: deben subir y mostrar sombra
- Click: deben responder
- Focus: outline visible (accesibilidad)

### Formulario
- Intenta enviar sin completar (validación)
- Completa y envía
- Verifica mensaje de confirmación

### Accesibilidad
- Presiona Tab: navega por elementos
- Focus outline debe ser visible
- Contraste de colores: OK (4.5:1+)

## 🐛 Troubleshooting

### Los links no funcionan
- Verifica que los `href="#seccion"` coincidan con los `id` de las secciones
- Ejemplo: `<a href="#productos">` debe apuntar a `<section id="productos">`

### Estilos no se aplican
- Limpia caché (Ctrl+Shift+Del)
- Recarga página (Ctrl+F5)
- Verifica que el CSS esté en la sección `<style>` del `<head>`

### Mobile se ve roto
- Asegúrate que el viewport meta está presente:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Prueba con DevTools device emulation

### Formulario no envía
- Es normal (es un demo sin backend)
- Modifica `form.addEventListener('submit')` para integrar servicio real
- Opciones: Formspree, Netlify Forms, tu API personal

## 📚 Recursos

- **Diseño**: DESIGN_SYSTEM.md (paleta, tipografía, componentes)
- **Especificaciones**: PAGE_SPECIFICATIONS.md (layout, responsive, detalles)
- **Figma**: https://www.figma.com/files/project/581195860
- **Colores**: #FFB81C (primary), #000000 (black)
- **Font**: Helvetica / Arial fallback

## 📞 Contacto KOLFF

- Teléfono: +56 2 2570 6300
- Website: www.kolff.cl
- Email: info@kolff.cl

## 📄 Licencia

Prototipo profesional KOLFF 2024. Todos los derechos reservados.

---

**Versión**: 1.0
**Fecha**: 2024
**Última actualización**: Abril 2024

¡Gracias por usar la Landing Page de KOLFF!

# KOLFF Landing Page - Especificaciones Técnicas

## 1. ESTRUCTURA DE PÁGINA

### Frame Principal: "Web - KOLFF Landing"
Ancho: 1440px (Desktop), 768px (Tablet), 375px (Mobile)
Altura: Full scroll (variable según contenido)

---

## 2. SECCIONES DETALLADAS

### SECCIÓN 1: HEADER / NAVEGACIÓN
**Altura**: 80px (desktop), 64px (mobile)
**Position**: Fixed top, z-index 20
**Background**: #FFFFFF
**Border**: 1px bottom #E5E5E5

**Componentes**:
- Logo: "K" badge (#FFB81C bg) + "KOLFF" text
- Nav menu (4 items): Productos, Valores, Ubicaciones, Contacto
- Botón: "Iniciar Sesión" (btn-light)
- Mobile toggle: ☰ (visible solo mobile)

**Comportamiento**:
- Links smooth scroll a secciones (anchor)
- Underline animation on hover
- Sticky en scroll
- Mobile: collapse menu (display toggle)

---

### SECCIÓN 2: HERO SECTION
**Padding**: 80px 24px (desktop), 64px 24px (tablet), 48px 16px (mobile)
**Background**: Linear gradient 135deg #F8F8F8 → #FFFFFF
**Decorative elements**:
- Radial gradient circle (top-right): #FFB81C @ 8% opacity
- Radial gradient circle (bottom-left): #000000 @ 3% opacity

**Grid**: 2 columnas (desktop), 1 columna (tablet/mobile)
**Gap**: 64px (desktop), 48px (tablet)

**Left Column (Text)**:
- Tagline: "energy.quality" (color primary, uppercase, 12px, letter-spacing 0.1em)
- H1: "Soluciones de Energía Confiable para tu Negocio" (48px, color black)
- Description: "En KOLFF, ofrecemos..." (18px, color text-secondary, line-height 1.75)
- CTA Buttons:
  - Primary button: "Conocer Soluciones"
  - Secondary button: "Agendar Demo"
  - Flex row (desktop), column (mobile)

**Right Column (Visual)**:
- Container: 500px height (desktop), 400px (tablet), 300px (mobile)
- Background: Linear gradient 135deg #FFB81C → #FFD652
- Decoration: Large "K" watermark (300px, opacity 8%)
- Border radius: 8px
- Shadow: shadow-lg
- Content: Placeholder para imagen/video

**Interacciones**:
- Buttons: hover translateY(-2px), shadow-md
- Scroll reveal animations (opcional)

---

### SECCIÓN 3: PRODUCTOS
**Padding**: 80px 24px (desktop), 64px 24px (tablet), 48px 16px (mobile)
**Background**: #FFFFFF
**ID**: productos (para anchor link)

**Header**:
- H2: "Nuestros Productos" (centered, max-width 800px)
- Subtitle: "Tecnología probada y confiable..."
- Margin-bottom: 64px

**Grid**: 4 columnas (desktop), 2 (tablet), 1 (mobile)
**Gap**: 32px

**Cards** (4 productos):
1. UPS - Respaldo Eléctrico (⚡)
2. Iluminación de Emergencia (💡)
3. Baterías Industriales (🔋)
4. Equipos Fotovoltaicos (☀️)

**Estructura de Card**:
- Container: white bg, border 1px #E5E5E5, padding 40px, border-radius 8px
- Top accent: 4px bar #FFB81C (transform: scaleX 0 → 1 on hover)
- Icon: 80x80px, linear gradient #FFB81C → #FFD652, centered emoji 40px
- Title: H3, color black, margin-bottom 12px
- Description: p tag, min-height 60px, color text-secondary
- Button: btn-primary full width

**Hover States**:
- Border color → primary
- Box shadow: shadow-md
- Transform: translateY(-8px)
- Top bar: scaleX animation

---

### SECCIÓN 4: VALORES
**Padding**: 80px 24px, background #F8F8F8
**ID**: valores

**Header**: Same structure as Productos

**Grid**: 3 columnas (desktop), 1 (mobile)
**Gap**: 32px

**Valor Items** (3):
1. INSPIRED ✨
2. GENUINE ✓
3. TRUSTED 🛡️

**Estructura**:
- Icon: 100x100px, black bg, primary color emoji, border-radius 8px
- Title: H3 uppercase, letter-spacing 0.05em, color black
- Description: p tag, color text-secondary, min 60 chars

**Alignment**: Center for all items

---

### SECCIÓN 5: UBICACIONES
**Padding**: 80px 24px, background #FFFFFF
**ID**: ubicaciones

**Header**: Same as Productos/Valores

**Grid**: 3 columnas (desktop), 2 (tablet), 1 (mobile)
**Gap**: 32px

**Ubicación Cards** (6 países):
- Chile 🇨🇱
- Perú 🇵🇪
- Argentina 🇦🇷
- Brasil 🇧🇷
- España 🇪🇸
- EE.UU 🇺🇸

**Estructura**:
- Container: bg #F8F8F8, border 1px #E5E5E5, padding 32px, border-radius 8px
- Flag emoji: 48px, centered
- Country name: H4, color black
- Cities: p tag, color text-secondary, font-size 14px
- Text alignment: center

**Hover**:
- Background: white
- Border color: primary
- Shadow: shadow-sm

---

### SECCIÓN 6: CONTACTO
**Padding**: 80px 24px, background #000000, color white
**ID**: contacto

**Layout**: 2 columnas (desktop), 1 (mobile)
**Gap**: 64px (desktop), 48px (tablet)

**Left Column (Info)**:
- H2: "Ponte en Contacto" (color white)
- Intro text: p tag, color gray-200, 18px, margin-bottom 24px
- Contact info items (3):

  **Item structure**:
  - Icon box: 48x48px, bg primary, border-radius 4px, centered emoji, color black
  - Text: H4 white + link primary
  - Items:
    1. ☎️ +56 2 2570 6300
    2. 🌐 www.kolff.cl
    3. 📧 info@kolff.cl

**Right Column (Form)**:
- Container: bg rgba(255,255,255,0.05), padding 40px, border-radius 8px, border 1px rgba(255,255,255,0.1)
- Fields:
  - Nombre (text input)
  - Email (email input)
  - Empresa (text input)
  - Mensaje (textarea, min-height 120px)
- Button: btn-primary full width
- Form styling:
  - Input bg: rgba(255,255,255,0.1)
  - Border: rgba(255,255,255,0.2)
  - Focus: bg rgba(255,255,255,0.15), border primary
  - Placeholder: rgba(255,255,255,0.5)

---

### SECCIÓN 7: FOOTER
**Padding**: 48px 24px 24px, background #1A1A1A, color gray-200
**Border-top**: 1px rgba(255,255,255,0.1)

**Content Grid**: 4 columnas (desktop), 2 (tablet), 1 (mobile)
**Gap**: 48px

**Sections**:
1. **Logo + Description**
   - Logo: K badge + "KOLFF"
   - Text: "Soluciones de energía confiable desde 1990."

2. **Productos**
   - Links a 4 productos

3. **Empresa**
   - Sobre Nosotros
   - Ubicaciones
   - Contacto
   - Careers

4. **Legal**
   - Política de Privacidad
   - Términos de Servicio
   - Cookies
   - Compliance

**Footer Bottom**:
- Border-top: 1px rgba(255,255,255,0.1)
- Padding-top: 24px
- Layout: space-between (desktop), column center (mobile)
- Left: Copyright text (color gray-400, 14px)
- Right: Social icons (4: Facebook, Instagram, LinkedIn, Twitter)
  - 40x40px icons
  - bg rgba(255,255,255,0.1)
  - border-radius 4px
  - Hover: bg primary, color black

---

## 3. RESPONSIVE BREAKPOINTS

### Desktop: 1440px+
- Hero: 2 columnas
- Productos: 4 columnas
- Valores: 3 columnas
- Ubicaciones: 3 columnas
- Contacto: 2 columnas
- Footer: 4 columnas
- Container padding: 24px

### Tablet: 768px - 1023px
- Hero: 1 columna
- Productos: 2 columnas
- Valores: 3 columnas (o 2 si espacio)
- Ubicaciones: 2 columnas
- Contacto: 1 columna
- Footer: 2 columnas
- Container padding: 24px

### Mobile: 375px - 767px
- Todas las secciones: 1 columna
- Hero buttons: column layout, full width
- Container padding: 16px
- Header height: 64px
- Nav: hidden, mobile toggle
- Secciones padding: 48px 16px

---

## 4. INTERACCIONES Y ANIMACIONES

### Transiciones Base
- Duración: 250ms cubic-bezier(0.4, 0, 0.2, 1)
- Aplicadas a: hover states, color changes, transforms

### Hover Effects
- Botones: translateY(-2px), shadow aumenta
- Cards: border color → primary, shadow-md, translateY(-8px)
- Links: color → darker shade
- Icons: slight scale up (1.05)

### Focus States (Accessibility)
- Outline: 2px solid #FFB81C
- Offset: 2px
- Aplicado a: buttons, links, form inputs

### Scroll Behaviors
- Smooth scroll en links anchor (scroll-behavior: smooth)
- Optional: fade-in animations en cards (Intersection Observer)

---

## 5. ELEMENTOS ESPECIALES

### Decoraciones Background
- Hero: Radial gradients sutiles como decoración
- Gradientes: 8-10% opacity para no interferir con contenido
- Border radius: 50% para círculos

### Iconografía
- Emojis para productos/valores (emoji como fallback visual)
- O: SVG icons (más profesional, si se integran)

### Grid System
- Base: 8px
- Gaps entre elementos: múltiplos de 8
- Padding: múltiplos de 8

---

## 6. ESTADOS ESPECIALES

### Loading States
- Botones: disabled state, opacity 0.6, cursor not-allowed

### Error States
- Form inputs: border-color red, error message text
- Color: #DC2626 (si se implementa)

### Success States
- Form submission: success message, color green #16A34A

---

## 7. ACCESIBILIDAD

### ARIA Labels
- Buttons: descriptive text
- Icons: aria-label
- Form: labels asociados a inputs

### Keyboard Navigation
- Tab order lógico
- Enter en botones
- Escape para cerrar modales (si aplica)

### Color Contrast
- Texto: 4.5:1 mínimo (WCAG AA)
- Verificado en todos los combos de color

---

## 8. PERFORMANCE

### Optimizaciones
- Lazy loading de imágenes (si aplica)
- Minificación de CSS/JS
- Fuentes system fonts (Helvetica) o font-display: swap

### Critical Path
- CSS inline en head
- Defer scripts no críticos
- No render-blocking resources

---

## 9. COMPATIBILITY

### Browsers Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks
- CSS Grid fallback a floats (si necesario)
- Gradient fallback colors
- Emoji como fallback visual (no crítico)

---

**Versión**: 1.0
**Última actualización**: 2024
**Framework**: HTML/CSS/JavaScript vanilla

# 🎨 KOLFF Figma - Quick Setup Guide

**Status:** Ready for Manual Implementation (Due to Figma Starter Plan Limitations)

---

## 📋 What You Need to Do

The Figma files are created but limited by Starter plan restrictions (max 3 pages per file). However, everything is **completely specified and ready to build**.

### Option A: Semi-Automated (Recommended - 30 min)
Run the provided script to get detailed specifications:

```bash
# Install dependencies (if needed)
npm install

# Generate detailed specs (requires FIGMA_TOKEN env var)
FIGMA_TOKEN=your_figma_token node scripts/populate-figma.js

# Or just view the manual guide
node scripts/populate-figma.js --help
```

This will output a complete checklist for manual implementation in Figma UI.

### Option B: Manual Implementation (45 min)
Scroll to **"MANUAL IMPLEMENTATION CHECKLIST"** below and follow step by step.

---

## 🔗 Your Figma Files

### Design System
- **URL:** https://www.figma.com/design/5HbOaQzK37mC3cvf019fL6
- **Pages:** 4 (Colors, Typography, Components, Brand Guidelines)
- **Time:** ~15 minutes

### Landing Page
- **URL:** https://www.figma.com/design/egLcQXf9INNbtH9qRmyA4Z
- **Sections:** 7 (Header, Hero, Products, Values, Locations, Contact, Footer)
- **Time:** ~30 minutes

---

## ✅ MANUAL IMPLEMENTATION CHECKLIST

### DESIGN SYSTEM (5HbOaQzK37mC3cvf019fL6)

#### Page 1: Colors
- [ ] Create 120x120px square, fill **#FFB81C** (yellow)
  - Add text below: "Primary Yellow | #FFB81C | Pantone 1235 C | RGB(255,184,28)"
- [ ] Create 120x120px square, fill **#000000** (black)
  - Add text below: "Secondary Black | #000000 | Pantone Black | RGB(0,0,0)"
- [ ] Add 6 more color swatches with labels:
  - **#FFF8E1** - Yellow Light (backgrounds)
  - **#2D2D2D** - Dark Gray (secondary text)
  - **#F4F4F4** - Light Gray (backgrounds)
  - **#16A34A** - Success (green)
  - **#DC2626** - Error (red)
  - **#EA580C** - Warning (orange)

#### Page 2: Typography
- [ ] Add text element: "H1 - Page Title (48px Bold)"
  - Set font: Helvética
  - Set size: 48px
  - Set weight: Bold (700)
- [ ] Add text element: "H2 - Section Title (36px Bold)"
  - Set size: 36px, weight: Bold
- [ ] Add text element: "H3 - Subsection (28px Medium)"
  - Set size: 28px, weight: Medium (500)
- [ ] Add text element: "Body - Standard text (16px Regular)"
  - Set size: 16px, weight: Regular (400)
- [ ] Add text element: "Small text (14px Regular)"
  - Set size: 14px, weight: Regular
- [ ] Add text element: "Caption - Labels (12px Light)"
  - Set size: 12px, weight: Light (300)

#### Page 3: Components
- [ ] **Primary Button**
  - Create rectangle: 200px × 48px
  - Fill: **#FFB81C**
  - Corner radius: 8px
  - Add text: "Primary Button" (16px bold black centered)
  - Hover state: Change fill to **#FFC947**

- [ ] **Secondary Button**
  - Create rectangle: 200px × 48px
  - Fill: **#000000**
  - Corner radius: 8px
  - Add text: "Secondary Button" (16px bold white centered)
  - Hover state: Change fill to **#1A1A1A**

- [ ] **Outline Button**
  - Create rectangle: 200px × 48px
  - Fill: Transparent
  - Stroke: 2px **#FFB81C**
  - Corner radius: 8px
  - Add text: "Outline Button" (16px bold yellow centered)

- [ ] **Card Component**
  - Create rectangle: 280px × 200px
  - Fill: **#FFFFFF**
  - Stroke: 1px **#E2E8F0** (light gray)
  - Corner radius: 12px
  - Shadow: `0 4px 16px rgba(0,0,0,0.12)`
  - Add label: "Card (Default)"

- [ ] **Input Field**
  - Create rectangle: 320px × 44px
  - Fill: **#FFFFFF**
  - Stroke: 1px **#E5E7EB**
  - Corner radius: 6px
  - Padding: 10px 12px
  - Add placeholder text: "Input field..."

- [ ] **Spacing Scale** (visual reference)
  - Create 6 rectangles showing spacing:
    - 4px (xs)
    - 8px (sm)
    - 16px (md)
    - 24px (lg)
    - 32px (xl)
    - 48px (2xl)
  - Label each with size

#### Page 4: Brand Guidelines
- [ ] Add text block with company info:
  ```
  KOLFF ®
  Company: KOLFF - Soluciones de Energía Confiable
  Founded: 1990
  CEO: Eduardo Cordero
  Tagline: "energy.quality"
  ```

- [ ] Add 3 value sections (dark cards):
  ```
  INSPIRED ✨
  Innovación y excelencia

  GENUINE ✓
  Compromiso y calidad

  TRUSTED 🛡️
  Confiabilidad total
  ```

- [ ] Add product list (7 items):
  ```
  1. ⚡ Respaldo Eléctrico UPS
  2. 💡 Iluminación de Emergencia LED
  3. 🔋 Baterías Industriales
  4. ☀️ Equipos Fotovoltaicos
  5. 🎆 Iluminación Profesional Robusta
  6. 🚗 Soluciones Electromovilidad
  7. 🔧 Servicio Técnico
  ```

- [ ] Add global presence (6 countries):
  ```
  🇨🇱 Chile - Santiago, Quilicura
  🇵🇪 Perú - Lima, San Isidro
  🇦🇷 Argentina - Buenos Aires
  🇧🇷 Brasil - São Paulo
  🇪🇸 España - Madrid
  🇺🇸 EE.UU - Fort Lauderdale, Florida
  ```

---

### LANDING PAGE (egLcQXf9INNbtH9qRmyA4Z)

#### Section 1: Header (Y: 0, Height: 80px)
- [ ] Create rectangle: 1280px × 80px, fill **#000000**
- [ ] Add "KOLFF" logo (40px white text, left-aligned)
- [ ] Add navigation menu items (white text, center):
  - "Productos | Valores | Ubicaciones | Contacto"
- [ ] Add "Iniciar Sesión" button (right-aligned):
  - 120px × 44px, fill **#FFB81C**, text black bold, radius 8px

#### Section 2: Hero (Y: 80, Height: 600px)
- [ ] Create rectangle: 1280px × 600px
  - Fill: Gradient (135deg, from **#000000** to **#1A1A1A**)
- [ ] Add tagline text: "energy.quality"
  - Font: Helvética, 14px, color **#FFB81C**, centered
- [ ] Add main heading: "Soluciones de Energía Confiable para tu Negocio"
  - Font: Helvética, 48px bold, color **#FFFFFF**, centered
- [ ] Add description: "Energía confiable para impulsar tu negocio..."
  - Font: Helvética, 16px, color **#CCCCCC**, centered
- [ ] Add 2 buttons:
  - "Conocer Soluciones" (yellow button, primary style)
  - "Agendar Demo" (outline black button)
- [ ] Add hero image placeholder: 500px × 300px, gradient fill

#### Section 3: Products (Y: 680, Height: 500px)
- [ ] Create container: 1280px × 500px, fill **#FFFFFF**
- [ ] Create 4 product cards (280px × 300px each), grid layout, gap 24px:

  **Card 1:**
  - [ ] Icon: ⚡ (48px)
  - [ ] Title: "Respaldo Eléctrico UPS" (H3, 28px bold)
  - [ ] Description: "Sistemas UPS profesionales..." (14px gray)
  - [ ] Hover: Border changes to **#FFB81C**, shadow increases

  **Card 2:**
  - [ ] Icon: 💡
  - [ ] Title: "Iluminación de Emergencia LED"
  - [ ] Description: "LED de alta eficiencia..."
  - [ ] Hover effect same

  **Card 3:**
  - [ ] Icon: 🔋
  - [ ] Title: "Baterías Industriales"
  - [ ] Description: "Energía de respaldo..."
  - [ ] Hover effect same

  **Card 4:**
  - [ ] Icon: ☀️
  - [ ] Title: "Equipos Fotovoltaicos"
  - [ ] Description: "Soluciones solares..."
  - [ ] Hover effect same

#### Section 4: Values (Y: 1180, Height: 400px)
- [ ] Create container: 1280px × 400px, fill **#F9F9F9**
- [ ] Create 3 value cards (380px × 300px each), centered, gap 32px:

  **Card 1: INSPIRED**
  - [ ] Background: **#000000**
  - [ ] Icon: ✨ (white, 48px)
  - [ ] Title: "INSPIRED" (white, 28px bold)
  - [ ] Description: "Innovación y excelencia en cada solución" (white, 14px)

  **Card 2: GENUINE**
  - [ ] Background: **#000000**
  - [ ] Icon: ✓ (white, 48px)
  - [ ] Title: "GENUINE" (white, 28px bold)
  - [ ] Description: "Compromiso con la calidad y autenticidad" (white, 14px)

  **Card 3: TRUSTED**
  - [ ] Background: **#000000**
  - [ ] Icon: 🛡️ (white, 48px)
  - [ ] Title: "TRUSTED" (white, 28px bold)
  - [ ] Description: "Confiabilidad y soporte técnico 24/7" (white, 14px)

#### Section 5: Locations (Y: 1580, Height: 600px)
- [ ] Create container: 1280px × 600px, fill **#FFFFFF**
- [ ] Create 6 location cards (380px × 250px each), grid 3 columns, gap 24px:

  - [ ] **Card 1:** 🇨🇱 Chile | Santiago, Quilicura
  - [ ] **Card 2:** 🇵🇪 Perú | Lima, San Isidro
  - [ ] **Card 3:** 🇦🇷 Argentina | Buenos Aires
  - [ ] **Card 4:** 🇧🇷 Brasil | São Paulo
  - [ ] **Card 5:** 🇪🇸 España | Madrid
  - [ ] **Card 6:** 🇺🇸 EE.UU | Fort Lauderdale, Florida

  Each card:
  - [ ] Background: **#FFFFFF**
  - [ ] Border: 1px **#E0E0E0**
  - [ ] Padding: 24px
  - [ ] Flag emoji: 32px
  - [ ] Country name: 24px bold
  - [ ] City: 16px gray

#### Section 6: Contact (Y: 2180, Height: 500px)
- [ ] Create container: 1280px × 500px, fill **#000000**
- [ ] Divide into 2 columns (640px each)

  **Left Column: Contact Info**
  - [ ] Create column: 640px × 500px, fill **#000000**
  - [ ] Add text (white):
    - "📞 +56 2 2570 6300" (16px)
    - "🌐 www.kolff.cl" (16px)
    - "✉️ info@kolff.cl" (16px)
  - [ ] Spacing: 32px between items

  **Right Column: Contact Form**
  - [ ] Create column: 640px × 500px, fill **#1A1A1A**
  - [ ] Input fields (spacing 16px):
    - [ ] Name: 580px × 44px, placeholder "Nombre"
    - [ ] Email: 580px × 44px, placeholder "Correo"
    - [ ] Company: 580px × 44px, placeholder "Empresa"
  - [ ] TextArea: 580px × 120px, placeholder "Mensaje"
  - [ ] Submit button: 580px × 48px, fill **#FFB81C**, text "Enviar" black bold

#### Section 7: Footer (Y: 2680, Height: 300px)
- [ ] Create container: 1280px × 300px, fill **#000000**
- [ ] Create 4 columns (320px each):

  **Column 1: Brand**
  - [ ] Logo: "KOLFF ®" (white, 24px bold)
  - [ ] Tagline: "energy.quality" (yellow, 14px)

  **Column 2: Products**
  - [ ] Links (white, 14px):
    - UPS
    - Lighting
    - Batteries
    - Solar
    - Professional Lighting

  **Column 3: Company**
  - [ ] Links (white, 14px):
    - About Us
    - Careers
    - Blog
    - News

  **Column 4: Legal**
  - [ ] Links (white, 14px):
    - Privacy Policy
    - Terms & Conditions
    - Cookie Policy

  **Bottom: Copyright & Social**
  - [ ] Copyright text (gray, 12px): "© 2026 KOLFF ®. All rights reserved."
  - [ ] Social icons (24px, white):
    - Facebook
    - Instagram
    - LinkedIn
    - Twitter

---

## ⏱️ Estimated Time

| Task | Time |
|------|------|
| Design System (4 pages) | 15 min |
| Landing Page (7 sections) | 30 min |
| **Total** | **45 min** |

---

## 🚀 After Completion

Once manually populated:

1. **Verify all elements are visible** in both files
2. **Test responsiveness** at different viewport widths (1280px, 768px, 375px)
3. **Create component instances** for reusability
4. **Share files** with development team
5. **Export design tokens** for CSS/code implementation

---

## 📚 Reference Files

- **DESIGN_SYSTEM.md** - Complete specifications document
- **PAGE_SPECIFICATIONS.md** - Detailed technical specs
- **FIGMA_IMPLEMENTATION_GUIDE.md** - In-depth guide
- **kolff-landing.html** - Visual reference (already live online)
- **COMPONENTS.html** - Component library reference

---

## 🤖 Automated Script

For developers who want to automate this:

```bash
FIGMA_TOKEN=your_token node scripts/populate-figma.js
```

This generates a formatted checklist for manual completion.

---

## ✅ Verification Checklist

After completing manual setup:

- [ ] Design System file has all colors defined with hex codes
- [ ] Typography shows all font weights and sizes
- [ ] Components display buttons, cards, inputs
- [ ] Landing Page header is fixed/sticky
- [ ] All 7 sections visible and properly spaced
- [ ] Hover states visible on product cards
- [ ] Contact form fields properly aligned
- [ ] Footer has all 4 columns and social icons
- [ ] Colors match KOLFF palette (#FFB81C, #000000)
- [ ] Spacing follows 8px base unit

---

**Need help?** Check the FIGMA_IMPLEMENTATION_GUIDE.md for step-by-step visual guidance.


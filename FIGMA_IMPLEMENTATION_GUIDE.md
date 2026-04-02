# 📐 FIGMA Implementation Guide - KOLFF Design System & Landing Page

**Última actualización:** 2026-04-01
**Status:** Ready for Manual Implementation

---

## 📌 Figma Files

### Design System File
- **URL:** https://www.figma.com/design/5HbOaQzK37mC3cvf019fL6
- **Status:** File created, ready for content
- **Pages to create:** 4 main pages

### Landing Page File
- **URL:** https://www.figma.com/design/egLcQXf9INNbtH9qRmyA4Z
- **Status:** File created, ready for content
- **Sections:** 7 main sections

---

## 🎨 DESIGN SYSTEM - Implementation Steps

### Page 1: Colors

**Frame:** 1280 x 800px

#### Primary Color
- **Name:** Primary Yellow
- **Hex:** #FFB81C
- **RGB:** 255, 184, 28
- **Pantone:** 1235 C
- **Use:** Brand primary, buttons, highlights
- **Visual:** Create 120x120px square swatch

#### Secondary Color
- **Name:** Secondary Black
- **Hex:** #000000
- **RGB:** 0, 0, 0
- **Pantone:** Black
- **Use:** Text, borders, strong elements
- **Visual:** Create 120x120px square swatch

#### Extended Palette
| Color Name | Hex | RGB | Use Case |
|-----------|-----|-----|----------|
| Yellow Light | #FFF8E1 | 255, 248, 225 | Backgrounds |
| Dark Gray | #2D2D2D | 45, 45, 45 | Secondary text |
| Light Gray | #F4F4F4 | 244, 244, 244 | Backgrounds |
| White | #FFFFFF | 255, 255, 255 | Base |

#### Status Colors
- Success: #16A34A
- Error: #DC2626
- Warning: #EA580C
- Info: #0284C7

---

### Page 2: Typography

**Frame:** 1280 x 800px

#### Font Family: Helvética
**Fallback:** Arial, sans-serif

#### Font Weights
- Thin: 100
- Light: 300
- Roman (Regular): 400
- Medium: 500
- Bold: 700

#### Type Scale

| Level | Size | Weight | Line Height | Use Case |
|-------|------|--------|------------|----------|
| H1 | 48px | Bold (700) | 1.2 | Page titles |
| H2 | 36px | Bold (700) | 1.2 | Section titles |
| H3 | 28px | Medium (500) | 1.3 | Subsections |
| Body | 16px | Regular (400) | 1.6 | Paragraphs |
| Small | 14px | Regular (400) | 1.5 | Secondary |
| Caption | 12px | Light (300) | 1.4 | Labels |

**Letter Spacing:**
- Headlines: 0.5px
- Body: 0.3px
- Captions: 0.2px

---

### Page 3: Components

**Frame:** 1280 x 1200px

#### Button Styles

**Primary Button**
- Background: #FFB81C
- Text: #000000, Bold
- Padding: 12px 24px
- Border Radius: 8px
- States:
  - Default: #FFB81C
  - Hover: #FFC947
  - Active: #F5A800
  - Disabled: #E0E0E0

**Secondary Button**
- Background: #000000
- Text: #FFFFFF, Bold
- Padding: 12px 24px
- Border Radius: 8px

**Outline Button**
- Background: Transparent
- Border: 2px #FFB81C
- Text: #FFB81C
- Padding: 10px 22px

#### Cards
- Background: #FFFFFF
- Border: 1px #E2E8F0
- Border Radius: 12px
- Padding: 20px
- Shadow: 0 4px 16px rgba(0,0,0,0.12)

#### Input Fields
- Background: #FFFFFF
- Border: 1px #E5E7EB
- Border Radius: 6px
- Padding: 10px 12px
- Focus: Border #FFB81C, outline 2px

#### Spacing Scale (8px base unit)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

---

### Page 4: Brand Guidelines

**Frame:** 1280 x 800px

#### KOLFF Brand Information
- **Company Name:** KOLFF ®
- **Tagline:** "energy.quality"
- **Founded:** 1990
- **CEO:** Eduardo Cordero

#### Brand Values
1. **INSPIRED** - Innovación y excelencia
2. **GENUINE** - Compromiso y calidad
3. **TRUSTED** - Confiabilidad

#### 7 Products/Services
1. ⚡ Respaldo Eléctrico UPS
2. 💡 Iluminación de Emergencia LED
3. 🔋 Baterías Industriales
4. ☀️ Equipos Fotovoltaicos
5. 🎆 Iluminación Profesional Robusta
6. 🚗 Soluciones Electromovilidad
7. 🔧 Servicio Técnico

#### Global Presence (6 Countries)
- 🇨🇱 Chile (Casa Matriz) - Santiago, Quilicura
- 🇵🇪 Perú - Lima, San Isidro
- 🇦🇷 Argentina - Buenos Aires
- 🇧🇷 Brasil - São Paulo
- 🇪🇸 España - Madrid
- 🇺🇸 EE.UU - Fort Lauderdale, Florida

#### Contact
- **Phone:** +56 2 2570 6300
- **Website:** www.kolff.cl
- **Email:** info@kolff.cl

---

## 🌐 LANDING PAGE - Implementation Steps

**Viewport:** 1280px wide (Desktop)

### Section 1: Header/Navigation
- **Height:** 80px
- **Background:** #000000
- **Logo:** KOLFF (40px height)
- **Links:** Productos | Valores | Ubicaciones | Contacto
- **Button:** "Iniciar Sesión" (Primary Yellow)
- **Position:** Sticky/Fixed top

---

### Section 2: Hero Section
- **Height:** 600px
- **Background:** Gradient (135deg: #000000 to dark gradient)
- **Layout:** Centered content

**Content:**
- **Tagline:** "energy.quality" (Small, yellow text)
- **H1:** "Soluciones de Energía Confiable para tu Negocio"
- **Description:** (Subtitle text, white)
- **CTAs:**
  - "Conocer Soluciones" (Primary Yellow button)
  - "Agendar Demo" (Secondary Black outline)
- **Visual:** 500px hero image/placeholder with gradient

---

### Section 3: Products
- **Height:** 500px
- **Background:** #FFFFFF
- **Grid:** 4 columns (responsive: 2 cols mobile, 1 col)
- **Gap:** 24px

**Product Cards (280 x 300px):**
1. ⚡ **Respaldo Eléctrico UPS**
2. 💡 **Iluminación de Emergencia LED**
3. 🔋 **Baterías Industriales**
4. ☀️ **Equipos Fotovoltaicos**

**Card Style:**
- Background: #FFFFFF
- Border: 1px #E0E0E0
- Border Radius: 12px
- Padding: 24px
- Icon: 48px top
- Title: H3 black
- Hover: Border becomes #FFB81C, shadow increases

---

### Section 4: Brand Values
- **Height:** 400px
- **Background:** #F9F9F9
- **Grid:** 3 columns
- **Gap:** 32px

**Value Cards (380 x 300px):**
1. **INSPIRED** ✨
   - Background: Black
   - Icon: 48px white
   - Text: White centered

2. **GENUINE** ✓
   - Background: Black
   - Icon: 48px white
   - Text: White centered

3. **TRUSTED** 🛡️
   - Background: Black
   - Icon: 48px white
   - Text: White centered

---

### Section 5: Global Locations
- **Height:** 600px
- **Background:** #FFFFFF
- **Grid:** 3 columns (responsive: 2 cols tablet, 1 col mobile)
- **Gap:** 24px

**Location Cards (380 x 250px):**
| Country | Flag | City |
|---------|------|------|
| Chile | 🇨🇱 | Santiago, Quilicura |
| Perú | 🇵🇪 | Lima, San Isidro |
| Argentina | 🇦🇷 | Buenos Aires |
| Brasil | 🇧🇷 | São Paulo |
| España | 🇪🇸 | Madrid |
| EE.UU | 🇺🇸 | Fort Lauderdale |

**Card Style:**
- Background: #FFFFFF
- Border: 1px #E0E0E0
- Padding: 24px
- Flag emoji: 32px
- Country name: H3
- City: Body text

---

### Section 6: Contact
- **Height:** 500px
- **Background:** #000000
- **Layout:** 2 columns (Contact info | Contact Form)

**Left Column (Contact Info):**
- Background: Black
- **Phone:** +56 2 2570 6300
- **Website:** www.kolff.cl
- **Email:** info@kolff.cl
- **Icons:** Each with 24px icon

**Right Column (Contact Form):**
- Fields:
  - Name (Input, full width)
  - Email (Input, full width)
  - Company (Input, full width)
  - Message (Textarea, full width, 120px height)
- **Submit Button:** Primary Yellow
- **Background:** Slightly lighter black (#1A1A1A)

---

### Section 7: Footer
- **Height:** 300px
- **Background:** #000000
- **Layout:** 4 columns grid

**Column 1: Logo & Brand**
- KOLFF Logo
- "energy.quality"
- Tagline

**Column 2: Products**
- UPS
- Lighting
- Batteries
- Solar
- Professional Lighting
- Electromobility
- Technical Service

**Column 3: Company**
- About
- Careers
- Blog
- News

**Column 4: Legal**
- Privacy Policy
- Terms & Conditions
- Contact

**Bottom:**
- Copyright text (center)
- Social media icons (5px gap):
  - Facebook
  - Instagram
  - LinkedIn
  - Twitter

---

## 📏 Responsive Breakpoints

### Mobile (375px)
- Single column layout
- Full width - 16px padding
- Navigation: Hamburger menu
- Product grid: 1 column
- Value cards: Stack vertical
- Location grid: 1 column
- Hero height: 400px

### Tablet (768px)
- 2 column grids where applicable
- Navigation: Expanded menu
- Product grid: 2 columns
- Value cards: 2-1 layout
- Location grid: 2 columns

### Desktop (1280px)
- Full 4-column/3-column grids
- Maximum width: 1280px
- Centered container with side padding

---

## 🎯 Implementation Checklist

### Design System
- [ ] Page 1: Colors (swatches + specifications)
- [ ] Page 2: Typography (examples + scale)
- [ ] Page 3: Components (buttons, cards, inputs)
- [ ] Page 4: Brand Guidelines (values, products, locations)

### Landing Page
- [ ] Header (navigation + logo)
- [ ] Hero Section (tagline + H1 + CTAs)
- [ ] Products Section (4 cards)
- [ ] Values Section (3 value cards)
- [ ] Locations Section (6 country cards)
- [ ] Contact Section (info + form)
- [ ] Footer (4 columns + social)

### Assets
- [ ] Logos (use SVG from assets/ folder)
- [ ] Icons (emoji or custom icons)
- [ ] Colors (apply from palette)
- [ ] Typography (Helvética family)

---

## 🚀 Next Steps

1. **Open Design System file:** https://www.figma.com/design/5HbOaQzK37mC3cvf019fL6
2. **Follow page-by-page implementation** from sections above
3. **Apply colors, typography, and spacing** as specified
4. **Create reusable components** for buttons, cards, inputs
5. **Open Landing Page file:** https://www.figma.com/design/egLcQXf9INNbtH9qRmyA4Z
6. **Build sections** following the layout specifications
7. **Use design system components** from the other file
8. **Test responsive layouts** at all breakpoints

---

## ✅ Quality Checklist

- [ ] All colors match (#FFB81C, #000000)
- [ ] Typography uses Helvética family
- [ ] Spacing is multiple of 8px
- [ ] Components have 4 states (default, hover, active, disabled)
- [ ] WCAG AA contrast ratios met (4.5:1 minimum)
- [ ] Responsive layouts work at 375px, 768px, 1280px+
- [ ] All text is properly aligned and readable
- [ ] Icons are consistent size (16px, 24px, 32px, 48px)
- [ ] Shadows follow elevation system
- [ ] Animations smooth (250ms ease)

---

**Status:** Ready for Implementation
**Estimated Time:** 4-6 hours for complete Figma setup
**Support Files:** DESIGN_SYSTEM.md | PAGE_SPECIFICATIONS.md | kolff-landing.html (reference)


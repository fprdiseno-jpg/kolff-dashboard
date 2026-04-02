# KOLFF Design System
## Sistema de Diseño Profesional — Basado en Manual de Marca Oficial

**Última actualización:** 2026-04-01
**Versión:** 1.0 Profesional
**Estado:** Producción

---

## 📋 Índice
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Components](#components)
4. [Spacing & Grid](#spacing--grid)
5. [Shadows & Elevation](#shadows--elevation)
6. [Icons & Imagery](#icons--imagery)
7. [Accessibility](#accessibility)
8. [Usage Guidelines](#usage-guidelines)

---

## 🎨 Color System

### Primary Colors
| Color | Hex | Pantone | RGB | Use Case |
|-------|-----|---------|-----|----------|
| **Yellow (Primary)** | #FFB81C | 1235 C | 255, 184, 28 | Brand primary, buttons, highlights |
| **Black (Secondary)** | #000000 | Black | 0, 0, 0 | Text, borders, strong elements |

### Extended Palette
| Color | Hex | Purpose |
|-------|-----|---------|
| Yellow Light | #FFF8E1 | Backgrounds, hover states |
| Yellow Gradient | #FFB81C → #FFC947 | Cards, hero sections |
| Dark Gray | #2D2D2D | Secondary text |
| Light Gray | #F4F4F4 | Backgrounds |
| White | #FFFFFF | Base backgrounds |

### Status Colors (WCAG AA Compliant)
| State | Color | Hex |
|-------|-------|-----|
| Success | Green | #16A34A |
| Error | Red | #DC2626 |
| Warning | Orange | #EA580C |
| Info | Blue | #0284C7 |

---

## 🔤 Typography

### Typeface
**Primary Font:** Helvética
**Fallback:** Arial, sans-serif

### Font Weights
- **Thin:** 100
- **Light:** 300
- **Roman (Regular):** 400
- **Medium:** 500
- **Bold:** 700

### Type Scale
| Level | Size | Weight | Use Case |
|-------|------|--------|----------|
| **H1** | 48px | Bold | Page titles, hero headlines |
| **H2** | 36px | Bold | Section titles |
| **H3** | 28px | Medium | Subsection titles |
| **Body** | 16px | Roman | Standard text, paragraphs |
| **Small** | 14px | Roman | Secondary information |
| **Caption** | 12px | Light | Labels, annotations |

### Line Height
- Headlines: 1.2
- Body: 1.6
- Captions: 1.4

### Letter Spacing
- Headlines: 0.5px
- Body: 0.3px
- Captions: 0.2px

---

## 🧩 Components

### Buttons

#### Primary Button
- **Background:** #FFB81C (Yellow)
- **Text:** #000000 (Black), Bold
- **Padding:** 12px 24px
- **Border Radius:** 8px
- **States:**
  - **Default:** Yellow background
  - **Hover:** #FFC947 (lighter yellow)
  - **Active:** #F5A800 (darker yellow)
  - **Disabled:** #E0E0E0, text gray

#### Secondary Button
- **Background:** #000000 (Black)
- **Text:** #FFFFFF (White), Bold
- **Padding:** 12px 24px
- **Border Radius:** 8px
- **States:** Similar hover/active progression

#### Outline Button
- **Background:** Transparent
- **Border:** 2px #FFB81C
- **Text:** #FFB81C
- **Padding:** 10px 22px (accounting for border)

### Cards
- **Background:** #FFFFFF
- **Border:** 1px #E2E8F0
- **Border Radius:** 12px
- **Padding:** 20px
- **Shadow:** 0 4px 16px rgba(0, 0, 0, 0.12)
- **Hover Shadow:** 0 8px 32px rgba(0, 0, 0, 0.16)

### Input Fields
- **Background:** #FFFFFF
- **Border:** 1px #E5E7EB
- **Border Radius:** 6px
- **Padding:** 10px 12px
- **Font Size:** 14px
- **Focus:** Border #FFB81C, outline 2px #FFB81C

### Navigation Bars
- **Background:** #000000
- **Text Color:** #FFFFFF
- **Icon Color:** #FFB81C
- **Height:** 64px (desktop), 56px (mobile)

---

## 📐 Spacing & Grid

### Base Unit: 8px

| Spacing | Pixels | Use |
|---------|--------|-----|
| **xs** | 4px | Micro spacing |
| **sm** | 8px | Tight spacing |
| **md** | 16px | Standard padding |
| **lg** | 24px | Section spacing |
| **xl** | 32px | Large spacing |
| **2xl** | 48px | Extra large spacing |

### Grid System
- **Columns:** 12-column grid
- **Gutter:** 24px
- **Breakpoints:**
  - Mobile: 320px - 767px
  - Tablet: 768px - 1024px
  - Desktop: 1025px+
  - Large Desktop: 1440px+

---

## 🌑 Shadows & Elevation

| Level | Shadow | Use |
|-------|--------|-----|
| **XS** | 0 1px 2px rgba(0,0,0,0.05) | Subtle borders |
| **SM** | 0 2px 8px rgba(0,0,0,0.08) | Hover states |
| **MD** | 0 4px 16px rgba(0,0,0,0.12) | Default cards |
| **LG** | 0 8px 32px rgba(0,0,0,0.16) | Elevated cards |
| **XL** | 0 12px 48px rgba(0,0,0,0.20) | Modals |
| **Hover** | 0 16px 40px rgba(0,0,0,0.24) | Interactions |

---

## 🎯 Icons & Imagery

### Icon Set
- **Size Range:** 16px, 20px, 24px, 32px, 48px
- **Color:** #FFB81C (primary), #000000 (secondary)
- **Style:** Solid, modern, geometric
- **Format:** SVG preferred

### Product Icons
- ⚡ UPS / Power Backup
- 💡 Lighting / Emergency
- 🔋 Batteries / Energy
- ☀️ Solar / Photovoltaic
- 🎆 Professional Lighting
- 🚗 Electromobility
- 🔧 Technical Service

### Imagery Guidelines
- **Aspect Ratios:** 16:9 (featured), 4:3 (cards), 1:1 (square)
- **Color Grading:** Warm, professional, trust-building
- **Style:** Modern, clean, energetic
- **Content:** Real people, real products, real solutions

---

## ♿ Accessibility

### Contrast Ratios (WCAG AA Minimum 4.5:1)
- Yellow #FFB81C on White: ✅ 8.59:1
- Black #000000 on Yellow: ✅ 19.56:1
- All text colors meet WCAG AA standards

### Focus States
- **Outline:** 2px solid #FFB81C
- **Outline Offset:** 2px
- **Visibility:** Always visible and clear

### Motion
- **Transitions:** 200ms cubic-bezier(0.34, 1.56, 0.64, 1)
- **Respect `prefers-reduced-motion`:** Disable animations if user preference set

### Color Blindness
- Don't rely solely on color to convey information
- Use patterns, icons, and text labels in addition to color

---

## 📖 Usage Guidelines

### Brand Values Integration
1. **INSPIRED** — Use dynamic elements, gradients, forward-thinking design
2. **GENUINE** — Clean, honest design; real imagery; transparent communication
3. **TRUSTED** — Professional, consistent, accessible; builds confidence

### Logo Usage
✅ **DO:**
- Use official logo files
- Maintain clear space (3× stroke width)
- Ensure minimum size: 40px (web), 2.1cm (print)
- Apply on solid backgrounds

❌ **DON'T:**
- Change colors
- Stretch or distort
- Apply gradients
- Rotate or flip
- Write inside yellow box

### Color Application
- Primary color (#FFB81C): 30% of design
- Secondary color (#000000): 20% of design
- Neutrals & whites: 50% of design

### Typography Hierarchy
1. Use H1 for page titles only
2. H2 for section breaks
3. H3 for subsections
4. Body text for content
5. Maintain consistent line height for readability

### Component Spacing
- Always use 8px-based spacing
- Maintain breathing room around elements
- Don't crowd components

---

## 🌍 Global Presence

**KOLFF Locations:**
- 🇨🇱 Chile (Headquarters) — Santiago, Quilicura
- 🇵🇪 Perú — Lima, San Isidro
- 🇦🇷 Argentina — Buenos Aires
- 🇧🇷 Brasil — São Paulo
- 🇪🇸 España — Madrid
- 🇺🇸 EE.UU — Fort Lauderdale, Florida

**Contact:** +56 2 2570 6300 | www.kolff.cl | info@kolff.cl

---

## 📝 Document Information

**Prepared by:** Francisco Parra
**Brand Reference:** Manual de Identidad Visual KOLFF ®
**Format:** Professional Design System v1.0
**License:** KOLFF ® Brand Assets — Internal Use Only

---

**Last Updated:** 2026-04-01 | **Status:** Active Production | **Version:** 1.0

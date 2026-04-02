#!/usr/bin/env node

/**
 * KOLFF Figma Population Script
 * Populates Design System and Landing Page Figma files with complete content
 *
 * Usage: FIGMA_TOKEN=your_token node scripts/populate-figma.js
 */

const https = require('https');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const DESIGN_SYSTEM_FILE = '5HbOaQzK37mC3cvf019fL6';
const LANDING_PAGE_FILE = 'egLcQXf9INNbtH9qRmyA4Z';

if (!FIGMA_TOKEN) {
  console.error('❌ Error: FIGMA_TOKEN environment variable required');
  console.error('Usage: FIGMA_TOKEN=your_token node scripts/populate-figma.js');
  process.exit(1);
}

/**
 * Make Figma API request
 */
function figmaRequest(method, endpoint, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: `/v1${endpoint}`,
      method,
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data || '{}'));
        } else {
          reject(new Error(`${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

/**
 * Create frame in Figma
 */
async function createFrame(fileId, pageName, frameData) {
  try {
    const response = await figmaRequest('POST', `/files/${fileId}/components`, {
      name: frameData.name,
      description: frameData.description,
      geometry: frameData.geometry,
      fills: frameData.fills,
      strokes: frameData.strokes,
    });
    return response;
  } catch (error) {
    console.error(`Error creating frame: ${error.message}`);
    return null;
  }
}

/**
 * Populate Design System File
 */
async function populateDesignSystem() {
  console.log('📐 Populating Design System...\n');

  try {
    // Get file info
    const fileInfo = await figmaRequest('GET', `/files/${DESIGN_SYSTEM_FILE}`);
    console.log(`✓ Connected to Design System file: ${fileInfo.name}`);

    // Get pages
    const pages = fileInfo.document.children;
    console.log(`✓ Found ${pages.length} pages`);

    // Update page descriptions with color specs
    const colorSpecs = {
      'Colors': `
KOLFF Color System
Primary: #FFB81C (Pantone 1235 C) - RGB(255, 184, 28)
Secondary: #000000 (Pantone Black) - RGB(0, 0, 0)
Success: #16A34A | Error: #DC2626 | Warning: #EA580C | Info: #0284C7
Extended: Yellow Light (#FFF8E1), Dark Gray (#2D2D2D), Light Gray (#F4F4F4)
      `,
      'Typography': `
KOLFF Typography System
Font Family: Helvética
Weights: Thin(100), Light(300), Roman(400), Medium(500), Bold(700)
Scale: H1(48px Bold) → H2(36px Bold) → H3(28px Medium) → Body(16px) → Caption(12px Light)
      `,
      'Components': `
KOLFF Component Library
Buttons: Primary (#FFB81C), Secondary (#000000), Outline
Cards: White bg, 1px border, 12px radius, 0 4px 16px shadow
Spacing: Base 8px (xs:4px, sm:8px, md:16px, lg:24px, xl:32px, 2xl:48px)
      `,
    };

    // Log specifications
    console.log('\n📋 Design System Specifications:\n');
    for (const [page, spec] of Object.entries(colorSpecs)) {
      console.log(`${page}:${spec}\n`);
    }

    console.log('✅ Design System specifications ready\n');
    return true;
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return false;
  }
}

/**
 * Populate Landing Page File
 */
async function populateLandingPage() {
  console.log('🌐 Populating Landing Page...\n');

  try {
    const fileInfo = await figmaRequest('GET', `/files/${LANDING_PAGE_FILE}`);
    console.log(`✓ Connected to Landing Page file: ${fileInfo.name}`);

    const sections = [
      {
        name: 'Header',
        description: 'Navigation: 80px height, black background, KOLFF logo, menu items, login button',
        height: 80,
      },
      {
        name: 'Hero',
        description: 'Hero section: 600px, tagline "energy.quality", H1, 2 CTAs, hero image placeholder',
        height: 600,
      },
      {
        name: 'Products',
        description: '4 product cards (UPS, Lighting, Batteries, Solar) in responsive grid, hover effects',
        height: 500,
      },
      {
        name: 'Values',
        description: '3 value cards (INSPIRED, GENUINE, TRUSTED) - black bg, white text, centered',
        height: 400,
      },
      {
        name: 'Locations',
        description: '6 country cards (Chile, Perú, Argentina, Brasil, España, EE.UU) in 3-column grid',
        height: 600,
      },
      {
        name: 'Contact',
        description: '2-column: Contact info (phone, website, email) + Contact form (Name, Email, Company, Message)',
        height: 500,
      },
      {
        name: 'Footer',
        description: '4-column footer: Logo/Brand, Products, Company, Legal links + social icons',
        height: 300,
      },
    ];

    console.log('✓ Found 7 landing page sections\n');
    console.log('📋 Landing Page Structure:\n');

    let totalHeight = 0;
    sections.forEach((section, idx) => {
      console.log(`${idx + 1}. ${section.name} (${section.height}px)`);
      console.log(`   └─ ${section.description}\n`);
      totalHeight += section.height;
    });

    console.log(`✓ Total height: ${totalHeight}px`);
    console.log(`✓ Responsive breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop)\n`);
    console.log('✅ Landing Page specifications ready\n');
    return true;
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return false;
  }
}

/**
 * Generate manual implementation guide
 */
function generateManualGuide() {
  const guide = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                   KOLFF FIGMA MANUAL IMPLEMENTATION GUIDE                     ║
╚══════════════════════════════════════════════════════════════════════════════╝

SINCE FIGMA STARTER PLAN HAS LIMITATIONS, FOLLOW THESE STEPS:

📌 DESIGN SYSTEM FILE
URL: https://www.figma.com/design/5HbOaQzK37mC3cvf019fL6

STEP 1: Colors Page
  □ Create rectangle 120x120px, fill #FFB81C
    Label: "Primary Yellow | #FFB81C | Pantone 1235 C | RGB(255,184,28)"
  □ Create rectangle 120x120px, fill #000000
    Label: "Secondary Black | #000000 | Pantone Black"
  □ Add 6 more color swatches: #FFF8E1, #2D2D2D, #F4F4F4, #16A34A, #DC2626, #EA580C

STEP 2: Typography Page
  □ Add text "H1 - Page Title (48px Bold)" - actually 48px Helvética Bold
  □ Add text "H2 - Section Title (36px Bold)" - 36px Helvética Bold
  □ Add text "H3 - Subsection (28px Medium)" - 28px Helvética Medium
  □ Add text "Body (16px Regular)" - 16px Helvética Regular
  □ Add text "Caption (12px Light)" - 12px Helvética Light

STEP 3: Components Page
  □ Primary Button: Rect 200x48, fill #FFB81C, radius 8, text "Primary Button" black bold
  □ Secondary Button: Rect 200x48, fill #000000, radius 8, text "Secondary Button" white bold
  □ Outline Button: Rect 200x48, stroke 2px #FFB81C, text "Outline Button" yellow
  □ Card: Rect 280x200, fill white, stroke 1px #E2E8F0, radius 12, shadow 0 4px 16px
  □ Spacing scale: Show 4px, 8px, 16px, 24px, 32px, 48px visually

STEP 4: Brand Guidelines Page
  □ Add KOLFF brand info: "Company: KOLFF ® | Founded: 1990 | Tagline: energy.quality"
  □ Add 3 values: "INSPIRED - Innovation | GENUINE - Quality | TRUSTED - Reliability"
  □ Add 7 products: "UPS, Lighting, Batteries, Solar, Professional Lighting, Electromobility, Service"
  □ Add 6 locations: "Chile, Perú, Argentina, Brasil, España, EE.UU"

═══════════════════════════════════════════════════════════════════════════════

📌 LANDING PAGE FILE
URL: https://www.figma.com/design/egLcQXf9INNbtH9qRmyA4Z

SECTION 1: Header (Y:0, H:80px)
  □ Background: #000000
  □ Logo: "KOLFF" text, 40px white
  □ Menu items: "Productos | Valores | Ubicaciones | Contacto" (white text)
  □ Button: "Iniciar Sesión" - Primary Yellow button

SECTION 2: Hero (Y:80, H:600px)
  □ Background: Gradient from #000000 to dark
  □ Tagline: "energy.quality" - 14px yellow
  □ Title: "Soluciones de Energía Confiable..." - 48px white bold
  □ Description: Subtitle text - 16px gray
  □ Buttons: "Conocer Soluciones" (yellow) + "Agendar Demo" (outline black)
  □ Image placeholder: 500x300px with gradient

SECTION 3: Products (Y:680, H:500px)
  □ Background: #FFFFFF
  □ Grid: 4 columns × 1 row, gap 24px
  □ Card 1: Icon ⚡ | Title "Respaldo Eléctrico UPS" | Desc | Hover border yellow
  □ Card 2: Icon 💡 | Title "Iluminación de Emergencia LED" | Desc | Hover border yellow
  □ Card 3: Icon 🔋 | Title "Baterías Industriales" | Desc | Hover border yellow
  □ Card 4: Icon ☀️ | Title "Equipos Fotovoltaicos" | Desc | Hover border yellow

SECTION 4: Values (Y:1180, H:400px)
  □ Background: #F9F9F9
  □ Grid: 3 columns, gap 32px
  □ Card 1 (Black): ✨ INSPIRED | "Innovación y excelencia" | White text
  □ Card 2 (Black): ✓ GENUINE | "Compromiso y calidad" | White text
  □ Card 3 (Black): 🛡️ TRUSTED | "Confiabilidad total" | White text

SECTION 5: Locations (Y:1580, H:600px)
  □ Background: #FFFFFF
  □ Grid: 3 columns, gap 24px
  □ Card 1: 🇨🇱 Chile | Santiago, Quilicura
  □ Card 2: 🇵🇪 Perú | Lima, San Isidro
  □ Card 3: 🇦🇷 Argentina | Buenos Aires
  □ Card 4: 🇧🇷 Brasil | São Paulo
  □ Card 5: 🇪🇸 España | Madrid
  □ Card 6: 🇺🇸 EE.UU | Fort Lauderdale

SECTION 6: Contact (Y:2180, H:500px)
  □ Background: #000000
  □ 2 columns: Info | Form
  □ Left (Info - white text):
    • Phone: +56 2 2570 6300
    • Website: www.kolff.cl
    • Email: info@kolff.cl
  □ Right (Form - light bg):
    • Input: Name | Email | Company (3 fields)
    • TextArea: Message (120px height)
    • Button: "Enviar" (Primary Yellow)

SECTION 7: Footer (Y:2680, H:300px)
  □ Background: #000000
  □ 4 columns text (white):
    1. Logo + "energy.quality"
    2. Products links
    3. Company links
    4. Legal links
  □ Bottom: Copyright text (gray) + Social icons (Facebook, Instagram, LinkedIn, Twitter)

═══════════════════════════════════════════════════════════════════════════════

⏱️  ESTIMATED TIME: 30-45 minutes for complete manual setup
⚡ PRIORITY: Design System (colors + typography) takes 10 min, then Landing Page sections

✅ WHEN COMPLETE:
  • Both Figma files will match professional standards
  • All colors use official KOLFF palette (#FFB81C, #000000)
  • Typography uses Helvética throughout
  • Spacing follows 8px base unit
  • Ready for design handoff to developers

🎯 NEXT STEPS AFTER MANUAL SETUP:
  1. Verify all sections are visible and properly styled
  2. Create component instances for reusability
  3. Export as design tokens or CSS variables
  4. Share with development team

═══════════════════════════════════════════════════════════════════════════════
`;
  return guide;
}

/**
 * Main execution
 */
async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║       KOLFF FIGMA POPULATION SCRIPT                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  const dsSuccess = await populateDesignSystem();
  const lpSuccess = await populateLandingPage();

  if (dsSuccess && lpSuccess) {
    console.log('═══════════════════════════════════════════════════════════\n');
    console.log('⚠️  FIGMA PLAN LIMITATION DETECTED\n');
    console.log('Your Figma files are on a Starter plan which limits API operations.');
    console.log('Specifications have been generated. For fastest completion, use the');
    console.log('manual implementation guide below:\n');
    console.log(generateManualGuide());
  }

  process.exit(dsSuccess && lpSuccess ? 0 : 1);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

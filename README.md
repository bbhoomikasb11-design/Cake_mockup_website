# Cream On Top — Bespoke Cake Studio (Bengaluru)
> **"More than a cake, it's a feeling."**  
> Premium, scroll-driven, cinematic storytelling website for Neha Gupta's bespoke cake brand *Cream On Top*, based in Bengaluru, India.

---

## 🌟 Tech Stack & Architecture

- **Framework**: React 18 + Vite 6 + TypeScript
- **Styling**: Tailwind CSS with custom design tokens (espresso, cocoa, mocha, cream, sand, blush, rose, bronze, wax-seal burgundy)
- **Smooth Scrolling**: Lenis synced with GSAP ScrollTrigger
- **Transitions & Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond (Light Serif), Pinyon Script (Handwritten Accent), Jost (Geometric Sans)
- **Ordering Architecture**: WhatsApp-first ordering system (`wa.me` pre-filled booking flow with no backend or form database storage required)

---

## 📸 Swapping Images

All photos are stored in `/public/images/` and mapped through the content files in `src/content/`. The layout uses a smart fallback component (`PlaceholderImage.tsx`) that gracefully renders an elegant gradient and filename badge whenever an image file is missing.

### Folder Mapping:
- **Hero Photos**: `/public/images/hero/`
  - `craft.jpg` (Floral petal sculpture)
  - `hero-cake.jpg` (Signature bespoke tier cake)
  - `neha-decorating-swan.jpg` (Neha decorating cakes)
- **About Photos**: `/public/images/about/`
  - `neha-teddy.jpg` (Neha with pink teddy cake)
  - `neha-candy-cake.jpg` (Candy wonderland cake)
  - `neha-multi-cakes.jpg` (Neha surrounded by celebration cakes)
  - `neha-travel-cake.jpg` (Travel & BMW cake)
  - `timeline-1.jpg`, `timeline-2.jpg`, `timeline-3.jpg`, `timeline-4.jpg` (Polaroid journey)
  - `social-initiative.jpg` (Expedition Annapurna charity photo)
  - `award-trophy.png` (BMK Awards trophy cutout)
- **Cake Catalog**: `/public/images/cakes/`
  - `princess-doll.jpg`
  - `fairy-tales.jpg`
  - `quirky-fun.jpg`
  - `indulgence.jpg`
  - `little-joys.jpg`
  - `statement-cakes.jpg`
  - `mens-classics.jpg`
  - `heart-cake.jpg`
- **Gallery & Macro Details**:
  - `/public/images/gallery/` (`grace-in-white.jpg`, `hearts-and-happiness.jpg`, `celebration-1.jpg` to `5.jpg`)
  - `/public/images/details/` (`textures.jpg`, `florals.jpg`, `pearls.jpg`, `figurines.jpg`, `details.jpg`)

To replace any photo, simply drop your JPEG/PNG/WebP file into the corresponding folder matching the filename.

---

## ✏️ Editing Content & Copy

All text and copy is completely decoupled from UI components and stored in `src/content/`:

1. **Brand & Contact Info (`src/content/site.ts`)**:
   - Change WhatsApp number (`whatsappNumber`)
   - Change contact email (`email`)
   - Update Instagram, YouTube, or Pinterest links

2. **The Gateaux Menu & Per-Kg Pricing (`src/content/menu.ts`)**:
   - Edit base prices per kg (e.g. Pineapple ₹1200, Truffle ₹1500, Red Velvet ₹2000)
   - Add new flavours or edit categories
   - Update available weight options

3. **Cake Catalogue (`src/content/cakes.ts`)**:
   - Add, remove, or edit featured cakes and client favourite items
   - Update process steps (Share Idea → We Design → We Craft → You Celebrate)
   - Edit special occasions list

4. **Story & Journey Timeline (`src/content/story.ts`)**:
   - Edit chapters (*The Spark, The Craft, The Woman Behind It*)
   - Update timeline polaroid captions (*The first cake (around 12), 16 & Dreaming...*)
   - Edit *Expedition Annapurna* social initiative details

5. **Achievements & Awards (`src/content/achievements.ts`)**:
   - Lists speaker sessions, awards, and brand collaborations.
   - **Business Rule**: Awards are kept date/year-free with `verified: false` flags until officially confirmed by the client.

6. **Gallery Catalog (`src/content/gallery.ts`)**:
   - Add gallery items, chapter numbers, descriptions, and celebration photos.

---

## 🎂 WhatsApp Order Flow

The order panel (`OrderDrawer.tsx`) collects:
- Name & celebration date (with automatic 7-day advance notice warning if booking date is within 7 days)
- Occasion chips & desired weight
- Flavour selection with dynamic indicative base cost calculation (`weight × flavourRate`)
- Theme idea & cake message
- Pickup vs. Bangalore delivery area

When clicking **"Send on WhatsApp"**, it compiles a structured inquiry and opens:
`https://wa.me/919743008816?text=...`

After sending, the user is presented with a confirmation checklist reminding them to send their reference pictures directly in the chat and complete payment to confirm.

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
npm install

# Start local dev server (default port 5173)
npm run dev

# Compile TypeScript and build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📱 Mobile-First Responsive Design

- **Hero**: Stacked cinematic layout with mobile-optimized CTA and swipe touch controls.
- **3D Coverflow**: Adapts seamlessly to touch swipe cards on mobile devices.
- **Order Panel**: Transitions from a right-side desktop slide-over to a full-screen native mobile bottom sheet.
- **Sticky CTA**: Persistent bottom "Order Now" bar on mobile screens.
- **Flour Particles**: Auto-pauses off-screen and reduces particle count on small viewports to ensure 60fps performance and long battery life.

---

## 🔍 Styleguide & Design Tokens

Visit the hidden route to inspect all tokens, color swatches, button states, polaroid frames, and motion primitives:
`http://localhost:5173/styleguide`

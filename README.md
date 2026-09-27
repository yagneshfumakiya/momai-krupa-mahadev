# Momai Krupa Mahadev — Dhaval Maharaj Website

A premium, modern, spiritually immersive, and fully responsive website for **Dhaval Maharaj (Momai Krupa Mahadev)**, a Vedic Pandit performing Hindu religious ceremonies, Vedic pujas, havans, kathas, yagnas, pran pratishtha, Jyotish services, and Sanatan religious rituals in Ahmedabad, Gujarat, and online globally.

---

## 🌟 Technologies Used

- **Framework**: Next.js (App Router, latest stable)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Custom CSS variables for Indian spiritual aesthetic
- **Icons**: Lucide React
- **Deployment**: Vercel Ready (Hobby plan compliant)

---

## 📁 Project Structure

```text
src/
  app/
    page.tsx               # Main assembly page with all sections
    layout.tsx             # Root layout with Google Fonts, SEO metadata & JSON-LD
    globals.css            # Spiritual theme color tokens, scrollbars & animations
    robots.ts              # SEO Robots configuration
    sitemap.ts             # Dynamic sitemap generation
  components/
    Header.tsx             # Devotional announcement bar & translucent sticky navbar
    Hero.tsx               # Immersive hero section with real ceremony photos & CTAs
    About.tsx              # 2-column biography & core values of Dhaval Maharaj
    Services.tsx           # All 19 Vedic services with filter tabs & WhatsApp CTAs
    KathaSaptah.tsx        # Dedicated Bhagwat, Shiv, Ram & Satyanarayan Katha section
    PranPratishtha.tsx     # Dedicated Mandir Seva & Pran Pratishtha section
    PitruSeva.tsx          # Dignified Pitru Tarpan & Shraddh Vidhi section
    VastuSeva.tsx          # Vastu Shanti, Griha Pravesh & Commercial Vastu section
    OnlineSeva.tsx         # Remote Vedic Seva (India & Abroad: USA, UK, Canada, etc.)
    Jyotish.tsx            # Kundli Vishleshana & Shubh Muhurat section
    Gallery.tsx            # Seva Gallery with 14 filter categories & Lightbox modal
    Contact.tsx            # Interactive booking form & direct WhatsApp generator
    Sankalp.tsx            # Devotional closing vision & greetings
    Footer.tsx             # Multi-column footer with quick links & back-to-top
    FloatingWhatsAppBar.tsx# Fixed mobile contact bar
  data/
    services.ts            # All 19 services configuration data
    gallery.ts             # Gallery image entries, captions & categories data
    navigation.ts          # Nav links, phone numbers & site information
  lib/
    whatsapp.ts            # Helper function for WhatsApp chat links
public/
  images/                  # Real ceremony photos provided by user
    hero/
    about/
    pran-pratishtha/
    katha/
    vastu/
    pitru/
    gallery/               # Subfolders for each gallery category
```

---

## 🚀 How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Run Production Server Locally**:
   ```bash
   npm start
   ```

---

## 🖼️ How to Add and Replace Gallery Photos

1. Place your photo file (WebP or JPG format recommended) in the appropriate category subfolder inside `public/images/gallery/`:
   - `puja/`
   - `katha/`
   - `saptah/`
   - `yagna/`
   - `havan/`
   - `rudrabhishek/`
   - `pitru/`
   - `mataji/`
   - `ganesh/`
   - `vastu/`
   - `mandir/`
   - `pran-pratishtha/`
   - `satyanarayan/`
   - `gor-bapa/`
   - `other/`

2. Open `src/data/gallery.ts` and add an entry to the `galleryImages` array:
   ```ts
   {
     id: "puja-03",
     src: "/images/gallery/puja/puja-03.jpg",
     alt: "Description of the ceremony",
     caption: "Vedic Puja Ceremony",
     category: "Puja",
     location: "Ahmedabad, Gujarat"
   }
   ```

---

## 📞 How to Update Phone Numbers & Contact Info

Open `src/data/navigation.ts` and update the `phones` array:
```ts
export const siteConfig = {
  phones: [
    { number: '8141306110', formatted: '+91 81413 06110', whatsapp: '918141306110', primary: true },
    { number: '8200206189', formatted: '+91 82002 06189', whatsapp: '918200206189', primary: false },
  ],
  // ...
};
```

---

## ☁️ How to Deploy to Vercel

1. Push this repository to GitHub/GitLab.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"New Project"** and import your repository.
4. Keep framework preset as **Next.js**.
5. Click **"Deploy"**. No additional environment variables are required.

---

## 🏷️ Business Information & Placeholders

- **Brand Name**: Momai Krupa Mahadev
- **Main Identity**: Dhaval Maharaj (Dhaval Sanjaybhai Rajayguru)
- **Primary Phone**: 8141306110
- **Secondary Phone**: 8200206189
- **Target Location**: Ahmedabad, Gujarat & Online Globally
- **Domain Placeholder**: `https://momaikrupamahadev.com` (Update canonical URL in `layout.tsx` and `sitemap.ts` when custom domain is mapped).

# Kashe Energy Website

A premium, production-ready website for **Kashe Energy** - an automotive energy and lubricant brand. Built with modern web technologies and featuring a sophisticated design system inspired by WLT Design aesthetics.

<img width="2090" height="1436" alt="homepage" src="https://github.com/user-attachments/assets/63c576cf-974f-46db-919e-0e7eb2f7a9af" />


## Preview

- **Home**: Landing page with hero, bento grid features, product showcase, and trust indicators
- **Products**: Filterable product catalog with category navigation
- **Product Detail**: Individual product pages with specs, benefits, and related products
- **About**: Company story, mission, values, and milestones
- **Applications**: Industry use cases and application categories
- **Resources**: Downloadable datasheets and technical documentation
- **Contact**: Premium contact form with inquiry types

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Inter (Google Fonts) |
| **Images** | Next.js Image (optimized) |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── products/          # Products listing & detail
│   ├── about/             # About page
│   ├── applications/      # Applications page
│   ├── resources/         # Resources page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Header, Footer, Container, Logo, Menu
│   ├── sections/          # Hero, Bento Grid, Product Showcase, etc.
│   └── ui/                # shadcn/ui components (Button, Card, Tabs, etc.)
├── data/
│   └── products.ts        # Product catalog data
├── lib/
│   └── utils.ts           # Utility functions
└── styles/
    └── globals.css        # Global styles & Tailwind config
```

## Features

### Design System
- Premium glass-morphism effects with backdrop blur
- Warm cream (#FFEFE6) and burnt orange (#DF4418) color palette
- Dark charcoal (#333333) for text and backgrounds
- 20px border radius design tokens
- Responsive bento grid layouts

### Animations
- Scroll-triggered reveal animations (fade + rise)
- Parallax scrolling effects
- Hover lift and scale transitions
- Staggered children animations
- Smooth page transitions
- `prefers-reduced-motion` support

### Performance
- Optimized images with Next.js Image component
- Lazy loading for non-critical sections
- Font optimization with `display: swap`
- Static page generation where possible
- Turbopack for fast development builds

### Components
- **Header**: Sticky navigation with glass-morphism background
- **Hero**: Full-screen with animated backgrounds and CTAs
- **Bento Grid**: Flexible card layouts for features
- **Product Cards**: Hover effects with image zoom
- **Trust Strip**: Certification and quality badges
- **Contact Form**: Validated form with multiple inquiry types
- **Footer**: Links, contact info, and social media

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd kashe-energy-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Configuration

### Environment Variables

No environment variables required for basic setup. For production, configure:

- `NEXT_PUBLIC_SITE_URL` - Your production URL (optional)

### Remote Images

External images from Unsplash are configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
}
```

## Customization

### Colors

Edit `src/styles/globals.css` or `tailwind.config.ts`:

```css
--color-primary: #FFEFE6;  /* Warm cream */
--color-accent: #DF4418;   /* Burnt orange */
--color-background: #333333; /* Dark charcoal */
```

### Products

Edit `src/data/products.ts` to add/modify products:

```typescript
{
  slug: "product-slug",
  name: "Product Name",
  category: "Category",
  categorySlug: "category-slug",
  shortDescription: "Brief description",
  description: "Full description",
  benefits: ["Benefit 1", "Benefit 2"],
  specs: { "Spec Key": "Spec Value" },
  applications: ["Application 1"],
  image: "https://...",
  featured: true,
  datasheet: "/datasheets/product.pdf"
}
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

### Other Platforms

```bash
npm run build
npm run start
```

Compatible with any Node.js hosting platform (AWS, DigitalOcean, Railway, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

---

## 🤝 Hire / Work with me:

- 🔗 **Fiverr** (custom builds, integrations, performance): [fiverr.com/s/EgxYmWD](https://www.fiverr.com/s/EgxYmWD)
- 🌐 **Mejba Personal Portfolio**: [mejba.me](https://www.mejba.me)
- 🏢 **Ramlit Limited**: [ramlit.com](https://www.ramlit.com)
- 🎨 **ColorPark Creative Agency**: [colorpark.io](https://www.colorpark.io)
- 🛡 **xCyberSecurity Global Services**: [xcybersecurity.io](https://www.xcybersecurity.io)

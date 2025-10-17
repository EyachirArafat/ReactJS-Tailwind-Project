# 🚀 Modern SaaS Landing Page

A stunning, modern SaaS landing page built with cutting-edge web technologies. Features a vibrant color scheme, smooth animations, and fully responsive design.

![Landing Page Preview](https://img.shields.io/badge/Preview-Live_Demo-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8)

## ✨ Features

### 🎨 Design
- **Vibrant OKLCH Color System** - Modern color palette with perfect contrast
- **Glass Morphism Effects** - Sleek, modern UI elements
- **Animated Gradients** - Eye-catching background animations
- **Dark/Light Mode** - Seamless theme switching
- **Fully Responsive** - Perfect on all devices

### 🛠 Technical
- **Tailwind CSS v4** - Latest version with no config file needed
- **Framer Motion** - Smooth, performant animations
- **shadcn/ui Components** - High-quality, accessible UI components
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React 18** - Latest React features

### 📦 Components
- **Dynamic Header** - Sticky navigation with dropdown menus
- **Hero Section** - Animated hero with floating elements
- **Features Grid** - Interactive feature showcase
- **Testimonials Carousel** - Auto-playing customer reviews
- **Pricing Tables** - Interactive pricing comparison
- **Stats Counter** - Animated number counters
- **FAQ Accordion** - Expandable FAQ section
- **Integrations Grid** - Partner/tool showcase
- **Comparison Table** - Feature comparison matrix
- **CTA Sections** - Multiple call-to-action areas
- **Footer** - Comprehensive footer with newsletter

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/EyachirArafat/modern-saas-landing-01.git
cd modern-saas-landing
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 📁 Project Structure

```
modern-saas-landing/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/        # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── FeaturesSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── PricingSection.tsx
│   │       ├── FAQSection.tsx
│   │       ├── StatsSection.tsx
│   │       ├── IntegrationsSection.tsx
│   │       ├── ComparisonSection.tsx
│   │       └── CTASection.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── assets/              # Images and static files
│   ├── app.css              # Global styles with Tailwind v4
│   ├── App.tsx              # Main app component
│   └── main.tsx             # App entry point
├── public/                  # Public assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Color Scheme

### Light Theme
- **Primary**: Vibrant Purple `oklch(0.55 0.25 275)`
- **Secondary**: Bright Teal `oklch(0.65 0.18 185)`
- **Accent**: Coral Pink `oklch(0.70 0.20 20)`

### Dark Theme
- **Primary**: Neon Purple `oklch(0.65 0.28 275)`
- **Secondary**: Neon Teal `oklch(0.70 0.20 185)`
- **Accent**: Bright Coral `oklch(0.75 0.22 20)`

## 🔧 Customization

### Update Colors
Edit the OKLCH color values in `src/app.css`:

```css
:root {
  --primary: oklch(0.55 0.25 275);    /* Your primary color */
  --secondary: oklch(0.65 0.18 185);  /* Your secondary color */
  --accent: oklch(0.70 0.20 20);      /* Your accent color */
}
```

### Add New Sections
1. Create a new component in `src/components/sections/`
2. Import and add to `src/App.tsx`

### Modify Content
All text content can be found in respective component files. Simply update the text, images, or data arrays.

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM rendering
- `typescript` - Type safety
- `vite` - Build tool

### Styling
- `tailwindcss` - Utility-first CSS (v4)
- `tailwindcss-animate` - Animation utilities

### UI Components
- `@radix-ui/*` - Headless UI components
- `class-variance-authority` - Component variants
- `clsx` - Class name utility
- `tailwind-merge` - Merge Tailwind classes

### Animation
- `framer-motion` - Animation library
- `react-intersection-observer` - Scroll animations

### Icons
- `lucide-react` - Icon library

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --dir=dist
```

### GitHub Pages
```bash
npm run build
npm run deploy
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_PUBLIC_KEY=your_public_key
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the amazing component library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Radix UI](https://www.radix-ui.com/) - For accessible UI primitives

## 📧 Contact

If you have any questions or feedback, please don't hesitate to reach out to me on [Email](mailto:me.eyachirarafat@gmail.com).

Project Link: [GitHub](https://github.com/EyachirArafat/modern-saas-landing-01)

## 🔗 Live Demo

[View Live Demo](https://degic-platform.vercel.app)

---

<div align="center">
  Made with ❤️ using React, TypeScript, and Tailwind CSS
</div>
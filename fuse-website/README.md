# Fuse Website

The official website for Fuse - a comprehensive platform for intelligent agents, incident management, and collaborative workflows.

## Overview

This directory contains the code for the Fuse website, which serves as the main landing page, documentation hub, and user onboarding portal for the Fuse platform.

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. Navigate to the website directory:
   ```bash
   cd fuse-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
fuse-website/
├── README.md              # This file
├── next-seo.config.ts     # SEO configuration
├── package.json           # Dependencies and scripts
├── next.config.ts         # Next.js configuration
├── public/                # Static assets
│   └── diagrams/          # Diagram placeholders
├── src/                   # Source code
│   ├── app/               # Next.js App Router pages
│   │   ├── demo/          # Demo page
│   │   ├── legal/         # Legal pages (privacy, terms)
│   │   ├── thank-you/     # Thank you page
│   │   ├── globals.css    # Global styles with Fuse branding
│   │   ├── layout.tsx     # Root layout with fonts and SEO
│   │   └── page.tsx       # Main landing page
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   │   ├── EarlyAccess.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── AgentFlow.tsx
│   │   └── ui/            # shadcn/ui components
│   └── lib/               # Utility functions
└── tsconfig.json          # TypeScript configuration
```

## Features

- 🏠 **Landing Page** - Product overview with hero section, narrative, and features
- 📊 **Interactive Agent Flow** - React Flow visualization of Fuse's agent coordination
- 🎨 **Modern Design** - Dark theme with Fuse brand colors (violet #7C3AED, blue #2563EB)
- 📱 **Responsive** - Mobile-first design with Tailwind CSS
- ⚡ **Performance** - Next.js 15 with App Router, optimized images, and animations
- ♿ **Accessible** - Semantic HTML, focus states, and reduced motion support
- 🔍 **SEO Optimized** - next-seo integration with Open Graph and Twitter cards

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React
- **Animation**: Framer Motion (reduced motion aware)
- **Flow Visualization**: React Flow
- **SEO**: next-seo
- **Analytics**: Vercel Analytics
- **Language**: TypeScript

## Brand Colors

- **Primary**: #7C3AED (violet)
- **Accent**: #2563EB (blue)
- **Background**: #0b0b10 (dark)
- **Foreground**: #f1f5f9 (light)

## Pages

- `/` - Main landing page
- `/demo` - Interactive demo with agent flow visualization
- `/thank-you` - Post-form submission page
- `/legal/privacy` - Privacy policy
- `/legal/terms` - Terms of service

## Customization

### Updating Brand Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 262 83% 58%; /* #7C3AED - violet */
  --accent: 217 91% 60%;  /* #2563EB - blue */
  --background: 248 19% 6%; /* #0b0b10 - dark */
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and use it in `src/app/page.tsx`

### Updating Diagrams

Replace the placeholder SVG files in `public/diagrams/` with your actual diagrams:
- `architecture_of_work.svg`
- `architecture_of_attention.svg`
- `cognitive_horizon.svg`
- `trust_gradient.svg`

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set the project to Next.js
3. Deploy from the main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Google Cloud Run

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Submit a pull request

## Performance Checklist

- ✅ Use `next/image` with priority for above-the-fold images
- ✅ Provide alt text for all images
- ✅ Respect `prefers-reduced-motion`
- ✅ Use responsive Tailwind classes
- ✅ Optimize for Lighthouse scores > 95

## Integration TODOs

- [ ] Replace Tally URL with your real form in `EarlyAccess.tsx`
- [ ] Add real demo video embed (Loom/MP4) in demo page
- [ ] Replace placeholder diagrams with actual designs
- [ ] Hook `/demo` route to gated MVP or Calendly integration
- [ ] Add Stripe Checkout link for early access pricing
- [ ] Update social media links in Footer
- [ ] Add real contact email addresses in legal pages

---

*This website is part of the larger Fuse ecosystem. For more information about other components, see the main repository README.*
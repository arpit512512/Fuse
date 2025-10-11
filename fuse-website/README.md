# Fuse Website

The official website for Fuse - a comprehensive platform for intelligent agents, incident management, and collaborative workflows.

## Overview

This directory contains the code for the Fuse website, which will serve as the main landing page, documentation hub, and user onboarding portal for the Fuse platform.

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
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
fuse-website/
├── README.md          # This file
├── package.json       # Dependencies and scripts
├── next.config.js     # Next.js configuration
├── public/            # Static assets
├── src/               # Source code
│   ├── components/    # React components
│   ├── pages/         # Next.js pages
│   ├── styles/        # CSS/styling files
│   └── utils/         # Utility functions
└── docs/              # Documentation files
```

## Features (Planned)

- 🏠 Landing page with product overview
- 📚 Documentation and guides
- 🚀 User onboarding and tutorials
- 📞 Contact and support information
- 🔗 Integration with Fuse platform

## Technology Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (planned)

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally
4. Submit a pull request

## Deployment

The website will be deployed automatically to Vercel when changes are pushed to the main branch.

---

*This website is part of the larger Fuse ecosystem. For more information about other components, see the main repository README.*

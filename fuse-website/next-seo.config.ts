// next-seo.config.ts
import { type DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Fuse — Your Agentic Counterpart for Engineering Work',
  description:
    'Fuse understands your intent, streams live context from your stack, and plans the next safe actions — so you can move fast and right.',
  openGraph: {
    type: 'website',
    url: 'https://fuse.run',
    title: 'Fuse — Agentic Workspace for Engineers',
    description:
      'Adaptive. Transparent. Alive. The cognitive layer for modern engineering.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Fuse' }],
    siteName: 'Fuse',
  },
  twitter: { cardType: 'summary_large_image' },
};
export default config;


import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pj = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-pj' });

export const metadata: Metadata = {
  metadataBase: new URL('https://fuse.run'),
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
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${pj.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

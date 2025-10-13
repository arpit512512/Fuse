import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '@/../next-seo.config';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pj = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-pj' });

export const metadata: Metadata = {
  metadataBase: new URL('https://fuse.run'),
  title: 'Fuse — Agentic Workspace for Engineers',
  description:
    'Fuse understands your intent, streams live context, and plans the next safe actions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${pj.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <DefaultSeo {...SEO} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

'use client';

import { Hero } from '@/components/sections/Hero';
import { SilenceSection } from '@/components/sections/SilenceSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { HorizonSection } from '@/components/sections/HorizonSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SilenceSection />
      <ArchitectureSection />
      <HorizonSection />
      <CTASection />
      <Footer />
    </main>
  );
}

"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

export function HorizonSection() {
  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: '#111' }}>
      <div className="container mx-auto max-w-6xl text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 shimmer">
            The Cognitive Horizon
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            The cognitive horizon is where human judgment meets machine context —<br />
            and both become sharper for it.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Cognitive Horizon = Human × Machine Symbiosis
            </h3>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Read the Essay
            </Button>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow-cyan px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Watch Fuse Work (90 sec)
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-sm text-gray-400 mb-8">
            → Alert → Plan → Approval → Action → Summary
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-700 bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎞️</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Placeholder: looping demo clip or animated flow diagram
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

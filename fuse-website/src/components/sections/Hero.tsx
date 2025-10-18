"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { WaitingListForm } from "@/components/WaitingListForm";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                Now in Private Beta
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Engineering{" "}
                <span className="text-gray-600">
                  Copilot
                </span>
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Fuse hunts for context in every corner of your systems, learns your workflows by watching how you work, 
                and executes intelligent actions while keeping you in control.
                <span className="font-semibold text-gray-900"> Autopilot for engineers.</span>
              </p>
            </FadeIn>

            {/* Key Benefits */}
            <FadeIn delay={0.6}>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Hunts for context in the deepest corners of your systems</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Learns your workflows by watching how you work</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Proposes intelligent actions while keeping you in control</span>
                </div>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.8} className="pt-4">
              <WaitingListForm variant="compact" className="mb-6" />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={1} className="pt-8">
              <div className="flex items-center gap-8 text-sm text-gray-500">
                <motion.div 
                  className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Enterprise Ready</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                    <span className="text-xs font-bold">🔒</span>
                  </div>
                  <span>SOC 2 Compliant</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                    <span className="text-xs font-bold">⚡</span>
                  </div>
                  <span>Real-time</span>
                </motion.div>
              </div>
            </FadeIn>

            {/* Essay Link */}
            <FadeIn delay={1.2} className="pt-6">
              <div className="text-center">
                <a 
                  href="https://arpitc.xyz/blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <span>Read the essay: "The Cognitive Horizon"</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - MVP Screenshot */}
          <div className="relative">
            <FadeIn delay={1.2}>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <img 
                  src="/fuse-images/fuse-mvp-main.png" 
                  alt="Fuse MVP Interface - Autopilot for Engineers"
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
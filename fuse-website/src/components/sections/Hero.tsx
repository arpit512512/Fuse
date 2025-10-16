"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

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
                Engineering Has Outgrown{" "}
                <span className="text-gray-600">
                  Human Bandwidth
                </span>
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Fuse is your agentic counterpart — a live cognitive layer that perceives, plans, and acts alongside you. Move fast and right.
              </p>
            </FadeIn>

            {/* Key Benefits */}
            <FadeIn delay={0.6}>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Connects GitHub, Buildkite, Datadog, Slack</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Human-in-the-loop control</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Learns from your workflow patterns</span>
                </div>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={1} className="pt-8">
              <div className="flex items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">🔒</span>
                  </div>
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">⚡</span>
                  </div>
                  <span>Real-time</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <FadeIn delay={1.2}>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                {/* Mock Terminal */}
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-4">fuse-terminal</span>
                  </div>
                  <div className="space-y-2 text-green-400">
                    <div>$ fuse analyze --context=user-auth-flow</div>
                    <div className="text-gray-300">→ Analyzing GitHub, Buildkite, Datadog...</div>
                    <div className="text-blue-400">→ Found 3 potential issues</div>
                    <div className="text-yellow-400">→ Generating fix plan...</div>
                    <div className="text-green-400">✓ Plan ready for review</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Live Analysis
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Auto-fix Ready
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
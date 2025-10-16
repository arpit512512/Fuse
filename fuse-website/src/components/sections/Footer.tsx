"use client";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6" style={{ backgroundColor: '#0A0A0B' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Fuse — The adaptive agentic workspace for engineers.
              </h3>
              <p className="text-sm text-muted-foreground">
                © 2025 Fuse Technologies, Inc.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="#demo" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Demo
                </Link>
                <Link href="#early" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Early Access
                </Link>
                <Link href="/legal/privacy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="/legal/terms" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-2">
                <a 
                  href="https://twitter.com/fuse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  X (Twitter)
                </a>
                <a 
                  href="https://linkedin.com/company/fuse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://arpitc.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Essay
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
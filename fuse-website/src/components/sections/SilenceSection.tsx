"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

export function SilenceSection() {
  return (
    <section className="grid-bg py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                The Silence Between Systems
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p><span className="text-foreground font-semibold">Dashboards.</span> Logs. Alerts. PRs.</p>
                <p>Each speaks a different language.</p>
                <p>
                  <span className="text-primary font-semibold">Fuse listens across them all</span> — 
                  translating context into safe, explainable next steps.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-foreground">Transparency before action</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span className="text-foreground">Reasoning you can inspect</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                  <span className="text-foreground">Human-in-loop verified execution</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">⚡</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Animated illustration: signals flowing into an "agent core"
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle connection lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M50,50 Q200,100 350,50"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.path
                      d="M50,150 Q200,200 350,150"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <motion.path
                      d="M50,250 Q200,200 350,250"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Machines extend perception; humans preserve direction.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Join the Founding Engineers Program
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Early access to Fuse, direct contact with the founders, and feature priority.
                  <br />
                  <span className="text-primary font-semibold">Limited to 50 teams.</span>
                </p>

                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary to-primary text-black hover:from-secondary/90 hover:to-primary/90 btn-glow px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Join Early Access →
                </Button>
              </motion.div>

              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

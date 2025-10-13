'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, LineChart, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EarlyAccess } from '@/components/sections/EarlyAccess';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-dvh flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(124,58,237,0.25),transparent),radial-gradient(40%_30%_at_90%_10%,rgba(37,99,235,0.25),transparent)]" />
        <div className="container mx-auto max-w-6xl px-6 pt-24 pb-16">
          <Badge className="mb-6">The Cognitive Horizon Edition</Badge>
          <h1 className="text-4xl/tight sm:text-6xl font-semibold tracking-tight">
            Engineering Has Outgrown Human Bandwidth
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Fuse is your agentic counterpart — a live cognitive layer that perceives, plans,
            and acts alongside you. Move fast and right.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#demo">Request a Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#early">Join Early Access</Link>
            </Button>
          </div>

          {/* Hero animation / illustration */}
          <motion.div
            className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border bg-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/diagrams/architecture_of_work.svg"
              alt="Fuse Core connecting GitHub, Buildkite, Datadog, Slack"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <p className="mt-3 text-sm text-muted-foreground">Placeholder visual — replace with your diagram.</p>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="container mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">The Silence Between Systems</h2>
            <p className="mt-4 text-muted-foreground">
              Dashboards, logs, alerts, PRs — each speaks a different language. Fuse listens across
              them all and translates context into safe, explainable next steps.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4" /> Transparency before action</li>
              <li className="flex items-start gap-2"><Brain className="mt-0.5 h-4 w-4" /> Reasoning you can inspect</li>
              <li className="flex items-start gap-2"><Rocket className="mt-0.5 h-4 w-4" /> Human-in-loop verified execution</li>
            </ul>
          </div>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-card">
                <Image
                  src="/diagrams/architecture_of_attention.svg"
                  alt="Architecture of Attention — Perception → Planning → Action → Reflection"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Machines extend perception; humans preserve direction.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PRODUCT: Perception / Planner / Action */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">From Context → Plan → Action</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Fuse isn't a chatbot. It's a system that learns how you work — and works with you.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Perception Agents', desc: 'Stream live context from GitHub, Buildkite, Datadog, Slack, Docs.', icon: LineChart },
              { title: 'Planner Agent', desc: 'Reasons over signals and proposes safe, explainable next steps.', icon: Brain },
              { title: 'Action Agent', desc: 'Executes verified actions with human-in-loop control.', icon: Rocket },
            ].map((c) => (
              <Card key={c.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <c.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(124,58,237,0.25),transparent)]" />
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold">The Cognitive Horizon</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The cognitive horizon is where human judgment meets machine context — and both become
            sharper for it. We're building the next layer of engineering cognition.
          </p>
          <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border bg-card">
            <Image
              src="/diagrams/cognitive_horizon.svg"
              alt="Cognitive Horizon — human + machine symbiosis"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-8">
            <Button asChild variant="ghost">
              <a href="https://arpitc.xyz" target="_blank" rel="noreferrer">Read the Essay</a>
            </Button>
          </div>
        </div>
      </section>

      {/* DEMO anchor */}
      <section id="demo" className="container mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Watch Fuse Work</h2>
        <p className="mt-3 text-muted-foreground">90 seconds — alert → plan → approval → action → summary.</p>
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl border bg-card">
          {/* Swap with real mp4 or Loom embed */}
          <Image src="/diagrams/trust_gradient.svg" alt="Demo placeholder" fill className="object-contain p-6" />
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section id="early" className="bg-gradient-to-br from-primary/10 to-blue-500/10 py-16">
        <EarlyAccess />
      </section>

      <Footer />
    </main>
  );
}

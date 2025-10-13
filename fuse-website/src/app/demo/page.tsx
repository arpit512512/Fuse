import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AgentFlow } from '@/components/sections/AgentFlow';

export default function Demo() {
  return (
    <main className="min-h-dvh bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-semibold mb-4">Fuse Demo</h1>
          <p className="text-muted-foreground text-lg">
            See how Fuse agents coordinate perception, planning, action, and reflection in real-time.
          </p>
        </div>

        <div className="space-y-12">
          {/* Interactive Agent Flow */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Agentic Flow Visualization</h2>
            <AgentFlow />
          </section>

          {/* Demo Video Placeholder */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Live Demo</h2>
            <Card>
              <CardContent className="p-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-card flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Demo video coming soon</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      90 seconds — alert → plan → approval → action → summary
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to try Fuse?</h2>
            <p className="text-muted-foreground mb-6">
              Join the Founding Engineers Program for early access.
            </p>
            <Button asChild size="lg">
              <Link href="/#early">Join Early Access</Link>
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
}


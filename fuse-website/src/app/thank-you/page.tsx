import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ThankYou() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-background">
      <div className="container mx-auto max-w-2xl px-6">
        <Card className="border-primary/30">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-semibold mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-6">
              You've successfully joined the Founding Engineers Program. We'll be in touch soon with early access details.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/demo">View Demo</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}


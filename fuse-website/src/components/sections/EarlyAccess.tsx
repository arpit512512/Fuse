'use client';

import { Card, CardContent } from '@/components/ui/card';

export function EarlyAccess() {
  return (
    <div className="container mx-auto max-w-5xl px-6">
      <Card className="border-primary/30">
        <CardContent className="p-6 sm:p-10">
          <h3 className="text-2xl font-semibold">Join the Founding Engineers Program</h3>
          <p className="mt-3 text-muted-foreground">
            Early access to Fuse, direct contact with the founders, and feature priority.
            Limited to 50 teams.
          </p>
          {/* Tally embed (replace with your form) */}
          <div className="mt-8 aspect-[16/10] w-full overflow-hidden rounded-lg border">
            <iframe
              title="Fuse Early Access"
              src="https://tally.so/r/your-form-id?transparentBackground=1"
              className="h-full w-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


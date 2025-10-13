import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Terms() {
  return (
    <main className="min-h-dvh bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-20">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-semibold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Fuse, you accept and agree to be bound by the terms and 
            provision of this agreement.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of Fuse for personal, 
            non-commercial transitory viewing only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on Fuse are provided on an 'as is' basis. Fuse makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall Fuse or its suppliers be liable for any damages arising out of 
            the use or inability to use the materials on Fuse.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at 
            legal@fuse.run
          </p>
        </div>
      </div>
    </main>
  );
}


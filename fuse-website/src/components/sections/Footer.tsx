import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-6xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          <strong>Fuse</strong> — The adaptive agentic workspace for engineers.
          <div className="text-muted-foreground">© {new Date().getFullYear()} Fuse Technologies, Inc.</div>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/demo">Demo</Link>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}


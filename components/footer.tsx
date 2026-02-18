import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left */}
          <div>
            <p className="text-sm font-bold text-foreground">DBA Bridge</p>
            <p className="mt-1 text-xs text-muted-foreground">
              A product by{" "}
              <a
                href="https://ai2innovate.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:text-primary/80"
              >
                Ai2innovate.io
              </a>
            </p>
          </div>

          {/* Center links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/AI2Innovate/dbabridge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="size-4" />
              Twitter / X
            </a>
            <span className="text-sm text-muted-foreground/50 cursor-default">
              Documentation (coming soon)
            </span>
          </div>

          {/* Right */}
          <div className="max-w-xs text-right">
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              Built by someone who broke production with DMS. Never again.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground/60">
            &copy; 2026 DBA Bridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

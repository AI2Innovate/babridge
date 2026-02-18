import { Button } from "@/components/ui/button"
import { Github, Star } from "lucide-react"

export function OpenSourceSection() {
  return (
    <section id="open-source" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative p-8 md:p-12">
            {/* Subtle background pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,212,170,0.05) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
                MIT License
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
                Free. Open Source. Run It Locally.
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                DBA Bridge is open source under MIT license. Download the desktop
                app (Mac, Windows, Linux) or use the CLI. All core features are
                free. Your data stays on your machine. No cloud account required.
              </p>
              <p className="mb-8 text-sm text-muted-foreground/70">
                Cloud-hosted version available for teams who want managed
                infrastructure. Coming soon.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary hover:text-foreground"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  <Star className="size-4" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

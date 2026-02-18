import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,212,170,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Badge
          variant="outline"
          className="mb-6 border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
        >
          <span className="font-mono">Open Source</span>
          <span className="mx-2 text-muted-foreground">{"·"}</span>
          <span className="font-mono">Coming Soon</span>
        </Badge>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
          Know Exactly What Will Break{" "}
          <span className="text-primary">Before You Migrate</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          DBA Bridge scans your legacy database and tells you every
          incompatibility, every risky stored procedure, every data type
          mismatch — before you touch production.
        </p>

        {/* Terminal-style quote block */}
        <div className="mb-10 w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">
              origin-story.md
            </span>
          </div>
          <div className="px-5 py-5 text-left">
            <p className="text-sm leading-relaxed text-muted-foreground font-mono">
              <span className="text-primary">{">"}</span> I spent weeks migrating
              from Oracle to Postgres using AWS DMS. The migration
              &apos;succeeded.&apos; Then I connected my app and nothing worked.
              Stored procedures silently failed. Data types were wrong. Foreign
              keys broke. There was no report, no explanation. Just a log file and
              a broken app.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-mono">
              <span className="text-primary">{">"}</span> I built DBA Bridge so
              nobody else has to go through that.
            </p>
            <p className="mt-4 text-xs text-foreground font-mono">
              — Darshan,{" "}
              <span className="text-muted-foreground">
                Creator of DBA Bridge
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            onClick={() =>
              document
                .getElementById("waitlist")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join the Waitlist
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary hover:text-foreground"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

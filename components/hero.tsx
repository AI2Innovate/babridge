"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.06,
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
              href="https://github.com/AI2Innovate/dbabridge"
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

import { Database, FileText, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Connect Your Database",
    body: "Point DBA Bridge at your Oracle or SQL Server instance. Read-only connection. Nothing is modified.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Get Your Audit Report",
    body: "In minutes, receive a detailed report of every incompatibility, risk, and required change. Know exactly what you're dealing with.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Migrate With Confidence",
    body: "Use the report to plan. Use the rewriter to fix stored procedures. Run validation after migration to prove it worked.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Three Steps
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div className="absolute top-16 right-[16.7%] left-[16.7%] hidden h-px bg-border md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-6 flex size-14 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <step.icon className="size-6 text-primary" />
              </div>
              <span className="mb-2 text-xs font-medium text-primary font-mono">
                Step {step.number}
              </span>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

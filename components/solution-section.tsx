import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowRightLeft, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Pre-Migration Audit Report",
    body: "Connects to your source database (read-only). Scans every table, stored procedure, trigger, data type, and constraint. Produces a human-readable report: what's clean, what needs rewriting, what has no equivalent. Hand it to your CTO before the migration starts.",
    highlights: [
      "Scans tables, procedures, triggers, constraints",
      "Identifies data type incompatibilities",
      "Detects FK constraint ordering issues",
      "Generates HTML report with severity levels",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Stored Procedure Rewriting",
    body: "Automatically rewrites Oracle PL/SQL and SQL Server T-SQL to Postgres PL/pgSQL. Shows you a side-by-side diff with confidence scores. You review and approve every change. Uses local AI (Ollama) to rewrite stored procedures — your data never leaves your machine.",
    highlights: [
      "PL/SQL to PL/pgSQL conversion",
      "Confidence scores per rewrite",
      "Side-by-side diff review",
      "Local AI — data stays on your machine",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Post-Migration Validation",
    body: "After migration, compares source and target automatically. Row counts, null distributions, constraint status, index presence. Runs sample queries against both databases and diffs the results. Green, amber, or red per table.",
    highlights: [
      "Row count and null distribution checks",
      "Constraint and index verification",
      "Sample query comparison",
      "Green / amber / red status per table",
    ],
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            The Solution
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            What DBA Bridge Does
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            One tool. Three reports. Complete confidence before, during, and
            after migration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
                <ul className="flex flex-col gap-2">
                  {feature.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

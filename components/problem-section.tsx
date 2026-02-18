import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, FileQuestion, ShieldOff } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Migration 'Succeeded' — App Broke Anyway",
    body: "AWS DMS and Azure Migrate report success based on row counts. They don't check stored procedures, data type edge cases, or FK constraint ordering. Your app breaks after cutover.",
  },
  {
    icon: FileQuestion,
    title: "Stored Procedures Are a Black Box",
    body: "Oracle PL/SQL and SQL Server T-SQL don't translate to Postgres automatically. Manual rewriting takes weeks and introduces bugs. Existing tools skip them entirely.",
  },
  {
    icon: ShieldOff,
    title: "No Report, No Evidence, No Rollback Plan",
    body: "After a failed migration, there's no document explaining what went wrong. No audit trail for compliance. No evidence pack for your CTO. Just a log file and a broken deadline.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            The Problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            The Migration Problem Nobody Has Fixed
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <problem.icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-base text-foreground">
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

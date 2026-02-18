import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const migrations = [
  {
    source: "Oracle",
    target: "PostgreSQL",
    status: "launch",
  },
  {
    source: "SQL Server",
    target: "Supabase",
    status: "launch",
  },
  {
    source: "MySQL",
    target: "PostgreSQL",
    status: "soon",
  },
  {
    source: "MongoDB",
    target: "PostgreSQL",
    status: "soon",
  },
]

function DbIcon({ name }: { name: string }) {
  const colors: Record<string, string> = {
    Oracle: "text-red-400",
    PostgreSQL: "text-blue-400",
    "SQL Server": "text-blue-300",
    Supabase: "text-emerald-400",
    MySQL: "text-orange-400",
    MongoDB: "text-green-400",
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
        <span className={`text-sm font-bold font-mono ${colors[name] || "text-foreground"}`}>
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  )
}

export function DatabasesSection() {
  return (
    <section id="databases" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Supported
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Migration Pairs
          </h2>
        </div>

        <div className="mx-auto grid max-w-2xl gap-4">
          {migrations.map((m) => (
            <div
              key={`${m.source}-${m.target}`}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-6 py-4 transition-colors hover:border-primary/30"
            >
              <div className="flex flex-1 items-center gap-4">
                <DbIcon name={m.source} />
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                <DbIcon name={m.target} />
              </div>
              <Badge
                variant={m.status === "launch" ? "default" : "outline"}
                className={
                  m.status === "launch"
                    ? "bg-primary/10 text-primary border-primary/20"
                    : "text-muted-foreground"
                }
              >
                <span className="font-mono text-xs">
                  {m.status === "launch" ? "At Launch" : "Coming Soon"}
                </span>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

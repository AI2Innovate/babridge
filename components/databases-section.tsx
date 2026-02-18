import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

type MigrationStatus = "launch" | "soon" | "planned"
type DbCategory = "Relational" | "NoSQL" | "Vector DB"

interface Migration {
  source: string
  target: string
  status: MigrationStatus
  category: DbCategory
}

const migrations: Migration[] = [
  // Relational
  { source: "Oracle", target: "PostgreSQL", status: "launch", category: "Relational" },
  { source: "SQL Server", target: "PostgreSQL", status: "launch", category: "Relational" },
  { source: "SQL Server", target: "Supabase", status: "launch", category: "Relational" },
  { source: "MySQL", target: "PostgreSQL", status: "soon", category: "Relational" },
  { source: "MariaDB", target: "PostgreSQL", status: "soon", category: "Relational" },
  { source: "IBM Db2", target: "PostgreSQL", status: "planned", category: "Relational" },
  { source: "SQLite", target: "PostgreSQL", status: "planned", category: "Relational" },
  // NoSQL
  { source: "MongoDB", target: "PostgreSQL", status: "soon", category: "NoSQL" },
  { source: "DynamoDB", target: "PostgreSQL", status: "soon", category: "NoSQL" },
  { source: "Cassandra", target: "PostgreSQL", status: "planned", category: "NoSQL" },
  { source: "CouchDB", target: "PostgreSQL", status: "planned", category: "NoSQL" },
  { source: "Firebase", target: "Supabase", status: "planned", category: "NoSQL" },
  // Vector DB
  { source: "Pinecone", target: "pgvector", status: "planned", category: "Vector DB" },
  { source: "Weaviate", target: "pgvector", status: "planned", category: "Vector DB" },
  { source: "Milvus", target: "pgvector", status: "planned", category: "Vector DB" },
]

const categoryOrder: DbCategory[] = ["Relational", "NoSQL", "Vector DB"]

const dbColors: Record<string, string> = {
  Oracle: "text-red-500 dark:text-red-400",
  PostgreSQL: "text-blue-500 dark:text-blue-400",
  "SQL Server": "text-sky-500 dark:text-blue-300",
  Supabase: "text-emerald-500 dark:text-emerald-400",
  MySQL: "text-orange-500 dark:text-orange-400",
  MariaDB: "text-sky-600 dark:text-sky-400",
  "IBM Db2": "text-indigo-500 dark:text-indigo-400",
  SQLite: "text-cyan-600 dark:text-cyan-400",
  MongoDB: "text-green-600 dark:text-green-400",
  DynamoDB: "text-amber-500 dark:text-amber-400",
  Cassandra: "text-teal-500 dark:text-teal-400",
  CouchDB: "text-red-500 dark:text-red-400",
  Firebase: "text-yellow-500 dark:text-yellow-400",
  Pinecone: "text-fuchsia-500 dark:text-fuchsia-400",
  Weaviate: "text-pink-500 dark:text-pink-400",
  Milvus: "text-blue-500 dark:text-blue-400",
  pgvector: "text-blue-500 dark:text-blue-400",
}

const statusConfig: Record<MigrationStatus, { label: string; className: string }> = {
  launch: {
    label: "At Launch",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  soon: {
    label: "Coming Soon",
    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  planned: {
    label: "Planned",
    className: "text-muted-foreground",
  },
}

function DbIcon({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-9 items-center justify-center rounded-lg bg-secondary">
        <span className={`text-xs font-bold font-mono ${dbColors[name] || "text-foreground"}`}>
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
            Supported Databases
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Migration Pairs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Relational, NoSQL, and vector databases. Migrate from legacy to modern with full compatibility analysis.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {categoryOrder.map((category) => {
            const items = migrations.filter((m) => m.category === category)
            const isComingSoon = category === "Vector DB"

            return (
              <div key={category}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                  {isComingSoon && (
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20">
                      <span className="font-mono text-xs">Coming Soon</span>
                    </Badge>
                  )}
                </div>
                <div className="grid gap-3">
                  {items.map((m) => {
                    const cfg = statusConfig[m.status]
                    return (
                      <div
                        key={`${m.source}-${m.target}`}
                        className="flex flex-col gap-3 rounded-lg border border-border bg-card px-5 py-3.5 transition-colors hover:border-primary/30 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex flex-1 items-center gap-3">
                          <DbIcon name={m.source} />
                          <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                          <DbIcon name={m.target} />
                        </div>
                        <Badge variant="outline" className={cfg.className}>
                          <span className="font-mono text-xs">{cfg.label}</span>
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

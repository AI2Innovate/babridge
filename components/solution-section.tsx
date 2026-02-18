import { Search, ArrowRightLeft, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Pre-Migration Audit Report",
    body: "Connects to your source database (read-only). Scans every table, stored procedure, trigger, data type, and constraint. Produces a human-readable report: what's clean, what needs rewriting, what has no equivalent. Hand it to your CTO before the migration starts.",
    terminal: [
      "$ dba-bridge audit --source oracle://prod-db:1521/orcl",
      "",
      "Scanning schema... 142 tables, 87 stored procedures, 23 triggers",
      "Analyzing data types... 12 incompatibilities found",
      "Checking FK constraints... 3 ordering issues detected",
      "",
      "Report generated: audit-report-2026-02-18.html",
      "  Clean:    118 tables  (83%)",
      "  Warning:   19 tables  (13%)",
      "  Critical:   5 tables  ( 4%)",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Stored Procedure Rewriting",
    body: "Automatically rewrites Oracle PL/SQL and SQL Server T-SQL to Postgres PL/pgSQL. Shows you a side-by-side diff with confidence scores. You review and approve every change. Uses local AI (Ollama) to rewrite stored procedures — your data never leaves your machine.",
    terminal: [
      "$ dba-bridge rewrite --procedures ./oracle-procs/",
      "",
      "Processing get_customer_orders.sql...",
      "  PL/SQL → PL/pgSQL  [confidence: 94%]",
      "  - Replaced NVL() → COALESCE()",
      "  - Converted NUMBER(10) → BIGINT",
      "  - Rewrote cursor loop → FOR record IN query",
      "",
      "Diff saved: rewrites/get_customer_orders.diff",
      "Awaiting approval... (y/n)",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Post-Migration Validation",
    body: "After migration, compares source and target automatically. Row counts, null distributions, constraint status, index presence. Runs sample queries against both databases and diffs the results. Green, amber, or red per table.",
    terminal: [
      "$ dba-bridge validate --source oracle://prod --target postgres://new",
      "",
      "Comparing 142 tables...",
      "  customers        ████████████  rows: OK  nulls: OK  FKs: OK",
      "  orders           ████████████  rows: OK  nulls: OK  FKs: OK",
      "  payments         ████████████  rows: OK  nulls: WARN  FKs: OK",
      "  audit_log        ████████████  rows: OK  nulls: OK  FKs: OK",
      "",
      "Result: 139 green, 3 amber, 0 red",
      "Validation report: validation-2026-02-18.html",
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

        <div className="flex flex-col gap-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-8 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </div>

              {/* Terminal mock */}
              <div className="w-full flex-1 overflow-hidden rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                  <span className="size-3 rounded-full bg-[#ff5f57]" />
                  <span className="size-3 rounded-full bg-[#febc2e]" />
                  <span className="size-3 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    terminal
                  </span>
                </div>
                <div className="overflow-x-auto p-4">
                  <pre className="text-xs leading-5 text-muted-foreground font-mono">
                    {feature.terminal.map((line, i) => (
                      <div key={i}>
                        {line.startsWith("$") ? (
                          <>
                            <span className="text-primary">{"$ "}</span>
                            <span className="text-foreground">
                              {line.slice(2)}
                            </span>
                          </>
                        ) : line.includes("OK") ? (
                          <span>
                            {line.replace(/OK/g, "").replace(/WARN/g, "")}
                            {line.includes("WARN") ? (
                              <span className="text-amber-400">WARN</span>
                            ) : null}
                            {(line.match(/OK/g) || []).map((_, j) => (
                              <span key={j} className="text-primary">
                                OK{"  "}
                              </span>
                            ))}
                          </span>
                        ) : line.includes("confidence") ? (
                          <span>
                            {line.split("[")[0]}
                            <span className="text-primary">
                              [
                              {line
                                .split("[")[1]
                                ?.split("]")[0]}
                              ]
                            </span>
                          </span>
                        ) : line.includes("green") ? (
                          <span>
                            {"Result: "}
                            <span className="text-primary">139 green</span>
                            {", "}
                            <span className="text-amber-400">3 amber</span>
                            {", "}
                            <span className="text-foreground">0 red</span>
                          </span>
                        ) : (
                          line
                        )}
                        {"\n"}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

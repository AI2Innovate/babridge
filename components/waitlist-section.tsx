"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, CheckCircle } from "lucide-react"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl overflow-hidden rounded-xl border border-primary/20 bg-card">
          <div className="border-b border-primary/10 bg-primary/5 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="size-2 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-medium text-primary font-mono">
                EARLY ACCESS
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="size-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {"You're on the list!"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {"We'll email you when DBA Bridge is ready. No spam, promise."}
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground text-balance">
                  Join the Early Access Waitlist
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Be the first to try DBA Bridge when it launches. {"We'll"}{" "}
                  notify you — no spam.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
                  <div suppressHydrationWarning>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-foreground font-mono"
                    >
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                      data-lpignore="true"
                      className="h-10 border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-destructive-foreground">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Join Waitlist"}
                  </Button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Users className="size-4" />
                  <span>
                    <span className="font-medium text-foreground font-mono">
                      127
                    </span>{" "}
                    engineers already on the waitlist
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

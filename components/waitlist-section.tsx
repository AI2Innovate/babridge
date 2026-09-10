import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users } from "lucide-react"

export function WaitlistSection() {

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
            <>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground text-balance">
                Join the Early Access Waitlist
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Be the first to try DBA Bridge when it launches. {"We'll"}{" "}
                notify you — no spam.
              </p>

              <form
                action="https://formspree.io/f/xjyvlvkj"
                method="POST"
                className="flex flex-col gap-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-foreground font-mono"
                  >
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                    className="h-10 border-border bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Join Waitlist
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

          </div>
        </div>
      </div>
    </section>
  )
}

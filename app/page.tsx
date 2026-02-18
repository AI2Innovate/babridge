import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorks } from "@/components/how-it-works"
import { DatabasesSection } from "@/components/databases-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <ProblemSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <SolutionSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <HowItWorks />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <DatabasesSection />
      <div className="mx-auto max-w-6xl px-6">
        <hr className="border-border" />
      </div>
      <WaitlistSection />
      <Footer />
    </main>
  )
}

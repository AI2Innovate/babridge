import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - DBA Bridge",
  description: "Cookie Policy for DBA Bridge by Ai2innovate.io",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 18, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit a website. They are
              widely used to make websites work more efficiently and to provide
              information to website owners.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. How We Use Cookies
            </h2>
            <p className="mb-3">
              DBA Bridge (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar
              technologies for the following purposes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">
                  Essential Cookies:
                </strong>{" "}
                These are necessary for the website to function properly,
                including remembering your theme preference (light/dark mode).
              </li>
              <li>
                <strong className="text-foreground">
                  Analytics Cookies:
                </strong>{" "}
                We use Google Analytics to understand how visitors interact with
                our website. These cookies collect information such as the number
                of visitors, pages visited, and time spent on the site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left font-semibold text-foreground">
                      Cookie
                    </th>
                    <th className="py-3 pr-4 text-left font-semibold text-foreground">
                      Provider
                    </th>
                    <th className="py-3 pr-4 text-left font-semibold text-foreground">
                      Purpose
                    </th>
                    <th className="py-3 text-left font-semibold text-foreground">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-xs text-foreground">
                      theme
                    </td>
                    <td className="py-3 pr-4">DBA Bridge</td>
                    <td className="py-3 pr-4">
                      Stores your light/dark mode preference
                    </td>
                    <td className="py-3">1 year</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-xs text-foreground">
                      _ga
                    </td>
                    <td className="py-3 pr-4">Google Analytics</td>
                    <td className="py-3 pr-4">
                      Distinguishes unique users
                    </td>
                    <td className="py-3">2 years</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-xs text-foreground">
                      _ga_*
                    </td>
                    <td className="py-3 pr-4">Google Analytics</td>
                    <td className="py-3 pr-4">
                      Maintains session state
                    </td>
                    <td className="py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs text-foreground">
                      _gid
                    </td>
                    <td className="py-3 pr-4">Google Analytics</td>
                    <td className="py-3 pr-4">
                      Distinguishes unique users
                    </td>
                    <td className="py-3">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Managing Cookies
            </h2>
            <p className="mb-3">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Browser Settings:</strong>{" "}
                Most browsers allow you to refuse or delete cookies through
                their settings. Note that blocking cookies may affect your
                experience on our website.
              </li>
              <li>
                <strong className="text-foreground">
                  Google Analytics Opt-Out:
                </strong>{" "}
                You can opt out of Google Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  Google Analytics Opt-Out Browser Add-on
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Third-Party Cookies
            </h2>
            <p>
              Some cookies are placed by third-party services that appear on our
              pages. We do not control the dissemination of these cookies. You
              should check the relevant third-party websites for more
              information about their cookies and how to manage them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies, please contact
              us at{" "}
              <a
                href="mailto:info@ai2innovate.io"
                className="text-primary hover:text-primary/80"
              >
                info@ai2innovate.io
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

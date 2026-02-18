import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 })
    }

    const apiKey = process.env.SENDGRID_API_KEY
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || "info@ai2innovate.io"
    const timestamp = new Date().toISOString()

    // Permanent log — always written regardless of email delivery
    const signupRecord = {
      event: "WAITLIST_SIGNUP",
      email,
      source: "Landing Page",
      timestamp,
      userAgent: request.headers.get("user-agent") || "unknown",
      ip: request.headers.get("x-forwarded-for") || "unknown",
    }
    console.log("==============================================")
    console.log("[WAITLIST SIGNUP]")
    console.log(`  Email:      ${email}`)
    console.log(`  Source:     Landing Page`)
    console.log(`  Timestamp:  ${timestamp}`)
    console.log(`  User-Agent: ${signupRecord.userAgent}`)
    console.log(`  IP:         ${signupRecord.ip}`)
    console.log(`  JSON:       ${JSON.stringify(signupRecord)}`)
    console.log("==============================================")

    if (!apiKey) {
      console.error("[WAITLIST] SENDGRID_API_KEY is missing from environment variables")
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 })
    }

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "darshankumar38@gmail.com" }],
            subject: `New DBA Bridge Waitlist Signup - ${email}`,
          },
        ],
        from: { email: fromEmail, name: "DBA Bridge Waitlist" },
        content: [
          {
            type: "text/html",
            value: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
                <h2 style="color: #0d9373; margin-bottom: 20px;">New Waitlist Signup</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 140px;">Email</td>
                    <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Source</td>
                    <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb;">Landing Page</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Signed up at</td>
                    <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb;">${timestamp}</td>
                  </tr>
                </table>
                <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This is an automated notification from DBA Bridge waitlist.</p>
              </div>
            `,
          },
        ],
      }),
    })

    // SendGrid returns 202 on success with no body
    if (res.status === 202) {
      console.log("[WAITLIST] Email sent successfully via SendGrid")
      return NextResponse.json({ ok: true })
    }

    const errorText = await res.text()
    console.error("[WAITLIST] SendGrid error:", res.status, errorText)
    return NextResponse.json({ ok: false, error: "Failed to send notification email" }, { status: 500 })
  } catch (err) {
    console.error("[WAITLIST] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Something went wrong" }, { status: 500 })
  }
}

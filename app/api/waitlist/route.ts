import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, database } = await request.json()

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 })
    }

    if (!database) {
      return NextResponse.json({ ok: false, error: "Please select a database" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const ownerEmail = process.env.WAITLIST_OWNER_EMAIL || "darshankumar38@gmail.com"
    const timestamp = new Date().toISOString()

    // Permanent log — always written regardless of email delivery
    console.log("==============================================")
    console.log("[WAITLIST SIGNUP]")
    console.log(`  Email:     ${email}`)
    console.log(`  Database:  ${database}`)
    console.log(`  Source:    Landing Page`)
    console.log(`  Timestamp: ${timestamp}`)
    console.log("==============================================")

    if (!apiKey) {
      console.error("[WAITLIST] RESEND_API_KEY is missing from environment variables")
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 })
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DBA Bridge Waitlist <onboarding@resend.dev>",
        to: [ownerEmail],
        subject: `New DBA Bridge Waitlist Signup - ${email}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #0d9373; margin-bottom: 20px;">New Waitlist Signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 140px;">Email</td>
                <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Migrating from</td>
                <td style="padding: 12px 8px; border-bottom: 1px solid #e5e7eb;">${database}</td>
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
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("[WAITLIST] Resend error:", res.status, JSON.stringify(data))
      return NextResponse.json({ ok: false, error: "Failed to send notification email" }, { status: 500 })
    }

    console.log("[WAITLIST] Email sent successfully. ID:", data.id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[WAITLIST] Unexpected error:", err)
    return NextResponse.json({ ok: false, error: "Something went wrong" }, { status: 500 })
  }
}

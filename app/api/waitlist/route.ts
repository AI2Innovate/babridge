import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, database } = await request.json()

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    if (!database) {
      return NextResponse.json(
        { error: "Please select a database" },
        { status: 400 }
      )
    }

    const NOTIFY_EMAIL = "ai2innovate@gmail.com"
    const timestamp = new Date().toISOString()

    // Log the signup so it's visible in Vercel logs even if email fails
    console.log(
      `[WAITLIST SIGNUP] Email: ${email} | Database: ${database} | Time: ${timestamp}`
    )

    // Send notification email via Resend
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "DBA Bridge Waitlist <onboarding@resend.dev>",
          to: [NOTIFY_EMAIL],
          subject: `New DBA Bridge Waitlist Signup - ${email}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0d9373;">New Waitlist Signup</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Migrating from</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${database}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Signed up at</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${timestamp}</td>
                </tr>
              </table>
            </div>
          `,
        }),
      })

      const resendData = await resendResponse.json()

      if (!resendResponse.ok) {
        console.error("[WAITLIST] Resend API error:", JSON.stringify(resendData))
        // Still return success to user — we have it in logs
      } else {
        console.log("[WAITLIST] Email sent successfully. ID:", resendData.id)
      }
    } else {
      console.warn(
        "[WAITLIST] RESEND_API_KEY not configured. Email not sent, but signup logged above."
      )
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist",
    })
  } catch (err) {
    console.error("[WAITLIST] Unexpected error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}

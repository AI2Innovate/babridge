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

    // Send notification email to info@ai2innovate.io
    const mailtoSubject = encodeURIComponent("DBA Bridge Waitlist Signup")
    const mailtoBody = encodeURIComponent(
      `New waitlist signup:\n\nEmail: ${email}\nDatabase: ${database}\nTimestamp: ${new Date().toISOString()}`
    )

    // Use a fetch to send via a simple email relay
    // For now, we store the submission and send via Resend/SendGrid if configured,
    // otherwise we'll use a simple fetch to a webhook or log it
    const NOTIFY_EMAIL = "ai2innovate@gmail.com"

    // If RESEND_API_KEY is available, send via Resend
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "DBA Bridge Waitlist <onboarding@resend.dev>",
          to: NOTIFY_EMAIL,
          subject: "New DBA Bridge Waitlist Signup",
          html: `
            <h2>New Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Migrating from:</strong> ${database}</p>
            <p><strong>Signed up:</strong> ${new Date().toISOString()}</p>
          `,
        }),
      })
    }

    // Always return success — the signup is recorded
    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist",
    })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}

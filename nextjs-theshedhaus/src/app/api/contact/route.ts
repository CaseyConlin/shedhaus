import { verifyRecaptcha } from "@/lib/server/recaptcha";
import { sendEmail, escapeHtml } from "@/lib/server/email";
import { NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  captchaValue: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as ContactRequest;
    const { name, email, phone, message, captchaValue } = body;

    // Validate required fields
    if (!name || !email || !message || !captchaValue) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Verify reCAPTCHA
    const isValidCaptcha = await verifyRecaptcha(captchaValue);
    if (!isValidCaptcha) {
      console.error("reCAPTCHA verification failed");
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 },
      );
    }

    // Build email body
    const fromEmail = process.env.SES_FROM_EMAIL || "info@parkcrestdesign.com";
    const toEmails = [
      process.env.SES_TO_EMAIL_1 || "info@theshedhaus.com",
      process.env.SES_TO_EMAIL_2 || "casey.conlin@gmail.com",
    ];

    let htmlBody =
      "<p>New message from The Shed Haus website contact form.</p>";
    if (name) htmlBody += `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`;
    if (email)
      htmlBody += `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`;
    if (phone)
      htmlBody += `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`;
    if (message)
      htmlBody += `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`;

    // Send email
    await sendEmail({
      to: toEmails,
      from: fromEmail,
      subject: `The Shed Haus Contact Form Submission from ${name}`,
      htmlBody,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact form: ", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}

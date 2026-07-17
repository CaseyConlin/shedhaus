import { verifyRecaptcha } from "@/lib/server/recaptcha";
import { sendEmail, escapeHtml } from "@/lib/server/email";
import { client } from "@/sanity/client";
import { NextResponse } from "next/server";

interface QuoteRequest {
  structureType: string;
  style: string;
  dimensions: string;
  primaryUse: string;
  streetAddress: string;
  groundCondition: string;
  siteAccess: string;
  foundation: string;
  name: string;
  bestTime: string;
  email: string;
  phone?: string;
  captchaValue: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as QuoteRequest;
    const {
      structureType,
      style,
      dimensions,
      primaryUse,
      streetAddress,
      groundCondition,
      siteAccess,
      foundation,
      name,
      bestTime,
      email,
      phone,
      captchaValue,
    } = body;

    // Validate required fields
    if (
      !structureType ||
      !style ||
      !dimensions ||
      !primaryUse ||
      !name ||
      !email ||
      !captchaValue
    ) {
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

    // Fetch price list from Sanity
    let priceListUrl = "";
    try {
      const priceListDoc = await client.fetch(
        `*[_type == "priceList"][0] { file }`,
      );
      if (priceListDoc?.file?.asset?._ref) {
        const assetRef = priceListDoc.file.asset._ref;
        const [, assetId, , extension] = assetRef.split("-");
        priceListUrl = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}.${extension}`;
      }
    } catch (error) {
      console.warn("Could not fetch price list from Sanity: ", error);
    }

    // Build email addresses and sender
    const fromEmail = process.env.SES_FROM_EMAIL || "info@parkcrestdesign.com";
    const businessEmails = [
      process.env.SES_TO_EMAIL_1 || "info@theshedhaus.com",
      process.env.SES_TO_EMAIL_2 || "casey.conlin@gmail.com",
    ];

    // Email 1: Send to the submitter with the price list
    let customerEmailBody =
      "<p>Thank you for your interest in The Shed Haus! We've received your quote request.</p>";
    customerEmailBody +=
      "<p>Please find our current pricing information below:</p>";

    if (priceListUrl) {
      customerEmailBody += `<p><a href="${priceListUrl}" target="_blank" style="background-color: #860000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Download Price List</a></p>`;
    } else {
      customerEmailBody +=
        "<p>A price list will be sent to you shortly by our team.</p>";
    }

    customerEmailBody +=
      "<p>Our team will review your project details and contact you soon with custom estimates. If you have any questions in the meantime, feel free to reach out!</p>";
    customerEmailBody += "<p>Best regards,<br />The Shed Haus Team</p>";

    // Send email to customer
    await sendEmail({
      to: [email],
      from: fromEmail,
      subject: "The Shed Haus - Your Quote Request & Pricing Information",
      htmlBody: customerEmailBody,
    });

    // Email 2: Send to business team with all form details
    let businessEmailBody =
      "<p>New quote request from The Shed Haus website request-a-quote form.</p>";
    businessEmailBody += "<h3>Customer Information</h3>";
    businessEmailBody += `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`;
    businessEmailBody += `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`;
    if (phone)
      businessEmailBody += `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`;
    businessEmailBody += `<p><strong>Best Time to Contact:</strong> ${escapeHtml(bestTime)}</p>`;

    businessEmailBody += "<h3>Project Details</h3>";
    businessEmailBody += `<p><strong>Structure Type:</strong> ${escapeHtml(structureType)}</p>`;
    businessEmailBody += `<p><strong>Style:</strong> ${escapeHtml(style)}</p>`;
    businessEmailBody += `<p><strong>Dimensions:</strong> ${escapeHtml(dimensions)}</p>`;
    businessEmailBody += `<p><strong>Primary Use:</strong> ${escapeHtml(primaryUse)}</p>`;
    if (streetAddress)
      businessEmailBody += `<p><strong>Street Address:</strong> ${escapeHtml(streetAddress)}</p>`;

    businessEmailBody += "<h3>Site Conditions</h3>";
    businessEmailBody += `<p><strong>Ground Condition:</strong> ${escapeHtml(groundCondition)}</p>`;
    businessEmailBody += `<p><strong>Site Access:</strong> ${escapeHtml(siteAccess)}</p>`;
    businessEmailBody += `<p><strong>Foundation:</strong> ${escapeHtml(foundation)}</p>`;

    // Send email to business team
    await sendEmail({
      to: businessEmails,
      from: fromEmail,
      subject: `New Quote Request from ${name} - The Shed Haus`,
      htmlBody: businessEmailBody,
    });

    return NextResponse.json(
      { message: "Quote request sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing quote form: ", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}

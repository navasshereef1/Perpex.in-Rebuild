import nodemailer from "nodemailer";

// Sends a notification when a new inquiry comes in. Gracefully no-ops if
// SMTP isn't configured yet — the inquiry is already safely in the database
// regardless, this is just the "someone should know right now" layer.
function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !port || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });
}

export async function sendInquiryNotification(inquiry: {
  name: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  serviceInterest?: string | null;
  message?: string | null;
}) {
  const transport = getTransport();
  if (!transport) {
    console.warn("[email] SMTP not configured — skipping inquiry notification email.");
    return;
  }

  const notifyTo = process.env.NOTIFY_EMAIL || "info@perpex.in";
  const fromAddress = process.env.SMTP_USER!;

  try {
    await transport.sendMail({
      from: `"PerpeX Insights Website" <${fromAddress}>`,
      to: notifyTo,
      replyTo: inquiry.email,
      subject: `New discovery call request: ${inquiry.name}${inquiry.company ? ` (${inquiry.company})` : ""}`,
      text: [
        `Name: ${inquiry.name}`,
        inquiry.company ? `Company: ${inquiry.company}` : null,
        `Email: ${inquiry.email}`,
        inquiry.phone ? `Phone: ${inquiry.phone}` : null,
        inquiry.serviceInterest ? `Service interest: ${inquiry.serviceInterest}` : null,
        inquiry.message ? `\nMessage:\n${inquiry.message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("[email] failed to send inquiry notification:", err);
  }
}

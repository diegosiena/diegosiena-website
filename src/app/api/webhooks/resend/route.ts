import { type NextRequest, NextResponse } from "next/server";
import { Resend, type WebhookEventPayload } from "resend";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  const from = process.env.RESEND_FORWARD_FROM;
  const to = process.env.RESEND_FORWARD_TO;

  if (!apiKey || !webhookSecret || !from || !to) {
    return new NextResponse("Resend webhook is not configured", {
      status: 500,
    });
  }

  const payload = await request.text();
  const id = request.headers.get("svix-id");
  const timestamp = request.headers.get("svix-timestamp");
  const signature = request.headers.get("svix-signature");

  if (!id || !timestamp || !signature) {
    return new NextResponse("Missing svix headers", { status: 400 });
  }

  const resend = new Resend(apiKey);

  let event: WebhookEventPayload;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: { id, timestamp, signature },
      webhookSecret,
    });
  } catch {
    return new NextResponse("Invalid webhook signature", { status: 400 });
  }

  if (event.type !== "email.received") {
    return NextResponse.json({ ignored: event.type });
  }

  const { data, error } = await resend.emails.receiving.forward({
    emailId: event.data.email_id,
    from,
    to,
  });

  if (error) {
    return new NextResponse(`Forward failed: ${error.message}`, {
      status: 500,
    });
  }

  return NextResponse.json(data);
}

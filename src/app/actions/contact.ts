"use server";

import { Resend } from "resend";
import {
  buildAutoReplyEmail,
  buildOwnerEmail,
  type ContactFormState,
  validateContactInput,
} from "@/lib/contact";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (((formData.get("company") as string) ?? "").trim().length > 0) {
    return { status: "success" };
  }

  const raw = {
    name: (formData.get("name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    subject: (formData.get("subject") as string) ?? "",
    message: (formData.get("message") as string) ?? "",
  };

  const { values, errors, data } = validateContactInput(raw);

  if (!data) {
    return { status: "error", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FORWARD_FROM;
  const to = process.env.RESEND_FORWARD_TO;

  if (!apiKey || !from || !to) {
    return {
      status: "error",
      errors: { _form: "Mailer is not configured. Try again later." },
      values,
    };
  }

  const resend = new Resend(apiKey);
  const owner = buildOwnerEmail(data);
  const auto = buildAutoReplyEmail({ name: data.name });

  try {
    const [ownerResult, autoResult] = await Promise.all([
      resend.emails.send({
        from,
        to,
        replyTo: data.email,
        subject: owner.subject,
        html: owner.html,
        text: owner.text,
      }),
      resend.emails.send({
        from,
        to: data.email,
        subject: auto.subject,
        html: auto.html,
        text: auto.text,
      }),
    ]);

    if (ownerResult.error || autoResult.error) {
      return {
        status: "error",
        errors: {
          _form:
            "Could not send. Please try again or email diego@diegosiena.com.",
        },
        values,
      };
    }
  } catch {
    return {
      status: "error",
      errors: {
        _form:
          "Could not send. Please try again or email diego@diegosiena.com.",
      },
      values,
    };
  }

  return { status: "success" };
}

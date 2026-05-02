export type SubjectValue =
  | "ai"
  | "leadership"
  | "advisory"
  | "speaking"
  | "other";

export const SUBJECT_OPTIONS: { value: SubjectValue; label: string }[] = [
  { value: "ai", label: "Building an AI product" },
  { value: "leadership", label: "Engineering leadership / CTO talk" },
  { value: "advisory", label: "Advisory / consulting" },
  { value: "speaking", label: "Speaking / podcast / interview" },
  { value: "other", label: "Something else" },
];

const SUBJECT_LABELS = new Map(SUBJECT_OPTIONS.map((o) => [o.value, o.label]));

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  values?: Record<string, string>;
};

export type ContactValues = {
  name: string;
  email: string;
  subject: SubjectValue;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactInput(raw: Record<string, string>): {
  values: Record<string, string>;
  errors: Record<string, string>;
  data?: ContactValues;
} {
  const name = (raw.name ?? "").trim();
  const email = (raw.email ?? "").trim();
  const subject = (raw.subject ?? "").trim();
  const message = (raw.message ?? "").trim();

  const values = { name, email, subject, message };
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required";
  else if (name.length > 120) errors.name = "Name is too long";

  if (!email) errors.email = "Email is required";
  else if (email.length > 200) errors.email = "Email is too long";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email";

  if (!subject) errors.subject = "Pick a topic";
  else if (!SUBJECT_LABELS.has(subject as SubjectValue))
    errors.subject = "Pick a topic from the list";

  if (!message) errors.message = "Message is required";
  else if (message.length < 10) errors.message = "A few more words, please";
  else if (message.length > 5000) errors.message = "Message is too long";

  if (Object.keys(errors).length > 0) {
    return { values, errors };
  }

  return {
    values,
    errors,
    data: {
      name,
      email,
      subject: subject as SubjectValue,
      message,
    },
  };
}

export function subjectLabel(value: SubjectValue): string {
  return SUBJECT_LABELS.get(value) ?? value;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildOwnerEmail(data: ContactValues): {
  subject: string;
  html: string;
  text: string;
} {
  const topic = subjectLabel(data.subject);
  const subject = `New message from ${data.name} — ${topic}`;

  const text = [
    `From: ${data.name} <${data.email}>`,
    `Topic: ${topic}`,
    "",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0f1114; line-height: 1.55;">
      <p style="margin: 0 0 0.75rem; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6d73;">New contact-form message</p>
      <p style="margin: 0 0 1rem;"><strong>${escapeHtml(data.name)}</strong> &lt;${escapeHtml(data.email)}&gt;</p>
      <p style="margin: 0 0 1rem; color: #6b6d73;">Topic: ${escapeHtml(topic)}</p>
      <hr style="border: none; border-top: 1px solid rgba(15,17,20,0.1); margin: 1rem 0;" />
      <div style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
    </div>
  `.trim();

  return { subject, html, text };
}

export function buildAutoReplyEmail(data: Pick<ContactValues, "name">): {
  subject: string;
  html: string;
  text: string;
} {
  const firstName = data.name.split(/\s+/)[0] ?? data.name;
  const subject = "Got your note — Diego";

  const text = [
    `Hi ${firstName},`,
    "",
    "Thanks for reaching out. I read everything that comes through this form, and I'll reply personally — usually within a few days.",
    "",
    "If it's urgent, you can also email me directly at diego@diegosiena.com.",
    "",
    "— Diego",
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0f1114; line-height: 1.6; max-width: 540px;">
      <p style="margin: 0 0 1rem;">Hi ${escapeHtml(firstName)},</p>
      <p style="margin: 0 0 1rem;">Thanks for reaching out. I read everything that comes through this form, and I'll reply personally — usually within a few days.</p>
      <p style="margin: 0 0 1rem;">If it's urgent, you can also email me directly at <a href="mailto:diego@diegosiena.com" style="color: #1a3dff;">diego@diegosiena.com</a>.</p>
      <p style="margin: 1.5rem 0 0; color: #6b6d73;">— Diego</p>
    </div>
  `.trim();

  return { subject, html, text };
}

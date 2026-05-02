"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { type ContactFormState, SUBJECT_OPTIONS } from "@/lib/contact";

const TILES = [
  {
    href: "mailto:diego@diegosiena.com",
    label: "Email",
    value: "diego@diegosiena.com",
    meta: "Primary · fastest reply",
    external: false,
  },
  {
    href: "https://linkedin.com/in/diegosiena",
    label: "LinkedIn",
    value: "/in/diegosiena",
    meta: "Professional network",
    external: true,
  },
  {
    href: "https://github.com/diegosiena",
    label: "GitHub",
    value: "/diegosiena",
    meta: "Code · side projects",
    external: true,
  },
];

const INITIAL_STATE: ContactFormState = { status: "idle" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    INITIAL_STATE,
  );

  const errors = state.errors ?? {};
  const values = state.values ?? {};

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-code">
            <span className="scode-prefix">A.06</span>Open channels
          </span>
          <span className="section-count">
            form <span className="muted-sep">+</span> 03 endpoints
          </span>
        </div>

        <div className="contact-intro" data-reveal>
          <h3 className="contact-statement">
            Get in
            <br />
            <span className="w-accent">touch.</span>
          </h3>
          <p className="contact-note">
            If you&apos;re building AI products, leading engineering, or
            thinking about either — say hi. <strong>I read everything.</strong>
          </p>
        </div>

        <div className="contact-body" data-reveal data-reveal-delay="1">
          {state.status === "success" ? (
            <output className="contact-form form-confirm">
              <div className="form-head">
                <span className="form-tag">Message received</span>
                <span className="form-meta">async · sent</span>
              </div>
              <p className="form-confirm-body">
                Got it. I read everything that comes through this form, and
                I&apos;ll reply personally — usually within a few days.
              </p>
              <p className="form-confirm-body form-confirm-meta">
                Check your inbox for a confirmation. If you don&apos;t see it,
                peek in spam.
              </p>
            </output>
          ) : (
            <form className="contact-form" action={formAction}>
              <div className="form-head">
                <span className="form-tag">Send a message</span>
                <span className="form-meta">form · async</span>
              </div>

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
              >
                <label htmlFor="cf-company">Company (leave blank)</label>
                <input
                  type="text"
                  id="cf-company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              <div className="form-row form-row-split">
                <div className="form-field">
                  <label htmlFor="cf-name" className="field-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="cf-name"
                    name="name"
                    className="field-input"
                    placeholder="Diego Siena"
                    autoComplete="name"
                    required
                    maxLength={120}
                    defaultValue={values.name ?? ""}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "cf-name-err" : undefined}
                  />
                  {errors.name && (
                    <span id="cf-name-err" className="field-error">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="cf-email" className="field-label">
                    Reply to
                  </label>
                  <input
                    type="email"
                    id="cf-email"
                    name="email"
                    className="field-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={200}
                    defaultValue={values.email ?? ""}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "cf-email-err" : undefined}
                  />
                  {errors.email && (
                    <span id="cf-email-err" className="field-error">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cf-subject" className="field-label">
                    About
                  </label>
                  <select
                    id="cf-subject"
                    name="subject"
                    className="field-input field-select"
                    required
                    defaultValue={values.subject ?? ""}
                    aria-invalid={errors.subject ? true : undefined}
                    aria-describedby={
                      errors.subject ? "cf-subject-err" : undefined
                    }
                  >
                    <option value="" disabled>
                      Pick a topic — or just write
                    </option>
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <span id="cf-subject-err" className="field-error">
                      {errors.subject}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cf-message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    className="field-input field-textarea"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={5000}
                    placeholder="What's on your mind? No pressure on length — a couple of sentences is fine."
                    defaultValue={values.message ?? ""}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={
                      errors.message ? "cf-message-err" : undefined
                    }
                  />
                  {errors.message && (
                    <span id="cf-message-err" className="field-error">
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>

              {errors._form && (
                <div className="form-row">
                  <span className="field-error field-error-form" role="alert">
                    {errors._form}
                  </span>
                </div>
              )}

              <div className="form-foot">
                <span className="form-foot-note">
                  Replies usually within a few days.
                </span>
                <button
                  type="submit"
                  className="form-submit"
                  disabled={pending}
                >
                  <span>{pending ? "Sending…" : "Send message"}</span>
                  <span className="submit-arrow">↗</span>
                </button>
              </div>
            </form>
          )}

          <aside className="contact-aside">
            <div className="aside-head">
              <span className="aside-tag">Or reach me directly</span>
            </div>
            <div className="contact-grid">
              {TILES.map((tile) => (
                <a
                  key={tile.label}
                  href={tile.href}
                  className="contact-tile"
                  {...(tile.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="tcorner tl" />
                  <span className="tcorner tr" />
                  <span className="tcorner bl" />
                  <span className="tcorner br" />
                  <div className="tile-head">
                    <span className="tile-label">{tile.label}</span>
                    <span className="tile-arrow">↗</span>
                  </div>
                  <span className="tile-value">{tile.value}</span>
                  <span className="tile-meta">{tile.meta}</span>
                </a>
              ))}
            </div>
            <a
              href="/diego-siena-cv.pdf"
              download
              className="cv-callout"
              aria-label="Download CV (PDF)"
            >
              <span className="cv-callout-icon" aria-hidden="true">
                ↓
              </span>
              <span className="cv-callout-body">
                <span className="cv-callout-title">
                  Need a printable version?
                </span>
                <span className="cv-callout-meta">
                  Download CV
                  <span className="cv-callout-sep">·</span>
                  PDF
                  <span className="cv-callout-sep">·</span>2 pages
                </span>
              </span>
              <span className="cv-callout-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

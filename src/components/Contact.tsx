"use client";

import type { FormEvent } from "react";

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

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
          <form className="contact-form" noValidate onSubmit={onSubmit}>
            <div className="form-head">
              <span className="form-tag">Send a message</span>
              <span className="form-meta">form · async</span>
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
                />
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
                />
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
                  defaultValue=""
                >
                  <option value="" disabled>
                    Pick a topic — or just write
                  </option>
                  <option value="ai">Building an AI product</option>
                  <option value="leadership">
                    Engineering leadership / CTO talk
                  </option>
                  <option value="advisory">Advisory / consulting</option>
                  <option value="speaking">
                    Speaking / podcast / interview
                  </option>
                  <option value="other">Something else</option>
                </select>
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
                  placeholder="What's on your mind? No pressure on length — a couple of sentences is fine."
                />
              </div>
            </div>

            <div className="form-foot">
              <span className="form-foot-note">
                Replies usually within a few days.
              </span>
              <button type="submit" className="form-submit">
                <span>Send message</span>
                <span className="submit-arrow">↗</span>
              </button>
            </div>
          </form>

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

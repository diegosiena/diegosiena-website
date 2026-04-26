"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#id", num: "A.01", label: "about" },
  { href: "#cap", num: "A.02", label: "focus" },
  { href: "#tl", num: "A.03", label: "timeline" },
  { href: "#stack", num: "A.04", label: "stack" },
  { href: "#idx", num: "A.05", label: "off hours" },
  { href: "#contact", num: "A.06", label: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <a href="#top" className="id-mark">
            DS
          </a>
          <div className="header-actions">
            <nav className="nav-desktop">
              <ul className="nav-list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>
                      <span className="num">{item.num}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href="/diego-siena-cv.pdf"
              className="cv-link"
              download
              aria-label="Download CV (PDF)"
            >
              <span className="cv-link-icon" aria-hidden="true">
                ↓
              </span>
              <span className="cv-link-label">CV</span>
              <span className="cv-link-meta">PDF</span>
            </a>
            <button
              type="button"
              className={`nav-toggle${open ? " is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="nav-toggle-label">Menu</span>
              <span className="nav-toggle-icon" aria-hidden="true">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-overlay${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="nav-overlay-inner">
          <div className="nav-overlay-head">
            <span className="nav-overlay-tag">Index</span>
            <button
              type="button"
              className="nav-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <span>Close</span>
              <span className="close-x" aria-hidden="true">
                ×
              </span>
            </button>
          </div>
          <ul className="nav-overlay-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  <span className="ov-num">{item.num}</span>
                  <span className="ov-name">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-overlay-foot">
            <span className="ov-foot-key">DS</span>
            <span className="ov-foot-val">Diego Siena · Portfolio 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}

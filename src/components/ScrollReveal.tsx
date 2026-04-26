"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of reveals) io.observe(el);

    const stackItems = document.querySelectorAll<HTMLElement>(".stack-item");
    const io2 = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io2.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 },
    );
    for (const el of stackItems) io2.observe(el);

    return () => {
      io.disconnect();
      io2.disconnect();
    };
  }, []);

  return null;
}

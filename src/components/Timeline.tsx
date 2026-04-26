"use client";

import { useState } from "react";

type RoleKey = "escala" | "baires" | "cuida" | "kzas" | "whf";

type Role = {
  year: string;
  span: string;
  current?: boolean;
  company: string;
  title: string;
  meta: string[];
  desc: string;
  stack: string[];
};

const ROLES: Record<RoleKey, Role> = {
  escala: {
    year: "2025",
    span: "→ Now · 11 months",
    current: true,
    company: "Escala.ai",
    title: "CTO & Co-founder",
    meta: ["Full-time", "Remote · Hybrid", "São Paulo, BR"],
    desc: "Leading the full technical journey of an AI-first startup, from strategy and product validation to architecture, development, and infrastructure. Designing and shipping conversational AI agents with deep focus on context engineering, memory management, and knowledge bases. Hands-on across the full agent lifecycle: research, design, evaluations, observability, and metrics. Partnering with the CEO and CRO on what to build, what to buy, and what to automate, and leveraging AI across the SDLC to ship like a much larger team.",
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Drizzle ORM",
      "Supabase",
      "Better-Auth",
      "Mastra",
      "OpenRouter",
      "LangSmith",
      "Composio",
      "Vector DBs",
    ],
  },
  baires: {
    year: "2022",
    span: "Mar 2022 – Jun 2025 · 3 yrs 4 mos",
    company: "BairesDev",
    title: "Software Engineer",
    meta: ["Full-time", "Remote", "United States"],
    desc: "Designed and developed scalable, high-performance solutions for international clients across industries. Built web applications with Node.js, TypeScript, Svelte, and SvelteKit. Integrated Contentful for structured content management. Built serverless architectures on AWS Lambda and DynamoDB. Deployed and managed applications on Heroku and AWS, with focus on maintainability, performance, and modern front-end practices.",
    stack: [
      "Node.js",
      "TypeScript",
      "Svelte",
      "SvelteKit",
      "Contentful",
      "AWS Lambda",
      "DynamoDB",
      "Heroku",
    ],
  },
  cuida: {
    year: "2020",
    span: "Oct 2020 – Mar 2022 · 1 yr 6 mos",
    company: "Cuida.Life",
    title: "Tech Lead",
    meta: ["Full-time", "Remote", "São Paulo, BR"],
    desc: "Led the development of an e-commerce platform and a health management system from scratch. Defined the technical architecture, managed cloud infrastructure, and implemented Strapi CMS with MongoDB. Developed payment integrations and ensured platform scalability. Managed and mentored the tech team while contributing to strategic decisions alongside executives and investors.",
    stack: [
      "Node.js",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",
      "Strapi CMS",
      "AWS",
      "MongoDB",
    ],
  },
  kzas: {
    year: "2019",
    span: "Aug 2019 – Oct 2020 · 1 yr 3 mos",
    company: "Kzas.ai",
    title: "Full Stack Engineer",
    meta: ["Full-time", "Remote", "São Paulo, BR"],
    desc: "Developed a real estate platform for property search, financing, and credit solutions. Built web applications with Vue.js, Nuxt.js, and Laravel, integrating MySQL for data management. Focused on performance optimization and seamless user experience across devices.",
    stack: ["Vue.js", "Nuxt.js", "JavaScript", "PHP", "Laravel", "MySQL"],
  },
  whf: {
    year: "2019",
    span: "Feb 2019 – Jul 2019 · 6 mos",
    company: "WHF · A Design Company",
    title: "Full Stack Developer",
    meta: ["Full-time", "Hybrid", "Ribeirão Preto, BR"],
    desc: "At a service design company focused on digital solutions, played a key role in building a corporate website for one of Brazil's largest healthcare providers using Nuxt.js and Strapi CMS. Developed a component library in close collaboration with the design team to ensure UI consistency and scalability.",
    stack: ["Nuxt.js", "Vue.js", "Node.js", "Strapi CMS", "MongoDB", "Azure"],
  },
};

type RowConfig = {
  key: RoleKey;
  company: string;
  role: string;
  bar: {
    left: string;
    width?: string;
    right?: string;
    label: string;
    current?: boolean;
  };
};

const ROWS: RowConfig[] = [
  {
    key: "escala",
    company: "Escala.ai",
    role: "CTO · Co-founder",
    bar: {
      left: "81.25%",
      right: "0",
      label: "Current · 11 mos",
      current: true,
    },
  },
  {
    key: "baires",
    company: "BairesDev",
    role: "Software Engineer",
    bar: { left: "40.5%", width: "40.7%", label: "2022 – 2025 · 3y 4m" },
  },
  {
    key: "cuida",
    company: "Cuida.Life",
    role: "Tech Lead",
    bar: { left: "22%", width: "18.5%", label: "2020 – 2022 · 1y 6m" },
  },
  {
    key: "kzas",
    company: "Kzas.ai",
    role: "Full Stack Engineer",
    bar: { left: "7%", width: "15%", label: "2019 – 2020 · 1y 3m" },
  },
  {
    key: "whf",
    company: "WHF",
    role: "Full Stack Developer",
    bar: { left: "0%", width: "6.25%", label: "'19 · 6m" },
  },
];

const YEARS = ["'19", "'20", "'21", "'22", "'23", "'24", "'25", "'26"];

export default function Timeline() {
  const [active, setActive] = useState<RoleKey>("escala");
  const role = ROLES[active];

  return (
    <section id="tl">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-code">
            <span className="scode-prefix">A.03</span>Career timeline
          </span>
          <span className="section-count">05 recent · 2019 – present</span>
        </div>

        <div className="tl-scale" data-reveal>
          <span>Years →</span>
          <div className="tl-years">
            {YEARS.map((y) => (
              <span key={y} className="yr">
                {y}
              </span>
            ))}
          </div>
        </div>

        <div className="tl-rows" data-reveal data-reveal-delay="1">
          {ROWS.map((row) => {
            const barStyle: React.CSSProperties = { left: row.bar.left };
            if (row.bar.width) barStyle.width = row.bar.width;
            if (row.bar.right) barStyle.right = row.bar.right;
            return (
              // biome-ignore lint/a11y/useSemanticElements: row contains block children, native <button> is invalid
              <div
                key={row.key}
                className={`tl-row${active === row.key ? " active" : ""}`}
                onClick={() => setActive(row.key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(row.key);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="tl-row-label">
                  {row.company}
                  <span className="role-tag">{row.role}</span>
                </div>
                <div className="tl-row-bar">
                  {Array.from({ length: 8 }).map((_, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length decorative slots
                    <span key={i} className="slot" />
                  ))}
                  <div
                    className={`tl-bar${row.bar.current ? " current" : ""}`}
                    style={barStyle}
                  >
                    {row.bar.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="tl-note">
          Showing most recent professional roles. Earlier work (2010 – 2019)
          includes freelance projects and foundational development experience.
        </p>

        <div className="tl-detail" id="tl-detail" data-reveal>
          <div className="tl-detail-label">
            <span className="tl-detail-year">{role.year}</span>
            <span className={`tl-detail-span${role.current ? " current" : ""}`}>
              {role.span}
            </span>
          </div>
          <div className="tl-detail-content">
            <h3>{role.company}</h3>
            <div className="role-sub">{role.title}</div>
            <div className="company-meta">
              {role.meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <p>{role.desc}</p>
            <div className="tl-detail-stack">
              {role.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

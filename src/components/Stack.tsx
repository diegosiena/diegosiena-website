type StackItem = { name: string; fill: number };
type StackColumn = { title: string; count: string; items: StackItem[] };

const COLUMNS: StackColumn[] = [
  {
    title: "Product · Web",
    count: "08",
    items: [
      { name: "Next.js", fill: 100 },
      { name: "TypeScript", fill: 100 },
      { name: "tRPC", fill: 95 },
      { name: "Drizzle ORM", fill: 90 },
      { name: "Supabase · Postgres", fill: 95 },
      { name: "Better-Auth", fill: 85 },
      { name: "Tailwind CSS", fill: 90 },
      { name: "Vercel", fill: 95 },
    ],
  },
  {
    title: "AI · Agents",
    count: "07",
    items: [
      { name: "Mastra", fill: 95 },
      { name: "OpenRouter", fill: 90 },
      { name: "LangSmith", fill: 85 },
      { name: "Composio", fill: 85 },
      { name: "Vector DBs", fill: 90 },
      { name: "Claude · OpenAI · Gemini", fill: 100 },
      { name: "Model Context Protocol", fill: 80 },
    ],
  },
  {
    title: "Also fluent in",
    count: "07",
    items: [
      { name: "Node.js", fill: 100 },
      { name: "Svelte · SvelteKit", fill: 90 },
      { name: "Vue · Nuxt", fill: 90 },
      { name: "React", fill: 85 },
      { name: "AWS · Azure", fill: 80 },
      { name: "MongoDB · MySQL", fill: 85 },
      { name: "Python, when needed", fill: 60 },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-code">
            <span className="scode-prefix">A.04</span>Tools in rotation
          </span>
          <span className="section-count">current · 2026</span>
        </div>

        <div className="stack-matrix">
          {COLUMNS.map((col, i) => (
            <div
              key={col.title}
              className="stack-col"
              data-reveal
              data-reveal-delay={i === 0 ? undefined : i.toString()}
            >
              <div className="stack-col-head">
                <span className="name">{col.title}</span>
                <span className="count">{col.count}</span>
              </div>
              <div className="stack-items">
                {col.items.map((item) => (
                  <div key={item.name} className="stack-item">
                    <span>{item.name}</span>
                    <span
                      className="fill"
                      style={
                        { "--fill": `${item.fill}%` } as React.CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

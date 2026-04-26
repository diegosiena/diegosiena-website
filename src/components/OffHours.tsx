const ENTRIES = [
  { n: "I.01", name: "Neuroscience & psychology", tag: "research · reading" },
  { n: "I.02", name: "History, social & political sciences", tag: "reading" },
  { n: "I.03", name: "Flight simulators", tag: "hobby · pc" },
  { n: "I.04", name: "Games of most kinds", tag: "hobby" },
  { n: "I.05", name: "Planted aquariums, betta fish", tag: "hobby · care" },
] as const;

export default function OffHours() {
  return (
    <section id="idx">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-code">
            <span className="scode-prefix">A.05</span>Off hours
          </span>
          <span className="section-count">05 entries</span>
        </div>

        <div className="index-wrap">
          <p className="index-note" data-reveal>
            What I read, play, and keep. Most of my best product intuitions come
            from{" "}
            <strong>neuroscience, psychology, and the social sciences</strong> —
            not from tech blogs.
          </p>
          <ul className="index-list" data-reveal data-reveal-delay="1">
            {ENTRIES.map((entry) => (
              <li key={entry.n} className="index-item">
                <span className="n">{entry.n}</span>
                <span className="name">{entry.name}</span>
                <span className="name-en">{entry.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

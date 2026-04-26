export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-meta" data-reveal>
          <div className="cell">
            <span className="label">Name</span>
            <span className="value">Diego Siena</span>
          </div>
          <div className="cell">
            <span className="label">Role</span>
            <span className="value">CTO & Co-founder</span>
          </div>
          <div className="cell">
            <span className="label">Currently at</span>
            <span className="value">Escala.ai</span>
          </div>
          <div className="cell">
            <span className="label">Based in</span>
            <span className="value">Ribeirão Preto, BR</span>
          </div>
        </div>

        <h1 className="hero-statement" data-reveal data-reveal-delay="1">
          <span className="w-ext">Sixteen</span>{" "}
          <span className="w-thin">years</span> of shipping software.{" "}
          <span className="w-thin">Now</span> building{" "}
          <span className="w-accent">AI products</span> and the teams that{" "}
          <span className="w-ext">ship</span> them.
        </h1>

        <div
          className="hero-meta hero-meta-bottom"
          data-reveal
          data-reveal-delay="2"
        >
          <div className="cell">
            <span className="label">Active since</span>
            <span className="value">
              2010 <span className="muted">· 16y</span>
            </span>
          </div>
          <div className="cell wide">
            <span className="label">Domains</span>
            <span className="value mixed">
              AI, Enterprise SaaS, Fintech, Healthcare, E-commerce, Real Estate,
              IoT, ERP
            </span>
          </div>
          <div className="cell">
            <span className="label">Languages</span>
            <span className="value">
              PT-BR <span className="muted">·</span> EN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

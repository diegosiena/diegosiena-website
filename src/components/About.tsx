export default function About() {
  return (
    <section id="id">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-code">
            <span className="scode-prefix">A.01</span>About
          </span>
          <span className="section-count">profile</span>
        </div>

        <div className="about-layout">
          <aside className="about-pull" data-reveal>
            <div className="pull-mark">
              <span className="pull-tag">Working principle</span>
            </div>
            <blockquote className="pull-quote">
              <span className="pull-mark-q">“</span>
              Technology is leverage,
              <br />
              not the <em className="pull-em">point.</em>
            </blockquote>
            <div className="pull-foot">
              <span className="pull-line" />
              <span className="pull-attrib">
                how I think about every build/buy/automate decision
              </span>
            </div>
          </aside>

          <div className="about-prose" data-reveal data-reveal-delay="1">
            <p className="about-lede">
              CTO, technology leader, and co-founder. Sixteen years building
              software across industries — now focused on AI products and the
              teams that ship them.
            </p>
            <p>
              I started writing software in 2010, at sixteen. Across fintech,
              healthcare, real estate, IoT, e-commerce, and ERP, I&apos;ve moved
              from full-stack engineer to tech lead to CTO and founder.
            </p>
            <p>
              That range taught me what I care about most now: understanding the
              business first, and treating technology as leverage, not as the
              point.
            </p>
            <p>
              These days almost everything I do sits at the intersection of AI
              and product. Designing conversational agents, shaping how systems
              remember and reason, and deciding what to build, what to buy, and
              what to automate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

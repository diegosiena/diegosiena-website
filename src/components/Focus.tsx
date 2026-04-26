const FOCUS_AREAS = [
  {
    code: "F.01",
    axis: "Strategy & product",
    title: "Ideating, building, and shipping AI products",
    body: "From product strategy and validation to architecture and execution. Deciding what to build, what to buy, and what to automate.",
  },
  {
    code: "F.02",
    axis: "Tech leadership",
    title: "Leading teams, systems, and decisions",
    body: "Shaping technical direction, tradeoffs, and process. Building the conditions where small teams ship like much bigger ones.",
  },
  {
    code: "F.03",
    axis: "Discovery & research",
    title: "Mapping the AI landscape",
    body: "Tracking the technologies, frameworks, and concepts shaping AI product work today, and translating them into decisions.",
  },
  {
    code: "F.04",
    axis: "Agentic capabilities",
    title: "How agents reach, sense, and act",
    body: "Conversational and multimodal interfaces, multi-channel reach, multi-step workflows, and the orchestration that lets agents and tools work together as a system.",
  },
  {
    code: "F.05",
    axis: "Engineering & research",
    title: "What makes agents actually work",
    body: "Context engineering, memory, knowledge bases, evaluations, tool use, autonomous processing, and the patterns behind agents that hold up in production.",
  },
  {
    code: "F.06",
    axis: "Velocity",
    title: "AI across the SDLC",
    body: "Multiplying velocity with AI-native tooling, so small teams ship like much bigger ones.",
  },
] as const;

export default function Focus() {
  return (
    <section id="cap">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-code">
            <span className="scode-prefix">A.02</span>Current focus
          </span>
          <span className="section-count">06 areas</span>
        </div>

        <div className="cap-matrix">
          {FOCUS_AREAS.map((area, i) => (
            <div
              key={area.code}
              className="cap-cell"
              data-reveal
              data-reveal-delay={i % 3 === 0 ? undefined : (i % 3).toString()}
            >
              <div className="cap-axis">
                <span>{area.code}</span>
                <span>{area.axis}</span>
              </div>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

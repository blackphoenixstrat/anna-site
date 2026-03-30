import { Section } from "../components/section";

export default function IntellectualArchitecturePage() {
  return (
    <Section
      title="Intellectual Architecture"
      kicker="Proprietary systems across cognition, ontology, and applied structural analysis."
    >
      <div style={{ display: "grid", gap: "16px" }}>
        <div className="card" style={{ padding: "40px" }}>
          <div className="h-font" style={{ fontSize: "34px" }}>Human Braining™</div>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            A cognitive architecture mapping decision patterns, collapse dynamics,
            and internal structural conflict under pressure.
          </p>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            Explored in <span style={{ color: "var(--text)" }}>The Three Whales of Sanity</span>.
          </p>
        </div>

        <div className="card" style={{ padding: "40px" }}>
          <div className="h-font" style={{ fontSize: "34px" }}>Duality of Being</div>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            An ontological system examining the structural foundations of human existence.
          </p>
          <div style={{ marginTop: "24px", color: "var(--muted)", lineHeight: 1.9 }}>
            <div>Pendulum of Being | Маятник Бытия</div>
            <div>Opening. Physics of Human Being. Light and Darkness | Проём. ФИЗИКА ЧЕЛОВЕКА, СВЕТА И ТЬМЫ</div>
            <div>Genesis. The Code of Being | Генезис. ИСХОДНЫЙ КОД БЫТИЯ</div>
          </div>
        </div>

        <div className="card" style={{ padding: "40px" }}>
          <div className="h-font" style={{ fontSize: "34px" }}>Applied Structural Thinking</div>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            Practical integration of ontology and cognitive systems into capital allocation,
            founder evaluation, risk interpretation, and leadership under pressure.
          </p>
          <ul style={{ marginTop: "24px", color: "var(--muted)", lineHeight: 1.9 }}>
            <li>• Capital allocation</li>
            <li>• Founder evaluation</li>
            <li>• Risk interpretation</li>
            <li>• Leadership under pressure</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
import { Section } from "../components/section";

export default function DecisionArchitecturePage() {
  return (
    <Section title="Decision Architecture" kicker="Beyond Numbers.">
      <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--muted)", maxWidth: "980px" }}>
        Most advisory processes evaluate financial projections and legal frameworks.
        Few address the human decision architecture behind capital allocation.
      </p>

      <p style={{ marginTop: "24px", fontSize: "16px", lineHeight: 1.9, color: "var(--muted)", maxWidth: "980px" }}>
        My work integrates all three layers — financial, structural, and behavioral —
        ensuring capital moves with precision, not impulse.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        <div className="card" style={{ padding: "32px" }}>
          <div className="h-font" style={{ fontSize: "26px" }}>Financial</div>
          <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.7, color: "var(--muted)" }}>
            Awareness of numbers — without worshiping them.
          </p>
        </div>

        <div className="card" style={{ padding: "32px" }}>
          <div className="h-font" style={{ fontSize: "26px" }}>Structural</div>
          <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.7, color: "var(--muted)" }}>
            Governance, vehicles, alignment, and risk reality.
          </p>
        </div>

        <div className="card" style={{ padding: "32px" }}>
          <div className="h-font" style={{ fontSize: "26px" }}>Human</div>
          <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.7, color: "var(--muted)" }}>
            Decision patterns, blind spots, urgency, narratives.
          </p>
        </div>
      </div>
    </Section>
  );
}
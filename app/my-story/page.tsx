import { Section } from "../components/section";

export default function MyStoryPage() {
  return (
    <Section title="My Story" kicker="Why Decision Architecture Exists">
      <div style={{ maxWidth: "980px", color: "var(--muted)", fontSize: "16px", lineHeight: 1.95 }}>
        <p>There are moments in life that divide everything into before and after.</p>
        <p>Mine emerged through structural collapse.</p>
        <p>
          What began as a business crisis unfolded into a cascade — professional,
          personal, and existential.
        </p>
        <p>
          When systems break, two paths emerge: blame the external environment,
          or decode the structure. I chose to decode.
        </p>

        <div style={{ paddingTop: "28px" }}>
          <div className="h-font" style={{ fontSize: "34px", color: "var(--text)" }}>
            The Unexamined Variable
          </div>
          <p style={{ marginTop: "16px" }}>
            Why do intelligent people make decisions that later destabilize them?
            Why do investors allocate capital to fragile structures? Why do charisma
            outpace substance? Why do narratives override clarity?
          </p>
          <p style={{ marginTop: "16px" }}>
            It became evident that financial analysis and legal structuring,
            while necessary, do not govern decisions alone. Something deeper operates
            beneath the visible layers.
          </p>
        </div>

        <div style={{ paddingTop: "28px" }}>
          <div className="h-font" style={{ fontSize: "34px", color: "var(--text)" }}>
            From Collapse to Structure
          </div>
          <p style={{ marginTop: "16px" }}>
            The systems that later became Human Braining™, Duality of Being,
            and Decision Architecture were not theoretical constructs.
            They emerged from decoding collapse — across business, capital,
            and human relationships.
          </p>
          <p style={{ marginTop: "16px" }}>
            When structure became visible, chaos lost its mystique.
            Clarity was no longer emotional. It became architectural.
          </p>
        </div>

        <div style={{ paddingTop: "28px" }}>
          <div className="h-font" style={{ fontSize: "34px", color: "var(--text)" }}>
            Structural Mastery
          </div>
          <p style={{ marginTop: "16px" }}>
            Understanding decision architecture does not eliminate risk.
            It eliminates blindness.
          </p>
          <p style={{ marginTop: "16px" }}>
            My work does not promise certainty. It introduces disciplined awareness
            across three layers: Financial. Structural. Human.
          </p>
        </div>
      </div>
    </Section>
  );
}
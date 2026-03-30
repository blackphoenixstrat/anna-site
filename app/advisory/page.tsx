import Link from "next/link";
import { Section } from "../components/section";

export default function AdvisoryPage() {
  return (
    <Section
      title="Advisory"
      kicker="Capital does not fail from lack of opportunity. It fails from lack of structure."
    >
      <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--muted)", maxWidth: "920px" }}>
        I operate at the level of architecture, positioning, and structural clarity —
        not brokerage or speculative modelling.
      </p>

      <div style={{ marginTop: "40px", display: "grid", gap: "16px" }}>
        <div className="card" style={{ padding: "40px" }}>
          <div className="h-font" style={{ fontSize: "34px" }}>Strategic Entry into the UAE</div>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            Structured capital positioning across jurisdictional, regulatory, and governance dimensions.
          </p>
          <ul style={{ marginTop: "24px", color: "var(--muted)", lineHeight: 1.9 }}>
            <li>• Entry format evaluation</li>
            <li>• Market positioning architecture</li>
            <li>• Governance and structural alignment</li>
            <li>• Negotiation framing</li>
            <li>• Risk contextualization</li>
          </ul>
        </div>

        <div className="card" style={{ padding: "40px" }}>
          <div className="h-font" style={{ fontSize: "34px" }}>Curated Off-Market Access</div>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            Selective access to land, development allocations, early-stage structured opportunities,
            and private real estate placements.
          </p>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            My role includes filtering, structural evaluation, and negotiation alignment.
          </p>
        </div>

        <div className="card" style={{ padding: "40px" }}>
          <div className="h-font" style={{ fontSize: "34px" }}>Capital Navigation Partner</div>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            On-the-ground strategic representation for private capital operating within the UAE.
          </p>
          <ul style={{ marginTop: "24px", color: "var(--muted)", lineHeight: 1.9 }}>
            <li>• Ongoing advisory</li>
            <li>• Deal environment navigation</li>
            <li>• Founder–capital interface</li>
            <li>• Structural review before commitment</li>
          </ul>
        </div>

        <div className="card" style={{ padding: "40px" }}>
          <div className="h-font" style={{ fontSize: "34px" }}>Startup & Venture Structuring</div>
          <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
            For founders and early-stage investors entering the GCC region.
          </p>
          <ul style={{ marginTop: "24px", color: "var(--muted)", lineHeight: 1.9 }}>
            <li>• Capital narrative architecture</li>
            <li>• Structural pivot strategy</li>
            <li>• Founder decision evaluation</li>
            <li>• Market entry alignment</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ padding: "40px", marginTop: "48px" }}>
        <div className="h-font" style={{ fontSize: "34px" }}>Beyond Numbers.</div>
        <p style={{ marginTop: "16px", fontSize: "15px", lineHeight: 1.9, color: "var(--muted)" }}>
          Most advisory processes evaluate financial and legal structure. Few address the human
          decision architecture behind capital allocation.
        </p>
        <Link href="/decision-architecture" className="btn-outline" style={{ marginTop: "28px" }}>
          Read about Decision Architecture →
        </Link>
      </div>
    </Section>
  );
}
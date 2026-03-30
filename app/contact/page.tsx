import { Section } from "../components/section";

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      kicker="Strategic conversations are selective and confidential."
    >
      <div className="card" style={{ padding: "40px", maxWidth: "920px" }}>
        <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--muted)" }}>
          For mandate-based advisory or structured capital discussions:
        </p>

        <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px" }}>
          <a href="mailto:blackphoenixstrategies@gmail.com">
            blackphoenixstrategies@gmail.com
          </a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </Section>
  );
}
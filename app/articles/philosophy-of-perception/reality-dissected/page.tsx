import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reality Dissected | Philosophy of Perception",
  description:
    "English adaptations of essays on distortion, perception, pseudo-expertise, and the hidden logic behind human behavior, decision-making, and capital.",
  keywords: [
    "Reality Dissected",
    "Philosophy of Perception",
    "distorted perception",
    "pseudo expertise",
    "human behavior",
    "decision making",
    "social media noise",
    "psychology of decisions",
    "Anna K",
  ],
  openGraph: {
    title: "Reality Dissected | Philosophy of Perception",
    description:
      "Essays on perception, distortion, pseudo-expertise, and the underlying logic behind human behavior and decision-making.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Dissected",
    description:
      "English adaptations of essays on distortion, perception, and decision-making.",
  },
  alternates: {
    canonical: "/articles/philosophy-of-perception/reality-dissected",
  },
};

export default function RealityDissectedPage() {
  return (
    <main
      style={{
        background: "#F7F5F1",
        minHeight: "100vh",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={eyebrow}>Philosophy of Perception</div>

          <h1 style={title}>Reality Dissected</h1>

          <p style={intro}>
            English adaptations of essays on distortion, perception, and the
            underlying logic that shapes human behavior, decisions, and capital.
          </p>
        </div>

        <div style={{ display: "grid", gap: "18px" }}>
<Link
  href="/articles/philosophy-of-perception/reality-dissected/meaning-of-war"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={cardTitle}>
      The Meaning of War — or the Truth Humanity Keeps Ignoring
    </h2>

    <p style={cardText}>
      A philosophical essay on war, human conflict, and why violence is not a
      solution but a structural collapse driven by distorted perception.
    </p>
  </div>
</Link>

          <Link
            href="/articles/philosophy-of-perception/reality-dissected/armchair-geopolitics"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <h2 style={cardTitle}>
                Armchair Geopolitics, Future Bloggers, and the Circus of Public
                Nonsense
              </h2>

              <p style={cardText}>
                An essay on pseudo-expertise, distorted perception, social media
                noise, and why the real problem is not information — but the
                inability to distinguish reality from projection.
              </p>
            </div>
          </Link>

          <Link
            href="/articles/philosophy-of-perception/reality-dissected/saviors-of-the-world"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <h2 style={cardTitle}>Saviors of the World</h2>

              <p style={cardText}>
                On the illusion of saving others, internal imbalance, and how
                distorted perception shapes decisions — in life, business, and
                capital.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

/* styles */

const eyebrow = {
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#5C5A55",
  marginBottom: "14px",
};

const title = {
  fontSize: "56px",
  margin: 0,
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 300,
};

const intro = {
  marginTop: "16px",
  color: "#5C5A55",
  fontSize: "18px",
  lineHeight: 1.7,
  maxWidth: "760px",
};

const card = {
  padding: "28px",
  border: "1px solid #D8D3C8",
  borderRadius: "16px",
  background: "#FFFFFF",
};

const cardTitle = {
  fontSize: "28px",
  margin: "0 0 10px 0",
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 400,
  lineHeight: 1.2,
};

const cardText = {
  margin: 0,
  color: "#5C5A55",
  fontSize: "15px",
  lineHeight: 1.75,
};
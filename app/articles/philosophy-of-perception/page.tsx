import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy of Perception | Anna K",
  description:
    "Essays on perception, distortion, morality, and the underlying structures that shape human judgment and meaning.",
  keywords: [
    "Philosophy of Perception",
    "human distortion",
    "morality essays",
    "perception and meaning",
    "Anna K essays",
    "Ассенизатор смыслов",
    "Reality Dissected",
  ],
  openGraph: {
    title: "Philosophy of Perception | Anna K",
    description:
      "Essays on perception, distortion, morality, and the underlying structures that shape human judgment and meaning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philosophy of Perception | Anna K",
    description:
      "Essays on perception, distortion, morality, and the underlying structures that shape human judgment and meaning.",
  },
  alternates: {
    canonical: "/articles/philosophy-of-perception",
  },
};

export default function PhilosophyOfPerceptionPage() {
  return (
    <main
      style={{
        background: "#F7F5F1",
        minHeight: "100vh",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <div style={eyebrow}>Philosophy of Perception</div>

          <h1
            style={{
              fontSize: "56px",
              margin: 0,
              color: "#1F1F1C",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Philosophy of Perception
          </h1>

          <p
            style={{
              marginTop: "16px",
              color: "#5C5A55",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "760px",
            }}
          >
            Essays on perception, distortion, morality, and the invisible
            structures through which people interpret reality, meaning, and
            themselves.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <Link
            href="/articles/philosophy-of-perception/assenizator-smyslov"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <div style={miniLabel}>Russian Originals</div>
              <h2 style={title}>Ассенизатор смыслов</h2>
              <p style={text}>
                Русскоязычные эссе о морали, внутренних перекосах, общественных
                искажениях и той точке, из которой человек смотрит на мир.
              </p>
            </div>
          </Link>

          <Link
            href="/articles/philosophy-of-perception/reality-dissected"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <div style={miniLabel}>English Adaptations</div>
              <h2 style={title}>Reality Dissected</h2>
              <p style={text}>
                English adaptations of essays on distortion, judgment, and the
                underlying logic behind human perception, behavior, and
                decision-making.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

const eyebrow = {
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#5C5A55",
  marginBottom: "14px",
};

const card = {
  padding: "32px",
  border: "1px solid #D8D3C8",
  borderRadius: "16px",
  background: "#FFFFFF",
};

const miniLabel = {
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  color: "#8A847A",
  marginBottom: "14px",
};

const title = {
  fontSize: "30px",
  margin: "0 0 12px 0",
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 400,
  lineHeight: 1.2,
};

const text = {
  margin: 0,
  color: "#5C5A55",
  fontSize: "15px",
  lineHeight: 1.75,
};
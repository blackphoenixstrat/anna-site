import Link from "next/link";

export default function ArticlesPage() {
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
          <h1
            style={{
              fontSize: "56px",
              margin: 0,
              color: "#1F1F1C",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
            }}
          >
            Articles
          </h1>

          <p
            style={{
              marginTop: "16px",
              color: "#5C5A55",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "700px",
            }}
          >
            A structured body of thought across capital, systems, technology, and human perception.
          </p>
        </div>

        <div style={grid}>
          <Link href="/articles/money-talks" style={link}>
            <div style={card}>
              <h2 style={title}>Money Talks with Anna K</h2>
              <p style={text}>
                Strategic essays on capital, investor psychology, and the hidden
                structures behind financial decisions.
              </p>
            </div>
          </Link>

          <Link href="/articles/reality-check-scalpel" style={link}>
            <div style={card}>
              <h2 style={title}>Reality Check — UAE Edition</h2>
              <p style={text}>
                System-level analysis of global fragmentation and why the UAE
                represents a new operating model for capital and mobility.
              </p>
            </div>
          </Link>

          <Link href="/articles/philosophy-of-perception" style={link}>
            <div style={card}>
              <h2 style={title}>Philosophy of Perception</h2>
              <p style={text}>
                Essays on perception, distortion, and the underlying structures that shape
                human judgment, morality, and meaning.
              </p>
            </div>
          </Link>

          <Link href="/articles/on-future-technology-and-beyond" style={link}>
            <div style={card}>
              <h2 style={title}>On Future, Technology and Beyond</h2>
              <p style={text}>
                Essays on strategic cognition, technological transition, systemic disruption,
                and the changing role of human value in a volatile world.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "24px",
};

const link = {
  textDecoration: "none",
  display: "block",
  height: "100%",
};

const card = {
  padding: "32px",
  border: "1px solid #D8D3C8",
  borderRadius: "16px",
  background: "#FFFFFF",
  minHeight: "260px",

  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "flex-start",

  boxSizing: "border-box" as const,
};

const title = {
  fontSize: "24px",
  margin: "0 0 12px 0",
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 400,
  lineHeight: 1.3,
};

const text = {
  color: "#5C5A55",
  fontSize: "15px",
  lineHeight: 1.7,
  margin: 0,
};
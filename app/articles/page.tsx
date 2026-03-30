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
        
        {/* Заголовок */}
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
            A structured body of thought across capital, systems, and human perception.
          </p>
        </div>

        {/* СЕТКА */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          
          {/* Money Talks */}
          <Link href="/articles/money-talks" style={{ textDecoration: "none" }}>
            <div style={card}>
              <h2 style={title}>Money Talks with Anna K</h2>
              <p style={text}>
                Strategic essays on capital, investor psychology, and the hidden
                structures behind financial decisions.
              </p>
            </div>
          </Link>

          {/* Reality Check UAE */}
          <Link href="/articles/reality-check-scalpel" style={{ textDecoration: "none" }}>
            <div style={card}>
              <h2 style={title}>Reality Check — UAE Edition</h2>
              <p style={text}>
                System-level analysis of global fragmentation and why the UAE
                represents a new operating model for capital and mobility.
              </p>
            </div>
            </Link>

         <Link href="/articles/philosophy-of-perception" style={{ textDecoration: "none" }}>
  <div style={card}>
    <h2 style={title}>Philosophy of Perception</h2>
    <p style={text}>
      Essays on perception, distortion, and the underlying structures that shape
      human judgment, morality, and meaning.
    </p>
  </div>
</Link>

        </div>
      </div>
    </main>
  );
}

/* Стили */
const card = {
  padding: "32px",
  border: "1px solid #D8D3C8",
  borderRadius: "16px",
  background: "#FFFFFF",
  transition: "all 0.2s ease",
};

const title = {
  fontSize: "24px",
  marginBottom: "12px",
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
};

const text = {
  color: "#5C5A55",
  fontSize: "15px",
  lineHeight: 1.7,
};
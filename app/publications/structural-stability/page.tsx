export default function StructuralStabilityPage() {
  return (
    <main
      style={{
        background: "#0C0C0E",
        minHeight: "100vh",
        padding: "100px 24px",
        color: "#EAEAEA",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "56px",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            marginBottom: "20px",
          }}
        >
          Structural Stability in a Volatile World
        </h1>

        <p
          style={{
            color: "#BFC2C6",
            fontSize: "18px",
            lineHeight: 1.8,
            maxWidth: "700px",
          }}
        >
          A strategic report exploring capital migration, systemic volatility,
          and the structural positioning of Dubai within a rapidly shifting global landscape.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/reports/structural-stability.pdf"
            target="_blank"
            style={btn}
          >
            Read Report →
          </a>

          <a
            href="/reports/structural-stability.pdf"
            download
            style={btn}
          >
            Download PDF ↓
          </a>
        </div>
      </div>
    </main>
  );
}

const btn = {
  padding: "12px 20px",
  border: "1px solid rgba(234,234,234,0.2)",
  borderRadius: "999px",
  textDecoration: "none",
  color: "#EAEAEA",
};
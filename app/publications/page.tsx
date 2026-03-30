export default function PublicationsPage() {
  return (
    <main
      style={{
        background: "#0C0C0E",
        minHeight: "100vh",
        padding: "100px 24px",
        color: "#EAEAEA",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              marginBottom: "20px",
            }}
          >
            Publications
          </h1>

          <p
            style={{
              color: "#BFC2C6",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "760px",
            }}
          >
            A curated selection of published works, philosophical cycles,
            and strategic intellectual projects.
          </p>
        </div>

        <div style={{ display: "grid", gap: "18px" }}>
          <div style={card}>
            <h2 style={title}>The Three Whales of Sanity</h2>
            <p style={text}>
              A cognitive system exploring human braining, structural collapse,
              and decision-making patterns.
            </p>
          </div>

          <div style={card}>
            <h2 style={title}>Duality of Being | Дуальность Бытия</h2>
            <p style={text}>
              An ontological cycle examining the structural foundations of human existence.
            </p>

            <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
  
  <span style={subItem}>
    Маятник Бытия — Pendulum of Being
  </span>

  <span style={subItem}>
    Проём — Opening: Physics of a Human Being, Light and Darkness
  </span>

  <span style={subItem}>
    Генезис — Genesis: The Code of Being
  </span>

</div>
          </div>

          <div style={card}>
            <h2 style={title}>Monologue of a Soul</h2>
            <p style={text}>
              A poetic-philosophical extension exploring light, shadow, and transformation.
            </p>

            <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={subItem}>
                Monologue of a Soul: The World of Duality That I Once Knew
              </span>
              <span style={subItem}>
                Monologue of a Soul Through a Thousand Lives
              </span>
            </div>
          </div>

          <div style={card}>
            <h2 style={title}>Structural Stability in a Volatile World</h2>
            <p style={text}>
              A strategic report on systemic volatility, capital movement,
              and why structural stability is becoming a dominant factor
              in global investment decisions.
            </p>

            <a href="/publications/structural-stability" style={link}>
              View Publication →
            </a>
          </div>

          <div style={card}>
            <h2 style={title}>Reality Check Series</h2>
            <p style={text}>
              Applied structural thinking in business and capital environments.
            </p>

            <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={subItem}>Through Business Hell and Back</span>
              <span style={subItem}>Reality Check — Scalpel Edition</span>
            </div>
          </div>

          <div style={card}>
            <h2 style={title}>Media & Projects</h2>
            <p style={text}>
              Selected intellectual and creative extensions available upon request.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const card = {
  padding: "36px",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.02)",
};

const title = {
  fontSize: "32px",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 400,
  marginBottom: "12px",
};

const text = {
  fontSize: "16px",
  color: "#BFC2C6",
  lineHeight: 1.8,
  margin: 0,
};

const link = {
  display: "inline-block",
  marginTop: "20px",
  textDecoration: "none",
  color: "#EAEAEA",
};

const subItem = {
  color: "#EAEAEA",
  fontSize: "15px",
  lineHeight: 1.7,
};
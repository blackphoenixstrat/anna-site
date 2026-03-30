import Link from "next/link";

export default function RealityCheckScalpelPage() {
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
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#5C5A55",
              marginBottom: "14px",
            }}
          >
            English Essays
          </div>

          <h1
            style={{
              fontSize: "56px",
              margin: 0,
              color: "#1F1F1C",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
            }}
          >
            Reality Check — Scalpel Edition
          </h1>

          <p
            style={{
              marginTop: "18px",
              color: "#5C5A55",
              fontSize: "18px",
              lineHeight: 1.75,
              maxWidth: "760px",
            }}
          >
            System-level analysis of global fragmentation and why the UAE represents a new operating model for capital and mobility.
          </p>
        </div>

                <div style={{ display: "grid", gap: "18px" }}>
          <Link
            href="/articles/reality-check-scalpel/structural-stability-the-new-currency-of-power"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <h2 style={title}>Structural Stability: The New Currency of Power</h2>
              <p style={text}>
                A strategic essay on systemic volatility, Dubai’s resilience, and why
                structural stability is becoming the decisive asset of the next global era.
              </p>
            </div>
          </Link>

<Link
  href="/articles/reality-check-scalpel/what-this-war-is-really-revealing"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      What This War Is Really Revealing — And Why It Will Reshape Global Migration
    </h2>
    <p style={text}>
      A strategic essay on global migration, psychology, system alignment, and why
      cities like Dubai increasingly attract builders, capital, and action-oriented minds.
    </p>
  </div>
</Link>

<Link
  href="/articles/reality-check-scalpel/chasing-the-dream-or-chasing-an-illusion"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Chasing the Dream or Chasing an Illusion? What Safety Really Means Today
    </h2>

    <p style={text}>
      A strategic reflection on safety, structural stability, and why the future
      belongs not to quiet places — but to systems that continue to function under pressure.
    </p>
  </div>
</Link>

<Link
  href="/articles/reality-check-scalpel/why-85-percent-expats-are-not-dubais-weakness"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Why 85% Expats Are Not Dubai’s Weakness — But Its Core Strength
    </h2>

    <p style={text}>
      A strategic essay on Dubai’s expat population, system design, and why
      selective alignment may be one of the UAE model’s greatest structural strengths.
    </p>
  </div>
</Link>

<Link
  href="/articles/reality-check-scalpel/why-the-western-economic-model-is-losing-alignment"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Why the Western Economic Model Is Losing Alignment — And What Dubai Does Differently
    </h2>

    <p style={text}>
      A strategic essay on taxation, welfare states, system alignment, and why
      Dubai’s economic platform restores the link between effort and outcome.
    </p>
  </div>
</Link>

<Link
  href="/articles/reality-check-scalpel/why-the-future-will-belong-to-cities"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Why the Future Will Belong to Cities — And Why the UAE Is Emerging as a New Type of System
    </h2>

    <p style={text}>
      A strategic essay on global fragmentation, city-systems, and why the UAE is emerging
      as a transnational platform for capital, talent, and adaptive continuity.
    </p>
  </div>
</Link>
          
        </div>
      </div>
    </main>
  );
}

const card = {
  padding: "28px",
  border: "1px solid #D8D3C8",
  borderRadius: "16px",
  background: "#FFFFFF",
};

const title = {
  fontSize: "28px",
  margin: "0 0 10px 0",
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 400,
};

const text = {
  margin: 0,
  color: "#5C5A55",
  fontSize: "15px",
  lineHeight: 1.75,
};
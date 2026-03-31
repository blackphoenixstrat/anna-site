import Link from "next/link";

export default function OnFutureTechnologyAndBeyondPage() {
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
            On Future, Technology and Beyond
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
            Essays on strategic cognition, technological transformation, systemic volatility,
            and the future value of human intelligence in a rapidly changing world.
          </p>
        </div>

        <div style={listWrapper}>
          <Link
            href="/articles/on-future-technology-and-beyond/highest-paid-job-future"
            style={link}
          >
            <div style={card}>
              <h2 style={title}>
                The Highest-Paid Job in Today’s Market — and the Future
              </h2>
              <p style={text}>
                Why the most valuable role in the modern world is no longer execution alone,
                but the rare ability to think strategically across systems, volatility,
                technology, and human behavior.
              </p>
            </div>
          </Link>

          <Link
            href="/articles/on-future-technology-and-beyond/cost-of-transformation"
            style={link}
          >
            <div style={card}>
              <h2 style={title}>
                The Cost of Transformation: What Most Companies Refuse to Admit
              </h2>
              <p style={text}>
                Why real transformation is never painless, why organizations resist it,
                and how structural misalignment and psychological pressure shape the true
                cost of change.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

const listWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "18px",
};

const link = {
  textDecoration: "none",
};

const card = {
  padding: "28px",
  border: "1px solid #D8D3C8",
  borderRadius: "16px",
  background: "#FFFFFF",
  transition: "all 0.2s ease",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
};

const title = {
  fontSize: "28px",
  margin: "0 0 10px 0",
  color: "#1F1F1C",
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 400,
  lineHeight: 1.3,
};

const text = {
  margin: 0,
  color: "#5C5A55",
  fontSize: "15px",
  lineHeight: 1.75,
};
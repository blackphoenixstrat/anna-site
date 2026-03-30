import Link from "next/link";

export default function MoneyTalksPage() {
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
            Business & Capital Essays
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
            Money Talks with Anna K
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
            Strategic essays on capital, investor psychology, and how decisions are made under uncertainty.
          </p>
        </div>

        <div style={{ display: "grid", gap: "18px" }}>
        
        <Link
  href="/articles/money-talks/why-most-investors-are-not-investing"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Why Most Investors Are Not Investing — They Are Positioning Their Fear
    </h2>

    <p style={text}>
      A strategic essay on capital, psychology, and why many investors are not
      allocating — but managing fear and preservation instincts at scale.
    </p>
  </div>
</Link>

<Link
  href="/articles/money-talks/liquidity-is-not-safety-it-is-optionality"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Liquidity Is Not Safety — It Is Optionality
    </h2>

    <p style={text}>
      A strategic essay on structural inflation, cash erosion, and why liquidity
      without deployment is not protection, but delayed loss.
    </p>
  </div>
</Link>

          <Link
            href="/articles/money-talks/will-property-prices-fall-uae"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <h2 style={title}>
                Will Property Prices in the UAE Actually Fall?
              </h2>

              <p style={text}>
                A strategic analysis of Dubai real estate, global inflation,
                and why property prices in the UAE are unlikely to decline
                in the current cycle.
              </p>
            </div>
          </Link>

          <Link
            href="/articles/money-talks/five-non-trivial-mistakes-investors-make"
            style={{ textDecoration: "none" }}
          >
            <div style={card}>
              <h2 style={title}>
                Five Non-Trivial Mistakes Investors Make in Dubai Real Estate
              </h2>

              <p style={text}>
                A strategic breakdown of five investor mistakes in Dubai real estate —
                from poor market timing to outsourcing thinking and misunderstanding risk.
              </p>
            </div>
          </Link>

          <Link
  href="/articles/money-talks/why-most-investors-misread-risk-in-dubai"
  style={{ textDecoration: "none" }}
>
  <div style={card}>
    <h2 style={title}>
      Why Most Investors Misread Risk in Dubai — And What They Get Wrong
    </h2>

    <p style={text}>
      A strategic perspective on how investors misread risk in Dubai real estate —
      from liquidity illusion and leverage exposure to cycle timing and structural stability.
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
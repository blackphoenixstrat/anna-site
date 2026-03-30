export default function ArticleTemplate() {
  return (
    <main
      style={{
        background: "#F7F5F1",
        minHeight: "100vh",
        padding: "100px 24px",
      }}
    >
      <article
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          color: "#1F1F1C",
        }}
      >
        {/* CATEGORY */}
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5C5A55",
            marginBottom: "16px",
          }}
        >
          Money Talks with Anna K
        </div>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "48px",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Why Capital Fails Without Structure
        </h1>

        {/* META */}
        <div
          style={{
            fontSize: "14px",
            color: "#5C5A55",
            marginBottom: "40px",
          }}
        >
          Anna Kovalerskaya · Dubai · 2026
        </div>

        {/* CONTENT */}
        <div
          style={{
            fontSize: "18px",
            lineHeight: 1.9,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <p>
            Most capital does not fail because of bad opportunity.
            It fails because of poor structure.
          </p>

          <p>
            Investors often believe that access to deals determines outcomes.
            In reality, structure determines survival.
          </p>

          <h2
            style={{
              fontSize: "28px",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 400,
              marginTop: "24px",
            }}
          >
            The Illusion of Opportunity
          </h2>

          <p>
            The market in Dubai presents thousands of opportunities.
            But most of them are structurally fragile.
          </p>

          <p>
            Without clarity in governance, capital alignment, and decision hierarchy,
            even the strongest-looking investment collapses under pressure.
          </p>

          <h2
            style={{
              fontSize: "28px",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 400,
              marginTop: "24px",
            }}
          >
            Structure Before Capital
          </h2>

          <p>
            Capital must follow structure, not the other way around.
          </p>

          <p>
            The moment capital leads without structural clarity,
            risk is no longer calculated — it becomes hidden.
          </p>
        </div>
      </article>
    </main>
  );
}
import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ width: "100%", borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div>© Anna P. Kovalerskaya</div>
          <div style={{ color: "var(--muted)" }}>Black Phoenix Strategies</div>
        </div>

        <div className="hr" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            fontSize: "14px",
          }}
        >
          <a href="mailto:blackphoenixstrategies@gmail.com">
            blackphoenixstrategies@gmail.com
          </a>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/contact">Contact</Link>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
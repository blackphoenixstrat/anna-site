export function Section({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "56px 0 80px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {kicker ? (
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(234,234,234,0.6)",
            }}
          >
            {kicker}
          </div>
        ) : null}

        <h1
          className="h-font"
          style={{
            fontSize: "56px",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {title}
        </h1>

        <div className="hr" />
        <div style={{ paddingTop: "8px" }}>{children}</div>
      </div>
    </section>
  );
}
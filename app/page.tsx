export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0C0C0E",
        color: "#EAEAEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 300,
            marginBottom: "16px",
            letterSpacing: "0.04em",
          }}
        >
          Anna P. Kovalerskaya
        </h1>

        <p
          style={{
            fontSize: "16px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#BFC2C6",
            marginBottom: "28px",
          }}
        >
          Capital & Systems Architect
        </p>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#EAEAEA",
          }}
        >
          Decision Architecture
          <br />
          Strategic Capital Entry
          <br />
          UAE
        </p>
      </div>
    </main>
  );
}
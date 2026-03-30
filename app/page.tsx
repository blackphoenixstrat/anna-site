import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0C0C0E",
        color: "#EAEAEA",
        padding: "120px 24px 140px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <section
          style={{
            textAlign: "center",
            paddingBottom: "90px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h1
            className="h-font"
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              fontWeight: 300,
              lineHeight: 1.02,
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Anna P. Kovalerskaya
          </h1>

          <div
            style={{
              marginTop: "26px",
              fontSize: "12px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Capital & Systems Architect
          </div>

          <p
            style={{
              margin: "44px auto 0",
              maxWidth: "760px",
              fontSize: "28px",
              lineHeight: 1.55,
              color: "#EAEAEA",
              fontWeight: 300,
            }}
          >
            Strategic clarity for capital, positioning, and decision-making
            in a volatile world.
          </p>

          <p
            style={{
              margin: "28px auto 0",
              maxWidth: "760px",
              fontSize: "16px",
              lineHeight: 1.95,
              color: "var(--muted)",
            }}
          >
            I work with developers, investors, and decision-makers operating
            where capital, macro reality, and human behavior intersect.
          </p>

          <div
            style={{
              marginTop: "42px",
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-outline">
              Request a Private Consultation →
            </Link>

            <Link href="/advisory" className="btn-outline">
              Explore Advisory →
            </Link>
          </div>
        </section>

        {/* UNDER-HERO / POSITIONING */}
        <section
          style={{
            paddingTop: "70px",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "18px",
              }}
            >
              Positioning
            </div>

            <p
              className="h-font"
              style={{
                fontSize: "40px",
                lineHeight: 1.35,
                margin: 0,
                fontWeight: 300,
                color: "#EAEAEA",
              }}
            >
              Capital no longer moves
              <br />
              on image alone.
            </p>

            <p
              style={{
                marginTop: "26px",
                maxWidth: "720px",
                fontSize: "17px",
                lineHeight: 2,
                color: "var(--muted)",
              }}
            >
              In a high-volatility environment, investors are not simply
              evaluating projects. They are evaluating clarity, structural
              stability, and whether a decision still makes sense in an
              unstable world.
            </p>

            <p
              style={{
                marginTop: "22px",
                maxWidth: "720px",
                fontSize: "17px",
                lineHeight: 2,
                color: "var(--muted)",
              }}
            >
              My work helps developers and decision-makers align investor
              communication, market logic, and strategic positioning with the
              realities shaping the market now.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: "36px 34px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "18px",
              }}
            >
              Core Focus
            </div>

            <div
              style={{
                display: "grid",
                gap: "22px",
              }}
            >
              <div>
                <div className="h-font" style={{ fontSize: "26px" }}>
                  Strategic Advisory
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    color: "var(--muted)",
                  }}
                >
                  High-level strategic guidance for developers, investors, and
                  principals operating under uncertainty.
                </p>
              </div>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.08)",
                }}
              />

              <div>
                <div className="h-font" style={{ fontSize: "26px" }}>
                  Decision Architecture
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    color: "var(--muted)",
                  }}
                >
                  Structural interpretation of how capital decisions are formed,
                  delayed, or distorted under pressure.
                </p>
              </div>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.08)",
                }}
              />

              <div>
                <div className="h-font" style={{ fontSize: "26px" }}>
                  Intellectual Systems
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    color: "var(--muted)",
                  }}
                >
                  Proprietary frameworks spanning cognition, structure,
                  ontology, and applied strategic thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOWER TRANSITION */}
        <section
          style={{
            marginTop: "92px",
            paddingTop: "38px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            From Structure to Application
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 2,
              color: "var(--muted)",
              maxWidth: "760px",
            }}
          >
            That same work now extends into strategic advisory for developers
            and decision-makers facing investor hesitation, shifting market
            psychology, and high-volatility conditions.
          </p>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";
import { Section } from "../../components/section";

export default function StrategicClarityPage() {
  return (
    <Section
      title="Strategic Clarity for Developers"
      kicker="In a high-volatility environment, investors do not act on lifestyle language alone."
    >
      {/* OPENING */}
      <p
        style={{
          fontSize: "16px",
          lineHeight: 1.95,
          color: "var(--muted)",
          maxWidth: "980px",
        }}
      >
        In today’s market, investors are no longer buying property.
      </p>

      <p
        style={{
          marginTop: "18px",
          fontSize: "16px",
          lineHeight: 1.95,
          color: "var(--muted)",
          maxWidth: "980px",
        }}
      >
        They are buying certainty in uncertainty. Structural stability. Confidence in
        the system behind the asset.
      </p>

      <p
        style={{
          marginTop: "18px",
          fontSize: "16px",
          lineHeight: 1.95,
          color: "var(--muted)",
          maxWidth: "980px",
        }}
      >
        Yet most developers are still positioning projects as if nothing has changed.
        That gap is where opportunities are lost.
      </p>

      {/* PROBLEM / WHAT I DO */}
      <div
        style={{
          marginTop: "36px",
          paddingTop: "28px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "36px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "16px",
            }}
          >
            The Problem
          </div>

          <ul
            style={{
              color: "var(--muted)",
              lineHeight: 2,
              paddingLeft: "18px",
              margin: 0,
            }}
          >
            <li>Global volatility is rising</li>
            <li>Capital is becoming more selective</li>
            <li>Investor psychology is shifting</li>
            <li>Information noise is distorting perception</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              lineHeight: 1.95,
              color: "var(--muted)",
            }}
          >
            At the same time, most projects are still positioned around lifestyle,
            design, and amenities.
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              lineHeight: 1.95,
              color: "#EAEAEA",
            }}
          >
            The investor is asking a different question:
            <br />
            <span style={{ display: "inline-block", marginTop: "10px" }}>
              “Will my capital survive what is coming next?”
            </span>
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "16px",
            }}
          >
            What I Do
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "15px",
              lineHeight: 1.95,
              color: "var(--muted)",
            }}
          >
            I help developers reposition their projects within the new global
            reality.
          </p>

          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.95,
              color: "#EAEAEA",
            }}
          >
            Not through marketing.
            <br />
            Through strategic reframing.
          </p>

          <div
            style={{
              marginTop: "26px",
              paddingTop: "22px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.95,
                color: "var(--muted)",
              }}
            >
              This is not about slogans, ads, or visuals.
            </p>

            <p
              style={{
                marginTop: "14px",
                fontSize: "15px",
                lineHeight: 1.95,
                color: "var(--muted)",
              }}
            >
              This is about understanding the system, identifying real investor
              concerns, aligning your project with macro reality, and building a
              narrative that holds under pressure.
            </p>
          </div>
        </div>
      </div>

      {/* CORE INSIGHT */}
      <div
        style={{
          marginTop: "40px",
          paddingTop: "28px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "16px",
          }}
        >
          Core Insight
        </div>

        <p
          className="h-font"
          style={{
            margin: 0,
            fontSize: "30px",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "980px",
          }}
        >
          In a volatile world, the strongest projects are not the most beautiful
          ones. They are the ones that make sense in the future.
        </p>
      </div>

      {/* OFFERS */}
      <div
        style={{
          marginTop: "42px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
        }}
      >
        {/* PRODUCT 1 */}
        <div className="card" style={{ padding: "40px" }}>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "14px",
            }}
          >
            Product 1
          </div>

          <div className="h-font" style={{ fontSize: "28px" }}>
            Strategic Reframing Session
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--muted)",
            }}
          >
            A customised strategic intervention designed to identify why investor
            interest is not converting into action — and to realign communication,
            narrative, and sales logic accordingly.
          </p>

          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--muted)",
            }}
          >
            Prepared based on your current positioning, sales approach, project mix,
            and market context.
          </p>

          <ul
            style={{
              marginTop: "18px",
              color: "var(--muted)",
              lineHeight: 1.9,
              paddingLeft: "18px",
            }}
          >
            <li>• Review of current sales and investor narrative</li>
            <li>• Analysis of hesitation points in the current market</li>
            <li>• Macro-driven reframing of investor communication</li>
            <li>• Clear strategic recommendations for immediate application</li>
          </ul>

          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              color: "#EAEAEA",
            }}
          >
            From USD 5,500
          </p>
        </div>

        {/* PRODUCT 2 */}
        <div className="card" style={{ padding: "40px" }}>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "14px",
            }}
          >
            Product 2
          </div>

          <div className="h-font" style={{ fontSize: "28px" }}>
            Strategic Advisory Layer
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--muted)",
            }}
          >
            Ongoing strategic support for developers operating in a high-volatility
            environment, where investor confidence, timing, and market interpretation
            require constant recalibration.
          </p>

          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--muted)",
            }}
          >
            Up to 20 hours of strategic involvement per month, focused on key
            decision points, investor-facing logic, and real-time refinement of
            sales alignment.
          </p>

          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--muted)",
            }}
          >
            This is not operational support. I intervene where communication,
            perception, and decision-making directly affect outcome.
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              color: "#EAEAEA",
            }}
          >
            From USD 10,500 / month
          </p>
        </div>
      </div>

      {/* FINAL THOUGHT */}
      <div
        style={{
          marginTop: "46px",
          paddingTop: "28px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "16px",
          }}
        >
          Final Thought
        </div>

        <p
          className="h-font"
          style={{
            margin: 0,
            fontSize: "30px",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "980px",
          }}
        >
          The market has already changed.
          <br />
          The question is not whether your project is good.
          <br />
          The question is:
          <br />
          Does it make sense in the world we are entering?
        </p>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: "52px",
          paddingTop: "32px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/contact" className="btn-outline">
          Request Strategic Session →
        </Link>

        <Link href="/advisory" className="btn-outline">
          Back to Advisory →
        </Link>
      </div>
    </Section>
  );
}
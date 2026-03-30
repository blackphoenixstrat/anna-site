"use client";

import Link from "next/link";
import { Section } from "../../components/section";

export default function StrategicClarityPage() {
  return (
    <>
      <Section
        title="Strategic Clarity for Developers"
        kicker="In a high-volatility environment, investors do not act on lifestyle language alone."
      >
        <p className="sc-intro">
          In today’s market, investors are no longer buying property.
        </p>

        <p className="sc-intro">
          They are buying certainty in uncertainty. Structural stability. Confidence in
          the system behind the asset.
        </p>

        <p className="sc-intro">
          Yet most developers are still positioning projects as if nothing has changed.
          That gap is where opportunities are lost.
        </p>

        <div className="sc-two-col">
          <div className="sc-col">
            <div className="sc-eyebrow">The Problem</div>

            <ul className="sc-list">
              <li>Global volatility is rising</li>
              <li>Capital is becoming more selective</li>
              <li>Investor psychology is shifting</li>
              <li>Information noise is distorting perception</li>
            </ul>

            <p className="sc-copy">
              At the same time, most projects are still positioned around lifestyle,
              design, and amenities.
            </p>

            <p className="sc-copy sc-strong">
              The investor is asking a different question:
              <br />
              <span className="sc-quote">“Will my capital survive what is coming next?”</span>
            </p>
          </div>

          <div className="sc-col">
            <div className="sc-eyebrow">What I Do</div>

            <p className="sc-copy">
              I help developers reposition their projects within the new global reality.
            </p>

            <p className="sc-copy sc-strong">
              Not through marketing.
              <br />
              Through strategic reframing.
            </p>

            <div className="sc-inner-divider">
              <p className="sc-copy">This is not about slogans, ads, or visuals.</p>

              <p className="sc-copy">
                This is about understanding the system, identifying real investor
                concerns, aligning your project with macro reality, and building a
                narrative that holds under pressure.
              </p>
            </div>
          </div>
        </div>

        <div className="sc-section-divider">
          <div className="sc-eyebrow">Core Insight</div>

          <p className="sc-core-insight">
            In a volatile world, the strongest projects are not the most beautiful
            ones. They are the ones that make sense in the future.
          </p>
        </div>

        <div className="sc-offers-grid">
          <div className="sc-card">
            <div className="sc-eyebrow">Product 1</div>

            <div className="sc-offer-title">Strategic Reframing Session</div>

            <p className="sc-copy">
              A customised strategic intervention designed to identify why investor
              interest is not converting into action — and to realign communication,
              narrative, and sales logic accordingly.
            </p>

            <p className="sc-copy">
              Prepared based on your current positioning, sales approach, project mix,
              and market context.
            </p>

            <ul className="sc-list sc-offer-list">
              <li>Review of current sales and investor narrative</li>
              <li>Analysis of hesitation points in the current market</li>
              <li>Macro-driven reframing of investor communication</li>
              <li>Clear strategic recommendations for immediate application</li>
            </ul>

            <p className="sc-price">From USD 5,500</p>
          </div>

          <div className="sc-card">
            <div className="sc-eyebrow">Product 2</div>

            <div className="sc-offer-title">Strategic Advisory Layer</div>

            <p className="sc-copy">
              Ongoing strategic support for developers operating in a high-volatility
              environment, where investor confidence, timing, and market interpretation
              require constant recalibration.
            </p>

            <p className="sc-copy">
              Up to 20 hours of strategic involvement per month, focused on key
              decision points, investor-facing logic, and real-time refinement of
              sales alignment.
            </p>

            <p className="sc-copy">
              This is not operational support. I intervene where communication,
              perception, and decision-making directly affect outcome.
            </p>

            <p className="sc-price">From USD 10,500 / month</p>
          </div>
        </div>

        <div className="sc-section-divider">
          <div className="sc-eyebrow">Final Thought</div>

          <p className="sc-core-insight">
            The market has already changed.
            <br />
            The question is not whether your project is good.
            <br />
            The question is:
            <br />
            Does it make sense in the world we are entering?
          </p>
        </div>

        <div className="sc-cta-row">
          <Link href="/contact" className="sc-btn">
            Request Strategic Session →
          </Link>

          <Link href="/advisory" className="sc-btn">
            Back to Advisory →
          </Link>
        </div>
      </Section>

      <style jsx>{`
        .sc-intro {
          font-size: 16px;
          line-height: 1.95;
          color: var(--muted, #bfc2c6);
          max-width: 980px;
          margin: 0;
        }

        .sc-intro + .sc-intro {
          margin-top: 18px;
        }

        .sc-two-col {
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 36px;
          align-items: start;
        }

        .sc-col {
          min-width: 0;
        }

        .sc-eyebrow {
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted, #bfc2c6);
          margin-bottom: 16px;
          font-family: Inter, system-ui, sans-serif;
        }

        .sc-list {
          color: var(--muted, #bfc2c6);
          line-height: 1.9;
          padding-left: 22px;
          margin: 0;
          font-size: 15px;
        }

        .sc-list li + li {
          margin-top: 8px;
        }

        .sc-copy {
          margin-top: 18px;
          font-size: 15px;
          line-height: 1.9;
          color: var(--muted, #bfc2c6);
          max-width: 100%;
          overflow-wrap: anywhere;
          font-family: Inter, system-ui, sans-serif;
        }

        .sc-strong {
          color: #eaeaea;
        }

        .sc-quote {
          display: inline-block;
          margin-top: 10px;
        }

        .sc-inner-divider {
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sc-section-divider {
          margin-top: 42px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sc-core-insight {
          margin: 0;
          font-size: 30px;
          line-height: 1.6;
          font-weight: 300;
          max-width: 980px;
          color: #eaeaea;
          font-family: "Cormorant Garamond", serif;
        }

        .sc-offers-grid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .sc-card {
          min-width: 0;
          height: 100%;
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .sc-offer-title {
          font-size: 28px;
          line-height: 1.35;
          color: #eaeaea;
          font-family: "Cormorant Garamond", serif;
          font-weight: 300;
        }

        .sc-offer-list {
          margin-top: 18px;
        }

        .sc-price {
          margin-top: auto;
          padding-top: 28px;
          font-size: 15px;
          color: #eaeaea;
          font-family: Inter, system-ui, sans-serif;
        }

        .sc-cta-row {
          margin-top: 52px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .sc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          color: #eaeaea;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.06em;
          line-height: 1;
          font-weight: 400;
          background: transparent;
          transition: all 160ms ease;
          font-family: Inter, system-ui, sans-serif;
        }

        .sc-btn:hover {
          border-color: rgba(142, 148, 153, 0.55);
          background: rgba(255, 255, 255, 0.025);
        }

        @media (max-width: 900px) {
          .sc-two-col,
          .sc-offers-grid {
            grid-template-columns: 1fr;
          }

          .sc-two-col {
            gap: 28px;
          }

          .sc-card {
            padding: 24px;
            height: auto;
          }

          .sc-offer-title {
            font-size: 24px;
            line-height: 1.42;
          }

          .sc-core-insight {
            font-size: 24px;
            line-height: 1.55;
          }

          .sc-cta-row {
            flex-direction: column;
            align-items: stretch;
          }

          .sc-btn {
            width: 100%;
          }

          .sc-price {
            margin-top: 20px;
            padding-top: 0;
          }
        }
      `}</style>
    </>
  );
}
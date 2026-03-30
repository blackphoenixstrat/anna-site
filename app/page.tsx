import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-wrap">
        <section className="hero-grid">
          <div className="eyebrow">Capital & Systems Architect</div>

          <h1 className="hero-title h-font">Anna P. Kovalerskaya</h1>

          <div className="hero-right">
            <p className="hero-subtitle h-font">
              Strategic clarity for capital, positioning, and decision-making in a volatile world.
            </p>

            <p className="hero-copy">
              I work with developers, investors, and decision-makers operating where capital,
              macro reality, and human behavior intersect.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn-outline">
                Request a Private Consultation →
              </Link>

              <Link href="/advisory" className="btn-outline">
                Explore Advisory →
              </Link>
            </div>
          </div>
        </section>

        <section className="positioning-grid">
          <div>
            <div className="eyebrow">Positioning</div>

            <div className="positioning-title h-font">
              Capital no longer moves on image alone.
            </div>
          </div>

          <div className="positioning-copy-wrap">
            <p className="positioning-copy">
              In a high-volatility environment, investors are not simply evaluating
              projects. They are evaluating clarity, structural stability, and whether
              a decision still makes sense in an unstable world.
            </p>

            <p className="positioning-copy">
              My work helps developers and decision-makers align investor communication,
              market logic, and strategic positioning with the realities shaping the
              market now.
            </p>
          </div>
        </section>

        <section className="focus-grid">
          <div className="card focus-card">
            <div className="eyebrow">Advisory</div>
            <div className="focus-title h-font">
              Strategic advisory for developers, investors, and principals under
              volatility.
            </div>
          </div>

          <div className="card focus-card">
            <div className="eyebrow">Decision Architecture</div>
            <div className="focus-title h-font">
              Structural interpretation of how decisions form, distort, or stall under
              pressure.
            </div>
          </div>

          <div className="card focus-card">
            <div className="eyebrow">Intellectual Systems</div>
            <div className="focus-title h-font">
              Proprietary frameworks spanning cognition, structure, ontology, and
              applied strategic thinking.
            </div>
          </div>
        </section>

        <section className="transition-grid">
          <div className="eyebrow">From Structure to Application</div>

          <p className="transition-copy">
            That same work now extends into strategic advisory for developers and
            decision-makers facing investor hesitation, shifting market psychology, and
            high-volatility conditions.
          </p>
        </section>
      </div>
    </main>
  );
}
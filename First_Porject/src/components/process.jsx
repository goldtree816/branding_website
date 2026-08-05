import "../styles/process.css";

function Process() {
  return (
    <>
      <section className="intro">
        <span className="eyebrow">How we work</span>

        <h1>Our Design Process</h1>

        <p>
          A clear, collaborative path from first conversation to launch day
          &mdash; built so you always know what's happening next and why.
        </p>
      </section>

      <section className="steps-grid">
        <div className="step-card">
          <div className="num">01</div>

          <h3>Discovery</h3>

          <p className="short">
            Understanding your goals and audience.
          </p>

          <p className="long">
            We start with a deep-dive call to learn your business, your clients,
            and what your current brand is missing. No templates, no assumptions
            &mdash; just questions until we understand what success looks like
            for you.
          </p>
        </div>

        <div className="step-card">
          <div className="num">02</div>

          <h3>Strategy</h3>

          <p className="short">
            Creating the foundation for your brand.
          </p>

          <p className="long">
            Before any visuals, we map positioning, messaging, and the
            experience your ideal client should have. This becomes the brief
            every design decision gets measured against.
          </p>
        </div>

        <div className="step-card">
          <div className="num">03</div>

          <h3>Design</h3>

          <p className="short">
            Building your visual identity and website.
          </p>

          <p className="long">
            Identity and site come together in review rounds, refined with your
            feedback until every page, color, and word feels unmistakably yours.
          </p>
        </div>

        <div className="step-card">
          <div className="num">04</div>

          <h3>Launch</h3>

          <p className="short">
            Helping your brand go live confidently.
          </p>

          <p className="long">
            We handle the technical rollout, walk you through your new site, and
            stay close for the first few weeks so launch day feels like the
            start, not the finish line.
          </p>
        </div>
      </section>

      <section className="timeline">
        <span className="eyebrow">What to expect</span>

        <h2>A typical 4&ndash;6 week engagement</h2>

        <div className="timeline-grid">
          <div className="tl-item">
            <div className="tl-week">Week 1</div>

            <p>
              Discovery call, brand questionnaire, and audience research.
            </p>
          </div>

          <div className="tl-item">
            <div className="tl-week">Weeks 2&ndash;3</div>

            <p>
              Strategy documented, initial identity and design concepts shared.
            </p>
          </div>

          <div className="tl-item">
            <div className="tl-week">Weeks 4&ndash;5</div>

            <p>
              Revisions, full site build, and content placement.
            </p>
          </div>

          <div className="tl-item">
            <div className="tl-week">Week 6</div>

            <p>Final review, QA testing, and go-live.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
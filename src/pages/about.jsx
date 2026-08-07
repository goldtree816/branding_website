import "../styles/about.css";
import Testimonial from "../components/testimonial.jsx";
import Values from '../components/value.jsx'
 
function About() {
  return (
    <>
  
      <section className="intro">
        <h1>MEET THE BRAND STRATEGIST BEHIND JAKS DIGITAL</h1>

        <p>
          Thoughtful brand strategy and website design to help you show up with clarity, confidence, and a digital presence that truly reflects who you are.
        </p>

        <p>
          Through a creative and collaborative process, we transform unclear
          messaging and disconnected visuals into cohesive digital experiences
          designed to build trust.
        </p>
      </section>

      <section className="story">
        <div className="story-copy">
          <span className="eyebrow">Our story</span>

          <h2>Design, built around trust</h2>

          <p>
            JAKS Digital started with a simple observation: the practitioners
            who care the most about their clients often have the least polished
            digital presence. Wellness pros, wedding vendors, and independent
            consultants pour everything into their craft, and their websites
            get whatever time is left over.
          </p>

          <p>
            We founded this studio to close that gap. Every brand and site we
            build is meant to do one job well — make it easy for the right
            client to trust you before they ever say hello.
          </p>
        </div>

       

        <div className="portrait">Studio / founder photo</div>
      </section>


      <section className="myidea">
        <Testimonial/>
      </section>

      <section className="values">
        <span className="eyebrow">How we work</span>

        <h2>Our design philosophy</h2>

        <p className="sub">
          A few principles that shape every project, from the first call to
          final launch.
        </p>

        <div className="value-grid">
          <div className="value-card">
            <h3>Clarity first</h3>
            <p>
              If a visitor can't tell what you offer in five seconds, the design
              isn't done yet.
            </p>
          </div>
           
          <div className="value-card">
            <h3>Trust over trend</h3>
            <p>
              We design for how your ideal client makes decisions, not for
              what's popular this month.
            </p>
          </div>

          <div className="value-card">
            <h3>True collaboration</h3>
            <p>
              You know your business. We know design. The best work happens in
              between.
            </p>
          </div>

          <div className="value-card">
            <h3>Considered detail</h3>
            <p>
              Typography, spacing, and pacing all carry meaning — nothing is
              left to default.
            </p>
          </div>
        </div>
      </section>

      <section className="serve">
        <span className="eyebrow">Who we work with</span>

        <h2>Built for your industry</h2>

        <p className="sub">
          We work exclusively with a handful of niches, so our process speaks
          your language from day one.
        </p>

        <div className="serve-grid">
          <div className="serve-card">
            <h3>Wedding professionals</h3>
            <p>
              Planners and vendors ready to move past word-of-mouth and book
              from a site that reflects the quality of their work.
            </p>
          </div>

          <div className="serve-card">
            <h3>Wellness practitioners</h3>
            <p>
              Coaches, studios, and clinicians launching a first real brand, or
              replacing one that no longer fits.
            </p>
          </div>

          <div className="serve-card">
            <h3>Personal &amp; service brands</h3>
            <p>
              Consultants and founders whose site needs to build credibility
              before a single conversation happens.
            </p>
          </div>
        </div>
      </section>

      <section className="process">
        <span className="eyebrow" style={{ color: "#e0a19c" }}>
          Our process
        </span>

        <h2>From first call to launch</h2>

        <p className="sub">
          A structured, collaborative path — see the full breakdown on our
          Process page.
        </p>

        <div className="steps">
          <div className="step">
            <div className="num">Discover</div>
            <h3>Understand</h3>
            <p>
              We learn your business, your clients, and what's holding your
              current brand back.
            </p>
          </div>

          <div className="step">
            <div className="num">Design</div>
            <h3>Concept</h3>
            <p>
              Direction and identity take shape, refined together until it feels
              unmistakably you.
            </p>
          </div>

          <div className="step">
            <div className="num">Develop</div>
            <h3>Build</h3>
            <p>
              Your site comes to life — considered, responsive, and ready to
              perform.
            </p>
          </div>

          <div className="step">
            <div className="num">Deliver</div>
            <h3>Launch</h3>
            <p>
              We hand off a brand and site built to grow with you well past
              launch day.
            </p>
          </div>
        </div>

        <a className="process-link" href="#">
          See our full process
        </a>
      </section>

      <Values/>
    </>
  );
}

export default About;
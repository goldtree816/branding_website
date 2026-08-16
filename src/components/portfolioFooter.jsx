import "../styles/portfolioFooter.css";

function PortfolioFooter() {
  return (
    <>
      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        className="portfolio-final-cta"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="portfolio-final-overlay"></div>

        <div className="portfolio-final-content">

          <p className="portfolio-final-heading">
            STEP INTO THE NEXT STAGE OF YOUR BUSINESS WITH
            <br />
            CONFIDENCE, POWER, AND PROFESSIONALISM THROUGH
            <br />
            INTENTIONAL BRAND AND WEB DESIGN.
          </p>

          <h2>
            I'm here to elevate your digital presence.
          </h2>

          <div className="portfolio-final-buttons">
            <a href="#contact">LET'S WORK TOGETHER</a>

            <a href="#projects">VIEW MY WORK</a>
          </div>

        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="portfolio-footer">

        {/* HUGE BRAND NAME */}
        <div className="portfolio-footer-brand">
          YOUR BRAND
        </div>


        {/* FOOTER NAVIGATION */}
        <div className="portfolio-footer-navigation">

          <div className="footer-column">
            <h3>NAVIGATE</h3>

            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PORTFOLIO</a>
            <a href="#services">SERVICES</a>
            <a href="#contact">CONTACT</a>
          </div>


          <div className="footer-column">
            <h3>SERVICES</h3>

            <a href="#services">WEB DESIGN</a>
            <a href="#services">BRAND DESIGN</a>
            <a href="#services">UI / UX DESIGN</a>
            <a href="#services">WEBSITE DEVELOPMENT</a>
            <a href="#services">DIGITAL EXPERIENCE</a>
          </div>


          <div className="footer-column">
            <h3>START HERE</h3>

            <a href="#contact">WORK WITH ME</a>
            <a href="#projects">VIEW PROJECTS</a>
            <a href="#about">ABOUT ME</a>
            <a href="#contact">GET IN TOUCH</a>
          </div>

        </div>


        {/* =====================================================
            SOCIAL / DESCRIPTION
        ===================================================== */}

        <div className="portfolio-footer-description">

          <p>
            CREATIVE WEB DESIGN · BRANDING · DIGITAL EXPERIENCES
          </p>

          <p>
            DESIGNED WITH INTENTION · BUILT FOR MODERN BUSINESSES
          </p>

        </div>


        <div className="portfolio-socials">

          <a href="#" aria-label="Instagram">
            ◎
          </a>

          <a href="#" aria-label="Pinterest">
            P
          </a>

          <a href="#" aria-label="Facebook">
            f
          </a>

          <a href="#" aria-label="LinkedIn">
            in
          </a>

        </div>


        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <div className="portfolio-footer-bottom">

          <div>
            PRIVACY POLICY · TERMS OF USE · COPYRIGHT
          </div>

          <div>
            © 2026 YOUR BRAND. ALL RIGHTS RESERVED.
          </div>

        </div>

      </footer>
    </>
  );
}

export default PortfolioFooter;
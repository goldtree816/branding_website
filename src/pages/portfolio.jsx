import "../styles/portfolio.css";

import goldtreeEarbuds from "../assets/goldtree-earbuds.png";
import goldtreeHandbags from "../assets/goldtree-handbag.png";
import goldtreeHoney from "../assets/goldtree-honey.png";
import goldtreeSunglasses from "../assets/goldtree-sunglasses.png";

import portfolioHero from "../assets/portfolio-hero.png";
import portfolioCta from "../assets/portfolio-cta.png";

import PortfolioShowcase from "../components/portfolio-showcase.jsx";
import PortfolioProjects from "../components/portfolio-project.jsx";


function Portfolio() {
  return (
    <main className="portfolio-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-hero">

        <img
          src={portfolioHero}
          alt="Portfolio"
          className="portfolio-hero-image"
        />

        <div className="portfolio-hero-overlay"></div>

        <div className="portfolio-hero-content">

          <h1>PORTFOLIO</h1>

          <p>
            We have been so grateful for the opportunity to work with so many
            passionate, empowering businesses and brands. We truly value each
            and every partnership and being a part of the journey,
            transformation and growth.
          </p>

          <p>
            Browse some of our brand and website projects below.
          </p>

        </div>

      </section>


      {/* =====================================================
          HORIZONTAL PROJECT SHOWCASE
      ===================================================== */}

      <PortfolioShowcase />


      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}

      <PortfolioProjects />


      {/* =====================================================
          NEW PROJECTS COMING SOON
      ===================================================== */}

      <section className="new-projects-section">

        <div className="new-projects-title">

          <h2>
            New Projects coming soon!
          </h2>

        </div>


        <div className="new-projects-gallery">

          {/* GOLDTREE EARBUDS */}

          <div className="new-project-item">

            <img
              src={goldtreeEarbuds}
              alt="Goldtree Earbuds"
            />

          </div>


          {/* GOLDTREE HANDBAGS */}

          <div className="new-project-item">

            <img
              src={goldtreeHandbags}
              alt="Goldtree Ladies Handbags"
            />

          </div>


          {/* GOLDTREE HONEY */}

          <div className="new-project-item">

            <img
              src={goldtreeHoney}
              alt="Goldtree Honey"
            />

          </div>


          {/* GOLDTREE SUNGLASSES */}

          <div className="new-project-item">

            <img
              src={goldtreeSunglasses}
              alt="Goldtree Sunglasses"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CALL TO ACTION
          JAKS DIGITAL STYLE
      ===================================================== */}

      <section className="portfolio-cta">

        {/* BACKGROUND IMAGE */}

        <img
          src={portfolioCta}
          alt=""
          className="portfolio-cta-image"
        />

        {/* DARK OVERLAY */}

        <div className="portfolio-cta-overlay"></div>


        {/* CONTENT */}

        <div className="portfolio-cta-content">

          <h2>
            STEP INTO THE NEXT STAGE OF YOUR BUSINESS
            <br />
            WITH CONFIDENCE, POWER, AND
            <br />
            PROFESSIONALISM THROUGH INTENTIONAL
            <br />
            BRAND AND WEB DESIGN.
          </h2>


          <p className="portfolio-cta-script">
            It’s time to own your future.
          </p>


          {/* BUTTONS */}

          <div className="portfolio-cta-buttons">

            <a
              href="/services"
              className="portfolio-cta-button"
            >
              DIY DESIGN SERVICES
            </a>

            <a
              href="/contact"
              className="portfolio-cta-button"
            >
              BOOK A DISCOVERY CALL
            </a>

          </div>

        </div>


        {/* DECORATIVE LINES */}

        <div className="portfolio-cta-line portfolio-cta-line-left"></div>

        <div className="portfolio-cta-line portfolio-cta-line-right"></div>

      </section>

    </main>
  );
}


export default Portfolio;
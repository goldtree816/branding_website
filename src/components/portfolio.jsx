import "../styles/portfolio.css";

import portfolioHero from "../assets/portfolio-hero.png";

import PortfolioShowcase from "./portfolio-showcase.jsx";
import FeaturedProjects from "./featuredproject.jsx";

import PortfolioFooter from "./portfolioFooter.jsx";

function Portfolio() {
  return (
    <main className="portfolio-page">

      {/* HERO */}
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


      {/* HORIZONTAL PROJECT SHOWCASE */}
      <PortfolioShowcase />


      {/* FEATURED PROJECTS */}
      <FeaturedProjects />

    </main>
  );
}

export default Portfolio;
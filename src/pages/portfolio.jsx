import "../styles/portfolio.css";

import goldtreeEarbuds from "../assets/goldtree-earbuds.png";
import goldtreeHandbags from "../assets/goldtree-handbag.png";
import goldtreeHoney from "../assets/goldtree-honey.png";
import goldtreeSunglasses from "../assets/goldtree-sunglasses.png";

import portfolioHero from "../assets/portfolio-hero.png";

import PortfolioShowcase from "../components/portfolio-showcase.jsx";
import PortfolioProjects from "../components/portfolio-project.jsx";


function Portfolio() {
  return (
    <main className="portfolio-page">

      {/* 
          HERO
       */}

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


      {/* 
          HORIZONTAL PROJECT SHOWCASE
       */}

      <PortfolioShowcase />


      {/* 
          FEATURED PROJECTS
       */}

      <PortfolioProjects />


      {/* 
          NEW PROJECTS COMING SOON
       */}

      <section className="new-projects-section">

        {/* TITLE */}

        <div className="new-projects-title">

          <h2>
            New Projects coming soon!
          </h2>

        </div>


        {/* GOLDTREE PROJECTS */}

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

    </main>
  );
}


export default Portfolio;
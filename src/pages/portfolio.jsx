import ProjectCard from "../components/projectcard";
import FeaturedProject from "../components/featuredproject";
import "../styles/portfolio.css";


import fashionImg from "../assets/fashion.png";
import wellnessImg from "../assets/wellness.png";
import photographyImg from "../assets/photography.png";
import weddingImg from "../assets/wedding.png";
import coffeeImg from "../assets/coffee.png";
import fitnessImg from "../assets/fitness.png";
import travelImg from "../assets/travel.png";
import dentalImg from "../assets/dental.png";
import startupImg from "../assets/startup.png";
import skincareImg from "../assets/skincare.png";

function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="portfolio-hero">
        <span className="eyebrow">Portfolio</span>

        <h1>
          Strategic Brand & Website Design
          <br />
          for Service-Based Businesses
          <br />
          Ready to Grow With Intention
        </h1>

        <p>
          We create thoughtful brands and modern websites that help businesses
          connect with the right audience, build trust, and grow with
          confidence.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Our Work</button>
          <button className="secondary-btn">Book a Discovery Call</button>
        </div>
      </section>

      {/* Featured Project */}
      <FeaturedProject />

      {/* Intro */}
      <section className="intro">
        <span className="eyebrow">Selected Works</span>

        <h2>Recent Client Projects</h2>

        <p>
          Every project starts with understanding the client's vision before
          crafting a unique identity and digital experience.
        </p>
      </section>

      {/* Filters */}
      <section className="filters">
        <button className="filter active">All Work</button>
        <button className="filter">Brand Identity</button>
        <button className="filter">Website Design</button>
        <button className="filter">Packaging</button>
      </section>

     {/* Portfolio Grid */}
<section className="grid">

<ProjectCard
  image={fashionImg}
  title="Boutique Fashion Label"
  tag="Packaging + Website Design"
  description="Premium branding and a stylish online store designed for luxury fashion."
/>


<ProjectCard
  image={wellnessImg}
  title="Luxury Wellness Brand"
  tag="Brand Identity + Website"
  description="A calm editorial brand with an elegant booking-ready website."
/>


<ProjectCard
  image={photographyImg}
  title="Photography Studio"
  tag="Portfolio Website + SEO"
  description="A modern photography portfolio focused on attracting premium clients."
/>


<ProjectCard
  image={weddingImg}
  title="Wedding Planning Studio"
  tag="Brand Identity + Website"
  description="Elegant branding and an inquiry-focused website for luxury weddings."
/>


<ProjectCard
  image={skincareImg}
  title="Independent Skincare Line"
  tag="Packaging + Brand Identity"
  description="A premium skincare identity designed to stand out online."
/>


<ProjectCard
  image={coffeeImg}
  title="Artisan Coffee House"
  tag="Brand Identity + Website"
  description="A warm and welcoming brand identity with online ordering experience."
/>


<ProjectCard
  image={fitnessImg}
  title="Elite Fitness Club"
  tag="Brand Identity + Website"
  description="A bold visual identity and membership website for a premium fitness studio."
/>


<ProjectCard
  image={startupImg}
  title="NovaTech Solutions"
  tag="UI/UX + SaaS Website"
  description="A sleek SaaS website built with a clean user experience."
/>

</section>
      {/* Statistics */}
      <section className="stats">
        <div className="stat">
          <div className="n">40+</div>
          <div className="l">Projects Delivered</div>
        </div>

        <div className="stat">
          <div className="n">12</div>
          <div className="l">Industries Served</div>
        </div>

        <div className="stat">
          <div className="n">4–6</div>
          <div className="l">Weeks Average Timeline</div>
        </div>

        <div className="stat">
          <div className="n">98%</div>
          <div className="l">Client Referral Rate</div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
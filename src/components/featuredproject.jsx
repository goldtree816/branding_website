import "../styles/featuredproject.css";
import featuredRestaurant from "../assets/featured-restaurant.png";

function FeaturedProject() {
  return (
    <section className="featured-project">

      <div className="featured-text">
        <p className="small-title">FEATURED PROJECT</p>

        <h2>Luxury Restaurant & Bar Branding</h2>

        <p>
          A complete brand identity and responsive website designed to
          increase customer engagement and online reservations. From logo
          creation to digital experience, every detail was crafted to reflect
          the restaurant's premium atmosphere.
        </p>

        <div className="featured-tags">
          <span>Brand Identity</span>
          <span>Website Design</span>
          <span>UI/UX</span>
        </div>

        <button className="featured-btn">
          View Case Study →
        </button>
      </div>

      <div className="featured-image">
        <img
          src={featuredRestaurant}
          alt="Luxury Restaurant Website"
        />
      </div>

    </section>
  );
}

export default FeaturedProject;
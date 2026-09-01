import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import earbud from "../assets/showcase.jpg";

function Service_agriculture() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="farm-page">

      {/* Hero Section */}
      <section className="farm-hero">

        <div className="farm-hero-text">
          <p className="farm-label">AGRICULTURAL PRODUCT SHOWCASE</p>

          <h1>
            Showcase Better.
            <br />
            Grow Further.
          </h1>

          <p className="farm-intro">
            A digital platform designed to showcase agricultural
            products, highlight their quality, and help customers
            discover fresh and locally grown products.
          </p>
        </div>

        <div className="farm-hero-image">
          <img src={earbud} alt="Agricultural products" />
        </div>

      </section>


      {/* About Section */}
      <section className="farm-about">

        <div className="about-content">
          <p className="farm-label">OUR PURPOSE</p>

          <h2>
            Bringing farm products
            closer to customers.
          </h2>

          <p>
            Agricultural products deserve a platform where their
            quality, freshness, and story can be properly presented.
            Our showcase helps farmers introduce their products
            in a clear and attractive way.
          </p>

          <p>
            From fresh vegetables and fruits to grains, dairy,
            honey, and other farm products, customers can easily
            explore what is available and learn more about
            where their products come from.
          </p>

        </div>

      </section>


      {/* Features */}
      <section className="farm-features">

        <p className="farm-label">WHAT WE PROVIDE</p>

        <h2>
          Everything needed to showcase
          agricultural products.
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>Product Display</h3>

            <p>
              Present agricultural products with clear images,
              names, descriptions, and important product details.
            </p>

          </div>


          <div className="feature-card">

            <h3>Product Information</h3>

            <p>
              Provide useful information about product quality,
              origin, availability, farming methods, and more.
            </p>

          </div>


          <div className="feature-card">

            <h3>Connect With Customers</h3>

            <p>
              Help customers discover farm products and connect
              with farmers and agricultural businesses more easily.
            </p>

          </div>

        </div>

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>

      </section>


      {/* Bottom CTA */}
      <section className="farm-cta">

        <p className="farm-label">AGRICULTURAL PRODUCTS</p>

        <h2>
          Show your products.
          <br />
          Tell your farm's story.
        </h2>

        <button className="farm-cta-btn">
          EXPLORE PRODUCTS
        </button>

      </section>

    </div>
  );
}

export default Service_agriculture;
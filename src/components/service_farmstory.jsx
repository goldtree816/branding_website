import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import earbud from "../assets/story.jpg";

function Service_farmstory() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="farm-page">

      {/* Hero Section */}
      <section className="farm-hero">

        <div className="farm-hero-text">
          <p className="farm-label">FARM STORY & BRANDING</p>

          <h1>
            Tell Your Story.
            <br />
            Grow Your Brand.
          </h1>

          <p className="farm-intro">
            A digital platform that helps farms share their story,
            showcase their values, and create a strong identity
            that customers can recognize and trust.
          </p>
        </div>

        <div className="farm-hero-image">
          <img src={earbud} alt="Farm story and branding" />
        </div>

      </section>


      {/* About Section */}
      <section className="farm-about">

        <div className="about-content">
          <p className="farm-label">OUR PURPOSE</p>

          <h2>
            Every farm has a story
            worth sharing.
          </h2>

          <p>
            A farm is more than the products it produces. It has
            people, traditions, values, hard work, and a unique
            journey. Farm Story & Branding helps bring these
            elements together into a meaningful digital identity.
          </p>

          <p>
            By sharing the story behind the farm, customers can
            understand where their products come from and connect
            with the people who produce them. This helps create
            recognition, trust, and a stronger relationship with
            customers.
          </p>

        </div>

      </section>


      {/* Features */}
      <section className="farm-features">

        <p className="farm-label">WHAT WE PROVIDE</p>

        <h2>
          Build an identity
          people remember.
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>Farm Story</h3>

            <p>
              Share the history, journey, people, and traditions
              behind your farm in a simple and engaging way.
            </p>

          </div>


          <div className="feature-card">

            <h3>Farm Identity</h3>

            <p>
              Create a recognizable identity that represents your
              farm's values, products, quality, and unique character.
            </p>

          </div>


          <div className="feature-card">

            <h3>Customer Trust</h3>

            <p>
              Help customers understand your farming practices and
              build a stronger connection through your authentic story.
            </p>

          </div>

        </div>

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>

      </section>


      {/* Bottom CTA */}
      <section className="farm-cta">

        <p className="farm-label">YOUR FARM. YOUR STORY.</p>

        <h2>
          Share your story.
          <br />
          Build your identity.
        </h2>

        <button className="farm-cta-btn">
          DISCOVER YOUR FARM STORY
        </button>

      </section>

    </div>
  );
}

export default Service_farmstory;
import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import earbud from "../assets/farm_web.jpg";

function Service_mobile() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="farm-page">

      {/* Hero Section */}
      <section className="farm-hero">

        <div className="farm-hero-text">
          <p className="farm-label">MOBILE-FRIENDLY FARM WEBSITE</p>

          <h1>
            Farm Anywhere.
            <br />
            Stay Connected.
          </h1>

          <p className="farm-intro">
            A responsive farm website designed to work smoothly
            on smartphones, tablets, and computers, giving farmers
            easy access to important agricultural information anytime.
          </p>
        </div>

        <div className="farm-hero-image">
          <img src={earbud} alt="Mobile-friendly farm website" />
        </div>

      </section>


      {/* About Section */}
      <section className="farm-about">

        <div className="about-content">
          <p className="farm-label">OUR PURPOSE</p>

          <h2>
            Making farming information
            accessible anywhere.
          </h2>

          <p>
            Farmers often rely on their mobile phones to access
            information while working in the field. A mobile-friendly
            website makes it easier to browse agricultural resources
            without needing a computer.
          </p>

          <p>
            Our responsive design provides a simple and comfortable
            experience across different screen sizes, allowing farmers
            to explore farming information, products, and resources
            whenever they need them.
          </p>

        </div>

      </section>


      {/* Features */}
      <section className="farm-features">

        <p className="farm-label">WHAT WE PROVIDE</p>

        <h2>
          A better farming experience
          on every device.
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>Responsive Design</h3>

            <p>
              A flexible website layout that automatically adapts
              to mobile phones, tablets, laptops, and desktop screens.
            </p>

          </div>


          <div className="feature-card">

            <h3>Easy Navigation</h3>

            <p>
              Simple menus and clear sections make it easy for
              farmers to quickly find the information they need.
            </p>

          </div>


          <div className="feature-card">

            <h3>Accessible Anywhere</h3>

            <p>
              Access farming resources, product information, and
              useful content conveniently from anywhere using a
              mobile device.
            </p>

          </div>

        </div>

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>

      </section>


      {/* Bottom CTA */}
      <section className="farm-cta">

        <p className="farm-label">MOBILE FARMING EXPERIENCE</p>

        <h2>
          Farming information
          <br />
          in your hands.
        </h2>

        <button className="farm-cta-btn">
          EXPLORE FARM WEB
        </button>

      </section>

    </div>
  );
}

export default Service_mobile;
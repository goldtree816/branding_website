import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import earbud from "../assets/connection.jpg";

function Service_online() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="farm-page">

      {/* Hero Section */}
      <section className="farm-hero">

        <div className="farm-hero-text">
          <p className="farm-label">ONLINE CUSTOMER CONNECTION</p>

          <h1>
            Connect Better.
            <br />
            Grow Together.
          </h1>

          <p className="farm-intro">
            A digital platform that helps farmers connect directly
            with customers, share their products, and build strong
            relationships through online communication.
          </p>
        </div>

        <div className="farm-hero-image">
          <img src={earbud} alt="Connecting farmers with customers" />
        </div>

      </section>


      {/* About Section */}
      <section className="farm-about">

        <div className="about-content">
          <p className="farm-label">OUR PURPOSE</p>

          <h2>
            Bringing farmers and
            customers closer.
          </h2>

          <p>
            Connecting with customers is an important part of
            growing a successful agricultural business. Farmer Web
            provides a simple digital space where farmers can
            introduce their products and communicate with customers.
          </p>

          <p>
            Customers can learn about available products, farming
            practices, and the people behind the farm. This creates
            better communication, builds trust, and makes it easier
            for customers to connect with local farmers.
          </p>

        </div>

      </section>


      {/* Features */}
      <section className="farm-features">

        <p className="farm-label">WHAT WE PROVIDE</p>

        <h2>
          Simple ways to connect
          with your customers.
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>Direct Communication</h3>

            <p>
              Make it easier for customers to contact farmers,
              ask questions, and learn more about their products.
            </p>

          </div>


          <div className="feature-card">

            <h3>Customer Engagement</h3>

            <p>
              Share farm updates, product information, and
              useful agricultural content to keep customers engaged.
            </p>

          </div>


          <div className="feature-card">

            <h3>Build Trust</h3>

            <p>
              Create stronger relationships by providing clear
              information and showing customers the story behind
              their food.
            </p>

          </div>

        </div>

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>

      </section>


      {/* Bottom CTA */}
      <section className="farm-cta">

        <p className="farm-label">ONLINE CONNECTION</p>

        <h2>
          Connect with your
          <br />
          customers today.
        </h2>

        <button className="farm-cta-btn">
          CONNECT WITH CUSTOMERS
        </button>

      </section>

    </div>
  );
}

export default Service_online;
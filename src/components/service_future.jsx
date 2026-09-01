import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import earbud from "../assets/future.jpg";

function Service_future() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="farm-page">

      {/* Hero Section */}
      <section className="farm-hero">

        <div className="farm-hero-text">
          <p className="farm-label">FUTURE ONLINE ORDERING</p>

          <h1>
            Order Fresh.
            <br />
            Farm Direct.
          </h1>

          <p className="farm-intro">
            A modern online ordering experience that allows
            customers to explore fresh agricultural products,
            choose what they need, and place orders directly
            from their favorite farms.
          </p>
        </div>

        <div className="farm-hero-image">
          <img src={earbud} alt="Online farm product ordering" />
        </div>

      </section>


      {/* About Section */}
      <section className="farm-about">

        <div className="about-content">

          <p className="farm-label">OUR PURPOSE</p>

          <h2>
            Making farm products
            easier to order.
          </h2>

          <p>
            Online ordering can make it easier for customers
            to discover fresh agricultural products without
            needing to visit a farm or market in person.
          </p>

          <p>
            Farmer Web provides a convenient digital space where
            customers can browse available products, view product
            details, and place orders while helping farmers reach
            more customers and manage their sales more efficiently.
          </p>

        </div>

      </section>


      {/* Features */}
      <section className="farm-features">

        <p className="farm-label">WHAT WE PROVIDE</p>

        <h2>
          A simple way to bring
          farm products online.
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>Online Product Browsing</h3>

            <p>
              Customers can explore fresh fruits, vegetables,
              grains, dairy products, and other agricultural
              products from one convenient platform.
            </p>

          </div>


          <div className="feature-card">

            <h3>Easy Ordering</h3>

            <p>
              A simple ordering process allows customers to
              select products, choose quantities, and place
              their orders quickly and easily.
            </p>

          </div>


          <div className="feature-card">

            <h3>Direct Farm Sales</h3>

            <p>
              Help farmers reach customers directly and create
              new opportunities to sell their products through
              an online platform.
            </p>

          </div>

        </div>

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>

      </section>


      {/* Bottom CTA */}
      <section className="farm-cta">

        <p className="farm-label">THE FUTURE OF FARMING</p>

        <h2>
          Fresh products.
          <br />
          Simple ordering.
        </h2>

        <button className="farm-cta-btn">
          EXPLORE ONLINE PRODUCTS
        </button>

      </section>

    </div>
  );
}

export default Service_future;
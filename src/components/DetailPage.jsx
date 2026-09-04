import { useNavigate, useParams } from "react-router-dom";

import "../styles/service_nav.css";
import services from "../pages/DetailContent.jsx";

function DetailPage() {
  const navigate = useNavigate();
  const { service } = useParams();

  const data = services[service];

  if (!data) {
    return <h1>Service not found</h1>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="farm-page">

      {/* Hero Section */}
      <section className="farm-hero">
        <div className="farm-hero-text">
          <p className="farm-label">{data.label}</p>

          <h1>{data.title}</h1>

          <p className="farm-intro">
            {data.intro}
          </p>
        </div>

        <div className="farm-hero-image">
          <img
            src={data.image}
            alt={data.imageAlt}
          />
        </div>
      </section>


      {/* About Section */}
      <section className="farm-about">
        <div className="about-content">

          <p className="farm-label">
            OUR PURPOSE
          </p>

          <h2>{data.purposeTitle}</h2>

          <p>{data.purposeText1}</p>

          <p>{data.purposeText2}</p>

        </div>
      </section>


      {/* Features Section */}
      <section className="farm-features">

        <p className="farm-label">
          WHAT WE PROVIDE
        </p>

        <h2>{data.featureTitle}</h2>

        <div className="feature-grid">

          {data.features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
            >
              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}

        </div>
        <br></br>

        <button
          className="back"
          onClick={handleGoBack}
        >
          GO BACK
        </button>

      </section>


      {/* Bottom CTA */}
      <section className="farm-cta">

        <p className="farm-label">
          {data.ctaLabel}
        </p>

        <h2>{data.ctaTitle}</h2>

        <button className="farm-cta-btn">
          {data.ctaButton}
        </button>

      </section>

    </div>
  );
}
export default DetailPage;
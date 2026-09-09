import { useNavigate, useParams } from "react-router-dom";

import "../styles/service_nav.css";
import campaignData from "../pages/campaigncontent.jsx";

function CampaignDetail() {
  const navigate = useNavigate();
  const { campaign } = useParams();

  const data = campaignData[campaign];

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
        <button
          className="button"
          onClick={handleGoBack}>
          GO BACK
        </button>
      </section>



    </div>
  );
}
export default CampaignDetail;
import { Link } from "react-router-dom";
import "../styles/card.css";

function CampaignCard({ image, title, description,link, button }) {
  return (
    <article className="campaign-card">

      {/* IMAGE AREA */}
      <div className="campaign-card-image">
        <img
          className="campaign-thumb"
          src={image}
          alt={title}
        />
      </div>

      {/* CARD CONTENT */}
      <div className="campaign-card-body">

        <h2>{title}</h2>

        <p className="campaign-desc">
          {description}
        </p>

        <Link to={link} className="button">
        {button}
      </Link>

      </div>

    </article>
  );
}

export default CampaignCard;


import "../styles/card.css";

function Card({ icon, title, description , button }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>

      <h2>{title}</h2>

      <p>{description}</p>
      <button>{button}</button>
    </div>
  );
}

export default Card;
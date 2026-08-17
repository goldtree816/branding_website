import "../styles/card.css";

function Card({  icon, title, description,  }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
     
      <h2>{title}</h2>

      <p>{description}</p>

   
    </div>
  );
}

export default Card;
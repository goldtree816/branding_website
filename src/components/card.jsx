import "../styles/card.css";

function Card({image}) {
  return (
    <div className="feature-card">

      <img className="pic" src={image}/>
     
   
    </div>
  );
}

export default Card;
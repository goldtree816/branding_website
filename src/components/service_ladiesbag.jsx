import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import ladiesbag from "../assets/ladiesbag.png"

function Service_ladiesbag() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="ser-content">
        <img src={ladiesbag} className="img1"/>

      <h1>
        Goldtree Ladies Bag
      </h1>


        <p>
          Goldtree Ladies Bags are designed for women who want to combine elegant style, everyday practicality, and lasting comfort. With a sophisticated and timeless design, they complement a wide range of outfits and occasions—from casual outings and shopping trips to work, travel, and special events.
<br></br><br></br>

          The bags offer a practical balance of style and functionality, with enough space to carry everyday essentials while maintaining a clean and refined appearance. Their carefully designed structure and comfortable handles or straps make them convenient to carry, while the quality finish adds a polished touch to any outfit.
<br></br><br></br>

          Whether you're heading to work, meeting friends, traveling, or simply adding an elegant finishing touch to your look, Goldtree Ladies Bags provide a combination of fashion, convenience, and versatility. Their adaptable design makes them an excellent choice for anyone looking for a stylish everyday bag without sacrificing practicality.
        </p>

       

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>


    </div>
  );
}

export default Service_ladiesbag;
import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import honey from "../assets/honey.png"

function Service_honey() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="ser-content">
        <img src={honey} className="img1"/>

      <h1>
        Goldtree Honey
      </h1>


        <p>
          Goldtree Honey is crafted for people who appreciate natural sweetness, quality, and everyday nourishment. With its rich golden color and smooth taste, it makes a versatile addition to a wide range of foods and drinks—from morning tea and breakfast to desserts and everyday recipes.
<br></br><br></br>

          Carefully selected for its distinctive flavor and natural goodness, Goldtree Honey offers a delicious alternative to refined sweeteners. Its smooth texture and pleasant aroma make it easy to enjoy on its own or incorporate into your favorite meals and beverages.
<br></br><br></br>

          Whether you're sweetening your morning drink, spreading it over toast, adding it to recipes, or simply enjoying a spoonful, Goldtree Honey offers a balance of taste, versatility, and natural appeal. Its convenient packaging makes it an easy choice for anyone looking to bring a touch of natural sweetness into their everyday routine.
        </p>

       

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>


    </div>
  );
}

export default Service_honey;
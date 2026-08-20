import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import sunglasses from "../assets/sunglass.png"

function Service_sunglass() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="ser-content">
        <img src={sunglasses} className="img1"/>

      <h1>
        Goldtree Sunglasses
      </h1>


        <p>
          Goldtree Sunglasses are designed for people who want to combine <b>modern style, everyday comfort, and dependable eye protection.</b> With a clean and timeless design, they complement a wide range of outfits and occasions—from casual outdoor activities to travel and everyday city wear.
       <br></br><br></br>

      
          The sunglasses feature UV 400 protection, helping shield your eyes from harmful UVA and UVB rays. Their lightweight construction makes them comfortable for extended wear, while the carefully designed frames provide a stylish and confident appearance.
       <br></br><br></br>

       
          Whether you're heading outdoors, traveling, driving, or simply adding a finishing touch to your outfit, Goldtree Sunglasses offer a balance of fashion, comfort, and functionality. Their versatile design makes them an easy choice for anyone looking for reliable sunglasses without sacrificing aesthetics.
        </p>

       

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>


    </div>
  );
}

export default Service_sunglass;
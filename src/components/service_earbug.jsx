import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import earbud from "../assets/earbud.png"

function Service_earbud() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="ser-content">
        <img src={earbud} className="img1"/>

      <h1>
        Goldtree Earbuds
      </h1>


        <p>
          Goldtree Earbuds are designed for people who want to combine modern style, clear sound, and everyday convenience. With a sleek and compact design, they provide a comfortable listening experience while complementing your lifestyle—whether you're commuting, working, exercising, or simply relaxing at home.
<br></br><br></br>

          The earbuds deliver clear and balanced audio, allowing you to enjoy music, podcasts, videos, and calls with greater clarity. Their lightweight construction and ergonomic design make them comfortable to wear for extended periods, while the compact charging case makes them easy to carry wherever you go.
<br></br><br></br>

          Whether you're listening to your favorite music, attending online meetings, traveling, or staying connected throughout the day, Goldtree Earbuds offer a practical balance of sound quality, comfort, and modern functionality. Their versatile design makes them an ideal choice for anyone looking for reliable wireless earbuds without compromising on style.
        </p>

       

        <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>


    </div>
  );
}

export default Service_earbud;
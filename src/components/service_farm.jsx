import { useNavigate } from "react-router-dom";
import "../styles/service_nav.css";
import earbud from "../assets/farm.jpg"

function Service_farmweb() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

   return (
        <div className="farm-page">

            {/* Hero Section */}
            <section className="farm-hero">

                <div className="farm-hero-text">
                    <p className="farm-label">ABOUT FARMER WEB</p>

                    <h1>
                        Growing Better.
                        <br />
                        Farming Smarter.
                    </h1>

                    <p className="farm-intro">
                        Farmer Web is a digital platform created to
                        connect farmers with useful information,
                        modern farming ideas, and better opportunities.
                    </p>
                </div>

                <div className="farm-hero-image">
                    <img src={earbud} alt="Farmer working in a field" />
                </div>

            </section>


            {/* About Section */}
            <section className="farm-about">

               

                <div className="about-content">
                    <p className="farm-label">OUR PURPOSE</p>

                    <h2>
                        Supporting the people
                        who grow our future.
                    </h2>

                    <p>
                        Farming is more than producing food. It is
                        dedication, patience, knowledge, and hard work.
                        Farmer Web aims to make useful agricultural
                        information easier for farmers to access.
                    </p>

                    <p>
                        From farming techniques and crop information
                        to agricultural resources and helpful tips,
                        our goal is to create a simple digital space
                        where farmers can learn, explore, and grow.
                    </p>
                </div>

            </section>


            {/* Features */}
            <section className="farm-features">

                <p className="farm-label">WHAT WE PROVIDE</p>

                <h2>Everything farmers need to grow.</h2>

                <div className="feature-grid">

                    <div className="feature-card">
                      
                        <h3>Farming Knowledge</h3>
                        <p>
                            Helpful information about crops,
                            farming methods, and agricultural practices.
                        </p>
                    </div>

                    <div className="feature-card">
                       
                        <h3>Crop Information</h3>
                        <p>
                            Explore useful information about different
                            crops and their growing requirements.
                        </p>
                    </div>

                    <div className="feature-card">
                     
                        <h3>Modern Agriculture</h3>
                        <p>
                            Discover modern approaches and ideas that
                            can make farming more efficient.
                        </p>
                    </div>

                </div>
                <button className="back" onClick={handleGoBack}>
          GO BACK
        </button>

            </section>
            


            {/* Bottom CTA */}
            <section className="farm-cta">

                <p className="farm-label">FARMER WEB</p>

                <h2>
                    Let's grow a better
                    future together.
                </h2>

                <button className="farm-cta-btn">
                    EXPLORE FARMING
                </button>

            </section>

        </div>
    );
}

export default Service_farmweb;
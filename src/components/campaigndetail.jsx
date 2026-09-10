import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/campaigndetail.css";
import campaignData from "../pages/campaigncontent.jsx";

function CampaignDetail() {
  const navigate = useNavigate();
  const { campaign } = useParams();

  const data = campaignData[campaign];

  const [currentImage, setCurrentImage] = useState(0);

  const images = data?.images || (data?.image ? [data.image] : []);

  // ================================
  // GO BACK
  // ================================

  const handleGoBack = () => {
    navigate(-1);
  };


  // ================================
  // PREVIOUS IMAGE
  // ================================

  const previousImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


  // ================================
  // NEXT IMAGE
  // ================================

  const nextImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };


  // ================================
  // SWIPE / DRAG
  // ================================

  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX;
    e.currentTarget.dataset.startX = startX;
  };

  const handleTouchEnd = (e) => {
    const startX = Number(e.currentTarget.dataset.startX);
    const endX = e.changedTouches[0].clientX;

    const difference = startX - endX;

    // Swipe left
    if (difference > 50) {
      nextImage();
    }

    // Swipe right
    if (difference < -50) {
      previousImage();
    }
  };


  // ================================
  // MOUSE DRAG
  // ================================

  const handleMouseDown = (e) => {
    e.currentTarget.dataset.startX = e.clientX;
    e.currentTarget.dataset.dragging = "true";
  };

  const handleMouseUp = (e) => {
    const startX = Number(e.currentTarget.dataset.startX);
    const endX = e.clientX;

    const difference = startX - endX;

    e.currentTarget.dataset.dragging = "false";

    // Drag left
    if (difference > 50) {
      nextImage();
    }

    // Drag right
    if (difference < -50) {
      previousImage();
    }
  };


  // ================================
  // CAMPAIGN NOT FOUND
  // ================================

  if (!data) {
    return <h1>Campaign not found</h1>;
  }


  return (
    <div className="farm-page">

      {/* ================================
          HERO SECTION
      ================================= */}

      <section className="farm-hero">

        <div className="farm-hero-text">

          <p className="farm-label">
            {data.label}
          </p>

          <h1>
            {data.title}
          </h1>

          <p className="farm-intro">
            {data.intro}
          </p>

        </div>


        {/* ================================
            IMAGE SLIDER
        ================================= */}

        <div
          className="farm-hero-image"

          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}

          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >

          {images.length > 0 && (
            <img
              src={images[currentImage]}
              alt={data.imageAlt || data.title}
              draggable="false"
            />
          )}


          {/* ================================
              LEFT ARROW
          ================================= */}

          {images.length > 1 && (
            <button
              type="button"
              className="slider-button slider-prev"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          )}


          {/* ================================
              RIGHT ARROW
          ================================= */}

          {images.length > 1 && (
            <button
              type="button"
              className="slider-button slider-next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              →
            </button>
          )}


          {/* ================================
              IMAGE COUNTER
          ================================= */}

          {images.length > 1 && (
            <div className="image-counter">
              {currentImage + 1} / {images.length}
            </div>
          )}

        </div>

      </section>


      {/* ================================
          ABOUT SECTION
      ================================= */}

      <section className="farm-about">

        <div className="about-content">

          <p className="farm-label">
            OUR PURPOSE
          </p>

          <h2>
            {data.purposeTitle}
          </h2>

          <p>
            {data.purposeText1}
          </p>

          {data.purposeText2 && (
            <p>
              {data.purposeText2}
            </p>
          )}

        </div>


        {/* GO BACK BUTTON */}

        <button
          type="button"
          className="button"
          onClick={handleGoBack}
        >
          GO BACK
        </button>

      </section>

    </div>
  );
}

export default CampaignDetail;
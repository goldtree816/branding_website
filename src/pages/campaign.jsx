import React from "react";
import { Link } from "react-router-dom";
import "../styles/campaign.css";
import CampaignCard from "../components/card";
import Client from '../components/client.jsx'

import Testimonial from '../components/testimonial.jsx'

import smartFarm from "../assets/smart_farming.jpg";
import seasonalCrop from "../assets/seasonal_crops.jpg";
import waterSaving from "../assets/watersaving.jpg";
import farmerSupport from "../assets/farmer_support.jpg";
import organicFarming from "../assets/organic_farm.jpg";
import farmerTraining from "../assets/farmer_training.jpg";
import marketAccess from "../assets/market.jpg";
import climateSmart from "../assets/climate.jpg";

function Campaign() {
  return (
    <div className="campaign-page">

      {/* HEADER */}
      <section className="campaign-header">
        <h1>Farmer Campaigns</h1>

        <p>
          Discover farming campaigns, seasonal programs, training
          opportunities, and special offers designed to support farmers.
        </p>
      </section>

      {/* CAMPAIGN CARDS */}
      <section className="campaign-container">

        <CampaignCard
          image={smartFarm}
          title="Smart Farming Campaign"
          description="Learn modern farming techniques, smart irrigation, crop monitoring, and technology-based solutions for better farm management."
          link="/campaign/smartfarming"
  button="Learn More"
        />

        <CampaignCard
          image={seasonalCrop}
          title="Seasonal Crop Campaign"
          description="Get useful information about seasonal crops, planting schedules, suitable seeds, and recommended farming practices."
          link="/campaign/seasonalcrop"
  button="Learn More"
        />

        <CampaignCard
          image={waterSaving}
          title="Water Saving Campaign"
          description="Promote efficient irrigation methods and water-saving practices to reduce water usage and maintain healthy crops."
          link="/campaign/watersaving"
  button="Learn More"
        />

        <CampaignCard
          image={farmerSupport}
          title="Farmer Support Campaign"
          description="Connect farmers with agricultural resources, training programs, expert guidance, and support opportunities."
          link="/campaign/farmersupport"
  button="Learn More"
        />

        <CampaignCard
  image={organicFarming}
  title="Organic Farming Campaign"
  description="Promote natural farming methods and sustainable practices that help maintain healthy soil and produce quality crops."
  link="/campaign/organicfarming"
  button="Learn More"
/>

<CampaignCard
  image={farmerTraining}
  title="Farmer Training Campaign"
  description="Join practical training programs to learn new farming skills, improve crop production, and manage your farm more effectively."
  link="/campaign/farmertraining"
  button="Learn More"
/>

<CampaignCard
  image={marketAccess}
  title="Market Access Campaign"
  description="Help farmers connect with buyers, discover better market opportunities, and improve the way they sell their agricultural products."
  link="/campaign/marketaccess"
  button="Learn More"
/>

<CampaignCard
  image={climateSmart}
  title="Climate Smart Farming Campaign"
  description="Learn climate-friendly farming practices that help farmers prepare for changing weather conditions and protect their crops."
  link="/campaign/climatesmart"
  button="Learn More"
/>

      </section>
      <Client />
      <Testimonial/>

    </div>
  );
}

export default Campaign;


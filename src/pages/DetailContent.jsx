import showcaseImg from "../assets/showcase.jpg";
import farmImg from "../assets/farm.jpg";
import storyImg from "../assets/story.jpg";
import futureImg from "../assets/future.jpg";
import mobileImg from "../assets/farm_web.jpg";
import connectionImg from "../assets/connection.jpg";

const services = {
  agriculture: {
    label: "AGRICULTURAL PRODUCT SHOWCASE",

    title: (
      <>
        Showcase Better.
        <br />
        Grow Further.
      </>
    ),

    intro:
      "A digital platform designed to showcase agricultural products, highlight their quality, and help customers discover fresh and locally grown products.",

    image: showcaseImg,
    imageAlt: "Agricultural products",

    purposeTitle: (
      <>
        Bringing farm products
        <br />
        closer to customers.
      </>
    ),

    purposeText1:
      "Agricultural products deserve a platform where their quality, freshness, and story can be properly presented. Our showcase helps farmers introduce their products in a clear and attractive way.",

    purposeText2:
      "From fresh vegetables and fruits to grains, dairy, honey, and other farm products, customers can easily explore what is available and learn more about where their products come from.",

    featureTitle: (
      <>
        Everything needed to showcase
        <br />
        agricultural products.
      </>
    ),

    features: [
      {
        title: "Product Display",
        text: "Present agricultural products with clear images, names, descriptions, and important product details.",
      },
      {
        title: "Product Information",
        text: "Provide useful information about product quality, origin, availability, farming methods, and more.",
      },
      {
        title: "Connect With Customers",
        text: "Help customers discover farm products and connect with farmers and agricultural businesses more easily.",
      },
    ],

    ctaLabel: "AGRICULTURAL PRODUCTS",

    ctaTitle: (
      <>
        Show your products.
        <br />
        Tell your farm's story.
      </>
    ),

    ctaButton: "EXPLORE PRODUCTS",
  },

  farmweb: {
    label: "ABOUT FARMER WEB",

    title: (
      <>
        Growing Better.
        <br />
        Farming Smarter.
      </>
    ),

    intro:
      "Farmer Web is a digital platform created to connect farmers with useful information, modern farming ideas, and better opportunities.",

    image: farmImg,
    imageAlt: "Farmer working in a field",

    purposeTitle: (
      <>
        Supporting the people
        <br />
        who grow our future.
      </>
    ),

    purposeText1:
      "Farming is more than producing food. It is dedication, patience, knowledge, and hard work. Farmer Web aims to make useful agricultural information easier for farmers to access.",

    purposeText2:
      "From farming techniques and crop information to agricultural resources and helpful tips, our goal is to create a simple digital space where farmers can learn, explore, and grow.",

    featureTitle: "Everything farmers need to grow.",

    features: [
      {
        title: "Farming Knowledge",
        text: "Helpful information about crops, farming methods, and agricultural practices.",
      },
      {
        title: "Crop Information",
        text: "Explore useful information about different crops and their growing requirements.",
      },
      {
        title: "Modern Agriculture",
        text: "Discover modern approaches and ideas that can make farming more efficient.",
      },
    ],

    ctaLabel: "FARMER WEB",

    ctaTitle: (
      <>
        Let's grow a better
        <br />
        future together.
      </>
    ),

    ctaButton: "EXPLORE FARMING",
  },

  farmstory: {
    label: "FARM STORY & BRANDING",

    title: (
      <>
        Tell Your Story.
        <br />
        Grow Your Brand.
      </>
    ),

    intro:
      "A digital platform that helps farms share their story, showcase their values, and create a strong identity that customers can recognize and trust.",

    image: storyImg,
    imageAlt: "Farm story and branding",

    purposeTitle: (
      <>
        Every farm has a story
        <br />
        worth sharing.
      </>
    ),

    purposeText1:
      "A farm is more than the products it produces. It has people, traditions, values, hard work, and a unique journey. Farm Story & Branding helps bring these elements together into a meaningful digital identity.",

    purposeText2:
      "By sharing the story behind the farm, customers can understand where their products come from and connect with the people who produce them. This helps create recognition, trust, and a stronger relationship with customers.",

    featureTitle: (
      <>
        Build an identity
        <br />
        people remember.
      </>
    ),

    features: [
      {
        title: "Farm Story",
        text: "Share the history, journey, people, and traditions behind your farm in a simple and engaging way.",
      },
      {
        title: "Farm Identity",
        text: "Create a recognizable identity that represents your farm's values, products, quality, and unique character.",
      },
      {
        title: "Customer Trust",
        text: "Help customers understand your farming practices and build a stronger connection through your authentic story.",
      },
    ],

    ctaLabel: "YOUR FARM. YOUR STORY.",

    ctaTitle: (
      <>
        Share your story.
        <br />
        Build your identity.
      </>
    ),

    ctaButton: "DISCOVER YOUR FARM STORY",
  },

  future: {
    label: "FUTURE ONLINE ORDERING",

    title: (
      <>
        Order Fresh.
        <br />
        Farm Direct.
      </>
    ),

    intro:
      "A modern online ordering experience that allows customers to explore fresh agricultural products, choose what they need, and place orders directly from their favorite farms.",

    image: futureImg,
    imageAlt: "Online farm product ordering",

    purposeTitle: (
      <>
        Making farm products
        <br />
        easier to order.
      </>
    ),

    purposeText1:
      "Online ordering can make it easier for customers to discover fresh agricultural products without needing to visit a farm or market in person.",

    purposeText2:
      "Farmer Web provides a convenient digital space where customers can browse available products, view product details, and place orders while helping farmers reach more customers and manage their sales more efficiently.",

    featureTitle: (
      <>
        A simple way to bring
        <br />
        farm products online.
      </>
    ),

    features: [
      {
        title: "Online Product Browsing",
        text: "Customers can explore fresh fruits, vegetables, grains, dairy products, and other agricultural products from one convenient platform.",
      },
      {
        title: "Easy Ordering",
        text: "A simple ordering process allows customers to select products, choose quantities, and place their orders quickly and easily.",
      },
      {
        title: "Direct Farm Sales",
        text: "Help farmers reach customers directly and create new opportunities to sell their products through an online platform.",
      },
    ],

    ctaLabel: "THE FUTURE OF FARMING",

    ctaTitle: (
      <>
        Fresh products.
        <br />
        Simple ordering.
      </>
    ),

    ctaButton: "EXPLORE ONLINE PRODUCTS",
  },

  mobile: {
    label: "MOBILE-FRIENDLY FARM WEBSITE",

    title: (
      <>
        Farm Anywhere.
        <br />
        Stay Connected.
      </>
    ),

    intro:
      "A responsive farm website designed to work smoothly on smartphones, tablets, and computers, giving farmers easy access to important agricultural information anytime.",

    image: mobileImg,
    imageAlt: "Mobile-friendly farm website",

    purposeTitle: (
      <>
        Making farming information
        <br />
        accessible anywhere.
      </>
    ),

    purposeText1:
      "Farmers often rely on their mobile phones to access information while working in the field. A mobile-friendly website makes it easier to browse agricultural resources without needing a computer.",

    purposeText2:
      "Our responsive design provides a simple and comfortable experience across different screen sizes, allowing farmers to explore farming information, products, and resources whenever they need them.",

    featureTitle: (
      <>
        A better farming experience
        <br />
        on every device.
      </>
    ),

    features: [
      {
        title: "Responsive Design",
        text: "A flexible website layout that automatically adapts to mobile phones, tablets, laptops, and desktop screens.",
      },
      {
        title: "Easy Navigation",
        text: "Simple menus and clear sections make it easy for farmers to quickly find the information they need.",
      },
      {
        title: "Accessible Anywhere",
        text: "Access farming resources, product information, and useful content conveniently from anywhere using a mobile device.",
      },
    ],

    ctaLabel: "MOBILE FARMING EXPERIENCE",

    ctaTitle: (
      <>
        Farming information
        <br />
        in your hands.
      </>
    ),

    ctaButton: "EXPLORE FARM WEB",
  },

  online: {
    label: "ONLINE CUSTOMER CONNECTION",

    title: (
      <>
        Connect Better.
        <br />
        Grow Together.
      </>
    ),

    intro:
      "A digital platform that helps farmers connect directly with customers, share their products, and build strong relationships through online communication.",

    image: connectionImg,
    imageAlt: "Connecting farmers with customers",

    purposeTitle: (
      <>
        Bringing farmers and
        <br />
        customers closer.
      </>
    ),

    purposeText1:
      "Connecting with customers is an important part of growing a successful agricultural business. Farmer Web provides a simple digital space where farmers can introduce their products and communicate with customers.",

    purposeText2:
      "Customers can learn about available products, farming practices, and the people behind the farm. This creates better communication, builds trust, and makes it easier for customers to connect with local farmers.",

    featureTitle: (
      <>
        Simple ways to connect
        <br />
        with your customers.
      </>
    ),

    features: [
      {
        title: "Direct Communication",
        text: "Make it easier for customers to contact farmers, ask questions, and learn more about their products.",
      },
      {
        title: "Customer Engagement",
        text: "Share farm updates, product information, and useful agricultural content to keep customers engaged.",
      },
      {
        title: "Build Trust",
        text: "Create stronger relationships by providing clear information and showing customers the story behind their food.",
      },
    ],

    ctaLabel: "ONLINE CONNECTION",

    ctaTitle: (
      <>
        Connect with your
        <br />
        customers today.
      </>
    ),

    ctaButton: "CONNECT WITH CUSTOMERS",
  },
};

export default services;
import React from "react";
import BootstrapCarousel from "../components/Intro";
import Benefits from "../components/BenefitsComp/Benefits";
import CustomerReview from "../components/CustomerReview";
import FAQs from "../components/FAQs";
import FooterDemo from "../components/FooterDemo";
import Footer from "../components/Footer";
import Features from "../components/FeaturesComp/Features";
const FeaturesPage = () => {
  return (
    <div>
      <BootstrapCarousel />
      <Features />
      <FAQs />
      <FooterDemo />
      <Footer />
    </div>
  );
};

export default FeaturesPage;

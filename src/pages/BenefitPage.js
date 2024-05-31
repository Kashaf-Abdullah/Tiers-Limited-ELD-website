import React, { useState, useEffect } from "react";
import { BootstrapCarousel } from "../components/Intro";

import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import FooterDemo from "../components/FooterDemo";
import Benefits from "../components/BenefitsComp/Benefits";
import CustomerReview from "../components/CustomerReview";

const BenefitPage = () => {
  return (
    <div>
      <BootstrapCarousel />
      <Benefits />
      <CustomerReview />
      <FAQs />
      <FooterDemo />
      <Footer />
    </div>
  );
};

export default BenefitPage;

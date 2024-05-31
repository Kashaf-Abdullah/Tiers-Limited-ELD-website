import React, { useState, useEffect } from "react";
import Intro, { BootstrapCarousel } from "../components/Intro";
import CustomerReview from "../components/CustomerReview";
import Discover from "../components/Discover";
import Work from "../components/Work";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import Commercial from "../components/Commercial";
import FooterDemo from "../components/FooterDemo";
import Blogs from "../components/Blogs";
import Timeline from "../components/Timeline";

const HomePage = () => {
  return (
    <div>
      <BootstrapCarousel />
      <Timeline />
      <CustomerReview />
      <Discover />
      <Commercial />
      <Blogs numberOfBlogs={3} />
      <Work />
      <FAQs />
      <FooterDemo />
      <Footer />
    </div>
  );
};

export default HomePage;

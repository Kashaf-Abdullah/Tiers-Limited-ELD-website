import React from "react";
import { BootstrapCarousel } from "../components/Intro";

import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import FooterDemo from "../components/FooterDemo";
import AboutUs from "../components/AboutUsComp/AboutUs";
import Blogs from "../components/Blogs";
import Commercial from "../components/Commercial";
const AboutUsPage = () => {
  return (
    <div>
      <BootstrapCarousel />
      <AboutUs />
      <Commercial />
      <Blogs />
      <FAQs />
      <FooterDemo />
      <Footer />
    </div>
  );
};

export default AboutUsPage;

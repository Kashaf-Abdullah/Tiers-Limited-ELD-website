import React, { useState, useEffect } from "react";
import { BootstrapCarousel } from "../components/Intro";
import ELD_logo from "../components/ELD_Devices_comp/ELD_logo";
import ELD_about from "../components/ELD_Devices_comp/ELD_about";
import ELD_features from "../components/ELD_Devices_comp/ELD_features";
import ELD_Card from "../components/cards/ELD_Card";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/pngegg.png";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import FooterDemo from "../components/FooterDemo";
import ELD_future from "../components/ELD_Devices_comp/ELD_future";

const ELD_devices = () => {
  return (
    <div>
      <BootstrapCarousel />
      <ELD_logo />
      <ELD_about />
      <ELD_features />
      <ELD_Card
        dir=""
        head2="The Vital Role of Trucking Operations"
        text="At the heart of the trucking industry lies the intricate web of operations that keeps goods flowing across the country.
           "
        i1={i1}
      />
      <ELD_Card
        dir="row-reverse"
        head2="Navigating DOT Regulations"
        text="DOT regulations serve as the framework for ensuring safety and compliance within the trucking industry.  "
        i1={i2}
      />
      <ELD_future />
      <FAQs />
      <FooterDemo />
      <Footer />
    </div>
  );
};

export default ELD_devices;

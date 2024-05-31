import React from "react";
import { BootstrapCarousel } from "../components/Intro";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import FooterDemo from "../components/FooterDemo";
import ContactForm from "../components/ContactUsComp/ContactForm";
import CountryContact from "../components/ContactUsComp/CountryContact";
const ContactPage = () => {
  return (
    <div>
      <BootstrapCarousel />
      <ContactForm />
      <CountryContact />
      <FAQs />
      <FooterDemo />
      <Footer />
    </div>
  );
};
export default ContactPage;

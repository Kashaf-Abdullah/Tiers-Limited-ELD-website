import React from "react";
import {
  FaRuler,
  FaUser,
  FaRulerCombined,
  FaTasks,
  FaClipboardCheck,
  FaFileContract,
  FaCamera,
  FaUserPlus,
  FaFileInvoiceDollar,
  FaFlag,
  FaFlagCheckered,
  FaFlagUsa,
  FaRegFlag,
} from "react-icons/fa";

import ContactCountryCard from "../cards/ContactCountryCard";
import { Container } from "react-bootstrap";

const CountryContact = () => {
  const templatesData = [
    {
      icon: <FaFlag />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaFlag />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaRegFlag />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaFlag />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaFlagUsa />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaFlag />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaFlagCheckered />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaFlag />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
    {
      icon: <FaFlag />,
      text: "United Kingdom Geotab (UK) Ltd 75 Farringdon Rd London, EC1M 3PS",
    },
  ];

  return (
    <Container>
      <h2 className="sec-title">Global mailing addresses</h2>
      <ContactCountryCard templates={templatesData} />
    </Container>
  );
};

export default CountryContact;

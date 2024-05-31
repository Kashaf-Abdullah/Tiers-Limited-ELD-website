import React from "react";
import Container from "react-bootstrap/Container";
import c1 from "../../assets/background.jpeg";
import c2 from "../../assets/background.jpeg";

import c3 from "../../assets/background.jpeg";

import Benefitcard from ".././cards/Benefitcard";

const Benefits = () => {
  const first = [
    "Grundlagen",
    "Vorteile & Nachteile für Unternehmen",
    "Einsetzungsmöglichkeiten",
    "Wie nutze ich KI für mein Unternehmen",
    "",
    "Empfohlen für: Menschen welche Up to Date sein möchten, sich für Technologien interessieren und ihr Unternehmen modernisieren möchten",
  ];
  const second = [
    "Wie ticken wir?",
    "",
    "Wie arbeiten wir?",
    "",
    "Wie kann man junge  Mitarbeiter:innen für sich gewinnen?",
    "",
    "Wie schaffen wir ein Miteinander, anstatt gegeneinander?",
    "",
    "Wie arbeiten wir gemeinsam?",

    "",
    "Empfohlen für: HR Mitarbeiter:innen, Geschäftsführung, Unternehmen mit Fachkräftemangel",
  ];

  const third = [
    "Wie beeinflusst Social Media unsere Welt?",
    "",
    "Vorteile und Nachteile von Social Media?",
    "",
    "Plattformen als Übersicht",
    "Empfohlen für:  ",
    "-Menschen welche mit jungen Menschen zusammenarbeiten",
    "-Eine Personal Brand aufbauen möchten",
    "-Ihr Geschäft in die Sichtbarkeit bringen möchten",
  ];

  return (
    <Container>
      <h3 className="sec-title">Benefits for Dispatchers:</h3>
      <p
        className="title"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        {" "}
        Learn how FleetVisionX solutions can optimize your fleet operations,
        improve safety, and reduce costs.
      </p>
      <div className="row" style={{ marginBottom: "5rem" }}>
        <Benefitcard
          fronthead1="Enhanced"
          fronthead2="Communication"
          para="Direct messaging features allow dispatchers to communicate seamlessly with drivers, providing instructions, updates, and support as needed"
          image={c1}
        />

        <Benefitcard
          fronthead1="Improved"
          fronthead2="Effeciency"
          para="Real-time tracking and notifications enable dispatchers to monitor operations closely, optimize routes, and allocate resources efficiently"
          image={c2}
        />

        <Benefitcard
          fronthead1="Proactive"
          fronthead2="Management"
          para="Alerts for significant delays or unexpected events empower dispatchers to take proactive measures, minimize disruptions, and maintain service levels"
          image={c3}
        />
      </div>
    </Container>
  );
};

export default Benefits;

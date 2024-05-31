import React from "react";
import { Container, Form, Row } from "react-bootstrap";

const FooterDemo = () => {
  return (
    <Container fluid style={{ backgroundColor: "var(--darkblue)" }}>
      <Row>
        <div
          className="intro-text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
            color: "white",
            margin: "4rem 0",
          }}
        >
          <h2 style={{ fontWeight: "800" }} className="heading">
            Ready To <span style={{ color: "var(--blue)" }}>Work</span> With
            GEOTAB
          </h2>
          <p>
            Let us show you how our easy-to-use solutions can help manage fleet
            vehicles at all levels.
          </p>
          <Form
            className="d-flex nav-btns"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <button
              className="buttonn"
              style={{
                backgroundColor: "var(--blue)",
                color: "var(--white)",
                fontSize: "15px",
                fontWeight: "800",
                border: "3px solid var(--blue)",
              }}
            >
              Scheule a demo
            </button>
            <button
              className="buttonn"
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                fontWeight: "800",
                color: "var(--blue)",
                border: "2px solid var(--blue)",
              }}
            >
              Start free trial
            </button>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default FooterDemo;

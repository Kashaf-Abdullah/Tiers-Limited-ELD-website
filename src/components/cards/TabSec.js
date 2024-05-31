import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import List from "./List";
import i1 from "../../assets/i1.jpg";
const TabSec = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <h6
            style={{
              color: "var(--darkblue)",
              fontSize: "1.4rem",
              margin: "1rem 0",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            voluptates officiis aliquid.
          </h6>
          <List />
        </Col>

        <Col lg={6} md={6} sm={12}>
          <div style={{ border: "12px solid var(--blue)", padding: "2rem" }}>
            <img src={i1} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TabSec;

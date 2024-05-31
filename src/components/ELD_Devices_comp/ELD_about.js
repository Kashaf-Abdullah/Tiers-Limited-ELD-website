import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ELD_about = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className="sec-title">
            Understanding Electronic Logging Devices (ELDs)
          </h4>
          <p className="text">
            ELDs have revolutionized the way trucking companies manage their
            fleets. By replacing traditional paper logs with electronic systems,
            ELDs offer real-time tracking of drivers’ hours of service (HOS),
            ensuring compliance with DOT regulations. Beyond regulatory
            compliance, ELDs enhance efficiency by optimizing route planning,
            monitoring vehicle performance, and facilitating seamless
            communication between drivers and dispatchers.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ELD_about;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBookBookmark } from "react-icons/fa6";
import DiscoverCard from "./cards/DiscoverCard";

const Discover = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <h4 className="sec-title">Discover the Geotab advantage</h4>

      <Row>
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </Row>
      <Row>
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </Row>
    </Container>
  );
};

export default Discover;

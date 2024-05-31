import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaConnectdevelop, FaIntercom, FaTimes, FaTools } from "react-icons/fa";
import { FaCaretUp, FaExclamation, FaToggleOn } from "react-icons/fa6";
import Eld_FeaturesCard from "../cards/Eld_FeaturesCard";

const ELD_features = () => {
  return (
    <Container>
      <h2 className="heading">
        Our <span>ELD </span>Feature
      </h2>

      <Row className="justify-content-between">
        <Eld_FeaturesCard
          title="Time Tracking"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
          icon={<FaIntercom />}
        />
        <Eld_FeaturesCard
          title="Custom Title"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
          icon={<FaIntercom />}
        />

        <Eld_FeaturesCard
          title="Custom Title"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
          icon={<FaIntercom />}
        />
      </Row>
    </Container>
  );
};

export default ELD_features;

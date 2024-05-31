import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaBookBookmark } from "react-icons/fa6";

const DiscoverCard = () => {
  return (
    <Col lg={3} md={6} style={{ marginBottom: "1rem" }}>
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title>
            <FaBookBookmark />
          </Card.Title>
          <h6>
            <strong>heading...</strong>
          </h6>
          <Card.Text className="text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DiscoverCard;

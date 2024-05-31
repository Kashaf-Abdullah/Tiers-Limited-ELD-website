import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaTools } from "react-icons/fa";

const Eld_FeaturesCard = ({ title, description, icon }) => {
  return (
    <Col xs={12} sm={6} md={3}>
      <Card
        style={{
          textAlign: "center",
          backgroundColor: "var(--offwhite)",
          padding: "1rem",
          borderRadius: "20px",
          marginBottom: "1rem",
          boxShadow: "var(--greenish_gray) 0px 5px 15px",
        }}
      >
        <Card.Body>
          <Col className="d-flex align-items-start">
            <div
              className="d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0"
              style={{
                color: "var(--greenish_gray)",
                background: "white",
                borderRadius: "50%",
                padding: "8px",
                display: "inline-block",
                marginRight: "8px",
              }}
            >
              {icon}
            </div>
            <div>
              <h3
                className=""
                style={{
                  fontSize: "27px",

                  fontWeight: "bold",
                  textAlign: "left",
                  color: "var(--greenish_gray)",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "var(--lightbrown)",
                  textAlign: "left",
                }}
              >
                {description}
              </p>
            </div>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Eld_FeaturesCard;

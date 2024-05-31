import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  const reviews = [
    {
      name: "John Doe",
      comment: "This is a fantastic product! Highly recommended.",
      rating: 5,
      date: "2024-05-17",
    },
    {
      name: "Jane Smith",
      comment: "Good quality, but the delivery was slow.",
      rating: 4,
      date: "2024-05-16",
    },
    {
      name: "Bob Johnson",
      comment: "satisfied with the product. It  met my expectations.",
      rating: 2,
      date: "2024-05-15",
    },
  ];

  return (
    <Container style={{ marginTop: "2rem" }}>
      <h4 className="sec-title">
        See what our customers are saying
        <br />
        about our fleet management platform
      </h4>

      <Row>
        {reviews.map((review, index) => (
          <Col lg={4} md={6} style={{ marginBottom: "1rem" }} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.comment}</Card.Text>
                <div style={{ color: "gold" }}>
                  {[...Array(5)].map((star, i) => (
                    <FaStar
                      key={i}
                      color={i < review.rating ? "gold" : "lightgray"}
                    />
                  ))}
                </div>
                <Card.Text style={{ fontSize: "0.8rem", color: "gray" }}>
                  {new Date(review.date).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReview;

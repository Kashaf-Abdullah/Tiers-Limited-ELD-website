import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CounterCard = ({ tagId, maxCount, speed, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let initialNumber = 0;

    const counter = () => {
      setCount((prevCount) => {
        if (prevCount < maxCount) {
          return prevCount + 1;
        } else {
          clearInterval(counterDelay);
          return prevCount;
        }
      });
    };

    const counterDelay = setInterval(counter, speed);

    return () => clearInterval(counterDelay);
  }, [maxCount, speed]);

  const cardStyle = {
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "var(--white)",
    borderRadius: "5px",
    marginBottom: "20px",
    border: "none",
    color: "var(--darkblue)",
    border: "1px solid var(--blue)",
    boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
  };

  const titleStyle = {
    marginBottom: "10px",
  };

  const countStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <Col sm={6} md={3}>
      <Card style={cardStyle}>
        <h3 style={countStyle}>
          <span id={tagId}>{count}</span>+
        </h3>
        <h6 style={titleStyle}>{title}</h6>
      </Card>
    </Col>
  );
};

const Commercial = () => {
  return (
    <Container>
      <h4 className="sec-title">
        The #1 commercial telematics platform global fleets depend on
      </h4>
      <Row>
        <CounterCard
          tagId="of fleet experience"
          maxCount={44}
          speed={100}
          title="of fleet experience"
        />
        <CounterCard
          tagId="companies use"
          maxCount={12}
          speed={400}
          title="companies use"
        />
        <CounterCard
          tagId="subscriptions"
          maxCount={436}
          speed={10}
          title="subscriptions"
        />
        <CounterCard
          tagId="data points"
          maxCount={100}
          speed={50}
          title="data points"
        />
      </Row>
    </Container>
  );
};

export default Commercial;

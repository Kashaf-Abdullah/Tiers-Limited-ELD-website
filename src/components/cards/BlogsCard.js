import React from "react";
import { Col } from "react-bootstrap";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BlogsCard = (props) => {
  return (
    <Col
      lg={3}
      md={3}
      xs={12}
      className="pro-card"
      style={{
        position: "relative",
        bottom: props.btm,
        backgroundColor: "var(--white)",
        color: "var(--blue)",
        marginBottom: "15px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <div style={{ marginBottom: "20px", padding: "2px" }}>
        <img
          src={props.image}
          alt=""
          style={{ width: "100%", height: "100%", padding: "12px" }}
        />
        <p className="text">{props.date}</p>
        <h4
          style={{ fontWeight: "700", color: "var(--blue)" }}
          className="heading"
        >
          {props.head}
        </h4>
        <p className="text">{props.text}</p>
      </div>
      <p>
        <FaArrowAltCircleLeft />
        <a onClick={props.onClick} style={{ cursor: "pointer" }}>
          Find Out More
        </a>
      </p>
    </Col>
  );
};

export default BlogsCard;

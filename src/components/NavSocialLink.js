import React, { useEffect, useState } from "react";
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const NavSocialLink = () => {
  const [fontSize, setFontSize] = useState("32px");
  const [textFontSize, setTextFontSize] = useState("12px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 552) {
        setFontSize("26px");
        setTextFontSize("8px");
      } else {
        setFontSize("32px");
        setTextFontSize("12px");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the state based on initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconStyle = {
    background: "var(--white)",
    color: "var(--darkblue)",
    margin: "2px",
    borderRadius: "50%",
    marginRight: "4px",
    padding: "6px",
    fontSize: fontSize,
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",

        zIndex: 1000,
        backgroundColor: "var(--white)",
        padding: "0.1rem 0",
        height: "5rem",
        top: 0,
      }}
    >
      <Container>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <FaFacebook style={iconStyle} />
            <FaInstagram style={iconStyle} />
            <FaLinkedin style={iconStyle} />
          </Col>
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FaPhone style={iconStyle} />
              <span style={{ fontSize: textFontSize }}>840-68-5885</span>
              <FaAddressBook style={iconStyle} />
              <span style={{ fontSize: textFontSize }}>abcxyzwu</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavSocialLink;
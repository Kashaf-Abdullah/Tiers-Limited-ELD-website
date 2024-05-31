import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "var(--blue)", padding: "2rem" }}>
        <Container>
          <Row>
            <Col lg={2} md={2} sm={12}>
              {/* <img
                src={logo}
                alt=""
                style={{
                  width: "7rem",
                  height: "6rem",
                  margin: "auto",
                  borderRadius: "20px",
                }}
              />
               */}
              <h4
                className="navlogo"
                style={{
                  fontWeight: "400",
                  position: "relative",
                  top: "4px",
                  color: "var(--white)",
                }}
              >
                GEOTAB
              </h4>

              <div className="logo-social-media" style={{ margin: "1rem 0" }}>
                <FaFacebook
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />

                <FaInstagram
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />

                <FaYoutube
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <br />
                <FaPinterest
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <FaTwitter
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />

                <FaLinkedin
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "2px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
              </div>

              {/* <img src={footer_logo} alt="" style={{ width: "8rem" }} /> */}
            </Col>
            <Col lg={2} md={2} sm={12}>
              <h5 style={{ color: "var(--white)" }}>
                <b>Our Services</b>
              </h5>
              <ul
                style={{
                  fontSize: "0.9rem",
                  listStyle: "none",
                  paddingLeft: "0px",
                  color: "var(--white)",
                }}
              >
                <li>Staging</li>
                <li>Design</li>
                <li>Live Consultations</li>
              </ul>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <h5 style={{ color: "var(--white)" }}>
                <b>PAGES</b>
              </h5>
              <ul
                style={{
                  fontSize: "0.9rem",
                  listStyle: "none",
                  paddingLeft: "0px",
                  color: "var(--white)",
                }}
              >
                <li>About</li>

                <li>How DSP Works</li>
                <li>Pricing</li>
                <li>Resources for Designers</li>
                <li>Events</li>

                <li>In the News</li>
                <li>Our Trusted Partners</li>
              </ul>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <h5 style={{ color: "var(--white)" }}>
                <b>GET HELP</b>
              </h5>
              <ul
                style={{
                  fontSize: "0.9rem",
                  listStyle: "none",
                  paddingLeft: "0px",
                  color: "var(--white)",
                }}
              >
                <li>Help Center</li>

                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div
                className="subs-form"
                style={{
                  padding: "2rem",
                  boxShadow: "var(--darkblue) 0px 2px 8px 0px",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontWeight: "700",
                    color: "var(--darkblue)",
                  }}
                >
                  <FaMailBulk style={{ fontSize: "2rem", margin: "auto" }} />
                  <br />
                  SUBSCRIBE
                </h3>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontWeight: "700",
                    color: "var(--lightbrown)",
                  }}
                >
                  Subscribe to our newsletter and stay updated!
                </p>
                <Form onSubmit={""}>
                  <Form.Group controlId="firstName">
                    <Form.Label
                      style={{
                        color: "var(--greenish_gray)",
                        fontWeight: "600",
                      }}
                    >
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      value={""}
                      onChange={""}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="lastName">
                    <Form.Label
                      style={{
                        color: "var(--greenish_gray)",
                        fontWeight: "600",
                      }}
                    >
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      value={""}
                      onChange={""}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label
                      style={{
                        color: "var(--greenish_gray)",
                        fontWeight: "600",
                      }}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={""}
                      onChange={""}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    style={{
                      margin: "1rem 0",
                      color: "var(--darkblue)",
                      backgroundColor: "var(--white)",
                      border: "1p solid var(--darkblue)",
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <p
        style={{
          textAlign: "center",
          position: "relative",
          top: "5px",
          padding: "0.2rem 0",
        }}
      >
        <span style={{ color: "var(--greenish_gray)" }}>
          COPYRIGHT GEOTAB -{" "}
        </span>{" "}
        <span style={{ color: "var(--lightbrown)" }}>
          TERMS & CONDITIONS PRIVACY POLICY
        </span>{" "}
      </p>
    </>
  );
};

export default Footer;

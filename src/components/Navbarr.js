import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../assets/logodsp.png";
function Navbarr() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };

  return (
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        position: "fixed",
        width: "100%",

        zIndex: 1000,
        backgroundColor: "var(--white)",
        padding: "0.1rem 0",
        height: "5rem",
        top: "2rem",
      }}
    >
      <Container style={{ backgroundColor: "var(--white)" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          style={{ margin: "0px 10px" }}
        >
          <h4
            className="navlogo"
            style={{
              fontWeight: "400",
              position: "relative",
              top: "4px",
              color: "#454545",
            }}
          >
            FleetVisionX
          </h4>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={handleToggle}
          style={{ margin: "0px 10px" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-items" navbarScroll>
            <Nav.Link as={Link} to="/eld-devices" onClick={handleNavLinkClick}>
              ELD Devices
            </Nav.Link>{" "}
            <NavDropdown title="FleetVisionX" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/features" onClick={handleNavLinkClick}>
                  Features
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/benefit" onClick={handleNavLinkClick}>
                  Benefits
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* New Route */}
            <Nav.Link as={Link} to="/aboutus" onClick={handleNavLinkClick}>
              About Us
            </Nav.Link>{" "}
            {/* New Route */}
            <Nav.Link as={Link} to="/contactus" onClick={handleNavLinkClick}>
              Contact Us
            </Nav.Link>{" "}
            {/* New Route */}
            <Nav.Link as={Link} to="/blogs" onClick={handleNavLinkClick}>
              Blog
            </Nav.Link>{" "}
            {/* New Route */}
          </Nav>

          <Form
            className="d-flex nav-btns"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <button
              className="buttonn"
              style={{
                backgroundColor: "var(--darkblue)",
                color: "var(--white)",
                fontSize: "15px",
                fontWeight: "800",
                border: "3px solid var(--darkblue)",
              }}
            >
              Scheule a demo
            </button>
            <button
              className="buttonn"
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                fontWeight: "800",
                color: "var(--darkblue)",
                border: "2px solid var(--darkblue)",
              }}
            >
              Start free trial
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

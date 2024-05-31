// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import intro from "../assets/background.jpeg";
// // import star from "../assets/review.png";
// // import star2 from "../assets/review2.png";
// // import star3 from "../assets/review3.png";
// // import star4 from "../assets/review4.png";
// import IntroSect from "./cards/IntroSec";

// const Intro = () => {
//   return (
//     <div
//       className="intro"
//       style={{
//         backgroundColor: "var(--offwhite)",
//         // borderRadius: "20px",
//         // padding: "20px",
//       }}
//     >
//       <Container fluid
//         style={{
//           backgroundImage: `url(${intro})`,
//           textAlign: "center",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           // borderRadius: "20px",
//           padding: "60px 20px",
//           height:"100%"
//         }}
//       >
//         <Row>
//           <IntroSect
//             head1="ONE PLATFORM FOR"
//             head2="OPTIMAL FLEET PERFORMANCE"
//           />
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Intro;

import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../assets/background.jpeg";
import s2 from "../assets/i1.jpg";

import s3 from "../assets//i1.jpg";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IntroSec from "./cards/IntroSec";

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div style={{ margin: "3rem 0 0 0" }}>
        <div
          className="container-fluid"
          style={{ backgroundColor: "var(--darkblue)" }}
        >
          <Carousel>
            <Carousel.Item style={{ height: "100%" }}>
              <IntroSec />
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>
              <IntroSec />
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>
              <IntroSec />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;

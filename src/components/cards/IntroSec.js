// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaMailBulk,
//   FaPinterest,
//   FaTwitter,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";

// const IntroSec = (props) => {
//   return (
//     <Col lg={12}>
//       <div className="intro-content" style={{ margin: "9rem 0" }}>
//         <h1 className="heading" style={{ color: "var(--white)" }}>
//           {props.head1}{" "}
//           <span style={{ color: "var(--white)" }}>{props.head2}</span>{" "}
//         </h1>
//         <p style={{ fontSize: "22px", color: "var(--white)" }}>
//           Unlock actionable insights and recommendations to boost fleet
//           efficiency, safety and sustainability. Powered by AI and data
//           intelligence
//         </p>

//         <div className="logo-social-media" style={{ margin: "1rem 0" }}>
//           <FaFacebook
//             style={{
//               background: "var(--white)",
//               color: "var(--darkblue)",
//               margin: "2px",
//               fontSize: "33px",
//               borderRadius: "50%",
//               marginRight: "4px",
//               padding: "6px",
//             }}
//           />

//           <FaInstagram
//             style={{
//               background: "var(--white)",
//               color: "var(--darkblue)",
//               margin: "2px",
//               fontSize: "33px",
//               borderRadius: "50%",
//               marginRight: "4px",
//               padding: "6px",
//             }}
//           />

//           <FaYoutube
//             style={{
//               background: "var(--white)",
//               color: "var(--darkblue)",
//               margin: "2px",
//               fontSize: "33px",
//               borderRadius: "50%",
//               marginRight: "4px",
//               padding: "6px",
//             }}
//           />
//           <FaPinterest
//             style={{
//               background: "var(--white)",
//               color: "var(--darkblue)",
//               margin: "2px",
//               fontSize: "33px",
//               borderRadius: "50%",
//               marginRight: "4px",
//               padding: "6px",
//             }}
//           />
//           <FaTwitter
//             style={{
//               background: "var(--white)",
//               color: "var(--darkblue)",
//               margin: "2px",
//               fontSize: "33px",
//               borderRadius: "50%",
//               marginRight: "4px",
//               padding: "6px",
//             }}
//           />

//           <FaLinkedin
//             style={{
//               background: "var(--white)",
//               color: "var(--darkblue)",
//               margin: "2px",
//               fontSize: "33px",
//               borderRadius: "50%",
//               marginRight: "4px",
//               padding: "6px",
//             }}
//           />
//         </div>

//         <p style={{ color: "var(--white)" }}>
//           "Discover your space's potential with our interactive interior design
//           solutions."
//         </p>
//         {/* <Row className='intro-rev'>
//                 <Col><img src={star} alt="" /></Col>
//                 <Col><img src={star2} alt="" /></Col>
//                 <Col><img src={star3} alt="" /></Col>
//                 <Col><img src={star4} alt="" /></Col>
//               </Row> */}

//         <button
//         class="button-64"
//          role="button"
//          style={{margin:"auto"}}>
//           <span class="btn-text">Demo</span>
//         </button>
//       </div>
//     </Col>
//   );
// };
// export default IntroSec;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import s1 from "../../assets/background.jpeg";
import s2 from "../../assets/i1.jpg";

import s3 from "../../assets//i1.jpg";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const IntroSec = () => {
  return (
    <Container>
      <Row style={{ padding: "4rem 0" }}>
        <Col lg={6} md={6} sm={12}>
          <div
            className="intro-text"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
              color: "white",
            }}
          >
            <h2 style={{ fontWeight: "800" }} className="heading">
              ONE PLATFORM FOR{" "}
              <span style={{ color: "var(--blue)" }}>OPTIMAL</span> FLEET
              PERFORMANCE
            </h2>
            <p>
              Born from grassroots passion, we've evolved into a leader in
              wrestling apparel. With a decade of dedication, we merge quality,
              design, and innovation to empower athletes worldwide.
            </p>
            <button
              class="button-64"
              role="button"
              style={{ marginRight: "auto" }}
            >
              <span class="btn-text">Demo</span>
            </button>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={s1}
              alt=""
              style={{ width: "70%", height: "70%", borderRadius: "50%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroSec;

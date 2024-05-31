import React from "react";
import s1 from "../../assets/i1.jpg";
const AboutUs = () => {
  return (
    <section class="about-section">
      <div class="container">
        <div class="row">
          <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div class="inner-column">
              <h2 class="sec-title">About FleetVisionX:</h2>
              <div class="text">
                Welcome to FleetVisionX, your comprehensive solution for
                optimizing fleet management and streamlining communication
                between dispatchers and drivers..
              </div>
              <div class="text">
                At FleetVisionX, we are committed to empowering businesses with
                innovative technology and exceptional service to enhance
                efficiency, safety, and compliance in fleet operations
              </div>
              <button
                className="buttonn"
                style={{
                  backgroundColor: "var(--blue)",
                  color: "var(--white)",
                  fontSize: "15px",
                  fontWeight: "800",
                  border: "3px solid var(--blue)",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div class="image-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column wow fadeInLeft">
              <figure class="image-1">
                <a href="#" class="lightbox-image" data-fancybox="images">
                  <img title="Rahul Kumar Yadav" src={s1} alt="" />
                </a>
              </figure>
            </div>
          </div>
        </div>
        <h2 class="sec-title">FleetVisionX Platform:</h2>
        <p class="text" style={{ textAlign: "center" }}>
          Experience the power of the FleetVisionX platform, your all-in-one
          solution for fleet management. In addition to features like real-time
          tracking and customizable reporting, our platform seamlessly
          integrates with dispatchers to facilitate efficient communication and
          coordination
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

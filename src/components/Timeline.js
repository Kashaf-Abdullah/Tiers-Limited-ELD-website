import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const steps = [
    { id: 1, label: "HOME WORK" },
    { id: 2, label: "RESPONSIVE PART" },
    { id: 3, label: "Creative CREATIONS" },
    { id: 4, label: "TESTIMONIALS PART" },
    { id: 5, label: "OUR LOCATIONS" },
  ];

  const sectionContent = [
    {
      id: 1,
      title: "HOME SECTION",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.",
    },
    {
      id: 2,
      title: "GALLERY SECTION",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.",
    },
    {
      id: 3,
      title: "Creative CREATIONS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.",
    },
    {
      id: 4,
      title: "TESTIMONIALS NOW",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.",
    },
    {
      id: 5,
      title: "OUR LOCATIONS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.",
    },
  ];

  const mainStyle = {
    margin: 0,
    fontFamily: "'Roboto Condensed', sans-serif",
  };

  const h1Style = {
    color: "#333",
    fontWeight: 700,
    marginTop: "125px",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "4px",
    lineHeight: "23px",
  };

  const processWrapperStyle = {
    margin: "auto",
    maxWidth: "1080px",
  };

  const progressBarContainerStyle = {
    position: "relative",
    width: "90%",
    margin: "auto",
    height: "100px",
    marginTop: "65px",
  };

  const ulStyle = {
    padding: 0,
    margin: 0,
    paddingTop: "15px",
    zIndex: 9999,
    position: "absolute",
    width: "100%",
    marginTop: "-40px",
  };

  const liStyle = {
    listStyle: "none",
    float: "left",
    width: "20%",
    textAlign: "center",
    color: "#aaa",
    textTransform: "uppercase",
    fontSize: "11px",
    cursor: "pointer",
    fontWeight: 700,
    transition: "all ease 0.2s",
    verticalAlign: "bottom",
    height: "60px",
    position: "relative",
  };

  const stepInnerStyle = {
    position: "absolute",
    width: "100%",
    bottom: 0,
    fontSize: "14px",
  };

  const lineStyle = {
    width: "80%",
    margin: "auto",
    background: "var(--blue)",
    height: "6px",
    position: "absolute",
    left: "10%",
    top: "57px",
    zIndex: 1,
    borderRadius: "50px",
    transition: "all ease 0.9s",
  };

  const lineProgressStyle = {
    content: " ",
    width: `${(activeStep - 1) * 25}%`,
    height: "100%",
    background: "var(--darkblue)",
    position: "absolute",
    zIndex: 2,
    borderRadius: "50px",
    transition: "all ease 0.9s",
  };

  const progressContentSectionStyle = {
    width: "90%",
    margin: "auto",
    background: "#f3f3f3",
    borderRadius: "4px",
  };

  const sectionContentStyle = {
    padding: "30px 40px",
    textAlign: "center",
    display: "none",
    animation: "FadeInUp 700ms ease 1",
    animationFillMode: "forwards",
    transform: "translateY(15px)",
    opacity: 0,
  };

  const sectionContentActiveStyle = {
    ...sectionContentStyle,
    display: "block",
    transform: "translateY(0px)",
    opacity: 1,
  };

  return (
    <Container>
      <h4 className="sec-title">
        An open platform for safe, sustainable and cost-effective mobility
        powered by AI and data intelligence
      </h4>
      <div style={mainStyle}>
        <div style={processWrapperStyle}>
          <div style={progressBarContainerStyle}>
            <ul style={ulStyle}>
              {steps.map((step) => (
                <li
                  key={step.id}
                  className={`step step0${step.id} ${
                    activeStep >= step.id ? "active" : ""
                  }`}
                  style={{
                    ...liStyle,
                    color: activeStep >= step.id ? "#444" : "#aaa",
                  }}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div className="step-inner" style={stepInnerStyle}>
                    {step.label}
                  </div>
                  <div
                    style={{
                      content: " ",
                      display: "block",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: `solid 2px ${
                        activeStep >= step.id ? "#fff" : "#aaa"
                      }`,
                      background:
                        activeStep >= step.id ? "var(--blue)" : "none",
                      transition: "all ease 0.3s",
                      margin: "auto",
                    }}
                  ></div>
                  <div
                    style={{
                      content: " ",
                      display: "block",
                      width: "6px",
                      height: "6px",
                      background: activeStep >= step.id ? "#207893" : "#777",
                      margin: "auto",
                      border: "solid 7px #fff",
                      borderRadius: "50%",
                      marginTop: "40px",
                      boxShadow: "0 2px 13px -1px rgba(0,0,0,0.3)",
                      transition: "all ease 0.2s",
                    }}
                  ></div>
                </li>
              ))}
            </ul>
            <div id="line" style={lineStyle}>
              <div id="line-progress" style={lineProgressStyle}></div>
            </div>
          </div>

          <div
            id="progress-content-section"
            style={progressContentSectionStyle}
          >
            {sectionContent.map((content) => (
              <div
                key={content.id}
                className={`section-content ${
                  activeStep === content.id ? "active" : ""
                }`}
                style={
                  activeStep === content.id
                    ? sectionContentActiveStyle
                    : sectionContentStyle
                }
              >
                <h2>{content.title}</h2>
                <p>{content.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Timeline;

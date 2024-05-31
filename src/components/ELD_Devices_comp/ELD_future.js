import React from "react";

const ELD_future = () => {
  return (
    <div>
      <section
        className="connect container-fluid"
        style={{ position: "relative" }}
      >
        <div className="connect-sec container">
          <div
            className="connect-overlay"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(45, 37, 31, 0.2)",
              zIndex: "1",
            }}
          ></div>
          <div
            className="connect-con"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              color: "var(--white)",
              position: "relative",
              zIndex: "2",
            }}
          >
            <h2
              className="heading"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              The Future of Trucking:
              <br /> Integration and Innovation
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galle y of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELD_future;

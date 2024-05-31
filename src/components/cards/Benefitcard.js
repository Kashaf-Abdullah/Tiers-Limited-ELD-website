import React from "react";

const Benefitcard = ({ para, fronthead1, fronthead2, image }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, var(--blue), var(--darkblue))`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: 600,
    margin: "3px 0 30px 0",
    fontSize: "1.9rem",
  };

  return (
    <div className="col-lg-4 col-md-4  col-sm-12">
      <div class="flip-card" tabIndex="0">
        <div class="flip-card-inner">
          <div
            class="flip-card-front"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              borderRadius: "20px",
            }}
          >
            <h4 style={gradientStyle}>
              {fronthead1}
              <br />
              {fronthead2}
            </h4>

            <img
              src={image}
              alt=""
              style={{ width: "13rem", height: "13rem", borderRadius: "50%" }}
            />
          </div>
          <div class="flip-card-back">
            <div className="MeineVortragsthemen-card">
              <h3
                style={{
                  textAlign: "center",
                  color: "var(--white)",
                  fontSize: "19px",
                  fontWeight: "700",
                }}
              >
                {fronthead1} {fronthead2}
              </h3>
              <p className="text">{para}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefitcard;

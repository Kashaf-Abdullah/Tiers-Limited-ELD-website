import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../assets/pngegg.png";

const ELD_logo = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // for tablet screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600, // for mobile screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="feature-con" style={{ margin: "1.4rem 0" }}>
      <Slider {...settings}>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
      </Slider>
    </div>
  );
};

export default ELD_logo;

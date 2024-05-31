import React from "react";
import support from "../../assets/background.jpeg";
const Features = () => {
  return (
    <div className="supp-sec container">
      <h3 className="sec-title">
        Dive into the features of our ELD devices and platform,
      </h3>
      <div className="supp-card">
        <div className="sup-c s_card-1">
          <div className="supp-card-head">
            <img src={support} alt="" style={{ marginRight: "4px" }} />
            <h4>Automated logs</h4>
          </div>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
        <div className="sup-c  s_card-2">
          <div className="supp-card-head">
            <img src={support} alt="" style={{ marginRight: "4px" }} />
            <h4>Driver behavior monitoring</h4>
          </div>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
      </div>
      <div className="supp-card">
        <div className="sup-c  s_card-3">
          <div className="supp-card-head">
            <img src={support} alt="" style={{ marginRight: "4px" }} />
            <h4>Customizable reporting</h4>
          </div>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

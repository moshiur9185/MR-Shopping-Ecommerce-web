import React from "react";

const FeatureCard = ({ info }) => {
  return (
    <div className="col-md-4 info-cart text-center">
      <div className={`info-${info.background} info-container shadow`}>
        <img className="pt-3" style={{ width: "60px",  display: "block",marginLeft: "auto",  marginRight: "auto" }} src={info.icon} alt="" />
        <h5 className="pt-2 text-white">{info.title}</h5>
      </div>
    </div>
  );
};

export default FeatureCard;

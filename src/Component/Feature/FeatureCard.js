import React from "react";

const FeatureCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white info-cart text-center">
      <div className={`info-${info.background} info-container shadow`}>
        <img style={{ width: "4vw" }} src={info.icon} alt="" />
        <h5>{info.title}</h5>
        {/* <small>{info.description}</small> */}
      </div>
    </div>
  );
};

export default FeatureCard;

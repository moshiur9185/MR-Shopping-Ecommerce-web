import React from "react";
import "./FeatureCard.css";
import groceries from "../image/food.png";
import fashion from "../image/online-shopping.png";
import electronic from "../image/gadgets.png";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const infoData = [
    {
      title: "Electronics",
      icon: electronic,
      background: "info",
    },
    {
      title: "Groceries",
      icon: groceries,
      background: "pink",
    },
    {
      title: "Men's Fashion",
      icon: fashion,
      background: "info",
    },
  ];
  return (
    <section className="container-fluid text-center  mt-5">
      <h5 className="text-muted">FEATURE</h5>
      <p className="text-muted">Lorem ipsum dolor sit amet.</p>
      <div className="row ">
        {infoData.map((info) => (
          <FeatureCard info={info}></FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Feature;

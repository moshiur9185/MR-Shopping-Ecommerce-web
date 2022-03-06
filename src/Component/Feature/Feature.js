import React from "react";
import "./FeatureCard.css";
import groceries from "../image/food.png";
import fashion from "../image/online-shopping.png";
import electronic from "../image/gadgets.png";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const infoData = [
    {
      id: 1,
      title: "Electronics",
      icon: electronic,
      background: "info",
    },
    {
      id: 2,
      title: "Groceries",
      icon: groceries,
      background: "pink",
    },
    {
      id: 3,
      title: "Men's Fashion",
      icon: fashion,
      background: "info",
    },
  ];
  return (
    <section className="container-fluid text-center  mt-5">
      <h5 className="fw-bold">FEATURE</h5>
      <p className="text-muted">Lorem ipsum dolor sit amet.</p>
      <div className="row ">
        {infoData.map((info) => (
          <FeatureCard key={info.id} info={info}></FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Feature;

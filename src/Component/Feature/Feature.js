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
      title: "Men's & Women's Fashion",
      // description: "Try the Performance troubleshooter. Delete programs you never use. Limit how many programs run at startup. Defragment your hard disk. Clean up your hard disk",
      icon: fashion,
      background: "info",
    },

    // {
    //   title: "Setup & Install",
    //   description: "Install means to put a program on your computer. Setup can mean to configure the program, including various options",
    //   icon: setup,
    //   background: "dark",
    // },
  ];
  return (
    <section className="container-fluid text-center text-muted mt-5">
      <h5 className="text-brand ">FEATURE</h5>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="row ">
        {infoData.map((info) => (
          <FeatureCard info={info}></FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Feature;

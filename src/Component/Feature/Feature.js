import React from "react";
import "./FeatureCard.css";
import webDev from "../image/coding.png";
import optimize from "../image/optimization (1).png";
import webDesign from "../image/graphic-design.png";
// import setup from '../image/web-design.png'
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const infoData = [
    {
      title: "Web Design",
      // description: "Our security experts can efficiently target and remove webDesign and malware infections remotely, so you can stay in the comfort of your home",
      icon: webDesign,
      background: "info",
    },
    {
      title: "Web Development",
      icon: webDev,
      background: "pink",
    },
    {
      title: "Optimization",
      // description: "Try the Performance troubleshooter. Delete programs you never use. Limit how many programs run at startup. Defragment your hard disk. Clean up your hard disk",
      icon: optimize,
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
    <section className="container-fluid text-center mt-5">
      <h5 className="text-brand ">FEATURE</h5>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="row">
        {infoData.map((info) => (
          <FeatureCard info={info}></FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Feature;

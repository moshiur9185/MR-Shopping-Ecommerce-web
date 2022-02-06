import React from "react";
import "./Header.css";
import { Slide } from "react-slideshow-image";
import img from "../image/website-design.png";
import img2 from "../image/graphic-design.png";
import img3 from "../image/optimization.png";
const Header = () => {
  return (
    <div className="container-fluid text-white">
      <Slide className="header-bg" easing="ease">
        <div className="each-slide">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 ps-5 ms-5">
              <p className=" fst-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                ipsum.
              </p>
              <button className="btn btn-primary">Get Start</button>
            </div>
            <div className="col-md-6 text-center">
              <img style={{ width: "200px" }} src={img} alt="#" />
            </div>
          </div>
        </div>

        <div className="each-slide">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 ps-5 ms-5">
              <p className=" fst-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                ipsum.
              </p>
              <button className="btn btn-primary">Get Start</button>
            </div>
            <div className="col-md-6 text-center">
              <img style={{ width: "200px" }} src={img2} alt="#" />
            </div>
          </div>
        </div>

        <div className="each-slide">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 ps-5 ms-5">
              <p className=" fst-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                ipsum.
              </p>
              <button className="btn btn-primary">Get Start</button>
            </div>
            <div className="col-md-6 text-center">
              <img style={{ width: "200px" }} src={img3} alt="#" />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Header;

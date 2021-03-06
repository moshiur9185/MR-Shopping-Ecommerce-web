import React from "react";
import "./Header.css";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const styleSheet = {
  backgroundColor: "#ffffff",
  width: "600px",
  height: "300px",
  borderRadius: "10px",
  boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.527)",
  filter: "saturate(200%)",
}
const Header = () => {
  
  return (
    <div className="text">
      <Slide className="header-bg py-5">
        <div className="each-slide container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start">
              <p className="fst-italic text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                ipsum.
              </p>
              <h5 className="fw-bold price-header">BDT : 45,000 TK</h5>
              <Link to="/products"><button className="btn btn-brand btn-sm header-btn">Buy Now</button></Link>   
            </div>
            <div className="col-md-6 pt-3 ms-auto">
              <img
              className="hover:scale-105 transition duration-300 ease-in-out"
                style={styleSheet}
                src="https://i.ibb.co/nsRwRDj/71h6-Pp-Gaz9-L-AC-SL1500-ccexpress.png"
                alt="#"
              />
            </div>
          </div>
        </div>

        <div className="each-slide container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start">
              <p className="fst-italic text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                ipsum.
              </p>
              <h5 className="price-header fw-bold ">BDT : 4,500 TK</h5>
              <Link to="/products"><button className="btn btn-brand btn-sm header-btn">Buy Now</button></Link>
            </div>
            <div className="col-md-6 pt-3">
              <img
              className="hover:scale-105 transition duration-300 ease-in-out"
                style={styleSheet}
                src="https://i.pcmag.com/imagery/reviews/04XmHNXc3c3GXXLimmqLsw4-1..v1609859128.png" alt="#"
              />
            </div>
          </div>
        </div>

        <div className="each-slide container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start">
              <p className=" fst-italic text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
                Nobis temporibus molestias eaque aut, <br /> eaque aut aperiam
                ipsum.
              </p>
              <h5 className="price-header fw-bold">BDT : 3,500 TK</h5>
              <Link to="/products"><button className="btn btn-brand btn-sm header-btn">Buy Now</button></Link>
            </div>
            <div className="col-md-6 pt-3 ">
              <img
              className="hover:scale-105 transition duration-300 ease-in-out"
                style={styleSheet}
                src="https://digitalcontent.api.tesco.com/v2/media/homepage/ec8b2abf-d391-4bfb-89d2-6214d2152549/2249-TescoMobile-PAYG-Stamp-Alcatel-3082X-+Grey.jpeg"
                alt="#"
              />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Header;

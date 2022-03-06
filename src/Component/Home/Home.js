import React from "react";
// import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = (props) => {
  return (
    <div>
      <Header handleAddToCart={props.handleAddToCart}/>
      <Feature />
      <Products handleAddToCart={props.handleAddToCart}/>
      {/* <Contact/> */}
      <Review/>
    </div>
  );
};

export default Home;

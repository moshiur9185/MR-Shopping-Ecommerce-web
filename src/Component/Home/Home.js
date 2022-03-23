import React from "react";
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
      <Review/>
    </div>
  );
};

export default Home;

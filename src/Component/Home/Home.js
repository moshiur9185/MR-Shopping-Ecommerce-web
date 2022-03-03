import React from "react";
// import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = (props) => {
  return (
    <div>
      <Header handleAddToCart={props.handleAddToCart}/>
      <Feature />
      <div className="text-center mt-5 text-muted">
        <h5>PRODUCTS</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Products handleAddToCart={props.handleAddToCart}/>
      {/* <Contact/> */}
    </div>
  );
};

export default Home;

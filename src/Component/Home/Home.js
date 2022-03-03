import React from "react";
// import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ElectronicProduct from "../ElectronicProducts/ElectronicProducts";
import GroceryProducts from "../GroceryProducts/GroceryProducts";
import FashionProducts from "../FashionProducts/FashionProducts";
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
      <Footer />
    </div>
  );
};

export default Home;

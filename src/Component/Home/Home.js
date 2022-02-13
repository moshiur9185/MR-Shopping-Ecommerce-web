import React from "react";
import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
import Product from "../Products/Products";
import SecondProducts from "../SecondProducts/SecondProducts";
import ThirdProducts from "../ThirdProducts/ThirdProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Feature />
      <div className="text-center mt-5 text-muted">
        <h5>PRODUCTS</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Product />
      <SecondProducts />
      <ThirdProducts/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;

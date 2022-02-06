import React from "react";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Product from "../Products/Products";
import SecondProduct from "../SecondProduct/SecondProduct";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Feature />
      <div className="text-center mt-5">
        <h5>PRODUCTS</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Product />
      <SecondProduct />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;

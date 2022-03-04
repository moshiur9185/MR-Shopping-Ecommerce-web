import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Navigation from './Component/Navigation/Navigation';
import Login from './Component/Login/Login';
import Cart from './Component/Cart/Cart';
import { addToDb, getStoredCart } from './utilities/fakedb';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import Products from './Component/Products/Products';
import Contact from './Component/Contact/Contact';
import Footer from "./Component/Footer/Footer";
import Blogs from './Component/Blogs/Blogs';

function App() {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  }

  useEffect(() => {
    fetch('./electronics.JSON')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch('./groceries.JSON')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  
  useEffect(() => {
    fetch('./fashion.JSON')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);  
  
  useEffect(() => {
    //getStoredCart from fakeDb
    if (products.length){
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const id in savedCart) {
        const cartProduct = products.find(product => product.id === id);
        storedCart.push(cartProduct);
        console.log(id, cartProduct);
      }
      setCart(storedCart);
    }
  }, [products])

  return (
    <div className="App">
      <Router>
        <Navigation cart={cart} />
        <Routes>
          <Route exact path="/" element={<Home handleAddToCart = {handleAddToCart}/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart cart={cart}/>} />
          <Route exact path="/products" element={<Products handleAddToCart = {handleAddToCart}/>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

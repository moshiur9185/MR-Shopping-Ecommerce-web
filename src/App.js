import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Navigation from './Component/Navigation/Navigation';
import Login from './Component/Login/Login';
import Cart from './Component/Cart/Cart';
import { addToDb } from './utilities/fakedb';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import Products from './Component/Products/Products';
import Footer from "./Component/Footer/Footer";
import Blogs from './Component/Blogs/Blogs';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';
import NotFound from './Component/NotFound/NotFound';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Register from './Component/Login/Register';

function App() {

  
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    // save to local storage (for now)
    addToDb(product.id)
  }

  return (
    <div className="App">
      <Router>
        <Navigation cart={cart} />
        <Routes>
          <Route exact path="/" element={<Home handleAddToCart = {handleAddToCart}/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart cart={cart}/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/product/:id" element={<ProductDetail handleAddToCart = {handleAddToCart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

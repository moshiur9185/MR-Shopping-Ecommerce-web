import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/bb629b90-e481-4cc1-ac8e-409c7d9a334c")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <section className="container-fluid">
      <div className="row d-flex align-items-center">
        <div className="col-md-4 thumbnail-img text-md-start text-sm-center mt-4">
          <img
            className=""
            src="https://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="row">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

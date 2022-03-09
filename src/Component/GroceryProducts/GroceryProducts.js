import React, { useEffect, useState } from "react";
import GroceryProductCard from "../GroceryProductCard/GroceryProductCard";

const GroceryProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./groceries.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="container-fluid my-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-8">
          <div className="row">
            {products.map((product) => (
              <GroceryProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="col-md-4 mt-4 thumbnail-img ">
          <img src="https://www.bdgift.com/pp/grocery/grcmb1_b.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default GroceryProducts;

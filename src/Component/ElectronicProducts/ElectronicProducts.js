import React, { useEffect, useState } from "react";
import "./ElectronicProducts.css";
import ElectronicProductCard from "../ElectronicProductCard/ElectronicProductCard";
// import { getStoredCart } from "../../utilities/fakedb";


const ElectronicProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./electronics.json')
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
              <ElectronicProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicProducts;

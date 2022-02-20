import React, { useEffect, useState } from "react";
import SecondProductCards from "./SecondProductCards";

const SecondProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/a059578c-a7be-4ea4-b707-6783dee5a1a2")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <section className="container-fluid my-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-8">
          <div className="row">
            {products.map((product) => (
              <SecondProductCards product={product} />
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

export default SecondProducts;

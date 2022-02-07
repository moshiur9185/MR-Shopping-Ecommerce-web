import React from "react";
import "./ProductCard.css";

const ProductCard = ({product}) => {
  return (
    <div className="col-md-3 mt-4">
      <div className="card text-white">
        <img className="card-img"  src={product.image} alt=""/>
        <div className="align-items-center ">
        <h6 className="">{product.title}</h6>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;

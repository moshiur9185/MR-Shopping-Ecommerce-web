import React from "react";
import "./ProductCard.css";

const ProductCard = ({product}) => {
  return (
    <div className="col-md-3 mt-4">
      <div className="card bg-dark text-white">
        <img className="card-img"  src={product.image} alt=""/>
        <h6 className="card-title">{product.title}</h6>
        {/* <div className="card-body">
          
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;

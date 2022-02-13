import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
      <div className="cards ">
        <div className="snap-center card-imgs">
          <img className="center" src={product.image} alt=""/>
        </div>
        <div className="align-items-center text-center pt-2">
          <h6 className="card-title">{product.title}</h6>
        </div>
        <div className="card-bodys px-2">
          <span className="fw-bold price">{product.price}</span>
          <button className="btn float-end">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

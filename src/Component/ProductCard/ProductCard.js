import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mt-4">
      <div className="card ">
        <img className="card-img" src={product.image} alt="" />
        <div className="align-items-center text-center pt-2">
          <h6 className="card-title">{product.title}</h6>
        </div>
        <div className="card-body px-2">
          <span className="fw-bold price">$150</span>
          <button className="btn float-end"><span><FontAwesomeIcon icon={faShoppingCart} /> ADD CART</span></button>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;

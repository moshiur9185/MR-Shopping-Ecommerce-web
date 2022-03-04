import React from "react";
import "./ElectronicProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ElectronicProductCard = (props) => {
  const {id, image, title, price} = props.product;
  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
      <div className="cards ">
        <div className="snap-center card-imgs">
          <img className="center" src={image} alt=""/>
        </div>
        <div className="align-items-center text-center ">
          <h6 className="card-title">{title}</h6>
          <Link className="link" to={`/product/${id}`}>Detail</Link>
        </div>
        <div className="card-body px-2 pt-3">
          <small className="fw-bold price">{price} TK</small>
          <button onClick={() => props.handleAddToCart(props.product)} className="btn float-end">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} /> Add Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectronicProductCard;

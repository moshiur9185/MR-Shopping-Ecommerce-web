import React from "react";
import "./FashionProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FashionProductCard = (props) => {
  const { id, image, title, price } = props.product;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
      <Link className="link" to={`/product/${id}`}>
        <div className="cards ">
          <div className="snap-center card-imgs p-3">
            <img className="center bg-white hover:scale-110 transition duration-300 ease-in-out" src={image} alt="" />
          </div>
          <div className="align-items-center text-center pt-2">
            <h6 className="card-title">{title}</h6>
            <small className="fw-bold price">BDT : {price} TK</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FashionProductCard;

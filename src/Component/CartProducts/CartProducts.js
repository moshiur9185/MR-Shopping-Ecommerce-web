import React from 'react';
import './CartProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartProducts = (props) => {
    const { id, title, price, image, quantity } = props.product;

    return (
        <div className="mb-5 bg-light border p-3">
            <figure className="md:flex  rounded-xl">
                <img className="md:w-48 md:h-48 md:rounded-none rounded-lg " src={image} alt="" width="600" height="512" />
                <div className="pt-3 md:p-3 text-center md:text-left space-y-4">
                    <blockquote>
                        <h5 className="text-md font-medium">
                            {title}
                        </h5>
                    </blockquote>
                    <figcaption className=" font-medium inline-block align-baseline">
                        <h6>Quantity : {quantity}</h6>
                        <div className="text-sky-500 dark:text-sky-400 pb-2">
                           BDT : {price} TK
                        </div>
                        <div className="btn-remove">
                            <button onClick={() => props.handlePdRemove(id)} className="btn btn-sm fw-bold "><FontAwesomeIcon icon={faTrash} /> Remove</button>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default CartProducts;
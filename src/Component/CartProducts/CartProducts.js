import React from 'react';

const CartProducts = (props) => {
    const { id, title, price, image, quantity } = props.product;

    return (
        <div className="mb-5 bg-light border p-3">
            <figure className="md:flex  rounded-xl">
                <img className="w-24 h-24 md:w-48 md:h-48 md:rounded-none rounded-lg mx-auto" src={image} alt="" width="384" height="512" />
                <div className="pt-3 md:p-3 text-center md:text-left space-y-4">
                    <blockquote>
                        <h5 className="text-md font-medium">
                            {title}
                        </h5>
                    </blockquote>
                    <figcaption className="font-medium inline-block align-baseline">
                        <h6>Quantity : {quantity}</h6>
                        <div className="text-sky-500 dark:text-sky-400 pb-2">
                            {price} TK
                        </div>
                        <div>
                            <button onClick={() => props.handlePdRemove(id)} className="btn btn-sm fw-bold btn-outline-danger">Remove</button>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
};

export default CartProducts;
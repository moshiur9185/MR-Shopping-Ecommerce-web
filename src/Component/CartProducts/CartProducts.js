import React from 'react';

const CartProducts = (props) => {
    const { id, title, price } = props.product;

    return (
        <div className="mb-5 bg-light border p-3">
            <div>
                <h4>{title}</h4>
                <p>Price : {price} TK</p>
                <button onClick={() => props.handlePdRemove(id)} className="btn btn-sm fw-bold btn-outline-danger">Remove</button>
            </div>

        </div>
    );
};

export default CartProducts;
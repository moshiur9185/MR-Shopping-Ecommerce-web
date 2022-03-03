import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const product of cart){
        total = total + product?.price;
    }
    const shipping = total > 0 ? 25 : 0;
    const tax = total > 0 ? (total + shipping) * .05 : 0;

    const grandTotal =  total > 0 ? total + shipping + tax : 0 ;

    return (
        <div className="container mt-5">
            <h4>Items : {cart.length}</h4>
            <h4>Shipping : {shipping}</h4>
            <h4>Tax : {tax}</h4>
            <h4>Total : {grandTotal}</h4>
        </div>
    );
};

export default Cart;
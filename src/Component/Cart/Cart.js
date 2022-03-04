import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product?.price;
    }
    const shipping = total > 0 ? 25 : 0;
    const tax = total > 0 ? (total + shipping) * .05 : 0;

    const grandTotal = total > 0 ? total + shipping + tax : 0;

    return (
        <div className="container mx-auto h-screen mt-5">
            <h4>Items : {cart.length}</h4>
            <h6>Total : {total} TK</h6>
            <hp>Shipping : {shipping} TK</hp>
            <p>Tax : {tax} TK</p>
            <div className="">
                <h5 className="border-t-4 border-pink-500 pt-3">Grand Total : {grandTotal} TK</h5>
            </div>
        <button className="border-2 rounded-full border-double border-pink-500 px-2 font-semibold bg-light hover:font-bold">Checkout</button>
        </div>
    );
};

export default Cart;
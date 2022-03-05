import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const Cart = () => {

    const [products] = useProducts();
    const [cart] = useCart(products);


    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 25 : 0;
    const tax = (total + shipping) * .05;

    const grandTotal = total + shipping + tax;

    return (
        <div className="container mx-auto h-screen mt-5">
            <h4>Items : {totalQuantity}</h4>
            <h6>Total before tax : {total.toFixed(2)} TK</h6>
            <h6>Shipping : {shipping} TK</h6>
            <p>Tax : {tax.toFixed(2)} TK</p>
            <div className="">
                <h5 className="border-t-4 border-pink-500 pt-3">Order Total : {grandTotal.toFixed(2)} TK</h5>
            </div>
            <button className="border-2 rounded-full border-double border-pink-500 px-2 font-semibold bg-light hover:font-bold">Checkout</button>
        </div>
    );
};

export default Cart;
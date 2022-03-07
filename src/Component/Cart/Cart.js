import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import CartProducts from '../CartProducts/CartProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handlePdRemove = id => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart);
        removeFromDb(id);
    }

    const handleCheckout = () => {
        setCart([])
        clearTheCart([])
        alert("Your Order Successfully Confirm")
    }

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
        <div style={{ minHeight: "100vh" }} className="container d-flex mt-5">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-48">
                <div>
                    {
                        cart.map(product => <CartProducts key={product.id} product={product} handlePdRemove={handlePdRemove}></CartProducts>)
                    }
                </div>
                <div className="ml-auto mb-5 border-l-2 border-orange-300">
                    <div className=" pl-7 ">
                        <h4>Items : {totalQuantity}</h4>
                        <h6>Total before tax : {total.toFixed(2)} TK</h6>
                        <h6>Shipping : {shipping} TK</h6>
                        <p>Tax : {tax.toFixed(2)} TK</p>
                        <div className="">
                            <h5 className="border-t-4 border-orange-500 pt-3">Order Total : {grandTotal.toFixed(2)} BDT</h5>
                        </div>
                        <button onClick={handleCheckout} className="border-2 rounded-full border-double border-orange-500 text-orange-500 px-2 font-semibold bg-light hover:font-bold"><FontAwesomeIcon icon={faShoppingBag} /> Order confirm</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;
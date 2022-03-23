import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import CartProducts from '../CartProducts/CartProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handlePdRemove = id => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart);
        removeFromDb(id);
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


    const handleCheckout = () => {
        setCart([])
        clearTheCart([])
        if (grandTotal > 0) {
            navigate("/dashboard")
        }
    }
    return (
        <div style={{ minHeight: "100vh" }} className="container my-5">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-48">
                <div>
                    {
                        cart.map(product => <CartProducts key={product.id} product={product} handlePdRemove={handlePdRemove}></CartProducts>)
                    }
                </div>
                <div className=" p-5 max-h-96 border-2 bg-white border-sky-500">
                    <div className="pl-7 ">
                        <h4>Items : {totalQuantity}</h4>
                        <h6>Total before tax : {total.toFixed(2)} TK</h6>
                        <h6>Shipping : {shipping} TK</h6>
                        <p>Tax : {tax.toFixed(2)} TK</p>
                        <div className="">
                            <h5 style={{ borderTop: '4px solid rgb(255, 79, 0)' }} className=" pt-3">Order Total : {grandTotal.toFixed(2)} BDT</h5>
                        </div>
                        <button onClick={handleCheckout} className="border-2 rounded-full border-double border-orange-600 text-orange-600 px-2 font-semibold bg-light hover:font-bold opacity-100"> Order confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
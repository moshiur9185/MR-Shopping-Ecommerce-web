import {useEffect, useState} from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = products => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //getStoredCart from fakeDb
        if (products.length){
          const savedCart = getStoredCart();
          const storedCart = [];
          for (const id in savedCart) {
            const cartProduct = products.find(product => product.id === id);
            if(cartProduct){
                const quantity = savedCart[id]
                cartProduct.quantity = quantity;
                storedCart.push(cartProduct);
            }
            console.log(id, cartProduct);
          }
          setCart(storedCart);
        }
      }, [products])
    return [cart, setCart]
};

export default useCart;
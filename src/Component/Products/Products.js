import React from 'react';
import ElectronicProducts from '../ElectronicProducts/ElectronicProducts';
import FashionProducts from '../FashionProducts/FashionProducts';
import GroceryProducts from '../GroceryProducts/GroceryProducts';

const Products = (props) => {
    return (
        <div className="pb-5">
            <div className="text-center mt-5 text-muted">
                <h5>PRODUCTS</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ElectronicProducts handleAddToCart={props.handleAddToCart} />
            <GroceryProducts handleAddToCart={props.handleAddToCart} />
            <FashionProducts handleAddToCart={props.handleAddToCart} />

        </div>
    );
};

export default Products;
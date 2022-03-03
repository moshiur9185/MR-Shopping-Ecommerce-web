import React from 'react';
import ElectronicProducts from '../ElectronicProducts/ElectronicProducts';
import FashionProducts from '../FashionProducts/FashionProducts';
import GroceryProducts from '../GroceryProducts/GroceryProducts';

const Products = (props) => {
    return (
        <div>
            <ElectronicProducts handleAddToCart={props.handleAddToCart} />
            <GroceryProducts handleAddToCart={props.handleAddToCart} />
            <FashionProducts handleAddToCart={props.handleAddToCart} />
            
        </div>
    );
};

export default Products;
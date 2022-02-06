import React from 'react';
import productImage from "../image/website-design.png";
import ProductCard from '../ProductCard/ProductCard';
import ProductThumbnail from "../image/images.jpg";

const SecondProduct = () => {
    const products = [
        {
          title: "product 1",
          image: productImage,
        },
        {
          title: "product 2",
          image: productImage,
        },
        {
          title: "product 3",
          image: productImage,
        },
        {
          title: "product 4",
          image: productImage,
        },
        {
          title: "product 5",
          image: productImage,
        },
        {
          title: "product 6",
          image: productImage,
        },
        {
          title: "product 7",
          image: productImage,
        },
        {
          title: "product 8",
          image: productImage,
        },
      ];
    return (
        <section className="container text-center mt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
            </div>
          </div>
          <div className="col-md-4">
          <img className="thumbnail-img"  src={ProductThumbnail} alt=""/>
          </div>
        </div>
      </section>
    );
};

export default SecondProduct;
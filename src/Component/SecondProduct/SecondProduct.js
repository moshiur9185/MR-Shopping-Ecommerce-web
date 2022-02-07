import React from 'react';
import productImage from "../image/website-design.png";
import productImage2 from "../image/coding (1).png";
import productImage3 from "../image/graphic-design.png";
import productImage4 from "../image/web-design.png";
import productImage5 from "../image/images (1).jpg";
import productImage6 from "../image/download (1).png";
import productImage7 from "../image/download.png";
import productImage8 from "../image/optimization.png";
import ProductCard from '../ProductCard/ProductCard';
import ProductThumbnail from "../image/web-dev.png";

const SecondProduct = () => {
    const products = [
        {
          title: "product 1",
          image: productImage,
        },
        {
          title: "product 2",
          image: productImage2,
        },
        {
          title: "product 3",
          image: productImage3,
        },
        {
          title: "product 4",
          image: productImage4,
        },
        {
          title: "product 5",
          image: productImage5,
        },
        {
          title: "product 6",
          image: productImage6,
        },
        {
          title: "product 7",
          image: productImage7,
        },
        {
          title: "product 8",
          image: productImage8,
        },
      ];
    return (
        <section className="container text-center mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-8">
            <div className="row">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
            </div>
          </div>
          <div className="col-md-4 mt-4 text-end">
          <img className="thumbnail-img"  src={ProductThumbnail} alt=""/>
          </div>
        </div>
      </section>
    );
};

export default SecondProduct;
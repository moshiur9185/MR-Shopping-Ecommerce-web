import React from "react";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = [
    {
      title: "HP Laptop core i7",
      image: "https://m.media-amazon.com/images/I/7156VgoIhdL._AC_SL1500_.jpg",
      price: "65,500 TK"
    },
    {
      title: "HP Pavilion core i7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUICDSpFmrJ5fh4qXL7kIlaTj1s_CbnG2Hw&usqp=CAU",
      price: "55,600 TK"
    },
    {
      title: "Oppo Reno6 5G",
      image: "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/o/p/oppo_reno6_pro_.jpg",
      price: "39,900 TK"
    },
    {
      title: "Galaxy A52S 5G",
      image: "https://i.expansys.net/img/b/363437/samsung-galaxy-a52s-5g-dual-sim.jpg",
      price: "45,500 TK"
    },
    {
      title: "Nokia 106",
      image: "https://i1.wp.com/www.mobilebd.co/wp-content/uploads/2022/02/Nokia-105-Africa-Edition-Official-Image-300x300.png",
      price: "1,800 TK"
    },
    {
      title: "ANC Headphone",
      image: "https://freshnrebel.com/media/6f/f2/fa/1627375970/8720249800606_1.jpg",
    },
    {
      title: "Microsoft Headphone",
      image: "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTF6Mzc2ejVpQkwuX0FDX1NMMTIwMF8uanBn.jpg",
      price: "12,600 TK"
    },
    {
      title: "TENDA AC1200",
      image: "https://m.media-amazon.com/images/I/51oPXK4V5pL._AC_SL1500_.jpg",
      price: "5,600 TK"
    },
  ];
  return (
    <section className="container-fluid">
      <div className="row d-flex align-items-center">
        <div className="col-md-4 thumbnail-img text-md-start text-sm-center mt-4">
          <img className="" src="https://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg" alt="" />
        </div>
        <div className="col-md-8">
          <div className="row">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

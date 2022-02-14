import React from "react";
import SecondProductCards from "./SecondProductCards";

const SecondProducts = () => {
  const products = [
    {
      title: "Soyabean Oil 5L",
      image: "https://images.othoba.com/images/thumbs/0053865_rupchanda-soyabean-oil-5ltr.jpeg",
      price: "700 TK"
    },
    {
      title: "ACI Sugar 1kg",
      image: "https://metrogroceryshop.com/wp-content/uploads/2020/03/ACI-Pure-Sugar-1kg.jpg",
      price: "80 TK"
    },
    {
      title: "ACI Solt 1kg",
      image: "http://ecosoft.illinhost.com/attachments/shop_images/ACI_SAL.jpg",
      price: "35 TK"
    },
    {
      title: "Rin Powder 2Kg",
      image: "https://sindabad.com/media/catalog/product/cache/15869ca78e92508fe510db2b345701fc/r/i/rin_bright_2.jpg",
      price: "120 TK"
    },
    {
      title: "Herpic 500ml",
      image: "https://5.imimg.com/data5/JB/DI/MY-2327693/harpic-power-plus-500x500.jpg",
      price: "120 TK"

    },
    {
      title: "Vim Liquid 1L",
      image: "https://sawdakoribd.com/wp-content/uploads/2020/10/Vim-Dishwashing-Liquid-1Ltr.jpg",
      price: "170 TK"
    },
    {
      title: "Dove Soap",
      image: "https://qph.fs.quoracdn.net/main-qimg-e52014bf6273f5e361cf01e5ad53d477-lq",
      price: "95 TK"
    },
    {
      title: "CHINIGURA RICE 5KG",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQXTQwixL73WUqCxOOniVzY63J_GZQ8Dt0rBd4YqiwSKYrAJ1iyNQAhMXUcfgDq9PP9k&usqp=CAU",
      price: "600 TK"
    },
  ];
  return (
    <section className="container-fluid my-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-8">
          <div className="row">
            {products.map((product) => (
              <SecondProductCards product={product} />
            ))}
          </div>
        </div>
        <div className="col-md-4 mt-4 thumbnail-img ">
          <img src="https://www.bdgift.com/pp/grocery/grcmb1_b.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SecondProducts;

import React from 'react';
import "./ThirdProductCards.css";
import ThirdProductCards from './ThirdProductCards';



    
const ThirdProducts = () => {
    const products = [
        {
          title: "Winter Hoodie",
          image: "https://static-01.daraz.com.bd/p/d806ee53278b61da248c503135fed63b.jpg",
          price: "380 TK",
        },
        {
          title: "Cotton T-Shirt",
          image: "https://static-01.daraz.com.bd/p/553ab5eabd6968388f9a63192e1a9331.jpg",
          price: "250 TK"
        },
        {
          title: "Cotton T-Shirt",
          image: "https://static-01.daraz.com.bd/p/4769515a39ca1481b04db7c7e5257a22.png",
          price: "350 TK"
        },
        {
          title: "Geans Pant",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlFy5syXv9kZ24hDi7_o9WCaCdGmC4eC3zw&usqp=CAU",
          price: "1,200 TK"
        },
        {
          title: "Blazer",
          image: "https://freepngimg.com/thumb/blazer/7-2-blazer-png-image.png",
          price: "7,500 TK"
        },
        {
          title: "Sunglass",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNRGswq0cTAuAfJj3ItgEjnr5Y4REFb62A6lfW4vMiVlOSpRk80TiBwcTHAIYcVy0lLs&usqp=CAU",
          price: "350 TK"
        },

        {
          title: "Sleeve Hoodie",
          image: "https://static-01.daraz.com.bd/p/c9a103b972b37021162ae76b9ff0cd3f.jpg",
          price: "360 TK"
        },
        {
          title: "Tai 1P",
          image: "https://sapnemedekhna.info/wp-content/uploads/2020/09/Sapne-Me-Tai-Dekhna-1.jpg",
          price: "280 TK"
        },
      ];
    return (
        <section className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 thumbnail-img text-md-start text-sm-center mt-4">
            <img className="" src="https://s3.envato.com/files/263247617/male%20fashion%20accessories%20img%20prvw.jpg" alt="" />
          </div>
          <div className="col-md-8">
            <div className="row">
              {products.map((product) => (
                <ThirdProductCards product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default ThirdProducts;
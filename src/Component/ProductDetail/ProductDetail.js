import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import electronics from '../fakedata/fakedata.json';
const ProductDetail = () => {
    const { id } = useParams();
    // const [product, setProduct] = useState({})
    // useEffect(() => {
    //     fetch(`./electronics.JSON/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setProduct(data))
    // }, [])

    const { title, image, price, detail } = electronics.find(product => product.id === id)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 pt-3 "><img style={{ height: "70vh" }} src={image} alt="" /></div>
                <div className="col-md-5 mt-5 border border-secondary">
                    <h3>Product : {title} </h3>
                    <h5>Price : {price} TK</h5>
                    <h6>Description :</h6>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
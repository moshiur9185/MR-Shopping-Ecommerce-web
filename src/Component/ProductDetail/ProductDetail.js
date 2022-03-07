import React from 'react';
import './ProductDetail.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import allProducts from '../fakedata/fakedata.json';
const ProductDetail = (props) => {
    const { id } = useParams();
    // const [product, setProduct] = useState({})
    // useEffect(() => {
    //     fetch(`./electronics.JSON/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setProduct(data))
    // }, [])
    const { title, image, price, detail } = allProducts.find(product => product.id === id)
    return (
        <div className="container my-5">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-48">
                <div><img style={{ height: "70vh" }} src={image} alt="" /></div>
                <div className=" p-5 border-2 bg-white border-sky-500">
                    <h3>Product : {title}. </h3>
                    <h5>Price : {price} BDT</h5>
                    <h6>Description :</h6>
                    <p>{detail}</p>
                    <button onClick={() => props.handleAddToCart(props.product)} className="btn float-end">
                        <span>
                            <FontAwesomeIcon icon={faShoppingCart} /> Add Cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
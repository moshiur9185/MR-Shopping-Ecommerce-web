import React from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../fakedata/fakedata.json';
const ProductDetail = () => {
    const { id } = useParams();
    // const [product, setProduct] = useState({})
    // useEffect(() => {
    //     fetch(`./electronics.JSON/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setProduct(data))
    // }, [])
    const { title, image, price, detail } = allProducts.find(product => product.id === id)
    return (
        <div className="container-fluid my-5">
            <div className="flex flex-row">
                <div className="basis-1/2 pt-3 ms-5"><img style={{ height: "70vh" }} src={image} alt="" /></div>
                <div className="basis-1/3 p-4 mt-4 border-2 border-sky-500">
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
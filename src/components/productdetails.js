import { useParams } from "react-router-dom";
import products from "./productData";

const ProductDetails = () => {

    const { id } = useParams();
    const productDetail = products[id];

    return (
        <div className="container mt-5">
            <span>Rating-4.7(5055)</span>
            <span className="float-end">Download(5,37,486)</span>
            <img src={productDetail.img} className="img-fluid" />
            <h1>{productDetail.name}</h1>
            <h3 className="display-3">{productDetail.price}</h3>

        </div>
    )
}

export default ProductDetails;
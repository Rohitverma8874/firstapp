import { Link } from "react-router-dom";
import products from "./productData";

const ProductList = () => {

    const productData = products;

    const displayList = () => {

        return (
            <div className="row">
                {
                    productData.map((product, index) => {
                        return (
                            <>

                                {/* <h1>{product.name}</h1>
                                <h1>{product.price}</h1> */}

                                <div className="col-md-3 mt-4">    
                                <span>Rating-4.7(5055)</span>
                                <span className="float-end">Download(5,37,486)</span>
                                    <div className="card my-card">
                                        <img src={product.img} className="card-img-top" />
                                        <div className="card-body">
                                            <h4 style={{ minHeight: '5rem' }}>{product.name}</h4>
                                            <p className="float-end h6"><b> {product.price == 'Free' ? 'Free' : '₹ ' + product.price + '/-'}</b></p>
                                            <Link to={'/productdetails/' + index}>
                                                <button className="btn btn-primary">Buy Now</button>
                                            </Link>
                                           

                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Product List</h1>
            <hr />

            {
                displayList()
            }

        </div>
    )
}

export default ProductList;
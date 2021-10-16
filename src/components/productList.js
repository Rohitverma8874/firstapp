import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../productContext";
import products from "./productData";
import { Button, Card, CardContent, CardMedia } from '@mui/material';

const ProductList = () => {

    // const productData = products;

    const { productData } = useContext(ProductContext);

    useEffect(() => {


        console.log('Data Feched!!');

    }, [])

    const displayList = () => {

        return (
            <div className="row">
                {
                    productData.map((product, index) => {
                        return (
                            <>

                                {/* <h1>{product.name}</h1>
                                <h1>{product.price}</h1> */}

                                <div className="col-md-4 mt-4">
                                    {/* <div className="card my-card">
                                        <img src={product.img} className="card-img-top" />
                                        <div className="card-body">
                                            <h4 style={{ minHeight: '5rem' }}>{product.name}</h4>
                                            <p className="float-end h6"><b> {product.price == 'Free' ? 'Free' : '₹ ' + product.price + '/-'}</b></p>
                                            <Link to={'/productdetails/' + index}>
                                                <button className="btn btn-primary">Buy Now</button>
                                            </Link>
                                        </div>
                                    </div> */}

                                    <Card>
                                        <CardMedia component="img" image={product.img} height="250" />
                                        <CardContent>
                                            <h4 style={{ minHeight: '5rem' }}>{product.name}</h4>
                                            <p className="float-end h6"><b> {product.price == 'Free' ? 'Free' : '₹ ' + product.price + '/-'}</b></p>
                                            <Link component={Button} variant="contained" to={'/productdetails/' + index}>
                                                Buy Now
                                            </Link>

                                            <Button variant="contained" className="btn btn-primary">Buy Now</Button>

                                        </CardContent>
                                    </Card>
                                </div>
                            </>
                        )
                    })
                }
            </div >
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
import { createContext, useState } from "react";
import products from "./components/productData";

export const ProductContext = createContext();

export const ProductProvider = props => {

    const checkLogin =() =>{
        const data=sessionStorage.getItem('user');
        if(data){
            return true;
        }else{
            return false;
        }

    }


    const [productData, setProductData] = useState(products);
    const [loggedIn, setLoggedIn] = useState(checkLogin());

    const logout=() =>{
        setLoggedIn(false);
        sessionStorage.removeItem('user');
        window.location.replace('/login');
    }

    return (
        <ProductContext.Provider value={{ productData, setProductData, loggedIn, setLoggedIn, logout }} >
            {props.children}
        </ProductContext.Provider>
    )
}
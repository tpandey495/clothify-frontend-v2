import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {fetchProduct} from "store/productSlice";
import 'styles/card.css'; 


const ProductCard = () => {
   const[products,setProducts]=useState([]);
   const[errMsg,setErrMsg]=useState("");
   const dispatch=useDispatch();

     useEffect(() => {
      dispatch(fetchProduct())
        .unwrap()
        .then((res) => {
         setProducts(res.products);
        })
        .catch((err) => {
          if (typeof err === "string") {
            setErrMsg(err);
          } else if (err && err.message) {
            setErrMsg(err.message);
          } else {
            setErrMsg("An unknown error occurred.");
          }
        });
    }, [dispatch]);


   return (
    <div className="exclusive-product">
    <h1>Exclusively Crafted by Top Designers for You</h1>
      <div className="card-wrapper">
            {
               products && products.map((product) =>
                    <div className="product-card" key={product?._id}>
                        <img className="product-image" src={product?.imgURL} />
                        <h3 className="product-name">{product?.name}</h3>
                        <div className="product-attribute">
                           <p className="product-rating">Rating:{product?.rating}</p>
                           <p className="product-price">Price: &#36;{product?.price}</p>
                        </div>
                        <button className="add-to-cart-button">Add to Cart</button>
                     </div>
               )
            }
      </div>
    </div>
   );
};

export default ProductCard;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "store/productSlice";
import {add,clearWarning} from "store/cartSlice";
import useNotification from "utils/useNotification";
import  { fetchAndProcessData } from 'utils/apiaxios';
import 'styles/card.css';


const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  //selecting all the states from backend
  const dispatch = useDispatch();
  const islogdin=useSelector((state)=>state?.auth?.islogdin);
  const warning=useSelector((state)=>state?.cart?.warning);
  const user=useSelector((state)=>state?.auth?.user);
  const addtoCart=async(productid)=>{
    const cartItem={islogdin:islogdin,item:productid}
      await dispatch(add(cartItem));
       if(islogdin&&warning==""){
           fetchAndProcessData("/cart","POST",{productid:productid,userid:user._id});
       }    
  }
  // Fetching Latest product for recommending on homepage
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


   const {notification,showNotification, hideNotification } = useNotification();
   useEffect(()=>{
      showNotification(warning,"warning");
      dispatch(clearWarning());
   },[warning])
 
  return (
    <div className="exclusive-product">
        <h1>Exclusively Crafted by Top Designers for You</h1>
      <div className="filter_search">
        <form className="category-form">
          <label htmlFor="category">Category:</label>
          <select id="category">
            <option value="all">All</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="men">Men</option>
          </select>
        </form>
        <form className="search-form">
          <input type="text" id="search" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
      {
      notification && (
        <div className={`notification ${notification.type}`}>
          {notification?.message}
          <button onClick={hideNotification}>Close</button>
        </div>)
       }
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
              <button className="add-to-cart-button" onClick={()=>addtoCart(product?._id)}>Add to Cart</button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProductCard;
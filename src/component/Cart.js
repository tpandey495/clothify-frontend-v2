import React, {useState,useEffect } from 'react';
import carts from 'config/product';
import 'styles/cart.css';
import { RiDeleteBin5Fill} from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { fetchAndProcessData } from 'utils/apiaxios';
import { Base_URL } from 'utils/constant';
import axios from 'axios';
const Cart = () => {
    const[cartsItem,setCartsItem]=useState([]);
    const user = useSelector((state) => state?.auth?.user);
    const guestCart=useSelector((state)=>state?.cart?.guestCart);

    useEffect(() => {
        const fetchData = async () => {
          let result = [];
          let finalCart = [];
          if (user) {
            result = await fetchAndProcessData("/cart", "GET");
          }
          for (const item of result) {
            const productid = item?.productid;
            if (productid) {
              finalCart.push(productid);
            }
          }
          const mergedarray = [...guestCart, ...finalCart];
          const finalCartProduct=[];
          for (const item of mergedarray) {
            const carts = await axios.get(`${Base_URL}/productbyid?productid=${item}`);
            finalCartProduct.push(carts?.data[0]);
          }
          console.log(finalCartProduct);
         setCartsItem(finalCartProduct);
        };
        fetchData(); // Call the async function
      }, [user, guestCart]);
      

    return (
        <div className='cart'>
            {/* left Div for cart Item */}
            <div className="cart-item-wrapper">
                {
                    cartsItem.map((item) => {
                        return <div className="cart-item" key={item?._id}>
                            <div className="item-image">
                                <img src={item?.imgURL} alt="product_image" />
                            </div>
                            <div className="cart-details">
                                <div className="item-operation">
                                    <div className="product-name">{item?.name}</div>
                                    <div className="product-count">
                                        <button><AiOutlinePlus /></button>
                                        <button>{0}</button>
                                        <button><AiOutlineMinus /></button>
                                    </div>
                                </div>
                                <div>
                                    <p>Color:{item?.color}</p>
                                    <p>Size:{item?.size}</p>
                                    <p>Desc:{item?.description}</p>
                                </div>
                                <div className="delete-div">
                                    <span><RiDeleteBin5Fill />Remove Item</span>
                                    <p>Price &#36;{item?.price}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            {/* Right Div for Cart Total Price and Coupun Code */}
            <div className="cart-description">
                <p>Total Amount</p>
                <div className="product-amount">
                    <p>Total Product</p>
                    <p></p>
                </div>
                <div className="line"></div>
                <div className="total-amount">
                    <p>Total Amount(including Taxes)</p>
                    <p>&#36;50</p>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;
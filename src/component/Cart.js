import React from 'react';
import carts from 'config/product';
import 'styles/cart.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
const Cart = () => {
    return (
        <div className='cart'>

            {/* left Div for cart Item */}
            <div className="cart-item-wrapper">
                {
                    carts.map((item) => {
                        return <div className="cart-item" key={item?.id}>
                            <div className="item-image">
                                <img src="https://res.cloudinary.com/dollv6prp/image/upload/v1661505318/hn76mf1ed2gosmtjpvtt.jpg" alt="product_image" />
                            </div>
                            <div className="cart-details">
                                <div className="item-operation">
                                    <div className="product-name">Shirt</div>
                                    <div className="product-count">
                                        <button><AiOutlinePlus /></button>
                                        <button>{0}</button>
                                        <button><AiOutlineMinus /></button>
                                    </div>
                                </div>
                                <div>
                                    <p>Color:</p>
                                    <p>Size:</p>
                                    <p>Desc:</p>
                                </div>
                                <div className="delete-div">
                                    <span><RiDeleteBin5Fill />Remove Item</span>
                                    <p>Price &#36;35</p>
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
                    <p>Product Amount</p>
                    <p>1</p>
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
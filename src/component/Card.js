import React from 'react';
import 'styles/card.css'; 
import products from 'config/product';


const ProductCard = () => {
   return (
    <div className="exclusive-product">
    <h1>Exclusively Crafted by Top Designers for You</h1>
      <div className="card-wrapper">
            {
               products && products.map((product) =>
                    <div className="product-card">
                        <img className="product-image" src={products[0].image} />
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-attribute">
                           <p className="product-rating">Rating:{product.rating}</p>
                           <p className="product-price">Price: &#36;{product.price}</p>
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
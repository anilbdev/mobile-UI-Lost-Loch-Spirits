
import React from 'react';
import './Product.scss'

function Product() {
  return <div className='procut-container'>
      <div className="hero-product">
          <img src="https://cdn.shopify.com/s/files/1/0571/4903/0572/products/eeno-product-400px_550x825.jpg" alt="product-img" />
          <span className='hero-product-name'>eeNoo - Scottish Gin</span>
          <span className='hero-product-price'>£35.00</span>
          <span className='hero-product-button'><button>Add to cart</button></span>
      </div>
      <div className="desc-product"></div>
  </div>;
}

export default Product;

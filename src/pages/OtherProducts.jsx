import React from "react"
import "./OtherProducts.scss"

function OtherProducts() {
  return (
    <div className="other-products-container">
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0571/4903/0572/products/murmichan-product-400px_550x825.png?v=1622207107"
          alt="product-img"
        />
        <span className="product-name">Murmichan</span>
        <span className="product-price">£38.00</span>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0571/4903/0572/products/haroosh-product-400px_550x825.jpg?v=1622207104"
          alt="product-img"
        />
        <span className="product-name">Lost Loch Spirits Haroosh</span>
        <span className="product-price">£28.00</span>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0571/4903/0572/products/singular-absinthe-product-400px_550x825.jpg?v=1622207102"
          alt="product-img"
        />
        <span className="product-name">Auld Alliance Absinthe</span>
        <span className="product-price">£45.00</span>
      </div>
    </div>
  )
}

export default OtherProducts

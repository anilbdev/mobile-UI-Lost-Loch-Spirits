import React from "react"
//* file impoerts//
import "./LandingPage.scss"
import Header from "../components/Header"
import Product from "./Product"

function LandingPage() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="product">
          <Product/>
      </div>
      <div className="details">details</div>
      <div className="related-products">related products</div>
      <div className="footer">footer</div>
    </div>
  )
}

export default LandingPage

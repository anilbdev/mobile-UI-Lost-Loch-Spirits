import React from "react"
//* file impoerts//
import "./LandingPage.scss"
import Header from "../components/Header"
import Product from "./Product"
import OtherProducts from "./OtherProducts"

function LandingPage() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="product">
          <Product/>
      </div>
      <div className="details">
        <h4>Other Products</h4>
        <OtherProducts/>
      </div>
      <div className="footer">footer</div>
    </div>
  )
}

export default LandingPage

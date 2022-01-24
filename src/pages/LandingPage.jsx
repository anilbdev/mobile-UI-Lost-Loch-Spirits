import React from "react"
//* file impoerts//
import "./LandingPage.scss"
import Header from "../components/Header"
import Product from "./Product"
import OtherProducts from "./OtherProducts"
import Footer from "../components/Footer"

function LandingPage() {
  return (
    <div className="landing-page-container">
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
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default LandingPage

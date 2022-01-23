import React from "react"
import "./Product.scss"
const data = {
  productId: "gin01",
  batchId: "B12",
  distillerName: "eenoolooapik",
  bottlingTime: "1642516201094",
}

function Product() {
  return (
    <div className="procut-container">
      {/* main product display */}
      <div className="hero-product">
        <img
          src="https://cdn.shopify.com/s/files/1/0571/4903/0572/products/eeno-product-400px_550x825.jpg"
          alt="product-img"
        />
        <span className="hero-product-name">eeNoo - Scottish Gin</span>
        <span className="hero-product-price">£35.00</span>
        <span className="hero-product-button">
          <button>Add to cart</button>
        </span>
      </div>
      <div className="desc-product">
        {/* badge and table section */}
        <div className="table-badge">
          {/* 1)badge section */}
          <div className="badge">
            <img
              src="https://lostlochspirits.com/wp-content/uploads/2021/05/eenoo-page-awards-2021-update-300x300-1.png"
              alt=""
            />
          </div>
          {/* 2)table-section */}
          <div className="table">
            <table>
              <tr>
                <th>ProductID</th>
                <td>{data.productId}</td>
              </tr>
              <tr>
                <th>Batch ID</th>
                <td>{data.batchId}</td>
              </tr>
              <tr>
                <th>Distiller Name</th>
                <td>{data.distillerName}</td>
              </tr>
              <tr>
                <th>Bottling Time</th>
                <td>{data.bottlingTime}</td>
              </tr>
            </table>
          </div>
        </div>
        {/* description section */}
        <div className="description">
          <p className="main-heading">
            eeNoo, From the old Scots tongue; eenoo – just now, at the present
            time, in a short time, at once.
          </p>
          <p className="sub-heading">
            Scottish gin is at the forefront of a recent gin renaissance and so
            we thought eeNoo a fine and fitting name for our gin, as the present
            time is the heyday of gin production in Scotland.
          </p>
          <p className="content">
            <p>
              When we crafted our gin, eeNoo, we wanted to create a flavour
              profile that encompassed the essence of a traditional gin whilst
              embracing flavours of the Scottish Highlands.
            </p>{" "}
            <p>
              eeNoo is distilled with Royal Deeside honey. The flavour profile
              of our honey is unique to the local area and is made up of
              heather, willow herb and clover pollen. To complement the honey we
              add heather flowers and other local botanicals. We forage a
              percentage of our brambleberries, raspberries and rosehip from the
              Deeside area and source the remainder from berry farms in
              Aberdeenshire and Angus. As Scottish juniper is in a critical
              state of decline, we source the finest juniper from the Italian
              highlands. We then add coriander seeds, angelica root, liquorice
              root, orange and lemon peel to give our gin a traditional yet
              smooth fruity profile.
            </p>{" "}
            Water from an ancient spring in the Cairngorms National Park is
            added to the mix. The water is some of the purest in the world and
            spends 50 years being gently filtered through layers of underground
            rocks and crevices before becoming part of our gin.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product

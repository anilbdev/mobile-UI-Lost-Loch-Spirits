import React from "react"
import "./Product.scss"

function Product() {
  return (
    <div className="procut-container">
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
          
        <div className="badge">
          <img
            src="https://lostlochspirits.com/wp-content/uploads/2021/05/eenoo-page-awards-2021-update-300x300-1.png"
            alt=""
          />
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              
            </tr>
            <tr>
              <td>Anom</td>
              <td>19</td>
            
            </tr>
            <tr>
              <td>Anom</td>
              <td>19</td>
            
            </tr>
            <tr>
              <td>Anom</td>
              <td>19</td>
            
            </tr>
            <tr>
              <td>Anom</td>
              <td>19</td>
            
            </tr>
          </table>
        </div>
        <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa sed quia eaque at? Neque, soluta molestiae mollitia illum porro sapiente, tempora adipisci corporis iusto necessitatibus sit excepturi ab optio. Asperiores ducimus tenetur praesentium doloribus voluptatem repudiandae in ipsam dolores quod, sequi nobis veniam, expedita quibusdam magnam soluta nemo voluptatibus!
        </div>
      </div>
    </div>
  )
}

export default Product

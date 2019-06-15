import React, { Component } from "react";
import Product from "./Product";


class Products extends Component {
  render() {
    const {product, actADD_TO_CART,onClickMSG} = this.props;
    return (
      <React.Fragment>
        <section className="section container">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            {
              product.map((product,index) =>{
                return(
                  <Product key={index} product={product} actADD_TO_CART={actADD_TO_CART} onClickMSG={onClickMSG}/>
                )
              })
            }
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Products
import React, { Component } from "react";
import * as message from './../contants/Message';
export default class Product extends Component {
  deFault(e){
    e.preventDefault();
  }
  render() {
    const {product} = this.props;
    return (
      <React.Fragment>
        <div className="col-lg-3 col-md-6 mb-r">
          <div className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight z-depth-1">
              <img
                src={product.image}
                className="img-fluid"
                alt="img"
              />
              <a href="/">
                <div className="mask waves-light waves-effect waves-light" />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <strong>
                  <a href="/">{product.name}</a>
                </strong>
              </h4>
              <ul className="rating">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
              <p className="card-text">{product.description}</p>
              <div className="card-footer">
                <span className="left">{product.price}$</span>
                <span className="right">
                  <a href='/'
                    className="btn-floating blue-gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="Add to Cart"
                    onClick={(e)=>this.addToCart(product,e)}
                  >
                    <i className="fa fa-shopping-cart" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  addToCart = (product,e)=>{
    e.preventDefault();
    this.props.actADD_TO_CART(product);
    this.props.onClickMSG(message.MSG_ADD_TO_CART_SUCCESS);
  }
}

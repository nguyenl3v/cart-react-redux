import React, { Component } from "react";
import * as types from './../contants/Message';
export default class CartItem extends Component {
  render() {
    const { cart } = this.props;
    return (
      <React.Fragment>
        <tr>
          <th scope="row">
            <img
              src={cart.product.image}
              alt={cart.product.name}
              className="img-fluid z-depth-0"
            />
          </th>
          <td>
            <h5>
              <strong>{cart.product.name}</strong>
            </h5>
          </td>
          <td>{cart.product.price}$</td>
          <td className="center-on-small-only">
            <span className="qty">{cart.quantity} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
              <label onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity - 1)}
                className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
              >
                <a href="/" >—</a>
              </label>
              <label onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity + 1)}
                className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
              >
                <a href="/" >+</a>
              </label>
            </div>
          </td>
          <td>{cart.product.price * cart.quantity}$</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-primary waves-effect waves-light"
              data-toggle="tooltip"
              data-placement="top"
              data-original-title="Remove item"
              onClick={()=>this.onDeleteCart(cart.product)}
            >
              X
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
  onDeleteCart(product){
    const {onDeleteCart,deleteMessage} = this.props;
    onDeleteCart(product);
    deleteMessage(types.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  onUpdateQuantity = (product,quantity)=>{
    if(quantity > 0){
    const {addQuantity} = this.props;
    addQuantity(product,quantity);
  }
}
}

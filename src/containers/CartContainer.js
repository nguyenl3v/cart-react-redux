import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./../components/CartItem";
import Cart from "../components/Cart";
import * as types from "./../contants/Message";
import {deleteProductInCart,deleteMessage,addQuantity} from './../action/index';

class CartContainer extends Component {
  showCartItem = cart => {
    const {onDeleteCart,deleteMessage,addQuantity} = this.props;
    var result = <tr><td>{types.MSG_CART_EMPTY}</td></tr>;
    if (cart.length > 0) {
      result = cart.map((cart, index) => {
        return <CartItem key={index} cart={cart} onDeleteCart={onDeleteCart} deleteMessage={deleteMessage} addQuantity={addQuantity}/>;
      });
    }
    return result;
    
  };
  render() {
    const { cart } = this.props;
    return (
      <React.Fragment>
        <Cart cart={cart}>{this.showCartItem(cart)}</Cart>
        
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteCart: (product) => {
      dispatch(deleteProductInCart(product))
    },
    deleteMessage:(message)=>{
      dispatch(deleteMessage(message))
    },
    addQuantity:(product,quantity)=>{
      dispatch(addQuantity(product,quantity))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

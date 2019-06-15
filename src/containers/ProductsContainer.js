import React, { Component } from "react";
import Products from "./../components/Products";
import {actADD_TO_CART,actMessage} from './../action/index';
import {connect} from 'react-redux';

class ProductsContainer extends Component {
  render() {
    const {product,onAddToCart,onClickMSG} = this.props;
    return (
      <React.Fragment>
            <Products product={product} actADD_TO_CART={onAddToCart} onClickMSG={onClickMSG}/>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => {
      dispatch(actADD_TO_CART(product,1))
    },
    onClickMSG:(message)=>{
      dispatch(actMessage(message))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)
import React, { Component } from 'react'

export default class CartResult extends Component {
    showCartTotal= (cart) =>{
        let result = 0;
        if(cart.length > 0){
            for(let i = 0;i < cart.length;i++){
                result += cart[i].product.price * cart[i].quantity;
            }
        }
        return result;
    }
    render() {
        const {cart} = this.props;
        return (
            <React.Fragment>
                 <tr>
                    <td colSpan={3} />
                    <td>
                      <h4>
                        <strong>Tổng Tiền</strong>
                      </h4>
                    </td>
                    <td>
                      <h4>
                        <strong>{this.showCartTotal(cart)}$</strong>
                      </h4>
                    </td>
                    <td colSpan={3}>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Complete purchase
                        <i className="fa fa-angle-right right" />
                      </button>
                    </td>
                  </tr>
            </React.Fragment>
        )
    }
}

import React, { Component } from 'react'
import CartResult from './CartResult';

export default class Cart extends Component {
    render() {
      const {children} = this.props;
        return (
            <section className="section">
            <div className="table-responsive">
              <table className="table product-table">
                <thead>
                  <tr>
                    <th />
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Cộng</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                    {children }
                    <CartResult cart={this.props.cart} />
                </tbody>
              </table>
            </div>
          </section>
        )
    }
}

import React, { Component } from "react";

export default class Messger extends Component {
  render() {
    const {Message} = this.props;
    return (
      <React.Fragment>
        <h3>
          <span className="badge amber darken-2">{Message}</span>
        </h3>
      </React.Fragment>
    );
  }
}

import React from "react";
import { Component } from "react/cjs/react.development";
class Comp7 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="time1">
          <h1>Class Based Component with Props  </h1>
          <h4>Hello, World!</h4>
          <h4>Time is Now:{this.props.date.toLocaleTimeString()}</h4>
        </div>
      </React.Fragment>
    );
  }
}
export default Comp7;

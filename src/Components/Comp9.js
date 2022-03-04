import React from "react";
import { Component } from "react/cjs/react.development";
class Comp9 extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="time1">
          <h1>life Cycle Methods</h1>
          <h4>Time is Now {this.state.date.toLocaleTimeString()}</h4>
        </div>
      </React.Fragment>
    );
  }
}
export default Comp9;

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };

  countDown = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const textCenter = {
      textAlign: "center"
    };

    const flexBox = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      margin: "0 auto"
    };

    return (
      <React.Fragment>
        <h1 style={textCenter}>CountApp</h1>
        <div style={flexBox}>
          <h2>{this.state.count}</h2>
          <div>
            <button onClick={this.countUp}>+1</button>
            <button onClick={this.countDown}>-1</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;

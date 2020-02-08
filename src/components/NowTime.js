import React, { Component } from "react";

class NowTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    const flexBox = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      margin: "0 auto"
    };

    return (
      <div style={flexBox}>
        <h2>now time: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default NowTime;

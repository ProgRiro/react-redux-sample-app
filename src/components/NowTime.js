import React, { Component } from "react";

import Box from "@material-ui/core/Box";

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

    return (
      <Box textAlign="center">
        <h2>now time: {this.state.date.toLocaleTimeString()}</h2>
      </Box>
    );
  }
}

export default NowTime;

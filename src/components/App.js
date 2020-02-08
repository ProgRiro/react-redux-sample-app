import React, { Component } from "react";
import Counter from "./Counter";
import NowTime from "./NowTime";

class App extends Component {
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
    this.setState({
      date: new Date()
    });
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
      <React.Fragment>
        <Counter />
        <NowTime />
      </React.Fragment>
    );
  }
}

export default App;

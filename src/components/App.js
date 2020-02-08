import React, { Component } from "react";
import Counter from "./Counter";
import NowTime from "./NowTime";

import GlobalStyle from "../material-ui/globalStyle";
import { theme } from "../material-ui/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

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
    return (
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <Counter />
        <NowTime />
      </MuiThemeProvider>
    );
  }
}

export default App;

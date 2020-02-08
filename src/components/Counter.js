import React, { Component } from "react";

import { connect } from "react-redux";
import { countup, countdown } from "../actions";

class Counter extends Component {
  render() {
    const props = this.props;

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
          <h2>{props.value}</h2>
          <div>
            <button onClick={props.countup}>+1</button>
            <button onClick={props.countdown}>-1</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// store が持つ状態 state を、どのように props に混ぜ込むかを決める処理
// count reducer の value を state に書き込む という意味で state.count.value
const mapStateToProps = state => ({ value: state.count.value });

// Reducer にアクションを通知する関数 dispatch を、どのように props に混ぜ込むかを決める処理
const mapDispatchProps = { countup, countdown };

// Counter.js（Counterコンポーネント）を store や Reducer と繋げるための処理
export default connect(mapStateToProps, mapDispatchProps)(Counter);

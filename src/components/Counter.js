import React, { Component } from "react";

import { connect } from "react-redux";
import { countup, countdown } from "../actions";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Counter extends Component {
  render() {
    const props = this.props;

    return (
      <Box textAlign="center">
        <h1>CountApp</h1>
        <Box>
          <h2>{props.value}</h2>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={props.countup}>＋ 1</Button>
            <Button onClick={props.countdown}>ー 1</Button>
          </ButtonGroup>
        </Box>
      </Box>
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

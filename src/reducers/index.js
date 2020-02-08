import { combineReducers } from "redux";
import count from "./count";

/*
 * Counter.js の const mapStateToProps = state => ({ value: state.count.value });
 * 部分（count）と一致させる必要がある。
 */
//
export default combineReducers({ count });

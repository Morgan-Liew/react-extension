import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    /*对象式setState 
        // 获取原来的count
        const {count} = this.state;

        // 更新状态
        this.setState({count:count + 1},() =>{ console.log(this.state.count)}) */

    // 函数式setState
    this.setState((state) => ({ count: state.count + 1 }),() => {
        console.log(this.state.count)
    });
  };

  render() {
    return (
      <div>
        <h2>the current sum : {this.state.count}</h2>
        <button onClick={this.add}> click +1 </button>
      </div>
    );
  }
}

import React, { Component } from "react";
import './index.css'

const UserContext = React.createContext();
const {Provider} = UserContext

export default class A extends Component {
  state = { username: "morgan" };

  render() {
    const {username} = this.state;
    return (
      <div className="parent">
        <h3>the component: A</h3>
        <h4>the author : {username}</h4>
        <Provider value={username}>
            <B/>
        </Provider>
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>the component: B</h3>
        <h4>receive the author from A: {this.props.username}</h4>
        <C />
      </div>
    );
  }
}

class C extends Component {
  static contextType = UserContext
  render() {
    console.log(this.context);
    return (
      <div className="graph">
        <h3>the component: C</h3>
        <h4>receive the author from B of A: {this.context}</h4>
      </div>
    );
  }
}

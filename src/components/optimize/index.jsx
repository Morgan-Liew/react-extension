import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

    state = {carName:"BMW"}

    /* shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState);
        console.log(this.props,this.state);

        if(this.state.carName === nextState.carName) return false
        else return true
    } */

    changeCar = () =>{
        // this.setState({})
        this.setState({carName:"红旗H9"})
    }

    render() {
        console.log('Parent---render');
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>my Car: {this.state.carName}</span>
                <br/>
                <br/>
                <button onClick={this.changeCar}>change Car</button>
                <Child carName="奔驰"/>
            </div>
        )
    }
}

class Child extends PureComponent {
    render() {
        console.log('Child---render');

        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>receive Car from Parent: {this.props.carName}</span>
            </div>
        )
    }
}

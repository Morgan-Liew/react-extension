import React, { Component } from 'react'
import './index.css'

const today = new Date();

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>component: Parent</h3>
                <A render={(name)=><B name={name}/>}>
                    Hello Morgan!
                    <B>{today.toLocaleString()}</B>    
                </A>
                
            </div>
        )
    }
}

class A extends Component{

    state = {name:'tom'}

    render(){
        console.log(this.props);
        const {name} = this.state;
        return (
            <div className="A">
                <h3>Component: A</h3>
                {/* <B/> */}
                <i>{this.props.children}</i>
                {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component{
    render(){
        console.log("B --- render");
        return(
            <div className="B">
                <h3>Component : B</h3>
                <i>{this.props.children}</i>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

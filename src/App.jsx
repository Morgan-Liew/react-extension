import React, { Component } from 'react'
// import Demo from './components/3_hooks'
// import Demo2 from './components/4_Fragment'
// import A from './components/5_Context'
// import Parent from './components/6_optimize'
import Parent from './components/7_renderProps'


export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Demo />
                <Demo2 />
                <A/> */}
                <hr/>
                <Parent />
            </div>
        )
    }
}

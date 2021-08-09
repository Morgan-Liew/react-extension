import React from "react";
import ReactDOM from 'react-dom'

// 类式组件
/* export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    // 对象式setState 
    //       // 获取原来的count
    //       const {count} = this.state;
  
    //       // 更新状态
    //       this.setState({count:count + 1},() =>{ console.log(this.state.count)})

    // 函数式setState
    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
  }

  componentDidMount(){
      setInterval(() => {
          this.setState(state => ({count:state.count + 1}))
      }, 1000);
  }

  render() {
    return (
      <div>
        <h2>the current sum : {this.state.count}</h2>
        <button onClick={this.add}> click +1 </button>
      </div>
    );
  }
} */

// 函数式组件
export default function Demo() {
  // 返回值：包含2个元素的数组，第一个为内部当前状态值，第2个为更新状态值的函数
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Daming");
  const myRef = React.useRef();

  React.useEffect(() => {
    let timer = setInterval(() => {
        setCount(count => count + 1)
    }, 1000);
    return () =>{
        clearInterval(timer)
    }
  },[]);

  function add() {
    // setCount(count + 1);  // 第一种写法
    setCount((count) => count + 1);
  }

  function changeName() {
    setName((name) => (name = "Morgan.Liew"));
  }

  function show(){
    alert(myRef.current.value)
  }

  function unmount(){
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <h2>the current sum : {count}</h2>
      <h2>the author : {name}</h2>
      <input type="text" ref={myRef} />
      <button onClick={add}> +1 </button>&nbsp;&nbsp;
      <button onClick={changeName}>change Name</button>
      <button onClick={unmount}>unmount component</button>
      <button onClick={show}>show input</button>
    </div>
  );
}

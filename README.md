##  1.setState

#### setState更新状态的2种写法
	(1).setState (stateChange,[callback]) ---- 对象式的setState
		1.stateChange为状态改变对象(该对象可以体现出状态的更改)
 		2.callback是可选的回调函数，在状态更新完毕、界面也更新后(render调用后)才被调用
	(2).setState(upddater,[callback]) ---- 函数式的setState
		1.updater为返回stateChange对象的函数
		2.updater可以接收到state和props
		3.callback是可选的回调函数，在状态更新、界面也更新后才被调用

总结：
     1.对象式的setState是函数式setState的简写方式(语法糖)
     2.使用原则
      	(1).如果新状态不依赖于原状态 === 使用对象方式
      	(2).如果新状态依赖于原状态 === 使用函数方式
      	(3).如果需要在setState执行后获取最新的状态数据，要在第二个callback函数中读取

## 2.lazyLoad

## 3.Hooks
1. React Hook/Hooks是什么

   (1).Hook是React 16.8.0版本增加的新特性/新语法

   (2).可以让你在函数组件中使用state以及其他React特性

2. 三个常用的Hook

   (1).State Hook：React.useState()

   (2).Effect Hook:  React.useEffect()

   (3).Ref Hook: React.useRef()

3. State Hook 

   (1).State Hook让函数组件也可以有state状态，并进行状态数据的读写操作

   (2).语法：const [xxx,setXxx] = React.useState(initValue)

   (3).useState()说明：

   ​    参数：第一次初始化指定的值在内部做缓存

   ​    返回值：包含2个元素的数组，第一个为内部当前状态值，第2个为更新状态值的函数

   (4).setXxx()2种写法

   ​    setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值

   ​    setXxx(value => newValue):参数作为函数，接收原本的状态值，返回新的状态值

### 4.Effect Hook
 (1). Effect Hook可以让你在函数组件中执行副作用操作（生命周期钩子）

 (2). React中的副作用操作：

​		发Ajax请求数据获取

​		设置订阅 /  启动定时器

  	  手动更改真实DOM

 (3).语法说明：

 		useEffect(() => {

​			// 在此可以执行任何带副作用操作

​			return () => {				// 在组件卸载前执行

​				// 在此做些收尾工作，如清除定时器、取消订阅等

 			}

​		}，[stateValue]) //如果指定的是[]，回调函数只会在第一次render()后执行

 (4).可以将useEffect Hook看成三个函数的组合

​     componentDidMount()

​     componentDidUpdate()

​     componentWillUnmount()	

### Ref Hook
    (1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
    (2). 语法： const refContainer = useRef()
    (3). 作用：保存标签对象，功能与React.createRef()一样

### Fragment
    使用： <Fragment></Fragment> or <></>
    作用：可以不用必须有一个真实的DOM根标签

### Context
    理解
      一种组件间通信方式，常用于【祖组件】和【后代组件】间通信

    使用
    1) 创建Context容器对象

    2) 渲染子组件时，外面包裹xxxContext.Provider，通过value属性给后代组件传递数据
       <xxxContext.Provider value={数据}>
         子组件
       </xxxContext.Provider>

    3) 后代组件读取数据
       
       <!-- 第一种方式 仅用于类组件 -->
       static contextType = xxxContext  // 声明接收context
       this.context  //读取context中的value数据

       <!-- 第二种方式 函数组件与类组件都可以 -->
       <xxxContext.Consumer>
         {
            value => ( // value就是 context中的value数据
               要显示的内容
            )
         }
       </xxxContext.Consumer>

    注意 在应用开发中一般不用context，一般都用它的封装react插件

### 组件优化
    Component的2个问题
      1.只要执行setState(),即使不改变状态数据，组件也会重新render
      2.只要当前组件重新render，就会自动重新render子组件 ==> 效率低

    效率高的做法
      只有当组件的state或props数据发生改变时才重新render

    原因
      Component中的shouldComponentUpdate()总是返回true
    
    解决
      办法1：
         重写shouldComponentUpdate()方法
         比较新旧state或props数据，如果有变化才返回true，如果没有返回false

      办法2：
         使用PureComponent
         PureComponent重写了shouldComponentUpdate()，只有state或props数据有变化时才返回true

         注意：只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，返回false
              不要直接修改state数据，而是要产生新数据
      
      项目中一般使用PureComponent来优化



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

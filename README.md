# webpack-optimization

## React

### react 变化

使用 JSX 而无需引入 React.编译后文件中引入 import {jsx as \_jsx} from 'react/jsx-runtime',需配置 
"runtime": "automatic"
事件绑定从 document 转到根节点

### PureComponent

纯组件 PureComponent 会浅比较(引用类型需注意)，props 和 state 是否相同，来决定是否重新渲染组件。所以一般用于性能调优，减少 render 次数。

### React.memo

React.memo 只能对 props 的情况确定是否渲染，而 PureComponent 是针对 props 和 state。
React.memo: 第二个参数 返回 true 组件不渲染 ， 返回 false 组件重新渲染。 shouldComponentUpdate: 返回 true 组件渲染 ， 返回 false 组件不渲染。

### React 优点

声明式，组件化，一次编写，随处可用

### JSX

语法糖,易写,在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。
React DOM 在渲染所有输入内容之前，默认会进行转义。

### 虚拟 DOM
可以不频繁的操作DOM；
跨平台；

### 副作用，清除副作用
副作用（Side effect）指一个function做了和本身运算返回值无关的事。比如：修改了全局变量、修改了入参、console.log()等等
无需清除的 effect,在 React 更新 DOM 之后运行一些额外的代码;
需要清除的effect，会引起内存泄漏的代码，比如订阅外部模块，监听事件，定时器

### 函数组件和类组件

类组件有实例，类组件有 this，类组件书写复杂

### HOC、Render props、Hooks
HOC若高阶组件里逻辑太复杂，不好调试
render props需在组件里添加render属性
Hooks清晰

### 面向对象

### 函数式编程

### 组件切换保存状态

redux context 或者父组件保存数据


## 项目问题

### 项目一

1、nextjs 中的\_document 文件是用来给服务器渲染的 html 模板，若是加载 script，不能含有 document,因为代码会直接执行，可外链 js 文件
2、nextjs 可以服务器渲染，有 render 函数
3、koa 做路由权限：在页面未渲染之前做权限处理；pc 和移动端的转换

### 项目二

1、postMessage 用于不同域的通信
2、权限处理，若直接在地址栏输入路由，可通过拦截 401 状态码

### 其他问题

1、styled-components 优点，js 编写，可传组件的 props，根据其做不同显示
2、sass 演变为 scss,sass 写法嵌套，scss 花括号嵌套，易用清晰
3、babel 先解析 parse 为 AST 语法树，再转变为有依赖关系的 AST 语法树，最后通过插件将 AST 转变为 ES5

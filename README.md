# webpack-optimization

## PureComponent

纯组件 PureComponent 会浅比较(引用类型需注意)，props 和 state 是否相同，来决定是否重新渲染组件。所以一般用于性能调优，减少 render 次数。

## React.memo

React.memo 只能对 props 的情况确定是否渲染，而 PureComponent 是针对 props 和 state。
React.memo: 第二个参数 返回 true 组件不渲染 ， 返回 false 组件重新渲染。 shouldComponentUpdate: 返回 true 组件渲染 ， 返回 false 组件不渲染。

## 项目问题

postMessage 用于不同域的通信
nextjs 中的\_document 文件是用来给服务器渲染的 html 模板，若是加载 script，不能含有 document,因为代码会直接执行，可外链 js 文件

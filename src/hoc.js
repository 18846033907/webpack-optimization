import { useState, useEffect, Component } from "react";

// const renderQueue = [];
// let isFirstrender = false;

// const tryRender = () => {
//   const render = renderQueue.shift();
//   if (!render) return;
//   setTimeout(() => {
//     render(); /* 执行下一段渲染 */
//   }, 300);
// };
// /* HOC */
// function renderHOC(WrapComponent) {
//   return function Index(props) {
//     const [isRender, setRender] = useState(false);
//     useEffect(() => {
//       renderQueue.push(() => {
//         /* 放入待渲染队列中 */
//         setRender(true);
//       });
//       if (!isFirstrender) {
//         tryRender(); /**/
//         isFirstrender = true;
//       }
//     }, []);
//     return isRender ? (
//       <WrapComponent tryRender={tryRender} {...props} />
//     ) : (
//       <div className="box">
//         <div className="icon">loading...</div>
//       </div>
//     );
//   };
// }
// /* 业务组件 */
// class Index extends React.Component {
//   componentDidMount() {
//     const { name, tryRender } = this.props;
//     /* 上一部分渲染完毕，进行下一部分渲染 */
//     tryRender();
//     console.log(name + "渲染");
//   }
//   render() {
//     return (
//       <div>
//         <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&amp;fm=26&amp;gp=0.jpg" />
//       </div>
//     );
//   }
// }
// /* 高阶组件包裹 */
// const Item = renderHOC(Index);

// export default () => {
//   return (
//     <React.Fragment>
//       <Item name="组件一" />
//       <Item name="组件二" />
//       <Item name="组件三" />
//     </React.Fragment>
//   );
// };

// export default class Index extends Component {
//   state = {
//     cnt: 0,
//   };
//   render() {
//     console.log("render");
//     return (
//       <>
//         <button
//           onClick={() => {
//             setTimeout(() => {
//               this.setState({ cnt: this.state.cnt + 1 });
//               console.log(this.state.cnt);
//               this.setState({ cnt: this.state.cnt + 1 });
//             }, 1000);
//           }}
//         >
//           add cnt
//         </button>
//         <div>cnt: {this.state.cnt}</div>
//       </>
//     );
//   }
// }

// export default function Index() {
//   const [cnt, setCnt] = useState(0);
//   console.log("render");
//   return (
//     <>
//       <button
//         onClick={() => {
//           setTimeout(() => {
//             setCnt(cnt + 1);
//             console.log(96, cnt);
//             setCnt(cnt + 1);
//           }, 1000);
//         }}
//       >
//         add cnt
//       </button>
//       <div>cnt: {cnt}</div>
//     </>
//   );
// }

function A(WrapperComponent) {
  return function (props) {
    const shraredLogic = () => {
      return "kkk";
    };
    const sharedVar = shraredLogic();
    return <WrapperComponent {...props} sharedVar={sharedVar} />;
  };
}
function B(props) {
  return <div>hi,{props.sharedVar}</div>;
}
function C(props) {
  return <div style={{color:'red'}}>hello,{props.sharedVar}</div>;
}
const WrapperB = A(B);
const WrapperC = A(C);

export default function Index() {
  return (
    <div>
      <WrapperB  style={{color:'red'}}/>
      <WrapperC />
    </div>
  );
}

//useState:setCnt(cnt + 1)这种形式，一次执行多少个都是取得当前值;setCnt(cnt=>cnt + 1),这种形式，依次执行

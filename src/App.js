import "./App.css";
// import Index from './pureComponent'
// import Index from './memo';
// import Index from './forwardRef'
// import Index from "./lazy";
// import Index from './cloneElement'
// import Index from './createContext'
// import Index from './hooks'
import Index from "./hoc";
// import {cube} from './math'
// import Index from './effects'
// import Index from './callback'
// import Index from './reducer'
// import Index from './class'
// import Index from './context'
// main.js
// import funcA from "./example1";
// import { funcG, funcH } from "./example4";
// import { funcB } from "./example2";
// import(/* webpackChunkName: "example.3" */ "./example3").then((module) => {
//   console.log("123");
// });
function A(props) {
  const sharedLogic = () => {
    return "uuu";
  };
  const sharedVar = sharedLogic();
  return props.render(sharedVar);
}
function B(props) {
  return <div>B:{props.val}</div>;
}

function C(props) {
  return <div>C:{props.val}</div>;
}

const App = () => {
  return (
    <div>
      {/* <A
        render={(val) => {
          return <B val={val} />;
        }}
      />
       <A
        render={(val) => {
          return <C val={val} />;
        }}
      /> */}
      <Index />
      {/* <img src="assets/ii.jpg" />
      <img src="assets/8big.jpg" />
      <div className="parent">
        <div className="child">哈哈哈</div>
      </div> */}
    </div>
  );
};

export default App;

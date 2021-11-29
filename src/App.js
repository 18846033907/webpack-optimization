import "./App.css";
// import Index from './pureComponent'
// import Index from './memo';
// import Index from './forwardRef'
// import Index from "./lazy";
// import Index from './cloneElement'
// import Index from './createContext'
// import Index from './hooks'
import Index from './hoc'
// import {cube} from './math'
// main.js
// import funcA from "./example1";
// import { funcG, funcH } from "./example4";
// import { funcB } from "./example2";
// import(/* webpackChunkName: "example.3" */ "./example3").then((module) => {
//   console.log("123");
// });

const App = () => {
  // funcB();
  return (
    <div>
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

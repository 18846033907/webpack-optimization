import * as S from "./App.css";
import * as S1 from "./App1.css";
import logo from '../assets/8big.jpg'
// import  "./App.css";
// import 'bootstrap';
// import $ from 'jquery';
// import Index from './pureComponent'
// import Index from './memo';
// import Index from './forwardRef'
// import Index from "./lazy";
// import Index from './cloneElement'
// import Index from './createContext'
// import Index from './hooks'
import Index from './useDebounce'
// import Index from "./hoc";
// import {cube} from './math'
// import Index from './effects'
// import Index from './callback'
// import Index from './reducer'
// import Index from './class'
// import Index from './LoadingButton'
// main.js
// import funcA from "./example1";
// import { funcG, funcH } from "./example4";
// import { funcB } from "./example2";
// import(/* webpackChunkName: "example.3" */ "./example3").then((module) => {
//   console.log("123");
// });
import moment from 'moment'

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
// const Index=()=>{
//   return <div>A
//     <div>B1</div>
//     <div>B2</div>
//   </div>
// }

const App = () => {
  console.log(222,$,moment)
  console.log(S,S1);
  console.log(logo)
 
  return (
    <div > 
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
      {/* <Index/> */}
      {/* <Index onClick={()=>{console.log(22)}}/> */}
      <img src="./ii.jpg" />
      <img src="./8big.jpg" />
      <div className="parent">
        <div className="child">哈哈哈</div>
      </div>
      <div className="imgBox"><img src={logo}/> </div>
    </div>
  );
};

export default App;

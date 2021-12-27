import { Fragment, useState, useEffect } from "react";

function Index() {
  const [a, setA] = useState(1);
  const [b, setB] = useState("b");
  const [c, setC] = useState(0);
  console.log("render");
  useEffect(() => {
    setInterval(() => {
      setC(c=>c + 1);
    },1000);
  }, []);
  function handleClickWithPromise() {
    Promise.resolve().then(() => {
      setA((a) => a + 1);
      setB("bb");
    });
  }

  function handleClickWithoutPromise() {
    setA((a) => a + 1);
    setB("bb");
  }

  return (
    <Fragment>
      <div>{c}</div>
      <button onClick={handleClickWithPromise}>
        {a}-{b} 异步执行
      </button>
      <button onClick={handleClickWithoutPromise}>
        {a}-{b} 同步执行
      </button>
    </Fragment>
  );
}

export default Index;

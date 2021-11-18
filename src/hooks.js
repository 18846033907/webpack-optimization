import { Fragment, useState } from "react";

function Index() {
  const [a, setA] = useState(1);
  const [b, setB] = useState("b");
  console.log("render");

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

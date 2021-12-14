import { useCallback ,useState} from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    console.log(999,count,Math.floor(new Date().getTime()/1000))
    setCount(count + 1);
  }, [Math.floor(new Date().getTime()/1000)]);

  console.log('render',count,Math.floor(new Date().getTime()/1000))
  return (
    <div>
      <span>点击次数:{count}</span>
      <button onClick={inc}>提交</button>
    </div>
  );
};

export default Index

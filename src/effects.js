import { useEffect, useState } from "react";

const Index = () => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (value > 1) {
      setDisplay(true);
    }
  }, []);

  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <span>{value}</span>
      <button onClick={handleClick}>click</button>
      {display && <div>jjj</div>}
    </div>
  );
};

export default Index;

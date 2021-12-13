import { useContext } from "react";
import ctx from "./constants/context";

const { Provider } = ctx;
const Des = () => {
  const value = useContext(ctx);
  return <div>{value.name}</div>;
};
const Child = () => {
  return <Des/>;
};
const Index = () => {
  return (
    <Provider value={{ name: "yyy" }}>
      <Child />
    </Provider>
  );
};

export default Index;

const MyContext = React.createContext();
function ComponentB() {
  return (
    <MyContext.Consumer>
      {(value) => <ComponentA {...value} />}
    </MyContext.Consumer>
  );
}

function ComponentA(props) {
  const { name, mes } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{mes}</div>
    </div>
  );
}

function Index() {
  const [value] = React.useState({
    name: "alien",
    mes: "let us learn React ",
  });

  return (
    <div style={{ marginTop: "50px" }}>
      <MyContext.Provider value={value}>
        <ComponentB />
      </MyContext.Provider>
    </div>
  );
}

export default Index;

const hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      age: 9,
      data: {
        name: "alien",
        age: 28,
      },
    };
  }

  // shouldComponentUpdate(preProps, preState) {
  //   console.log(shallowEqual(preState, this.state), preState === this.state);
  //   return !shallowEqual(preState, this.state);
  // }

  handerClick = () => {
    let { data, age } = this.state;
    data.age++;
    // age++;
    this.setState({ data, age });
  };

  render() {
    const { data, age } = this.state;
    return (
      <div className="box">
        <div className="show">
          <div> data年龄: {data.age} </div>
          <div> 年龄： {age}</div>
          <button onClick={this.handerClick}>age++</button>
        </div>
      </div>
    );
  }
}

export default Index;

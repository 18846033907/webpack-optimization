class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("--componentDidMount--");
  }
  render() {
    return (
      <div>
        <img src="assets/ii.jpg" className="alien" />
      </div>
    );
  }
}
export default Test;

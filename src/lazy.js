import Test from "./Test";
const LazyComponent = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => <Test />,
        });
      }, 2000);
    })
);
class Index extends React.Component {
  render() {
    return (
      <div className="context_box" style={{ marginTop: "50px" }}>
        <React.Suspense
          fallback={
            <div className="icon">
              loading...
            </div>
          }
        >
          <LazyComponent />
        </React.Suspense>
      </div>
    );
  }
}

export default Index;

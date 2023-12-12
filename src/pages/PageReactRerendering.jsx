import React, { memo, useState, useEffect } from "react";

const FunctionalComponent = ({ randomNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [randomNumber]);

  console.log("-- Rerendering FunctionalComponent --");

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      FunctionComponent count is {count}
    </button>
  );
};

const FunctionComponentMemo = memo(({ randomNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [randomNumber]);

  console.log("-- Rerendering FunctionComponentMemo --");

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      FunctionComponentMemo count is {count}
    </button>
  );
});

class ClassComponent extends React.Component {
  state = { count: 0 };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  componentDidMount() {
    this.increaseCount();

    // setTimeout(() => {
    //   this.forceUpdate();
    // }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.randomNumber !== this.props.randomNumber) {
      this.increaseCount();
    }
  }

  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("-- Rerendering ClassComponent --");

    return (
      <button type="button" onClick={this.increaseCount}>
        ClassComponent count is {this.state.count}
      </button>
    );
  }
}

class PureComponent extends React.PureComponent {
  state = { count: 0 };

  componentDidMount() {
    this.increaseCount();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.randomNumber !== this.props.randomNumber) {
      this.increaseCount();
    }
  }

  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("-- Rerendering PureComponent --");

    return (
      <button type="button" onClick={this.increaseCount}>
        PureComponent count is {this.state.count}
      </button>
    );
  }
}

const PageReactRerendering = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random());

  console.log("== Rerendering PageReactRerendering ==");

  let props = {};
  // props = { randomNumber };

  return (
    <div className="PageReactRerendering">
      <button type="button" onClick={() => setRandomNumber(Math.random())}>
        Click me to rerender the whole page
      </button>

      <hr />

      <FunctionalComponent {...props} />

      <FunctionComponentMemo {...props} />

      <ClassComponent {...props} />

      <PureComponent {...props} />
    </div>
  );
};

export default PageReactRerendering;

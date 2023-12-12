import React, { useState, useEffect } from "react";

const StableComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      Current count for StableComponent is {count}; Click me to increase count
    </button>
  );
};

const UnstableNestedComponentExample = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random());

  const UnstableComponent = () => {
    const [count, setCount] = useState(0);

    return (
      <button type="button" onClick={() => setCount(count + 1)}>
        Current count for UnstableComponent is {count}; Click me to increase
        count
      </button>
    );
  };

  return (
    <section>
      <h2>
        Do not define a component in another component
        (react/no-unstable-nested-components)
      </h2>

      <button type="button" onClick={() => setRandomNumber(Math.random())}>
        Click me to rerender UnstableNestedComponentExample
      </button>

      <StableComponent />
      <UnstableComponent />
    </section>
  );
};

export default UnstableNestedComponentExample;

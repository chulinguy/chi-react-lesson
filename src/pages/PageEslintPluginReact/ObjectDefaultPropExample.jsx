import React, { useState, useEffect } from "react";

const emptyArr = [];

const GoodExample = ({ arr = emptyArr }) => {
  useEffect(() => {
    console.log("GoodExample useEffect: arr prop is", arr);
  }, [arr]);

  return <h3>Good Example</h3>;
};

const BadExample = ({ arr = [] }) => {
  useEffect(() => {
    console.log("BadExample useEffect: arr prop is", arr);
  }, [arr]);

  return <h3>Bad Example</h3>;
};

const ObjectDefaultPropExample = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random());

  return (
    <section>
      <h2>
        Object as default prop can trigger unnecessary rerenders
        (react/no-object-type-as-default-prop)
      </h2>

      <button type="button" onClick={() => setRandomNumber(Math.random())}>
        Click me to rerender ObjectDefaultPropExample
      </button>

      <GoodExample string="some prop" />
      <BadExample string="some prop" />
    </section>
  );
};

export default ObjectDefaultPropExample;

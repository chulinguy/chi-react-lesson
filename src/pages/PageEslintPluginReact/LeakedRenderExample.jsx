import React, { useState, Fragment } from "react";

const falseyValues = {
  null: null,
  undefined: undefined,
  false: false,
  NaN: NaN,
  0: 0,
  "-0": -0,
  "0n": 0n,
  "empty string": "",
  "document.all": document.all,
};

const LeakedRenderExample = () => {
  const [opacity, setOpacity] = useState(1);

  const veilStyle = {
    backgroundColor: "orange",
    position: "absolute",
    opacity,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section>
      <h2>
        How React handles falsey values in a && expression??
        (react/jsx-no-leaked-render)
      </h2>

      <p>There are 8 falsey values in Javascript</p>
      <ol>
        {Object.keys(falseyValues).map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>

      <p>
        When we write conditional rendering with this expression "(value) &&
        {" <some HTML />"}, which falsey value will cause incorrect renders ???"
      </p>

      <ul
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Object.entries(falseyValues).map(([name, value]) => (
          <Fragment key={name}>
            {value && <p>{name} gets rendered !</p>}
            <br />
          </Fragment>
        ))}
        <div style={veilStyle} onClick={() => setOpacity(0)}>
          Click here to unveil the answer
        </div>
      </ul>
    </section>
  );
};

export default LeakedRenderExample;

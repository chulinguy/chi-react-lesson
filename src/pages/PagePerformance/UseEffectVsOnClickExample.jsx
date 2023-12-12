import React, { useEffect, useState } from "react";

let startTimeOfUseEffect;
let startTimeOnClick;
let endTimeOfUseEffect;
let endTimeOnClick;

const oneSecondPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("work done"), 1000);
  });

const UseEffectComponent = ({ needToCallPromise }) => {
  useEffect(() => {
    const callPromise = async () => {
      await oneSecondPromise();

      endTimeOfUseEffect = Date.now();

      console.log(
        `UseEffect took ${
          (endTimeOfUseEffect - startTimeOfUseEffect) / 1000
        } seconds`
      );
    };

    if (needToCallPromise) callPromise();
  }, [needToCallPromise]);

  return <div>UseEffectComponent</div>;
};

const UseEffectVsOnClickExample = () => {
  const [needToCallPromise, setNeedToCallPromise] = useState(false);

  const useEffectSequence = () => {
    startTimeOfUseEffect = Date.now();
    setNeedToCallPromise(true);
  };

  const onClickSequence = async () => {
    startTimeOnClick = Date.now();
    await oneSecondPromise();

    endTimeOnClick = Date.now();

    console.log(
      `onClick took ${(endTimeOnClick - startTimeOnClick) / 1000} seconds`
    );
  };

  return (
    <section className="UseEffectVsOnClickExample">
      <h2>Let's compare the performance of UseEffect vs OnClick</h2>

      <button type="button" onClick={useEffectSequence}>
        Click me to run useEffect sequence
      </button>

      <button type="button" onClick={onClickSequence}>
        Click me to run onClick sequence
      </button>

      <UseEffectComponent needToCallPromise={needToCallPromise} />
    </section>
  );
};

export default UseEffectVsOnClickExample;

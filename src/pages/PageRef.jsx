import React, { useRef, useState, useEffect } from "react";

// let timerId;

const Stopwatch = () => {
  const timerIdRef = useRef(null);
  const [count, setCount] = useState(0);

  const startHandler = (increment) => {
    if (timerIdRef.current) return;
    timerIdRef.current = setInterval(
      () => setCount((c) => c + increment),
      increment * 1000
    );
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div className="Stopwatch">
      <div>Timer: {count}s</div>
      <div>
        <button type="button" onClick={() => startHandler(1)}>
          Start (1 second)
        </button>
        <button type="button" onClick={() => startHandler(2)}>
          Start (2 seconds)
        </button>
        <button type="button" onClick={stopHandler}>
          Stop
        </button>
      </div>
    </div>
  );
};

const PageRef = () => {
  const [randomNumber, setRandomNumber] = useState(Math.random());
  const h3Ref = useRef();

  const refSequence = () => {
    h3Ref.current.style.color = "red";
  };

  return (
    <section>
      <button type="button" onClick={() => setRandomNumber(Math.random())}>
        Click me to rerender the whole page
      </button>

      <button type="button" onClick={refSequence}>
        Click me to turn H3 red
      </button>

      <h3 ref={h3Ref}>Some H3</h3>

      <Stopwatch />
    </section>
  );
};

export default PageRef;

import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  useEffect(() => {
    const logging = () => console.log("~ clicking ~");
    window.addEventListener("click", logging, true);

    // return () => {
    //   window.removeEventListener("resize", logging, true);
    // };
  }, []);

  return <div>UseEffectComponent</div>;
};

const CleanupExample = () => {
  const [boolean, setBoolean] = useState(false);

  return (
    <section>
      <h2>What happens if we repeatedly add event listeners?</h2>

      <button type="button" onClick={() => setBoolean(!boolean)}>
        Click me to toggle child
      </button>

      {boolean && <UseEffectComponent />}
    </section>
  );
};

export default CleanupExample;

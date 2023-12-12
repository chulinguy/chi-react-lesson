import React, { useState } from "react";

const RenderLogicOutsideComponent = () => {
  const [isShowingStuff, setIsShowingStuff] = useState(false);

  const isStuffValid = 55 % 10 > 2;
  const isStuffCustom = !![];

  let stuff = <li>Default stuff</li>;

  if (isStuffCustom) {
    stuff = <li>Custom Stuff</li>;
  }

  return (
    <div className="RenderLogicOutsideComponent">
      <button type="button" onClick={() => setIsShowingStuff(true)}>
        Click me to render stuff
      </button>

      <ul>
        <li>Always renders</li>
        {isShowingStuff && isStuffValid && stuff}
      </ul>
    </div>
  );
};

const RewriteComponent = () => {
  const [isShowingStuff, setIsShowingStuff] = useState(false);

  const clickHandler = () => {
    if (isShowingStuff) setIsShowingStuff(false);
    else {
      const isStuffValid = 55 % 10 > 2;
      setIsShowingStuff(isStuffValid);
    }
  };

  const str = !![] ? "Default stuff" : "Custom Stuff";

  return (
    <div className="RewriteComponent">
      <button type="button" onClick={() => setIsShowingStuff(true)}>
        Click me to render stuff
      </button>

      <ul>
        <li>Always renders</li>
        {isShowingStuff && <li>{str}</li>}
      </ul>
    </div>
  );
};

const RenderLogicOutsideExample = () => {
  return (
    <section>
      <h2>Claim: code is more readable when rendering logic is grouped</h2>

      <RenderLogicOutsideComponent />

      <RewriteComponent />
    </section>
  );
};

export default RenderLogicOutsideExample;
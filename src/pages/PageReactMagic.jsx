import React from "react";

const scriptStr1 = "<span>str 1</span>";
const scriptStr2 = "<span>str 2</span>";

const PageReactMagic = () => (
  <div className="PageReactMagic">
    <h1>Let's look at 2 magical things React does</h1>

    <section>
      <div>{scriptStr1}</div>

      <div dangerouslySetInnerHTML={{ __html: scriptStr2 }} />
    </section>

    <hr />

    <section>
      <button type="button" onClick={(e) => console.log(e)}>
        Click me to print the synthetic event
      </button>

      <button type="button" onClick={(e) => console.log(e.nativeEvent)}>
        Click me to print the native event
      </button>
    </section>
  </div>
);

export default PageReactMagic;

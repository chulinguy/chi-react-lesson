import React from "react";

const scriptStr1 = '<script>console.log("should not print")</script>';
const scriptStr2 = '<script>console.log("should print")</script>';

const PageReactMagic = () => (
  <div className="PageReactMagic">
    <h1>Let's look at 2 magical things React does</h1>

    <section>
      <div>{scriptStr}</div>

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

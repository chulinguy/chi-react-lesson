import React from "react";
import ObjectDefaultPropExample from "./ObjectDefaultPropExample";
import UnstableNestedComponentExample from "./UnstableNestedComponentExample";
import LeakedRenderExample from "./LeakedRenderExample";

const PageEslintPluginReact = () => {
  return (
    <div className="PageEslintPluginReact">
      <h1>
        Let's look at 3 innocent examples that can produce unexpected results,
        courtesy of Eslint React Plugin
      </h1>

      <LeakedRenderExample />

      <hr />

      <UnstableNestedComponentExample />

      <hr />

      <ObjectDefaultPropExample />
    </div>
  );
};

export default PageEslintPluginReact;

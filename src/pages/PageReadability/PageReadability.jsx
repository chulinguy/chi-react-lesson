import React, { useRef, useState } from "react";
import RenderLogicOutsideExample from "./RenderLogicOutsideExample";
import ChildrenOrNotExample from "./ChildrenOrNotExample";

const PageReadability = () => {
  return (
    <div className="PageReadability">
      <h1>Let's look at code examples and discuss readability</h1>

      <ChildrenOrNotExample />

      <RenderLogicOutsideExample />
    </div>
  );
};

export default PageReadability;

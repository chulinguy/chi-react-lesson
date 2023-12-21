import React from "react";
import UseEffectVsOnClickExample from "./UseEffectVsOnClickExample";
import CleanupExample from "./CleanupExample";

const PagePerformance = () => {
  return (
    <div className="PagePerformance">
      <UseEffectVsOnClickExample />

      <CleanupExample />
    </div>
  );
};

export default PagePerformance;

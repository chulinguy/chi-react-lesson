import React from "react";
import UseEffectVsOnClickExample from "./UseEffectVsOnClickExample";
import CleanupExample from "./CleanupExample";

const PagePerformance = () => {
  return (
    <div className="PagePerformance">
      <CleanupExample />

      <UseEffectVsOnClickExample />
    </div>
  );
};

export default PagePerformance;

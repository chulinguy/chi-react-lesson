import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PageReactMagic = lazy(() => import("./pages/PageReactMagic"));
const PageReactRerendering = lazy(() => import("./pages/PageReactRerendering"));
const PageReactRef = lazy(() => import("./pages/PageRef"));
const PageEslint = lazy(() =>
  import("./pages/PageEslintPluginReact/PageEslintPluginReact")
);
const PageReadability = lazy(() =>
  import("./pages/PageReadability/PageReadability")
);
const PagePerformance = lazy(() =>
  import("./pages/PagePerformance/PagePerformance")
);

const PageRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/react-magic" element={<PageReactMagic />} />

        <Route path="/react-rerendering" element={<PageReactRerendering />} />

        <Route path="/react-ref" element={<PageReactRef />} />

        <Route path="/eslint" element={<PageEslint />} />

        <Route path="/readability" element={<PageReadability />} />

        <Route path="/performance" element={<PagePerformance />} />

        <Route path="/" exact element={null} />
      </Routes>
    </Suspense>
  );
};

export default PageRouter;

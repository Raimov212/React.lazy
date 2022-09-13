import React, { Suspense,lazy } from "react";

const Button = lazy(() => import("./Button"));

const LazyComponent = () => {
  return (
    <Suspense fallback={<div style={{color : 'red'}}>Loading...</div>}>
      <Button />
    </Suspense>
  );
};

export default LazyComponent;

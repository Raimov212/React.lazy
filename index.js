import React, { Suspense } from "react";

const Button = React.lazy(() => import("./Button"));

const LazyComponent = () => {
  return (
    <Suspense fallback={<div style={{color : 'red'}}>Loading...</div>}>
      <Button />
    </Suspense>
  );
};

export default LazyComponent;

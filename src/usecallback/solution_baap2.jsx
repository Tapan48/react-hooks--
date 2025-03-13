
/// with useCallback

import React, { useState, useCallback } from "react";
import SolutionBeta2 from "./solution_beta2";

const SolutionBaap2 = () => {
  const [count, setCount] = useState(0);

  // useCallback is used to memoize the function so that it is not recreated on every render
  // now the func1 is locked in the memory and is not recreated on every render

  const func1 = useCallback(() => {
    return "good";
  }, []);

  return (
    <div>
      <SolutionBeta2 name={"rajesh"} func1={func1} />
      {/* still this component is re-rendering because the func1 is a new function every time the component is rendered */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default SolutionBaap2;

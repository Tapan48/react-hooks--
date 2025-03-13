/// without useCallback 

import React from "react";
import Beta2 from "./beta2";
import { useState } from "react";   
const Baap2 = () => {
    const [count, setCount] = useState(0);
    const func1=()=>{
      return "good";
    }

  return (
    <div>
      <Beta2 name={"rajesh"} func1={func1} />
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

export default Baap2;

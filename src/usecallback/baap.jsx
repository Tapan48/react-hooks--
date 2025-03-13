////  just to show usememo usage


import React, { useState } from "react";
import Beta from "./beta";
const Baap = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Beta name={"rajesh"} />

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

export default Baap;

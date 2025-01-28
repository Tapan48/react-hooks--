import { React, useState } from "react";

// hooks are functions that are used to manage state changes and ui updates

///
export const Us1 = () => {
  const cntincrement = () => {
    setcnt(cnt + 1);
  };
  const cntdecrement = () => {
    setcnt(cnt - 1);
  };

  const [cnt, setcnt] = useState(0);
  console.log(cnt);
  return (
    <div>
      {cnt} <button onClick={cntincrement}>+ </button>{" "}
      <button onClick={cntdecrement}>-</button>
    </div>
  );
};

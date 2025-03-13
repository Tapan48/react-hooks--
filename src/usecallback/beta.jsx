import React from "react";
import { memo } from "react";

const Beta = ({ name }) => {
  console.log("beta rendered");
  return <div>im {name} beta.</div>;
};

export default memo(Beta);
/// memo is used to prevent re-rendering of the component when the baap parent component  is re-rendered.
// if this beta component is memoized, it will only re-render when its props are changed.


/// prevents unnecessary re-renders of the component.



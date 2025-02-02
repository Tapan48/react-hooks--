import React from "react";
import withCounter from "./hoc";
const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  //// variable and state initialisation code not required here as it is already handled in the higher order component
  console.log(props);

  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  );
};

export default withCounter(HoverCounter); // this is the higher order component that is used to wrap the component and add the logic

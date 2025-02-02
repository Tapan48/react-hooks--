import React from "react";
import withCounter from "./hoc";
const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  //variable and state initialisation code not required here as it is already handled in the higher order component
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter, 5); // this is the higher order component that is used to wrap the component and add the logic

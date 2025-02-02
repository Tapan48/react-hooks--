// higher order component is a function that takes a component as an argument and returns an enhanced component

/// multiple components have the same logic
/// we can create a higher order component to handle the logic
/// and then pass the component to the higher order component
/// the higher order component will return the component with the logic

// the purpose of the higher order component is to share the logic between components
// and to avoid code duplication and to make the code more readable and maintainable and code reuse

import React, { useState } from "react";

// Higher Order Component that handles counter functionality
const withCounter = (WrappedComponent, incrementNumber) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + incrementNumber);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };

  return WithCounter;
};

export default withCounter;

// Usage example:
// const EnhancedClickCounter = withCounter(ClickCounter);
// const EnhancedHoverCounter = withCounter(HoverCounter, 2);

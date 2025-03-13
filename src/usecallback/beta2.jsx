import React from 'react'
import { memo } from 'react';

const Beta2 = ({name,func1}) => {
    console.log("beta2 rendered");
  return (
    <div>
      im {func1()} {name} beta2.
      
    </div>
  )
}

export default memo(Beta2);
        // though this component is memoized, it is still re-rendering because the func1 is a new function every time the component is rendered.
        // to prevent this, we can use useCallback hook.

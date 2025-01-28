import React, { useRef } from "react";

export const Reftut = () => {

    const inputRef = useRef(null);           //// useref declared
    const onClick = () => {
        inputRef.current.value = "";
      };
  return (                   /////  useref used in input tag and then used in onclick
                              //// usered is used to access and manipulate DOM 
    <div>               
      <h1>Pedro</h1>       
      <input type="text" placeholder="Ex..." ref={inputRef} />             
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}

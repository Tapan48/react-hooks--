import { useLayoutEffect, useEffect, useRef } from "react";

export const Ul1 = () => {

    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
      }, []);
    useEffect(() => {              /// uselayout called before useffect when page rendered
        inputRef.current.value = "HELLO";
      }, []);
  return (
    <div>
    
    
    <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
      </div>
  )
}

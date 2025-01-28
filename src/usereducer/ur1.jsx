import React, { useReducer } from "react";                   //// states ka khichdi na banne isliye usereducer
                                              //// imagine if we dont have usereducer:  
                                              ////            1.) multiple state declarations scattered
                                               ////           2.)multiple state change logics scattered


const reducer = (state, action) => {              //// all state change logics present here
    switch (action.type) {
    case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
        return { count: state.count, showText: !state.showText };
    default:
        return state;
    }
};


 export const Ur1 = () => { 
    
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true }); //// state declarations              
  return (                               
    <div>
 <h1>{state.count}</h1>
 <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>             
  )                            
}

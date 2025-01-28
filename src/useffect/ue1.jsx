import axios from "axios";
import React, { useEffect, useState } from "react";

//useEffect is a hook that allows you to perform side effects in your components.
//side effects are actions that are not directly related to rendering the component, such as fetching data, subscribing to events, or manually changing the DOM. 

//useEffect takes two arguments: a function and an array of dependencies.

export const Ue1 = () => {   


  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[Math.floor(Math.random() * 100)].email);
        console.log("API WAS CALLED");
        // console.log(response);        
      });
  }, [count]); //// useffect --> (function,states) : yeh states changes hue toh function run karo
  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

import { useState,React  }from 'react';

export const Us2 = () => {

    const [x,setx]=useState("tapan")
    const change=(event)=>{
        
       const val=event.target.value
        setx(val)

    }


  return (
    <div><input type="text" placeholder='enter something' onChange={change}/>{x}</div>
  )
}

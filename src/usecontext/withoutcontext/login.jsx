  import React from 'react'

  export const Login = ({setuser}) =>{
    return (
      <div> 
      <input placeholder='enter ' value={setuser} onChange={(event)=>{
          setuser(event.target.value);
      }} />
      </div>
    )
  }

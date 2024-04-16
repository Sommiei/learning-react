import React, { useState } from 'react'
import { Components1 } from './components1';

export const Appp  = () => {
    const [myName,setMyname]= useState("somto");
    
  return (
    <div>
      <Components1 myName={myName}/>
    </div>
  )
}

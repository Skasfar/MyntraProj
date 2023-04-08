import React from 'react'
import { useState } from 'react';
const Connection=(WrappedComp)=>{
    
  function Hoc(){
      let [count, setCount]= useState(0);
      function inc(){
          setCount(count+1);
      }
      return(
          <div>
              <WrappedComp data={count} func={inc}/>
          </div>
      )
     
  }
  return Hoc
  }
  export default Connection

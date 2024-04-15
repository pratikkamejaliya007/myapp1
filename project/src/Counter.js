import React, { useEffect } from 'react'
import { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0)

    // useEffect(()=>{
    //   let inteval = setInterval(()=>{
    //     setCount(count + 1)
    //   },1000)
  
    //   function stop(){
    //     clearInterval(inteval)
    //   }
    // },[])

  //   useEffect(() => {
  //     //Implementing the setInterval method
  //     var interval = setInterval(() => {
  //         setCount(count + 1);
  //     }, 1000);

  //     //Clearing the interval
  //     return () => clearInterval(interval);
  // }, [count]);

  
  // const stop = () =>{
  //   clearInterval(interval);
  // }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={stop}>Stop</button>
    </>
  )
}

export default Counter

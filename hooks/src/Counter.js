import React from 'react'
import { useState } from 'react'

const Counter = (props) => {

    const [count,setcount]=useState(0)

    function inc(){
      setcount(count + 1 )
    }

    function dec(){
      if(count == 0){
        setcount(0)
      }else{
        setcount(count - 1)
      }
    }

    function reset(){
      setcount(0)
    }

  return (

    <div className='main'>
      
      
      <h1>{props.name}</h1>

        <img src={props.img} alt="" />

        <p>LIKE : {count}</p>

        <div className='number' >

            <button onClick={inc}>PLUS</button>
            <button onClick={dec}>MINUS</button>
            <button onClick={reset}>RESET</button>
        </div>

    </div>
  )
}

export default Counter

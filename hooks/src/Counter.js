import React from 'react'
import { useState } from 'react'

const Counter = (props) => {

    const [count,setcount]=useState(0)
    const [abc,setabc]=React.useState('')

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

    function title() {
      let userInput = window.prompt('Please enter something:');
      if(userInput.length >= 5 && userInput.length <= 10){
              setabc(userInput);
      }else{
        userInput=window.prompt("enter Requier length")
      }
  }

  return (

    <div className='main'>
      
      
      <h1>{props.name}</h1>

        <img src={props.img} alt="" />

        <p>LIKE : {count}</p>

        <p>{abc}</p>

        <div className='number' >

            <button onClick={inc}>PLUS</button>
            <button onClick={dec}>MINUS</button>
            <button onClick={reset}>RESET</button>
            <button onClick={title}>TITLE</button>
        </div>

    </div>
  )
}


export default Counter

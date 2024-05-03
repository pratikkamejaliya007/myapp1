import React from 'react'
import Hoc from './Hoc'

function Data_1({money,handleIncrease}) {
  return (
    <div>

        <h1>Pratik:{money}</h1>

        <button onClick={handleIncrease}>Click Me!</button>

        

    </div>
  )
}

export default Hoc(Data_1)
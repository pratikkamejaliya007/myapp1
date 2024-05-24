import React from 'react'
import { increment,decrement } from './redux/actions'
import { useSelector,useDispatch } from 'react-redux'

function Count() {

    const count_1=useSelector(state => state.count)

    const dis=useDispatch()

  return (
    <>

    <h1>count_1: {count_1}</h1>

    <button onClick={()=>dis(increment)}>plus</button>

    <button onClick={()=>dis(decrement)}>minus</button>

    </>
  )
}

export default Count
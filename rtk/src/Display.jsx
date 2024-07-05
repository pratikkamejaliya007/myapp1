import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment , add } from './Counterslice';
import { setprivet ,getprivet } from './Privetslice';

function Display() {

    const [val,setVal]=useState('')

    const selector = useSelector(state => state.counter);

    const priv= useSelector(state => state.privet)

    const Dispatch=useDispatch()

    console.log(priv)

    function pri(){
        Dispatch(setprivet())
    }

    function hide(){
        Dispatch(getprivet())
    }

    function plus(){
        Dispatch(increment())
    }

    function minus(){
        Dispatch(decrement())
    }

    const add1 = () =>{
        Dispatch(add(Number(val)))
    }

  return (
    <>
    {
        priv.value ?
        (
        <>
            <h1>privet</h1>
        </>
        ) :
        (
            <>
                <div>
            <button onClick={plus}>+</button>
            <h1>count {selector.value}</h1>
            <button onClick={minus}>-</button>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
            <button onClick={add1}>add</button>
        </div>
            </>
        )

        
    }
    <button onClick={pri}>hide</button>
    <button onClick={hide}>show</button>
        
    </>
  )
}

export default Display
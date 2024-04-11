import React from 'react'
import { useState,useEffect } from 'react'

function Fetch2() {

    const[fack,setfack]=useState(null)

    useEffect(()=>{

        const fatch = async () => {

            let res = await fetch('https://fakestoreapi.com/products/category/jewelery')

            let json=await res.json()

            console.log(json)

            setfack(json)

        }

        fatch()

    },[])

    
  return (
    <div>
      
      <div className='main'>
        {
            fack && fack.map((e)=>(
                <div className="sub">
                  <img src={e.image} alt="" />
                    <div className='text'>
                      <p >Price:{e.price}</p>
                      <p >{e.category}</p>
                  </div>
                </div>
            ))
        }
    </div>

    </div>
  )
}

export default Fetch2

import React from 'react'
import { useState,useEffect } from 'react'

function Feathing() {

   
      const[data,setdata] = useState(null)
    useEffect(()=>{      

        const fatch= async ()=>{

            let response = await fetch('https://fakestoreapi.com/products')
            let jsondata= await response.json()

            // console.log(jsondata)
            
            setdata(jsondata)
           
        }

        fatch()

    },[])


  return (
    <div className='main'>
        {
            data && data.map((e)=>(
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
  )
}

export default Feathing

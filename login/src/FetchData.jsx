import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function FetchData(){

    const [data, setData]=useState(null)
    const [Load,setLoad]=useState(true)

    useEffect(()=>{
     async function FetchingData(){
        try{
            const response =  await fetch('https://freetestapi.com/api/v1/cars?sort=name&order=dec')
            setData(response.data)
        }
        catch(error){
            console.log("Error!!",error)
        }
        // finally{
        //     setLoad(false)
        // }
     }
     FetchingData()
    },[])
    

// if(Load){
    
//     return <center><h1>Loading...</h1></center> 
// }
return(
    <>
   <div className="maindiv">
        <div className="subdiv">
          <ul>
            {data.map((car) => (
              <li key={car.id}>
                <img src={car.image}  />
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Price: {car.price}</p>
                <p>Color: {car.color}</p>
                <button>Buy Now</button>
              </li>
            ))}
          </ul>
        </div>
      </div> </>
)
}
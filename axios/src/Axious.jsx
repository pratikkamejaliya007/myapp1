import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'

function Axious() {
    
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
  
    useEffect(()=>{

        const Fetch = async () =>{
            try{                
                let response =await axios.get('https://jsonplaceholder.typicode.com/todos')
                setData(response.data)
                setLoading(false)
            }
            catch(err){
                console.log("Error",err);
                setLoading(false)
            }
        } 

            Fetch()

    },[])

    if(loading){
        return <Loader/> 
    }

    return (
        <>
        {data.map((el) => (
            <h5 style={{marginInline:'50px'}} key={el.id}>{el.title}</h5>  
        ))}
    </>
  )
}

export default Axious
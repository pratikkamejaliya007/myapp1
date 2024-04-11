import React from 'react'
import { useState,useEffect } from 'react'

function Fetch() {

    const[data,setdata]=useState(null)

    useEffect(()=>{

        const Fetching = async () =>{
          const data = await fetch('https://api.sampleapis.com/countries/countries')
          const jsondata = await data.json()
          console.log(jsondata)
          setdata(jsondata)
        } 

        Fetching()

    },[])

  return (
    <center>
    <div className='main'>
      <table>
        <tr>
          <th>NAME</th>
          <th>capital</th>
          <th>currency</th>
          <th>phone (code)</th>
          <th>population</th>
          <th>flag</th>
          <th>orthographic</th>
          <th>location</th>
        </tr>
        {
            data && data.map((el)=>(
              <tr>
                <td>{el.name}</td>
                <td>{el.capital}</td>
                <td>{el.currency}</td>
                <td>{el.phone}</td>
                <td>{el.population}</td>
                <td><img src={el.media.flag} alt="" /></td>
                <td><img src={el.media.emblem} alt="" /></td>
                <td><img src={el.media.orthographic} alt="" /></td>
              </tr>
            ))
          }
        </table>
    </div>
    </center>
  )
}

export default Fetch

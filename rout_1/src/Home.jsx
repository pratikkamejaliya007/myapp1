import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Home({ posts , Delete , Up}){

  const za=useNavigate()

  const [search,setSearch]=useState('')

  const filterItems=posts.filter((el)=>{
    return el.title.toLowerCase().includes(search.toLowerCase())
  })


    function del(id){
        Delete(id)
    }

    function upa(id){
      Up(id)
      za('/update')
    }

  return (
    <center>
        <h1>WELCOME TO OUR APP</h1>
         
         <input type="text" placeholder='Search' style={{padding:'10px'}} onChange={(e)=>setSearch(e.target.value)} />

         {
         filterItems.map((el)=>(
           <>
           <h1>{el.title}</h1>
           <p>{el.content}</p>
           <img src={URL.createObjectURL(el.image)} alt="posts" />
           <button onClick={()=>del(el.id)}>delete</button>
            <button onClick={()=>upa(el.id)}>up</button>
           </>
          ))
         }

         <br />
        <Link to="/add">ADD POST</Link>
    </center>
  )
}

export default Home
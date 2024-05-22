import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { MdDelete } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";

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
           <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
           <h1>{el.title}</h1>
           <p>{el.content}</p>
           {/* <img src={URL.createObjectURL(el.image)} alt="posts" style={{width:'200px'}} /> */}

           <audio controls>
            <source src={URL.createObjectURL(el.image)}/>
           </audio>

            <div>
            <button style={{width:'100px' , height:'50px',color:'red',background:'none', fontSize:"40px", border:'none'}} onClick={()=>del(el.id)}><MdDelete /></button>
            <button style={{width:'100px' , height:'50px',color:'green',background:'none', fontSize:"40px", border:'none'}}onClick={()=>upa(el.id)}><FaPenToSquare /></button>
            </div>

           </div>
          ))
         }

         <br /><br /><br />
        <Link style={{width:'100px' , height:'50px' , padding:'10px' , backgroundColor:"#087af4" ,color:'white', border:'none'}} to="/add">ADD POST</Link>
    </center>
  )
}

export default Home
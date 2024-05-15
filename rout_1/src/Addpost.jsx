import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Addpost({addnewpost}) {

  const[title,setTitle]=useState('')
  const[content,setContent]=useState('')
  
  let usenavigate=useNavigate()

  function handlesubmit(e)
  {
   e.preventDefault()
   addnewpost(title,content)
   usenavigate('/')
  }

  return (
    <div>
        <h1 style={{color:"red"}}> *** ADD POST PAGE *** </h1>
        <br /> <br />

        <form action="" onSubmit={handlesubmit}>
         <label htmlFor="">TITLE :  </label> <br />
         <input type="text" value={title} onChange={(a)=>setTitle(a.target.value)}/>
         <br /> <br />
         <label htmlFor="">CONTENT : </label> <br />
         <textarea name="" id="" value={content} onChange={(a)=>setContent(a.target.value)}></textarea>
         <br /><br />
         <button type='submit'>ADD POST</button>

        </form>
        <br /><br /><br />
        <Link to="/">BACK TO HOME</Link>
    </div>
  )
}

export default Addpost
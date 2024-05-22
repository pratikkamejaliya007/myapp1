import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Addpost({addnewpost}) {

  const[title,setTitle]=useState('')
  const[content,setContent]=useState('')
  const [image,setImage]=useState(null)
  
  let usenavigate=useNavigate()

  function handlesubmit(e)
  {
   e.preventDefault()

   const newpost={title,content,image}

   addnewpost(newpost)
   usenavigate('/')
  }

  function handleimage(e){
    setImage(e.target.files[0])
  }

  return (
    <center style={{ height:'600px', backgroundColor:'gray'}}>
        <h1 style={{color:"red"}}> *** ADD POST PAGE *** </h1>
        <br /> <br />

        <form action="" onSubmit={handlesubmit}>
         <label htmlFor="">TITLE :  </label> <br />
         <input type="text" value={title} onChange={(a)=>setTitle(a.target.value)}/>
         <br /> <br />
         <label htmlFor="">CONTENT : </label> <br />
         <textarea name="" id="" value={content} onChange={(a)=>setContent(a.target.value)}></textarea>
         <br /><br />

          <input type="file"  onChange={handleimage} style={{marginLeft:"70px"}} /> <br /><br />

         <button type='submit' style={{width:'100px' , height:'40px' , backgroundColor:"green" ,color:'white', border:'none'}}>ADD POST</button>

        </form>
        <br /><br /><br />
        <Link  style={{width:'100px' , height:'50px' , padding:'10px' , backgroundColor:"#087af4" ,color:'white', border:'none'}} to="/">BACK TO HOME</Link>
    </center>
  )
}

export default Addpost
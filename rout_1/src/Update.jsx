import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Update( {Change,ex} ) {

  const ab=useNavigate()

  const [newtitle,setNewtitle]=useState(ex.title)
  const [newcontent,setNewcontent]=useState(ex.content)

  function handlesubmit(){
    Change(ex.id,newtitle,newcontent)
    ab('/')
  }

  return (
    <>
      
      
      <form action="" onSubmit={handlesubmit}>
         <label htmlFor="">TITLE :  </label> <br />
         <input type="text" value={newtitle} onChange={(a)=>setNewtitle(a.target.value)}/>
         <br /> <br />
         <label htmlFor="">CONTENT : </label> <br />
         <textarea name="" id="" value={newcontent} onChange={(a)=>setNewcontent(a.target.value)}></textarea>
         <br /><br />
         <button type='submit'>ADD UPDATE</button>

        </form>

      {/* <button onClick={add}>Home</button> */}

    </>
  )
}

export default Update
import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Home({ posts , Delete , Up}){

  const za=useNavigate()

    function del(id){
        Delete(id)
    }

    function upa(id){
      Up(id)
      za('/update')
    }

  return (
    <div>
        <h1>WELCOME TO OUR APP</h1>
         
         {
         posts.map((el)=>(
           <>
           <h1>{el.title}</h1>
           <p>{el.content}</p>
           <button onClick={()=>del(el.id)}>delete</button>
            <button onClick={()=>upa(el.id)}>up</button>
           </>
          ))
         }

         <br />
        <Link to="/add">ADD POST</Link>
    </div>
  )
}

export default Home
import React from 'react'
import {Link} from 'react-router-dom'
function Home({ posts , Delete , Update}){

    function del(id){
        Delete(id)
    }

    function up(id){
        Update(id)
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
           {/* <button onClick={()=>up(el.id)}> */}
            
            {/* </button> */}
           </>
          ))
         }

         <br />
        
         <Link to="/update">update</Link>
        <Link to="/add">ADD POST</Link>
    </div>
  )
}

export default Home
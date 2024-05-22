import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";

function Display({ data , Delete}) {

  // function del(id){
  //   Delete(id)
  // }

  return (
    <div className='w-[80%] h-auto  mx-auto mt-10 flex flex-wrap items-center justify-around'>
      {
        data.map((el,index)=>(
          <div key={index} className='basis-[23%] h-[auto] p-2 border border-black'>
          {/* <img src={URL.createObjectURL(el.img)} alt="" /> */}
          <h1 className='text-3xl '>{el.title}</h1>
          <div className='flex justify-between my-2'>
          <h3>${el.price}</h3>
          <h4>Rating : {el.rating}</h4>
          </div>
          <p>{el.description}</p>   

          <div className='flex items-center'>
            
          <button className='p-3 text-3xl text-red-700' onClick={()=>Delete(el.id)}><MdOutlineDeleteOutline /></button> 
          <Link to={`/edit/${el.id}`}><button className='p-3 text-2xl text-green-900'><FaPenToSquare /></button> </Link>
          
          </div>
          
        </div>
        ))
      }
    </div>
  )
}

export default Display
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoPersonAddOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import ematy from '../profile.png'
import { MdDeleteOutline } from "react-icons/md";
import { deletedata } from './action';

function Display() {

    const data=useSelector(state => state.data)

    const dispath=useDispatch()

    const navigate=useNavigate()

    const nav=useNavigate()

    function handleadd(){
      navigate('/add')
    }

    function handleshow(id){
      nav(`/show/${id}`)
    }

    function delet(id){
      dispath(deletedata(id))
    }

  return (
    <section className='w-full h-[100vh] flex items-center justify-center'>
    <div className='border w-[40%] h-[500px] mx-auto overflow-y-scroll rounded-xl '>

      <div className='w-full h-[70px] border bg-gray-200 flex items-center p-3' onClick={handleadd}>
          <IoPersonAddOutline className='text-3xl' />
          <p className='text-2xl ms-5'>Create new contact</p>
      </div>

    {
        data.map((el)=>(
            <div className='w-[100%] h-[60px] border border-emerald-300 flex py-3 px-5 items-center relative'  >
                <div className='flex items-center w-[90%]' onClick={()=>handleshow(el.id)}>
                <img  src={el.profile ? URL.createObjectURL(el.profile) : ematy } alt="post" className='w-[50px] border rounded-full' />
                <h1 className='text-2xl ms-5'>{el.name}</h1>
                </div>
                <button className='w-[40px] h-full absolute right-0' onClick={()=>delet(el.id)}><MdDeleteOutline className='text-2xl text-red-500'/></button>
            </div>
        ))
    }
    </div>
    </section>
  )
}

export default Display
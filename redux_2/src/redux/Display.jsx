import React from 'react'
import { useSelector } from 'react-redux'

function Display() {

    const data=useSelector(state => state.data)

  return (
    <div className='border w-[40%] h-[300px] mx-auto overflow-y-scroll'>
    {
        data.map((el)=>(
            <div className='w-[100%] h-[60px] border border-emerald-300 flex py-3 px-5 items-center'>
                <img  src={URL.createObjectURL(el.profile)} alt="post" className='w-[50px] border rounded-full' />
                <h1 className='text-2xl ms-5'>{el.name}</h1>
            </div>
        ))
    }
    </div>
  )
}

export default Display
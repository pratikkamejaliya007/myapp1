import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <ul className='flex w-[50%] h-[30px] items-center justify-around text-white mx-auto my-4'>
          <li className='basis-[30%] h-full bg-slate-400 '><Link to='/' className='w-full h-full flex items-center justify-center' >Home</Link></li>
          <li className='basis-[30%] h-full bg-slate-400 '><Link to='/add' className='w-full h-full flex items-center justify-center'>Addproduct</Link></li>
        </ul>
    </>
  )
}

export default Navbar
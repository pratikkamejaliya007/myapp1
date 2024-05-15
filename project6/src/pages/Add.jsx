import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Addbar from './Addbar'

function Add() {

  const navigate=useNavigate()

  

  return (
    <>
      <div>
      <nav className='w-full flex items-center justify-center mt-5'>
        <ul className='w-4/5 flex items-center justify-around'>
          <li className='w-[30%] h-[35px] bg-gray-500 text-white'><Link className='w-full h-full flex items-center justify-center' to="/Add/Add_doctor">Add Doctor</Link></li>
          <li className='w-[30%] h-[35px] bg-gray-500 text-white'><Link className='w-full h-full flex items-center justify-center' to="/Add/Add_doctor" to="/Add/Add_staff">Add Staff</Link></li>
          <li className='w-[30%] h-[35px] bg-gray-500 text-white'><Link className='w-full h-full flex items-center justify-center' to="/Add/Add_doctor" to="/Add/Add_paient">Add Patient</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
    </>
  )
}

export default Add
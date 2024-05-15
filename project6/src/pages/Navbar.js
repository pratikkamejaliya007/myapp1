import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>

        <nav>
            <ul className='w-full flex items-center justify-around h-[50px]'>
                <li className='w-[90%]  h-[50px] flex items-center justify-around'>
                    <Link to='/' className='w-[30%] bg-slate-100 h-full flex items-center justify-center'>Doctor</Link>
                    <Link to='/patient' className='w-[30%] bg-slate-100 h-full flex items-center justify-center'>Patient</Link>
                    <Link to='/staff' className='w-[30%] bg-slate-100 h-full flex items-center justify-center'>Staff</Link>
                    <Link to='/Add/Add_doctor' className='w-[10%] bg-green-400 h-full flex items-center justify-center'>Add</Link>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar
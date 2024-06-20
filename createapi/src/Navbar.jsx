import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <ul className='w-full h-[80px] bg-slate-300 flex items-center justify-around'>
            <li><Link to='/' className='px-10 py-3 bg-green-200 text-white'>HOME</Link></li>
            <li><Link to='/add' className='px-10 py-3 bg-green-200 text-white'>ADD</Link></li>
        </ul>

    </div>
  )
}

export default Navbar
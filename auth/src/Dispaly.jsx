import React from 'react'
import { useNavigate } from 'react-router'

function Dispaly() {

    const navigate=useNavigate()

const logout = ()=>{
    localStorage.removeItem('email')
    navigate('/login')
}

  return (
    <div>Dispaly

    <button onClick={logout}>logout</button>

    </div>
  )
}

export default Dispaly
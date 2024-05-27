import React, { useContext } from 'react'
import Theme from './Context'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Header() {

    const {width,toggle}=useContext(Theme)

  return (
    <div style={{
        width:'100%',
        height:"100px",
        backgroundColor:' #f6ddcc',
        padding:'10px',
        display:'flex',
        alignItems:'center',
    }}>

    <button onClick={toggle} style={{
        background:'none',
        border:'none',
        fontSize:'30px'
    }}>
        <HiOutlineMenuAlt1 /> 
    </button>

    </div>
  )
}

export default Header
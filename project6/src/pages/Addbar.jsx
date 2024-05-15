import React from 'react'
import { Link } from 'react-router-dom'

function Addbar() {
  return (
    <>
        <Link to='/adddoctor'>doc</Link>
        <Link to='/addstaff'>doc</Link>
        <Link to='/addpaisent'>doc</Link>
    </>
  )
}

export default Addbar
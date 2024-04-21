import React from 'react'
import { useState,useEffect } from 'react'

function Key() {

    const [key,setkey]=useState(null)

   const handleKeyPress = (event) => {
        console.log(event.key)
      }

  return (
    <div onKeyUp={handleKeyPress}>
    {/* <input type="text" id="one"  /> */}
 </div>
  )
}

export default Key
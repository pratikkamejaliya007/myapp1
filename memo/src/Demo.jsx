import React, { useMemo, useState } from 'react'

function Demo() {

    const [isdark,setisdark]=useState(false)

    const theme=useMemo(()=>{
        return{
            backgroundColor : isdark ?  'black' : 'white',
            Color : isdark ? 'white' : 'black'
        }
    },[isdark])

    document.body.style.backgroundColor =theme.backgroundColor

    document.body.style.color = theme.Color

  return (
    <>
        <button onClick={()=>setisdark(!isdark)}>toggle</button>
        <h1>hello</h1>
    </>
  )
}

export default Demo
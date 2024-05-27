import React, { useState } from 'react'
import Theme from './Context'

function Provider({children}) {

    const [width,setWidth]=useState('full')

    const toggle = () =>{
        setWidth(prevwidth=> (prevwidth === 'full' ? 'half' : 'full'))
    }

  return (
    <Theme.Provider value={{width,toggle}}>
        {children}
    </Theme.Provider>
  )
}

export default Provider
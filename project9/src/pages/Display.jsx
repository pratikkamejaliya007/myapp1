import React from 'react'
import AddForm from './Add'
import Show_data from './Show_data'

function Display({width ,children}) {
  return (
    <div className={`${width ? 'w-[80%]' : 'w-[95%]'} transition-all h-[100vh] border border-blue-200 p-3`}>        
        {children}        
    </div>

  )
}

export default Display
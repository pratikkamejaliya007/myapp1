import React,{memo} from 'react'

function Child_2() {

    console.log("Child_2")

  return (
    <div>Child_2</div>
  )
}

export default memo(Child_2)
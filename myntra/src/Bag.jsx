import React from 'react'
import {useSelector} from 'react-redux'
import { addbag ,removebag } from './redux/bagslice'

function Bag() {

  const bag=useSelector(state =>state.bag)

  const log=useSelector(state => state.log)

  console.log(log)

  console.log(bag)

  return (
    <div>Bag</div>
  )
}

export default Bag
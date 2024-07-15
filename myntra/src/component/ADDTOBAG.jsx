import React from 'react'
import { useSelector } from 'react-redux';
import Bag_product from '../Bag_product';

function ADDTOBAG() {

  const bag = useSelector(state => state.bag);
  console.log(bag.length)

  return (
    <>
      {
        bag.map((el)=>(
          <Bag_product data={el}/>
        ))
      }
    </>
  )
}

export default ADDTOBAG
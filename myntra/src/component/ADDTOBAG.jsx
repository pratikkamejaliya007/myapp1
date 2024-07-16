import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bag_product from './Bag_product';
import { removebag } from '../redux/bagslice';
import OrderSummary from './OrderSummary';

function ADDTOBAG() {
  const bag = useSelector(state => state.bag);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removebag(id));
  }

  return (
    <div className='flex flex-col xl:flex-row m-2'>
      <div className='w-full xl:w-[70%] p-2 border flex flex-wrap my-10'>
        {
          bag.map((el) => (
            <Bag_product key={el.id} data={el} remove={remove} />
          ))
        }
      </div>

      <div className='w-full xl:w-[30%] p-2 sticky top-0'>
        <OrderSummary data={bag} />
      </div>
    </div>
  );
}

export default ADDTOBAG;

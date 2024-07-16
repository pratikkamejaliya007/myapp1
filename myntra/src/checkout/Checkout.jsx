import React from 'react';
import Addresh from './Addresh';
import PriceDetails from './PriceDetails';
import { useSelector } from 'react-redux';

function Checkout() {
  const bag = useSelector((state) => state.bag);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 p-6">
      <div className="w-full md:w-2/3">
        <Addresh />
      </div>
      <div className="w-full md:w-1/3">
        <PriceDetails data={bag} />
      </div>
    </div>
  );
}

export default Checkout;

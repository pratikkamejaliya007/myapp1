import React from 'react';

const PriceDetails = ({ data }) => {
  
  const totalPrice = data.reduce((total, product) => total + product.price, 0)

  const TotalDiscountprice = data.reduce((total, product) => total + product.discountPrice, 0)

  return (
    <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-4">PRICE DETAILS ({data.length} Item{data.length > 1 ? 's' : ''})</h2>
      <div className="flex justify-between mb-2">
        <span>Total MRP</span>
        <span>₹{totalPrice + TotalDiscountprice}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount on MRP</span>
        <span className="text-green-500">- ₹{totalPrice}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Platform Fee <span className="text-pink-500 cursor-pointer">Know More</span></span>
        <span className="text-green-500">FREE</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping Fee <span className="text-pink-500 cursor-pointer">Know More</span></span>
        <span className="text-green-500"><del className="text-black">₹79</del> FREE</span>
      </div>
      <div className="text-gray-500 text-sm mb-4">Free shipping for you</div>
      <div className="border-t border-gray-300 mt-4 mb-4"></div>
      <div className="flex justify-between font-semibold text-lg">
        <span>Total Amount</span>
        <span>₹{TotalDiscountprice}</span>
      </div>
    </div>
  );
};

export default PriceDetails;

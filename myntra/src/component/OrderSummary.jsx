import React,{useState} from 'react';
import CouponSection from './CouponSection';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({data}) => {

    // const [coupon,setCoupon]=useState(false)

    const coupon=useSelector(state => state.coupon)

    const navigate=useNavigate()

    function handleadd(){
      navigate('/checkout')
    }

    const totalPrice = data.reduce((total, product) => total + product.price, 0)

    const TotalDiscountprice = data.reduce((total, product) => total + product.discountPrice, 0)

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <CouponSection />
      <h2 className="text-lg font-semibold mb-4">PRICE DETAILS ({data.length} Item)</h2>
      <div className="flex justify-between mb-2">
        <span>Total MRP</span>
        <span>₹{totalPrice + TotalDiscountprice}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount on MRP</span>
        <span className="text-green-500">- ₹{totalPrice }</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Coupon Discount</span>
        <span className="text-pink-500 cursor-pointer">{coupon ? 'Apply Coupon' : 'Not Appled'}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>
          Platform Fee <span className="text-pink-500 cursor-pointer">Know More</span>
        </span>
        <span className="text-green-500">FREE</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>
          Shipping Fee <span className="text-pink-500 cursor-pointer ">Know More</span>
          <span className="block text-gray-500 text-sm">Free shipping for you</span>
        </span>
        <span className="text-green-500"><del className='text-black'>₹79</del> FREE</span>
      </div>
      <div className="border-t border-gray-300 mt-4 mb-4"></div>
      <div className="flex justify-between font-semibold text-lg mb-4">
        <span>Total Amount</span>
        <span>₹{TotalDiscountprice}</span>
      </div>
      <button className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600" onClick={handleadd}>
        PLACE ORDER
      </button>
    </div>
  );
};

export default OrderSummary;

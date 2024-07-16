import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { getcoupon } from '../redux/couponslice'; // Adjust the path as necessary

const CouponModal = ({ isOpen, onClose }) => {
  const [couponCode, setCouponCode] = useState('');
  const dispatch = useDispatch();

  const coupon = {
    code: 'MFC10',
    discount: 301,
    description: '10% off on minimum purchase of Rs. 1499',
    expiryDate: '21st July 2024',
    expiryTime: '11:59 PM',
  };

  if (!isOpen) return null;

  const handleApplyCoupon = () => {
    dispatch(getcoupon());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg max-w-md w-full p-6 relative">
        <IoClose 
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-lg font-semibold mb-4">APPLY COUPON</h2>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md mb-4 font-semibold hover:bg-pink-600">
          CHECK
        </button>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex items-center mb-4">
            <div className="bg-pink-100 text-pink-500 p-2 rounded-full">
              <IoClose className="text-xl" />
            </div>
            <div className="ml-4">
              <span className="block text-lg font-semibold">{coupon.code}</span>
              <span className="text-gray-700">Save ₹{coupon.discount}</span>
              <p className="text-gray-500">{coupon.description}</p>
              <p className="text-gray-500">Expires on: {coupon.expiryDate} | {coupon.expiryTime}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 border-t border-gray-300 pt-4">
          <span className="text-gray-700 font-semibold">Maximum savings: ₹{coupon.discount}</span>
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-pink-600"
            onClick={handleApplyCoupon}
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;

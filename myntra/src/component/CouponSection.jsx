import React,{useState} from 'react';
import { FaTag } from "react-icons/fa";
import CouponModal from './CouponModal';

const CouponSection = () => {

    const [show,setShow]=useState(false)

    function haldelshow(){
        setShow(true)
    }

    function handlefalse(){
        setShow(false)
    }

  return (
    <>
    <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm mb-4">
      <div className="flex items-center">
        <FaTag className="text-gray-600 mr-2" />
        <span className="text-gray-700 font-semibold">Apply Coupons</span>
      </div>
      <button className="text-pink-500 border border-pink-500 px-4 py-1 rounded-md font-semibold hover:bg-pink-500 hover:text-white transition" onClick={haldelshow}>
        APPLY
      </button>
    </div>
    <CouponModal isOpen={show}  onClose={handlefalse}/>
    </>
  );
};

export default CouponSection;

import React from 'react'
import { FaStar } from "react-icons/fa";

function Bag_product({data}) {

    const discountPercentage = Math.floor(
        ((data.price - data.discountPrice) / data.price) * 100
      );

  return (
    <>
        {
            data ? 
            <div id="product" className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden my-7">
          <img
            className="w-full h-64 object-cover"
            src={data.images[0]}
            alt={data.name}
          />
          <div className="p-4">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col relative overflow-hidden h-[100px] ">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold">{data.rating}</span>
                  <FaStar className="text-yellow-400 mx-2" />
                  <span className="text-gray-600">({data.productLikes})</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{data.brand}</h2>
                <p className="text-gray-600">{data.name}</p>
                
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-2xl font-bold text-gray-800">
                  Rs. {data.discountPrice}
                </span>
                <span className="line-through text-gray-500 ml-2">
                  Rs. {data.price}
                </span>
                <span className="text-red-500 ml-2">
                  ({discountPercentage}% off)
                </span>
              </div>
            </div>
            </div>
          </div> :
          <p>Empty</p>
        }
    </>
  )
}

export default Bag_product
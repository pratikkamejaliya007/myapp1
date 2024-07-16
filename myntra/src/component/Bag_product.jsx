import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Bag_product({ data, remove }) {
  const discountPercentage = Math.floor(
    ((data.price - data.discountPrice) / data.price) * 100
  );

  return (
    <>
      {data ? (
        <div className="relative max-w-lg h-[210px] mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
          <div className="flex">
            <img
              className="w-1/3 object-cover"
              src={data.images[0]}
              alt={data.name}
            />
            <div className="flex-1 p-4 relative">
              <IoClose
                className="absolute top-2 right-2 text-xl p-1 rounded-full bg-gray-300 text-white cursor-pointer"
                onClick={() => remove(data.id)}
              />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-bold">{data.rating}</span>
                    <FaStar className="text-yellow-400 mx-1" />
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
          </div>
        </div>
      ) : (
        <p className="text-center">Empty</p>
      )}
    </>
  );
}

export default Bag_product;

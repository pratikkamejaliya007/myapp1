import React from "react";
import { FaStar } from "react-icons/fa";
import { IoHeartOutline, IoBagHandleOutline } from "react-icons/io5";

const ProductCard = ({ data ,addbagdata}) => {
  const discountPercentage = Math.floor(
    ((data.price - data.discountPrice) / data.price) * 100
  );

  const {sizes}=data
  

  return (
    <>
      {data ? (
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
                {/*  */}
                  
            <div id="slide" className="mt-4 absolute  w-full bg-white"> 
              <button className="flex items-center justify-center px-10 mx-auto mb-2 py-2 border rounded-md text-gray-700 border-gray-300 hover:bg-pink-500 hover:text-white" onClick={()=>addbagdata(data.id)}> <IoBagHandleOutline className="mr-2" /> ADD TO BAG </button>
               { sizes.map((el,i)=>( <button key={i}  className="px-3 m-2 py-1 border border-gray-300 hover:bg-pink-600 hover:text-white rounded-md">{el}</button> )) }
                </div>
                {/*  */}
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
        
      ) : (
        <>Empty</>
      )}
    </>
  );
};

export default ProductCard;

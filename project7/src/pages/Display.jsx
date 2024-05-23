import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-[-35px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-gray-500 text-3xl hover:bg-gray-300 rounded-full p-1 bg-white" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-[-35px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-gray-500 text-3xl hover:bg-gray-300 rounded-full p-1 bg-white" />
    </div>
  );
};

function Display({ data, Delete }) {
  const [Search, setSearch] = useState('');

  const filterdata = data.filter((el) =>
    el.title.toLowerCase().includes(Search.toLowerCase())
  );

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className='flex items-center justify-center mt-5'>
        <input
          type="text"
          placeholder='Search Here'
          className='border p-3 w-[250px] h-[30px] outline-none'
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='w-[80%] h-auto mx-auto mt-10 flex flex-wrap items-center justify-around'>
        {filterdata.map((el, index) => (
          <div
            key={index}
            className='basis-[23%] h-auto p-10 border border-gray-300 shadow-lg rounded-lg mb-6'
          >
            <div className="w-[250px] h-[200px] relative mx-auto">
              <Slider {...settings}>
                {el.img.map((image, imageindex) => (
                  <div key={imageindex}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`post${imageindex}`}
                      className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <h1 className='text-2xl font-semibold mt-3'>{el.title}</h1>
            <div className='flex justify-between items-center my-2'>
              <h3 className='text-xl font-medium'>${el.price}</h3>
              <h4 className='text-lg text-gray-600'>Rating: {el.rating}</h4>
            </div>
            <p className='text-gray-700'>{el.description}</p>

            <div className='flex justify-end mt-3 space-x-3'>
              <button
                className='p-2 text-2xl text-red-700 hover:bg-red-100 rounded-full'
                onClick={() => Delete(el.id)}
              >
                <MdOutlineDeleteOutline />
              </button>
              <Link to={`/edit/${el.id}`}>
                <button className='p-2 text-xl text-green-700 hover:bg-green-100 rounded-full'>
                  <FaRegPenToSquare />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Display;

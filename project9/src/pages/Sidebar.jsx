import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { GrFormSchedule } from "react-icons/gr";
import { AiFillBank } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";

function Sidebar({ width, setWidth }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { item: 'Dashboard', icon: <MdSpaceDashboard className='mr-5 text-2xl' />, link: '/' },
    { item: 'Student', icon: <PiStudentBold className='mr-2 text-2xl' />, link: '/students' },
    { item: 'Schedule', icon: <GrFormSchedule className='mr-2 text-2xl' />, link: '/schedule' },
    { item: 'Fees', icon: <AiFillBank className='mr-2 text-2xl' />, link: '/fees' },
    { item: 'Add', icon: <MdAddBox className='mr-2 text-2xl' />, link: '/add' }
  ];

  return (
    <div className={` ${width ? 'w-[20%]' : 'w-[5%]'} h-[100vh] p-2 bg-slate-300 transition-all`}>
      <HiOutlineMenuAlt1 className='text-3xl text-gray-500' onClick={() => setWidth(!width)} />

      <ul>
        {menuItems.map((el) => (
          <li
            key={el.item}
            onClick={() => setActiveItem(el.item)}
            className={`cursor-pointer p-2 mt-5 rounded-md ${activeItem === el.item ? 'bg-slate-500 text-white' : 'bg-slate-300'} hover:bg-slate-400 flex items-center`}
          >
            <Link to={el.link} className='flex items-center w-full'>
              {el.icon}
              {width && el.item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

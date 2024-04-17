// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-screen bg-cover" >
      <div className="w-full h-20 flex justify-around">
        <div className="w-1/5 h-full">
          <img src="./DH2.png" alt="" className="w-2/3 h-1/2" />
        </div>
        <nav className="w-3/5 h-full flex text-white font-semibold items-center justify-around">
          <a href="" className="hover:text-blue-500">Weddings</a>
          <a href="" className="hover:text-blue-500">Corporate</a>
          <a href="" className="hover:text-blue-500">Socials</a>
          <a href="" className="hover:text-blue-500">XXI Chophousex</a>
          <a href="" className="hover:text-blue-500">Our Team</a>
          <a href="" className="hover:text-blue-500">Brunch</a>
          <a href="" className="hover:text-blue-500">Our Food</a>
          <a href="" className="hover:text-blue-500">History</a>
          <a href="" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
      <div className="w-1/2 h-1/2 ms-40 mt-20">
        <h1 className="text-5xl text-white mt-3">| WEDDINGS</h1>
        <h1 className="text-5xl text-white mt-3">| CORPORATE</h1>
        <h1 className="text-5xl text-white mt-3">| SOCIALS</h1>
      </div>
    </header>
  );
};

export default Header;

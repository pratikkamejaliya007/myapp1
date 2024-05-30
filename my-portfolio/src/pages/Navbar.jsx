import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyWebsite</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <ul className="lg:flex lg:space-x-6 text-white">
            <li><a href="#home" className="block lg:inline-block mt-4 lg:mt-0 px-2 py-1 hover:bg-gray-700 rounded">Home</a></li>
            <li><a href="#about" className="block lg:inline-block mt-4 lg:mt-0 px-2 py-1 hover:bg-gray-700 rounded">About</a></li>
            <li><a href="#skills" className="block lg:inline-block mt-4 lg:mt-0 px-2 py-1 hover:bg-gray-700 rounded">Skills</a></li>
            <li><a href="#contact" className="block lg:inline-block mt-4 lg:mt-0 px-2 py-1 hover:bg-gray-700 rounded">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// ButtonSection.jsx
import React from 'react';

const ButtonSection = () => {
  return (
    <section className="w-full h-200 flex items-center justify-around">
      <button className="px-10 py-3 bg-black text-white hover:bg-gray-500">Book A Walkthrough</button>
      <button className="px-10 py-3 bg-black text-white hover:bg-gray-500">View 3D Walkthrough</button>
    </section>
  );
};

export default ButtonSection;

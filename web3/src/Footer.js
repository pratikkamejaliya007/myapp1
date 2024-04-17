// Footer.jsx
import React from 'react';
import img from './DoctorsHouse-Logo-02.png'

const Footer = () => {
  return (
    <footer className="w-full h-200 flex items-center justify-around">
      <p className="text-center text-2xl">
        info@thedoctorshouse.ca <br />
        (905)-893-1615
      </p>
      <img src={img} alt="" className="w-200px" />
      <div className="w-200px flex items-center justify-around text-3xl opacity-60">
        <i className="ri-facebook-fill"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-pinterest-line"></i>
      </div>
    </footer>
  );
};

export default Footer;

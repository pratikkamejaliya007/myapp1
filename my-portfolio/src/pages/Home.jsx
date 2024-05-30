import React from 'react';
import homeImage from '../img/images.jpeg'; // Replace with your image path

const Home = () => {
  return (
    <section id="home" className="flex flex-col lg:flex-row items-center justify-center h-auto p-6 bg-gray-100">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img src={homeImage} alt="Home" className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg" />
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">Welcome to My Website</h1>
        <p className="mt-4 text-gray-600">I'm a web developer specializing in building and designing exceptional digital experiences. Currently, I'm focused on building responsive web applications.</p>
        <a href="#contact" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition duration-300">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;

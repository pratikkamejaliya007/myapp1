import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600">
          Hello! I'm a passionate web developer with a knack for creating dynamic and beautiful web pages.
          With a background in computer science and years of experience in the field, I have honed my skills
          in various technologies including React, TailwindCSS, and Node.js. I love problem-solving and
          constantly strive to improve my skills and learn new technologies.
        </p>
        <p className="mt-4 text-gray-600">
          In my free time, I enjoy contributing to open-source projects, reading tech blogs, and exploring new
          places. I'm always excited to take on new challenges and work on innovative projects.
        </p>
      </div>
    </section>
  );
};

export default About;

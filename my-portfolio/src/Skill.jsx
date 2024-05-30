import React from 'react';

const skills = [
  { name: 'HTML', level: '95%', color: 'bg-red-500' },
  { name: 'CSS', level: '98%', color: 'bg-blue-500' },
  { name: 'jQuery', level: '97%', color: 'bg-purple-500' },
  { name: 'Bootstrap', level: '98%', color: 'bg-indigo-500' },
  { name: 'Tailwind CSS', level: '99%', color: 'bg-teal-500' },
  { name: 'JavaScript', level: '95%', color: 'bg-yellow-500' },
  { name: 'React', level: '95%', color: 'bg-green-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center lg:text-left">My Skills</h2>
        <div className="mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-800">{skill.name}</span>
                <span className="text-sm font-medium text-gray-800">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`h-2.5 rounded-full ${skill.color}`} style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

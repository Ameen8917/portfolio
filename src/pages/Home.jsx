// pages/Home.tsx
import React from 'react';
import profileImg from '../assets/profile.jpg';

const Home = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hello<span className="text-coral-500">.</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I'm Ameen
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
            Software Developer
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I'm a Full Stack Developer with 5+ years of experience building production-ready web and mobile applications using React, Node.js, and React Native, primarily in fast-paced startup environments.
          </p>
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => onNavigate('Projects')}
              className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded transition-colors"
            >
              Got a project?
            </button>
            <button className="border border-gray-600 hover:border-coral-500 px-6 py-3 rounded transition-colors">
              My Resume
            </button>
          </div>
          <div className="flex gap-6 text-gray-500 text-sm">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>React</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-coral-500 to-orange-600 opacity-20 absolute"></div>
            
            <div className="w-80 h-80 rounded-full border-4 border-coral-500 flex items-center justify-center relative overflow-hidden">
              <img
                src={profileImg}
                alt="Ameen profile"
                className="w-full h-full object-cover rounded-full object-center"
              />
            </div>
            {/* <div className="w-80 h-80 rounded-full border-4 border-coral-500 flex items-center justify-center relative">
              <div className="text-8xl">👨‍💻</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
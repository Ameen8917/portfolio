import React from 'react';
import profileImg from '../assets/ameen.png';

const Home = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hello<span className="text-coral-500">.</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            I'm Ameen
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-2">
            Senior Full-Stack + AI Engineer
          </h3>
          <p className="text-coral-500 font-medium mb-6 text-lg">
            MERN · AWS · OpenAI · Twilio · RAG Architecture
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I build scalable, production-ready web applications and AI-powered systems —
            from Voice AI calling agents to RAG-based document intelligence apps.
            5+ years of experience at SDLC Corp shipping products used by 10,000+ users.
          </p>
          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded transition-colors"
            >
              View Projects
            </button>
            <a
              href="https://www.linkedin.com/in/ameensayed"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-coral-500 px-6 py-3 rounded transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
            <span>React</span><span>Node.js</span><span>MongoDB</span>
            <span>AWS</span><span>OpenAI</span><span>Twilio</span><span>TypeScript</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-coral-500 to-orange-600 opacity-20 absolute"></div>
            <div className="w-80 h-80 rounded-full border-4 border-coral-500 flex items-center justify-center relative overflow-hidden">
              <img
                src={profileImg}
                alt="Ameen Sayed - Senior Full-Stack AI Engineer"
                className="w-full h-full object-cover rounded-full object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

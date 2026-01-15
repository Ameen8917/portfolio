// pages/About.tsx
import React from 'react';
import { Code, Database, Smartphone, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">About me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Code className="text-coral-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Website Development</h3>
                  <p className="text-gray-400">Building responsive and scalable web applications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Smartphone className="text-coral-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">App Development</h3>
                  <p className="text-gray-400">Cross-platform mobile applications with React Native</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Server className="text-coral-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                  <p className="text-gray-400">RESTful APIs and database architecture</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a Full Stack Developer with over 5 years of professional experience developing web and mobile applications. I've spent most of my career working in startups, where I've been involved in building products from the ground up and scaling them as the business grew.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My core expertise lies in React for web applications, Node.js for backend development, and React Native for cross-platform mobile apps. I'm comfortable working across the full development lifecycle—from requirement analysis and architecture design to deployment and maintenance.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-coral-500 mb-2">120+</div>
                <div className="text-gray-400 text-sm">Completed Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-coral-500 mb-2">95%</div>
                <div className="text-gray-400 text-sm">Client satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-coral-500 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Years of experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
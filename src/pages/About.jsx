import React from 'react';
import { Code, Database, Smartphone, Server, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">About me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Brain className="text-coral-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                  <p className="text-gray-400">Building Voice AI agents & RAG-based document intelligence apps using OpenAI + Twilio + MongoDB</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Code className="text-coral-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
                  <p className="text-gray-400">Building scalable, production-ready web applications with MERN stack</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Server className="text-coral-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
                  <p className="text-gray-400">Deploying and managing applications on AWS — EC2, S3, Lambda, CloudFront with CI/CD pipelines</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Database className="text-coral-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Database Architecture</h3>
                  <p className="text-gray-400">MongoDB Atlas Vector Search, aggregation pipelines, query optimization & Redis caching</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a Senior Full-Stack + AI Engineer with 5+ years of experience building scalable,
              high-performance web applications using the MERN stack (MongoDB, Express, React, Node.js)
              and AWS. Currently serving as SDE-II at SDLC Corp, where I architect and deliver
              production-grade systems that serve real users at scale.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I specialise in AI-powered application development — including Voice AI calling agents
              using Twilio + OpenAI GPT-4, and RAG-based document intelligence systems using MongoDB
              Vector Search and LLM embeddings.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I thrive in product-driven teams where I can own features end-to-end, solve real
              engineering challenges, and build systems that scale smoothly as businesses grow.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-coral-500 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Products Shipped</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-coral-500 mb-2">10K+</div>
                <div className="text-gray-400 text-sm">Users Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-coral-500 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

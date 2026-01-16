// pages/Experience.tsx
import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

const Experience = () => {
  const experienceData = {
    title: 'Full Stack Developer',
    company: 'Startup Company',
    duration: '5+ Years',
    responsibilities: [
      'Developed and maintained scalable web applications using React and Node.js',
      'Built REST APIs for core business functionality including authentication, data management, and integrations',
      'Worked on cross-platform mobile applications using React Native',
      'Collaborated closely with product managers and designers to translate business requirements into technical solutions',
      'Improved application performance by ~30% through query optimization and API refactoring',
      'Participated in code reviews and helped maintain clean, maintainable codebases',
      'Supported deployment and production issues in live environments'
    ]
  };

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <ExperienceItem
          title={experienceData.title}
          company={experienceData.company}
          duration={experienceData.duration}
          responsibilities={experienceData.responsibilities}
        />
      </div>
    </section>
  );
};

export default Experience;
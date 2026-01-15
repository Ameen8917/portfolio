// pages/Projects.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: 'Task Management App',
      description: 'A full-stack task management application that allows users to create, track, and manage tasks with authentication and role-based access.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      features: [
        'User authentication & authorization',
        'CRUD operations for tasks',
        'Responsive UI',
        'RESTful API architecture'
      ],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Habit Tracker',
      description: 'A mobile application for tracking daily habits with offline support and data synchronization.',
      techStack: ['React Native', 'Expo'],
      features: [
        'Cross-platform mobile app',
        'Offline data storage',
        'API integration',
        'Clean navigation flow'
      ],
      githubUrl: '#'
    },
    {
      title: 'SaaS Web Application',
      description: 'Professional experience working on a production SaaS application in a fast-paced startup environment.',
      techStack: ['React', 'Node.js', 'SaaS'],
      features: [
        'Built reusable UI components used across multiple modules',
        'Developed backend APIs handling large datasets',
        'Improved API response times and application stability',
        'Worked in an agile, startup environment'
      ],
      fullWidth: true
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              features={project.features}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              fullWidth={project.fullWidth}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
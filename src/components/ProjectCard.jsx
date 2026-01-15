// components/ProjectCard.tsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  techStack,
  features,
  githubUrl,
  liveUrl,
  fullWidth = false
}) => {
  return (
    <div className={`bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-coral-500 transition-colors ${fullWidth ? 'md:col-span-2' : ''}`}>
      <div className="mb-4">
        <div className="flex gap-2 mb-4 flex-wrap">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-slate-700 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="text-gray-400 text-sm space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        {githubUrl && (
          <button className="bg-coral-500 hover:bg-coral-600 px-4 py-2 rounded text-sm flex items-center gap-2">
            <Github size={16} />
            View GitHub
          </button>
        )}
        {liveUrl && (
          <button className="border border-gray-600 hover:border-coral-500 px-4 py-2 rounded text-sm flex items-center gap-2">
            <ExternalLink size={16} />
            Live Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
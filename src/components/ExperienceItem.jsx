import React from 'react';

const ExperienceItem = ({
  title,
  company,
  duration,
  responsibilities
}) => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-coral-500 mb-4">{company} • {duration}</p>
      <div className="space-y-3 text-gray-400">
        {responsibilities.map((responsibility, index) => (
          <p key={index}>• {responsibility}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
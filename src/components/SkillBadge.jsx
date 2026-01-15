import React from 'react';

const SkillBadge = ({ category, skills }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
      <h3 className="text-xl font-bold mb-4 text-coral-500">{category}</h3>
      <ul className="space-y-2 text-gray-400">
        {skills.map((skill, index) => (
          <li key={index}>• {skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillBadge;
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        'React (Hooks, Context API, Performance)',
        'Next.js (SSR, Routing, SEO)',
        'HTML5, CSS3, Tailwind CSS',
        'State Management (Redux / Context)'
      ]
    },
    {
      category: 'Backend',
      skills: [
        'Node.js, Express',
        'RESTful API Design',
        'Authentication & Authorization (JWT)',
        'API Performance Optimization'
      ]
    },
    {
      category: 'Mobile',
      skills: [
        'React Native',
        'Expo',
        'React Navigation',
        'Offline Storage & API Integration'
      ]
    },
    {
      category: 'Databases',
      skills: [
        'MongoDB',
        'PostgreSQL',
        'Database Design',
        'Query Optimization'
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        'Git & GitHub',
        'Docker (basic)',
        'CI/CD (basic pipelines)',
        'Deployment (Vercel, AWS)'
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillBadge key={index} category={skill.category} skills={skill.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
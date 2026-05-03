import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const skillsData = [
    {
      category: 'AI & Integrations',
      skills: [
        'OpenAI API (GPT-4 / GPT-4o)',
        'Twilio Voice & SMS API',
        'RAG Architecture & Vector Search',
        'LangChain & LLM Embeddings',
        'Prompt Engineering',
        'MongoDB Atlas Vector Search'
      ]
    },
    {
      category: 'Frontend',
      skills: [
        'React.js (Hooks, Context API, Performance)',
        'Next.js (SSR, Routing, SEO)',
        'TypeScript',
        'HTML5, CSS3, Tailwind CSS',
        'Redux & State Management'
      ]
    },
    {
      category: 'Backend',
      skills: [
        'Node.js & Express.js',
        'RESTful API Design & Development',
        'Authentication: JWT, OAuth2, RBAC',
        'API Performance Optimization',
        'GraphQL (basic)'
      ]
    },
    {
      category: 'Databases',
      skills: [
        'MongoDB & MongoDB Atlas',
        'MySQL & PostgreSQL',
        'Redis (Caching)',
        'Database Design & Modeling',
        'Aggregation Pipelines & Query Optimization'
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        'AWS (EC2, S3, Lambda, CloudFront)',
        'CI/CD Pipelines (GitHub Actions)',
        'Docker (containerization)',
        'Deployment & Monitoring',
        'Vercel & Railway'
      ]
    },
    {
      category: 'Tools & Practices',
      skills: [
        'Git & GitHub',
        'Agile / Scrum Methodology',
        'System Design & Architecture',
        'Code Reviews & Mentoring',
        'Microservices Architecture'
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-gray-400 text-center mb-12">Technologies & tools I work with professionally</p>
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

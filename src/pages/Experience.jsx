import React from 'react';

const ExperienceCard = ({ title, company, duration, location, type, responsibilities, skills }) => (
  <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-6">
    <div className="flex flex-wrap justify-between items-start mb-4">
      <div>
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-coral-500 font-medium">{company}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-400 text-sm">{duration}</p>
        <p className="text-gray-500 text-sm">{location} · {type}</p>
      </div>
    </div>
    <div className="space-y-3 text-gray-400 mb-4">
      {responsibilities.map((r, i) => (
        <p key={i}>• {r}</p>
      ))}
    </div>
    {skills && (
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((s, i) => (
          <span key={i} className="bg-slate-700 text-gray-300 text-xs px-3 py-1 rounded-full">{s}</span>
        ))}
      </div>
    )}
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer II (SDE-II)',
      company: 'SDLC Corp',
      duration: 'Sep 2025 – Present · 8 mos',
      location: 'Aurangabad, Maharashtra, India',
      type: 'Full-time · On-site',
      responsibilities: [
        'Architected a microservices-based web platform using Node.js, React, and MongoDB — reducing system downtime by 35% and improving page load speed by 50%',
        'Built a Voice AI agent integrating Twilio Voice API, OpenAI GPT-4, and MongoDB — enabling automated intelligent voice conversations with real-time AI response generation',
        'Developed a RAG-based document intelligence system using LLM embeddings and MongoDB Atlas Vector Search — allowing contextual Q&A over large document collections',
        'Built and maintained 15+ high-performance RESTful APIs with rate limiting, input validation, and comprehensive error handling',
        'Deployed and managed services on AWS (EC2, S3, CloudFront, Lambda) — achieving 99.9% uptime with automated CI/CD pipelines via GitHub Actions',
        'Improved database query performance by 60% through MongoDB indexing strategies and Redis caching'
      ],
      skills: ['Node.js', 'React', 'MongoDB', 'AWS', 'OpenAI API', 'Twilio', 'RAG', 'System Design', 'CI/CD']
    },
    {
      title: 'Full Stack MERN Developer',
      company: 'SDLC Corp',
      duration: 'Aug 2021 – Aug 2025 · 4 yrs 1 mo',
      location: 'Aurangabad, Maharashtra, India',
      type: 'Full-time · On-site',
      responsibilities: [
        'Developed and maintained 8+ end-to-end web applications using the MERN stack — delivering scalable, user-focused features used by 10,000+ users',
        'Built RESTful APIs and backend services using Node.js and Express, handling 500+ concurrent requests with optimised performance',
        'Designed high-performance React frontends with reusable component libraries, reducing UI development time by 30%',
        'Implemented secure authentication systems from scratch: JWT, OAuth2, and role-based access control (RBAC)',
        'Worked with MongoDB and MySQL to manage data — optimised slow queries by 40% through indexing and aggregation strategies',
        'Collaborated with product managers and designers to ship 3–4 features per sprint using Agile/Scrum methodology'
      ],
      skills: ['React.js', 'Node.js', 'MongoDB', 'MySQL', 'Express.js', 'REST APIs', 'JWT', 'AWS', 'Redux']
    },
    {
      title: 'Web Developer',
      company: 'Dualsysco Research & Development',
      duration: 'Dec 2020 – Jul 2021 · 8 mos',
      location: 'Aurangabad, Maharashtra, India',
      type: 'Full-time · On-site',
      responsibilities: [
        'Developed and maintained frontend and backend features for client web applications using JavaScript, Node.js, and Express',
        'Built and integrated RESTful APIs to support dynamic application functionality',
        'Created responsive UI components using HTML, CSS, and React — improving cross-device compatibility',
        'Worked with MongoDB to manage data storage and retrieval for production applications'
      ],
      skills: ['JavaScript', 'Node.js', 'Express', 'React', 'MongoDB', 'REST APIs', 'HTML/CSS']
    },
    {
      title: 'Web Developer Trainee',
      company: 'Iqra Technology',
      duration: 'Apr 2020 – Sep 2020 · 6 mos',
      location: 'Aurangabad, Maharashtra, India',
      type: 'Full-time · On-site',
      responsibilities: [
        'Built core web features using HTML, CSS, and JavaScript — gaining hands-on experience with full development lifecycle',
        'Participated in code reviews and assisted in debugging frontend issues',
        'Built responsive multi-page websites using frontend best practices'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Git']
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
        <p className="text-gray-400 text-center mb-12">5+ years building scalable web & AI-powered applications</p>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

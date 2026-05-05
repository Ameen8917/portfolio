import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: 'JobLens AI — Chat With Any Job Description',
      description: 'AI-powered job description analyzer. Upload your resume + paste any JD → instantly get your match percentage, skill gaps, a tailored cover letter, and interview prep questions.',
      techStack: ['React', 'Node.js', 'OpenAI GPT-4', 'MongoDB Atlas', 'RAG', 'Vector Search'],
      features: [
        'Resume vs JD match scoring with percentage',
        'Skill gap analysis with learning suggestions',
        'AI-generated tailored cover letter',
        'Interview question preparation from JD',
        'RAG architecture with MongoDB Vector Search'
      ],
      githubUrl: 'https://github.com/Ameen8917/Joblens-AI',
      liveUrl: 'https://joblens-ai.vercel.app'
    },
    // {
    //   title: '📞 VoiceDesk — AI Voice Personal Assistant',
    //   description: 'Call a Twilio number, speak naturally, and your AI assistant adds tasks, reads your to-do list, sets reminders, and answers any question — all via voice.',
    //   techStack: ['Node.js', 'Twilio Voice API', 'OpenAI GPT-4', 'MongoDB', 'Express'],
    //   features: [
    //     'Add & manage tasks entirely by voice',
    //     'AI-powered natural language understanding',
    //     'Voice reminders via scheduled callbacks',
    //     'Real-time speech-to-text + text-to-speech',
    //     'Persistent data storage in MongoDB'
    //   ],
    //   githubUrl: 'https://github.com/Ameen8917',
    //   liveUrl: '#'
    // },
    {
      title: 'Task Management App',
      description: 'A full-stack task management application with authentication, role-based access control, and real-time updates.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      features: [
        'User authentication & JWT authorization',
        'CRUD operations with role-based access',
        'Responsive UI with real-time updates',
        'RESTful API architecture'
      ],
      githubUrl: 'https://github.com/Ameen8917/task-management-app',
      liveUrl: 'https://task-management-app-kappa-dun.vercel.app'
    },
    // {
    //   title: '📱 Habit Tracker',
    //   description: 'A cross-platform mobile application for tracking daily habits with offline support and data synchronization.',
    //   techStack: ['React Native', 'Expo', 'MongoDB'],
    //   features: [
    //     'Cross-platform iOS & Android app',
    //     'Offline data storage with sync',
    //     'Streak tracking & analytics',
    //     'Clean navigation with Expo Router'
    //   ],
    //   githubUrl: 'https://github.com/Ameen8917'
    // }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-gray-400 text-center mb-12">A selection of my work — from AI voice agents to full-stack web apps</p>
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

import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Ameen Sayed</h3>
        <p className="text-coral-500 text-sm mb-2">Senior Full-Stack + AI Engineer · MERN · AWS · OpenAI · Twilio</p>
        <p className="text-gray-400 mb-6 text-sm">Aurangabad, Maharashtra, India · Open to Opportunities</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:ameensayed6780@gmail.com" className="hover:text-coral-500 transition-colors" title="Email">
            <Mail size={24} />
          </a>
          <a href="https://github.com/Ameen8917" target="_blank" rel="noopener noreferrer" className="hover:text-coral-500 transition-colors" title="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ameensayed/" target="_blank" rel="noopener noreferrer" className="hover:text-coral-500 transition-colors" title="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-6">© 2026 Ameen Sayed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import CaseStudy from './pages/CaseStudy';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const scrollToSection = (section) => {
    if (section.toLowerCase() === 'casestudy') {
      setShowCaseStudy(false);
      setTimeout(() => {
        document.getElementById('casestudy')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setShowCaseStudy(false);
    setActiveSection(section.toLowerCase());
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCaseStudy = () => {
    setShowCaseStudy(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCaseStudy = () => {
    setShowCaseStudy(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (showCaseStudy) return;
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [showCaseStudy]);

  if (showCaseStudy) {
    return <CaseStudy onBack={closeCaseStudy} />;
  }

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen w-full overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <Home onNavigate={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <FeaturedCaseStudy onViewCaseStudy={openCaseStudy} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

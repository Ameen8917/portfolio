import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

// ── Portfolio layout (all single-page sections) ──────────────────
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // If redirected back from case study, scroll to #casestudy
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

  const scrollToSection = (section) => {
    const id = section.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen w-full overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <Home onNavigate={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <FeaturedCaseStudy />
      <Contact />
      <Footer />
    </div>
  );
};

// ── Root with router ─────────────────────────────────────────────
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/case-study" element={<CaseStudy />} />
      {/* Catch-all → home */}
      <Route path="*" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
);

export default App;
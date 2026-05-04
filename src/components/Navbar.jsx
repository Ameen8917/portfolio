import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCaseStudy = location.pathname === '/case-study';
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const handleNavigate = (item) => {
    onNavigate?.(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* Logo — always goes home */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-coral-500 transition-colors">
            Ameen Sayed
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {!isCaseStudy && navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`hover:text-coral-500 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-coral-500' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}

            {isCaseStudy && (
              <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-coral-500 transition-colors text-sm">
                ← Back to Portfolio
              </Link>
            )}

            {/* Case Study pill — always visible */}
            <Link
              to="/case-study"
              className={`text-xs font-mono border px-3 py-1.5 rounded-full transition-colors ${
                isCaseStudy
                  ? 'bg-coral-500/20 border-coral-500 text-coral-500'
                  : 'border-coral-500/40 text-coral-500 hover:bg-coral-500/10'
              }`}
            >
              Case Study ↗
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-800 pt-4">
            {!isCaseStudy && navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className="block w-full text-left py-2 hover:text-coral-500 transition-colors"
              >
                {item}
              </button>
            ))}
            {isCaseStudy && (
              <Link to="/" className="block py-2 text-gray-400 hover:text-coral-500">
                ← Back to Portfolio
              </Link>
            )}
            <Link
              to="/case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-coral-500 font-mono text-sm"
            >
              Case Study ↗
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

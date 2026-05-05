import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto w-full">

        <h2 className="text-4xl font-bold mb-3 text-center">
          Looking for a Senior Full-Stack + AI Engineer?
        </h2>
        <h3 className="text-2xl font-bold mb-12 text-center text-coral-500">
          Let's talk!
        </h3>

        <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
          <p className="text-gray-400 mb-8 text-center">
            Open to full-time roles, freelance projects, and interesting collaborations.
            I typically respond within 24 hours.
          </p>

          {/* ✅ Success state */}
          {status === 'success' && (
            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-4 rounded-lg mb-6">
              <CheckCircle size={20} className="flex-shrink-0" />
              <div>
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm text-green-400/70 mt-0.5">I'll get back to you at your email within 24 hours.</p>
              </div>
            </div>
          )}

          {/* ❌ Error state */}
          {status === 'error' && (
            <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-lg mb-6">
              <AlertCircle size={20} className="flex-shrink-0" />
              <div>
                <p className="font-medium">Something went wrong.</p>
                <p className="text-sm text-red-400/70 mt-0.5">Please try again or email me directly at ameensayed6780@gmail.com</p>
              </div>
            </div>
          )}

          {/* Netlify hidden form — required for Netlify to detect the form at build time */}
          <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>

          {/* Real form — submitted via fetch */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Honeypot — catches spam bots */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Name <span className="text-coral-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 focus:border-coral-500 focus:outline-none transition-colors placeholder-gray-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email <span className="text-coral-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 focus:border-coral-500 focus:outline-none transition-colors placeholder-gray-600"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Message <span className="text-coral-500">*</span>
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 focus:border-coral-500 focus:outline-none transition-colors placeholder-gray-600 resize-none"
                placeholder="Tell me about the role or project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 disabled:opacity-60 disabled:cursor-not-allowed py-3 rounded font-bold transition-colors"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Direct contact links */}
        <div className="flex justify-center gap-6 mt-8 text-sm text-gray-500">
          <a href="mailto:ameensayed6780@gmail.com" className="hover:text-coral-500 transition-colors">
            ameensayed6780@gmail.com
          </a>
          <span>·</span>
          <a href="https://linkedin.com/in/ameensayed" target="_blank" rel="noopener noreferrer" className="hover:text-coral-500 transition-colors">
            LinkedIn
          </a>
          <span>·</span>
          <a href="https://github.com/Ameen8917" target="_blank" rel="noopener noreferrer" className="hover:text-coral-500 transition-colors">
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
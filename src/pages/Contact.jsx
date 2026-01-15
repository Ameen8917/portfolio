// pages/Contact.tsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-6 text-center">Have a project?</h2>
        <h3 className="text-3xl font-bold mb-12 text-center">Let's talk!</h3>
        <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
          <p className="text-gray-400 mb-8 text-center">
            I'm open to full-time opportunities, freelance work, and interesting collaborations.
          </p>
          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 focus:border-coral-500 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 focus:border-coral-500 outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 focus:border-coral-500 outline-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full bg-coral-500 hover:bg-coral-600 py-3 rounded font-bold transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
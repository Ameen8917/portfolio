import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BarChart2, FileText, Mic } from 'lucide-react';

const FeaturedCaseStudy = () => {
  return (
    <section id="casestudy" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px flex-1 bg-slate-700 max-w-16"></div>
          <span className="text-xs font-mono text-coral-500 uppercase tracking-widest">Featured Case Study</span>
          <div className="h-px flex-1 bg-slate-700 max-w-16"></div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-4">JobLens AI</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          A deep dive into architecture decisions, engineering challenges, and lessons learned
          building a production AI application end-to-end.
        </p>

        {/* Main card */}
        <div className="border border-slate-700 rounded-2xl overflow-hidden bg-slate-800/50">

          {/* Top accent */}
          <div className="h-1 bg-gradient-to-r from-transparent via-coral-500 to-transparent opacity-60"></div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Left — description */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono bg-coral-500/10 text-coral-500 border border-coral-500/20 px-3 py-1 rounded-full">
                    AI · Full-Stack · TypeScript
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-snug">
                  Job-fit intelligence that goes beyond keyword matching
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Built end-to-end — from architecture decisions to production code.
                  Uses a hybrid 60/40 semantic + programmatic scoring engine, structured AI extraction,
                  and four distinct Gemini-powered analysis modes.
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: BarChart2, label: 'Hybrid Scoring', desc: '60/40 semantic + programmatic' },
                    { icon: Brain, label: 'Structured AI Extraction', desc: 'JSON before RAG' },
                    { icon: FileText, label: '4 Analysis Modes', desc: 'Fit · Gaps · Cover Letter · Interview' },
                    { icon: Mic, label: 'Zod Validation', desc: 'All AI responses validated' },
                  ].map(({ icon: Icon, label, desc }, i) => (
                    <div key={i} className="bg-slate-700/40 rounded-lg p-3">
                      <Icon size={16} className="text-coral-500 mb-1.5" />
                      <div className="text-sm font-medium text-white">{label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-study"
                  className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded transition-colors font-medium"
                >
                  Read Full Case Study <ArrowRight size={18} />
                </Link>
              </div>

              {/* Right — tech + stats */}
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: '60/40', label: 'Hybrid Score Split' },
                    { val: '4', label: 'AI Analysis Modes' },
                    { val: 'Zod', label: 'Output Validation' },
                  ].map((s, i) => (
                    <div key={i} className="text-center bg-slate-700/30 rounded-xl p-4 border border-slate-700">
                      <div className="text-2xl font-bold text-coral-500 mb-1">{s.val}</div>
                      <div className="text-xs text-gray-400">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="bg-slate-700/30 rounded-xl p-5 border border-slate-700">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-coral-500 font-mono">Backend · </span>
                      <span className="text-xs text-gray-400">Node.js · Express · TypeScript · MongoDB · Gemini · Zod</span>
                    </div>
                    <div>
                      <span className="text-xs text-coral-500 font-mono">Frontend · </span>
                      <span className="text-xs text-gray-400">React 18 · TypeScript · Vite · Tailwind · React Router</span>
                    </div>
                  </div>
                </div>

                {/* Challenges teaser */}
                <div className="bg-slate-700/30 rounded-xl p-5 border border-slate-700">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Covered in Case Study</p>
                  <ul className="space-y-1.5">
                    {[
                      'Why structured parsing before RAG',
                      'Hybrid scoring vs pure semantic',
                      'Handling inconsistent AI JSON output',
                      'Skill alias normalization engine',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1 h-1 rounded-full bg-coral-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;

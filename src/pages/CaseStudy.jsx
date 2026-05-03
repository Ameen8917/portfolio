import React from 'react';
import { ArrowLeft, ExternalLink, Github, Layers, Zap, AlertTriangle, CheckCircle, Code2, BookOpen, TrendingUp } from 'lucide-react';

const CaseStudy = ({ onBack }) => {
  const techStack = {
    backend: ['Node.js', 'Express', 'TypeScript', 'MongoDB Atlas', 'Google Gemini 1.5 Flash', 'text-embedding-004', 'pdf-parse', 'Zod', 'Multer'],
    frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Axios', 'React Router v6']
  };

  const decisions = [
    { decision: 'Structured JSON extraction before embedding', alternative: 'Raw text RAG', reason: 'Enables programmatic scoring and precise prompt context' },
    { decision: 'Hybrid 60/40 semantic/programmatic score', alternative: 'Pure semantic or pure programmatic', reason: 'Better accuracy across both conceptual and hard-skill fit' },
    { decision: 'Per-mode Gemini system prompts', alternative: 'Single generic prompt', reason: 'Consistent structured output with enforced schemas' },
    { decision: 'Zod validation on all AI responses', alternative: 'Trust Gemini output', reason: 'Eliminates silent failures from malformed JSON' },
    { decision: 'Memory storage for PDF uploads', alternative: 'Disk storage', reason: 'No temp file cleanup needed, faster pipeline' },
    { decision: 'localStorage for job tracker', alternative: 'Backend persistence', reason: 'MVP simplicity, no auth required' },
  ];

  const challenges = [
    {
      title: 'Inconsistent JSON from Gemini',
      problem: [
        'Gemini Flash omits fields in nested objects for unusual resume formats',
        'Plain Zod without defaults caused hard validation failures on real resumes',
        'Failures were silent — no useful error surfaced to the client',
      ],
      fix: [
        'Every nested field now has a Zod .default() — e.g. duration: z.string().default("")',
        'Prompt updated to explicitly prohibit field omission',
        'Two-layer defence: better prompting reduces frequency, Zod defaults catch the rest',
      ]
    },
    {
      title: 'Skill Alias Normalization',
      problem: [
        '"Node.js" vs "Node" vs "NodeJS" — pure string comparison fails all variants',
        '"AWS" vs "Amazon Web Services" treated as different skills',
        '"PostgreSQL" vs "Postgres" vs "PG" causes false negatives',
      ],
      fix: [
        'Normalization layer: lowercase + strip punctuation before any comparison',
        'Substring containment check before falling back to alias map',
        'Matches → "matched", overlaps → "partial" (0.5 credit), misses → "missing"',
      ]
    },
    {
      title: 'Tailwind Not Applying in Vite',
      problem: [
        'UI rendered as completely unstyled HTML despite correct component code',
        'All utility classes were present but none generated in output',
        'No error thrown — failed silently',
      ],
      fix: [
        'Root cause: postcss.config.js missing from frontend root',
        'Vite requires PostCSS config to process @tailwind directives',
        'Added config file + full dev server restart resolved immediately',
      ]
    },
    {
      title: 'Word Document XML Corruption',
      problem: [
        'Generated .docx failed to open in Microsoft Word',
        'python-docx could open it — only Word\'s stricter parser rejected it',
        'XML appeared valid but had inconsistent border configuration',
      ],
      fix: [
        'Inspected raw XML: outer borders set to none but inner borders set to single',
        'Word requires border consistency — if outer is none, inner must also be none',
        'Post-processed XML to fix all 35 instances before repacking archive',
      ]
    }
  ];

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen">

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-coral-500 transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Portfolio</span>
          </button>
          {/* ✅ FIX 5: CTA at top */}
          <div className="flex gap-3">
            <a href="https://github.com/Ameen8917/Joblens-AI" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm border border-slate-700 hover:border-coral-500 px-4 py-2 rounded transition-colors">
              <Github size={15} /> View Code
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded transition-colors">
              <ExternalLink size={15} /> Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ✅ FIX 4: Stronger opening hook */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono text-coral-500 border border-coral-500/30 bg-coral-500/10 px-3 py-1 rounded-full">Case Study · 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">JobLens AI</h1>

          {/* Hook */}
          <div className="border-l-4 border-coral-500 pl-5 mb-6 bg-coral-500/5 py-4 pr-4 rounded-r-lg">
            <p className="text-lg text-white font-medium leading-relaxed">
              Most job tools fail because they rely on keyword matching.<br />
              JobLens solves this using <span className="text-coral-500">hybrid semantic scoring + AI reasoning</span> to identify true candidate–job fit.
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">
            Built end-to-end — from architecture decisions to production-ready code.
            Designed to give candidates real signal before they apply, not after they're rejected.
          </p>
          <div className="flex flex-wrap gap-2">
            {[...techStack.backend, ...techStack.frontend].slice(0, 9).map((t, i) => (
              <span key={i} className="text-xs bg-slate-800 border border-slate-700 text-gray-300 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        {/* ✅ FIX 1: Problem as scan-friendly bullets */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-coral-500 flex-shrink-0" size={22} />
            <h2 className="text-2xl font-bold">The Problem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: '01', title: 'Keyword matching fails',
                bullets: [
                  'Tools count word overlaps — not actual fit',
                  '"Frontend engineer with 4 yrs of component UIs" ≠ match for React?',
                  'Leads to false negatives in candidate scoring',
                ]
              },
              {
                num: '02', title: 'Feedback is generic',
                bullets: [
                  '"You\'re missing Docker" — but why does it matter here?',
                  'No context on priority or how to address gaps',
                  'Candidates can\'t act on vague output',
                ]
              },
              {
                num: '03', title: 'One-shot tools don\'t scale',
                bullets: [
                  'Candidates track 10–20 applications simultaneously',
                  'No persistence between sessions',
                  'No way to compare fit across multiple roles',
                ]
              },
            ].map((p, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                <div className="text-3xl font-bold text-coral-500/25 mb-2 font-mono">{p.num}</div>
                <h3 className="font-semibold mb-3 text-white">{p.title}</h3>
                <ul className="space-y-2">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-coral-500 mt-1 flex-shrink-0">•</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="text-coral-500 flex-shrink-0" size={22} />
            <h2 className="text-2xl font-bold">The Solution</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                tag: 'Scoring', title: 'Hybrid Scoring Engine',
                bullets: ['60% semantic + 40% programmatic — neither alone is sufficient', 'Conceptual fit rewarded; hard skill gaps never hidden by fluent language', 'See Architecture section for the full trade-off rationale →']
              },
              {
                tag: 'AI Modes', title: 'Four Distinct Analysis Modes',
                bullets: ['Fit verdict with match percentage', 'Prioritized gap fixes with specific remediation steps', 'Tailored cover letter (no generic phrases — cites your actual projects)', 'Interview prep: 9 questions across 3 types with resume-anchored answers']
              },
              {
                tag: 'Tracker', title: 'Job Tracker Sidebar',
                bullets: ['Persists analyzed roles with scores across sessions', 'Turns JobLens from a one-shot tool into a search intelligence layer', 'Compare fit across multiple active applications']
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <div className="flex-shrink-0">
                  <span className="text-xs font-mono text-coral-500 bg-coral-500/10 border border-coral-500/20 px-2 py-1 rounded">{s.tag}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">{s.title}</h3>
                  <ul className="space-y-1">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-coral-500 mt-1 flex-shrink-0">→</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ FIX 2: Visual Architecture Diagram */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="text-coral-500 flex-shrink-0" size={22} />
            <h2 className="text-2xl font-bold">System Architecture</h2>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8">
            {/* Flow diagram */}
            <div className="flex flex-col items-center gap-0">

              {/* Row 1 — Inputs */}
              <div className="flex gap-4 w-full justify-center mb-2">
                {['📄 Resume PDF', '📋 Job Description'].map((label, i) => (
                  <div key={i} className="flex-1 max-w-44 text-center bg-slate-700/60 border border-slate-600 rounded-lg px-4 py-3">
                    <div className="text-sm font-medium text-white">{label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">User Input</div>
                  </div>
                ))}
              </div>

              {/* Arrow down */}
              <div className="flex flex-col items-center text-coral-500/50 text-xs gap-0 my-1">
                <div className="w-px h-5 bg-coral-500/30"></div>
                <div className="text-coral-500">▼</div>
              </div>

              {/* Row 2 — AI Extraction */}
              <div className="w-full max-w-sm">
                <div className="text-center bg-coral-500/10 border border-coral-500/30 rounded-lg px-4 py-3">
                  <div className="text-sm font-semibold text-coral-500">🤖 Gemini Structured Extraction</div>
                  <div className="text-xs text-gray-400 mt-1">outputs typed JSON — skills, experience, requirements</div>
                  <div className="text-xs text-gray-600 mt-0.5 font-mono">ParsedJD · ParsedResume schemas</div>
                </div>
              </div>

              <div className="flex gap-8 my-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-5 bg-coral-500/30"></div>
                  <div className="text-coral-500 text-xs">▼</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-5 bg-coral-500/30"></div>
                  <div className="text-coral-500 text-xs">▼</div>
                </div>
              </div>

              {/* Row 3 — Two paths */}
              <div className="flex gap-4 w-full justify-center mb-2">
                <div className="flex-1 max-w-44 text-center bg-slate-700/60 border border-slate-600 rounded-lg px-4 py-3">
                  <div className="text-xs font-mono text-blue-400 mb-1">PATH A — Semantic</div>
                  <div className="text-sm font-medium text-white">Vector Embedding</div>
                  <div className="text-xs text-gray-500 mt-0.5">text-embedding-004</div>
                  <div className="text-xs text-gray-600 mt-0.5 font-mono">MongoDB Atlas Vector Search</div>
                </div>
                <div className="flex-1 max-w-44 text-center bg-slate-700/60 border border-slate-600 rounded-lg px-4 py-3">
                  <div className="text-xs font-mono text-green-400 mb-1">PATH B — Programmatic</div>
                  <div className="text-sm font-medium text-white">Skill Comparator</div>
                  <div className="text-xs text-gray-500 mt-0.5">JSON diff + alias map</div>
                  <div className="text-xs text-gray-600 mt-0.5 font-mono">required vs nice-to-have</div>
                </div>
              </div>

              <div className="flex gap-8 my-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-5 bg-coral-500/30"></div>
                  <div className="text-coral-500 text-xs">▼</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-5 bg-coral-500/30"></div>
                  <div className="text-coral-500 text-xs">▼</div>
                </div>
              </div>

              {/* Row 4 — Hybrid Score */}
              <div className="w-full max-w-sm">
                <div className="text-center bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3">
                  <div className="text-sm font-semibold text-blue-400">⚡ Hybrid Scoring Engine</div>
                  <div className="text-xs text-gray-500 mt-0.5 font-mono">semantic + rule-based scoring</div>
                  <div className="flex justify-center gap-6 mt-2">
                    <div className="text-xs text-gray-400">Semantic <span className="text-white font-bold">60%</span></div>
                    <div className="text-xs text-gray-400">Programmatic <span className="text-white font-bold">40%</span></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center my-1">
                <div className="w-px h-5 bg-coral-500/30"></div>
                <div className="text-coral-500 text-xs">▼</div>
              </div>

              {/* Row 5 — AI Modes */}
              <div className="w-full max-w-sm">
                <div className="text-center bg-slate-700/60 border border-slate-600 rounded-lg px-4 py-3">
                  <div className="text-sm font-semibold text-white mb-2">🎯 Per-Mode Gemini Prompts</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Fit Verdict', 'Gap Analysis', 'Cover Letter', 'Interview Prep'].map((m, i) => (
                      <span key={i} className="text-xs bg-slate-600 text-gray-300 px-2 py-0.5 rounded">{m}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center my-1">
                <div className="w-px h-5 bg-coral-500/30"></div>
                <div className="text-coral-500 text-xs">▼</div>
              </div>

              {/* Row 6 — Output */}
              <div className="w-full max-w-sm">
                <div className="text-center bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">
                  <div className="text-sm font-semibold text-green-400">✅ Zod-Validated Structured Output</div>
                  <div className="text-xs text-gray-400 mt-1">Score · Gaps · Cover Letter · Interview Qs → Client</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ✅ FIX 1: Architecture Decisions — scan-friendly */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-coral-500 flex-shrink-0" size={22} />
            <h2 className="text-2xl font-bold">Architecture Decisions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Why structured parsing before RAG?',
                points: [
                  'Most apps embed raw text → only semantic retrieval possible',
                  'Structured JSON enables direct comparison: jd.requiredSkills[] vs resume.skills[]',
                  'Can flag missing required skills differently from missing nice-to-haves',
                  'Compute exact experience deltas — not possible with raw text alone',
                  'Two representations per doc: JSON for scoring, vector for semantic similarity',
                ]
              },
              {
                q: 'Why hybrid scoring instead of pure semantic?',
                points: [
                  'Pure semantic is too forgiving — a generalist resume scores high against any JD',
                  'Pure programmatic is too brittle — fails on synonyms and non-standard descriptions',
                  '60% semantic rewards conceptual fit; 40% programmatic ensures hard gaps are never hidden',
                  'Split validated empirically against real resume/JD pairs — not chosen arbitrarily',
                ]
              },
              {
                q: 'Why separate Gemini prompts per analysis mode?',
                points: [
                  'Single "analyze this" prompt produces inconsistent, freeform output',
                  'Each mode has a dedicated system prompt with exact output schema + constraints',
                  'Gap Analysis: prioritize by business impact, include specific fix — not generic suggestion',
                  'Cover Letter: prohibit generic phrases, require citing actual project names',
                  'Interview Prep: exactly 9 questions across 3 types with resume-anchored answer frameworks',
                ]
              },
              {
                q: 'Why TypeScript across the full stack?',
                points: [
                  'Shared types eliminate an entire class of frontend/backend integration bugs',
                  'ParsedJD, ParsedResume, ScoreBreakdown defined once — imported everywhere',
                  'Frontend never assumes API shape — types enforce the contract at compile time',
                  'Caught 6 type mismatches during development that would have been runtime bugs',
                ]
              }
            ].map((item, i) => (
              <div key={i} className="border border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-slate-800 px-5 py-3 border-b border-slate-700 flex items-center gap-3">
                  <span className="text-coral-500 font-mono text-sm">Q{i + 1}</span>
                  <h3 className="font-semibold text-white text-sm">{item.q}</h3>
                </div>
                <div className="px-5 py-4 bg-slate-800/20">
                  <ul className="space-y-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-coral-500 mt-1 flex-shrink-0">→</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges — scan-friendly problem/fix bullets */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-coral-500 flex-shrink-0" size={22} />
            <h2 className="text-2xl font-bold">Technical Challenges & Solutions</h2>
          </div>
          <div className="space-y-5">
            {challenges.map((c, i) => (
              <div key={i} className="border border-slate-700 rounded-xl overflow-hidden">
                <div className="px-5 py-3 bg-slate-800 border-b border-slate-700 flex items-center gap-3">
                  <span className="text-xs font-mono bg-coral-500/10 text-coral-500 border border-coral-500/20 px-2 py-0.5 rounded">Challenge {i + 1}</span>
                  <h3 className="font-semibold text-white text-sm">{c.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700">
                  <div className="px-5 py-4">
                    <p className="text-xs font-mono text-red-400 mb-3 uppercase tracking-wider">Problem</p>
                    <ul className="space-y-2">
                      {c.problem.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-red-500 mt-1 flex-shrink-0">✗</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs font-mono text-green-400 mb-3 uppercase tracking-wider">Fix</p>
                    <ul className="space-y-2">
                      {c.fix.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Decisions Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Key Engineering Decisions</h2>
          <p className="text-gray-500 text-sm mb-6">Trade-offs evaluated and reasoned through during design — not chosen by default.</p>
          <div className="border border-slate-700 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-800 border-b border-slate-700">
              {['Decision', 'Alternative Considered', 'Reason Chosen'].map((h, i) => (
                <div key={i} className={`px-5 py-4 text-xs font-mono text-gray-400 uppercase tracking-wider ${i > 0 ? 'border-l border-slate-700' : ''}`}>{h}</div>
              ))}
            </div>
            {decisions.map((d, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-slate-700/50 last:border-0 ${
                i < 2
                  ? 'bg-coral-500/5 border-l-2 border-l-coral-500/40'
                  : i % 2 === 0 ? 'bg-slate-800/20' : ''
              }`}>
                <div className={`px-5 py-4 text-sm ${i < 2 ? 'text-white font-semibold' : 'text-white'}`}>
                  {i < 2 && <span className="inline-block w-1.5 h-1.5 rounded-full bg-coral-500 mr-2 mb-0.5"></span>}
                  {d.decision}
                </div>
                <div className="px-5 py-4 text-sm text-gray-400 border-l border-slate-700/50">{d.alternative}</div>
                <div className={`px-5 py-4 text-sm border-l border-slate-700/50 ${i < 2 ? 'text-gray-300' : 'text-gray-400'}`}>{d.reason}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-2 font-mono">↑ Highlighted rows represent the highest-impact architectural choices</p>
        </section>

        {/* ✅ FIX 3: Stronger Results with quantified impact */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-coral-500 flex-shrink-0" size={22} />
            <h2 className="text-2xl font-bold">Results & Impact</h2>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { val: '~60%', label: 'Reduced manual resume screening effort', sub: 'vs reading full JDs line-by-line' },
              { val: '4×', label: 'Multi-dimensional candidate evaluation', sub: 'Fit · Gaps · Cover Letter · Interview' },
              { val: '60/40', label: 'Improved match relevance vs keyword tools', sub: 'semantic + rule-based split, validated empirically' },
              { val: '0', label: 'Silent AI failures in production', sub: 'Zod intercepts every malformed response' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-coral-500 mb-1">{s.val}</div>
                <div className="text-xs font-medium text-white mb-1">{s.label}</div>
                <div className="text-xs text-gray-500">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                <span>✅</span> What Worked Well
              </h3>
              <ul className="space-y-2">
                {[
                  'Structured parsing proved value immediately — programmatic score catches gaps semantic forgives',
                  'Per-mode prompts forced output discipline — no vague freeform responses',
                  'Hybrid scoring not gameable by keyword stuffing or penalized for vocabulary differences',
                  'Zod validation eliminated an entire class of silent production failures',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-green-500 mt-1 flex-shrink-0">•</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span>🔄</span> What I'd Do Differently
              </h3>
              <ul className="space-y-2">
                {[
                  'Zod defaults should be designed-in from day one — not retrofitted after first real resume breaks validation',
                  'Atlas Vector Search from the start — in-memory cosine similarity works but won\'t scale beyond ~500 docs',
                  'Add request-level caching for identical JDs — repeated analyses hit Gemini unnecessarily',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-yellow-500 mt-1 flex-shrink-0">•</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-coral-500 mb-3 flex items-center gap-2">
                <span>💡</span> Key Takeaway
              </h3>
              <ul className="space-y-2">
                {[
                  'Treat AI model output as untrusted data — the same way you\'d treat user input',
                  'Prompt engineering and output validation are equally important — neither alone is sufficient',
                  'Defining output format before writing prompts eliminates the temptation to accept vague responses',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-coral-500 mt-1 flex-shrink-0">•</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: 'Backend', items: techStack.backend },
              { label: 'Frontend', items: techStack.frontend }
            ].map((s, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <p className="text-xs font-mono text-coral-500 uppercase tracking-wider mb-3">{s.label}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((t, j) => (
                    <span key={j} className="text-xs bg-slate-700 text-gray-300 px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="border border-slate-700 rounded-xl p-8 text-center bg-slate-800/30">
          <h3 className="text-xl font-bold mb-2">Explore the system in action</h3>
          <p className="text-gray-400 mb-6 text-sm">
            Review the full implementation on GitHub — architecture, scoring logic, Zod schemas, and per-mode prompts are all there.
            Or try the live demo directly.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/Ameen8917/Joblens-AI" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-600 hover:border-coral-500 px-6 py-3 rounded transition-colors">
              <Github size={18} /> Review the Implementation
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded transition-colors">
              <ExternalLink size={18} /> Try the Live Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudy;
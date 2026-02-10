"use client";
import Projects from "../components/Projects"; 
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Trophy, Cpu, Code, Database, ChevronDown, Phone, X } from "lucide-react";
import { TypingEffect } from "../components/ui/TypingEffect";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const handleGlowMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };
  
  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -8;
    const ry = ((x / rect.width) - 0.5) * 8;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const handleTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "rotateX(0) rotateY(0)";
  };

  useEffect(() => {
    document.body.classList.add("animated-bg");
    return () => document.body.classList.remove("animated-bg");
  }, []);

  return (
    <main
      className="min-h-screen bg-background text-textMain font-sans selection:bg-primary/30"
      onMouseMove={(e) => {
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
      }}
      >
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/profile.jpeg" alt="Profile photo" width={32} height={32} className="w-8 h-8 rounded-full object-cover border border-white/10" />
            <span className="text-sm text-textMuted">Abhishek Kumar</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm font-medium text-textMuted hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-sm font-medium text-textMuted hover:text-white transition-colors">Experience</a>
            <a href="#achievements" className="text-sm font-medium text-textMuted hover:text-white transition-colors">Achievements</a>
            <a href="/resume" className="text-sm font-medium text-textMuted hover:text-white transition-colors">Resume</a>
          </div>
          <div className="flex items-center gap-3">
            {/* UPDATED GITHUB LINK HERE */}
            <a href="https://github.com/Abhishek007-pixel" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-surface hover:bg-surface/80 transition-colors border border-white/10 text-textMuted hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/workwithabhi007/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-surface hover:bg-surface/80 transition-colors border border-white/10 text-textMuted hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center items-center text-center min-h-[90vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 relative w-40 h-40 md:w-48 md:h-48 group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-colors"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
               <Image 
                 src="/profile.jpeg" 
                 alt="Abhishek Kumar" 
                 fill 
                 className="object-cover"
                 priority
               />
            </div>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Opportunities
          </div>
          
          <div className="mb-4">
            <TypingEffect texts={["AI Engineer", "Distributed Systems", "Full‑Stack Developer", "IoT + Edge Computing"]} speed={60} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-8">
            Building <span className="text-primary">Intelligent</span> <br />
            Systems <span className="text-textMuted">&</span> Solutions
          </h1>
          
          <p className="text-xl text-textMuted max-w-2xl mb-12 leading-relaxed">
            I am a <b>Hybrid Engineer</b> bridging the gap between hardware engineering and high-level software development. 
            Driving impact through AI, Distributed Systems, and Strategic Consulting.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" onMouseMove={handleGlowMove} className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-bold transition-all transform hover:scale-105 magnetic hover-glow">
              View Projects
            </a>
            <button onMouseMove={handleGlowMove} onClick={() => setContactOpen(true)} className="px-8 py-4 bg-surface border border-white/10 text-white rounded-full font-bold transition-all hover-glow">
              Contact Me
            </button>
            <a href="/AbhishekCV.pdf" target="_blank" rel="noopener noreferrer" onMouseMove={handleGlowMove} className="px-8 py-4 bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all hover-glow">
              View Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-8 bg-surface border border-white/10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-textMuted text-lg leading-relaxed">
              I design and build end‑to‑end systems that connect real‑world hardware with resilient, scalable software. My focus areas include
              Generative AI (LLMs, RAG), backend architecture (event‑driven systems, distributed design), and product thinking.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold mb-2">Strengths</h4>
                <ul className="text-sm text-textMuted space-y-2 list-disc list-inside">
                  <li>System design & scalability</li>
                  <li>Applied AI with guardrails</li>
                  <li>Hardware‑software integration</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold mb-2">What I’m exploring</h4>
                <ul className="text-sm text-textMuted space-y-2 list-disc list-inside">
                  <li>Agentic workflows & tool‑use</li>
                  <li>CRDTs for collaborative apps</li>
                  <li>Performance‑first UI engineering</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-8 bg-background rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-3">Stats</h3>
            <div className="space-y-3 text-textMuted">
              <div className="flex items-center justify-between"><span>Projects</span><span className="text-white font-semibold">10+</span></div>
              <div className="flex items-center justify-between"><span>Hackathons</span><span className="text-white font-semibold">6</span></div>
              <div className="flex items-center justify-between"><span>Open‑source repos</span><span className="text-white font-semibold">8</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS ARSENAL */}
      <section className="py-20 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
            <p className="text-textMuted">Weaponry for the digital age</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Column */}
              <div className="p-6 bg-background rounded-2xl border border-white/5 hover:border-accent/30 transition-colors tilt" onMouseMove={handleTiltMove} onMouseLeave={handleTiltLeave}>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI & GenAI</h3>
                <div className="flex flex-wrap gap-2">
                  {['LLMs', 'RAG', 'FAISS', 'Prompt Eng', 'Python'].map(s => (
                    <span key={s} className="px-3 py-1 text-sm bg-surface border border-white/10 rounded-lg text-textMuted">{s}</span>
                  ))}
                </div>
              </div>

              {/* Backend Column */}
              <div className="p-6 bg-background rounded-2xl border border-white/5 hover:border-primary/30 transition-colors tilt" onMouseMove={handleTiltMove} onMouseLeave={handleTiltLeave}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Backend Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'FastAPI', 'Distributed Sys'].map(s => (
                    <span key={s} className="px-3 py-1 text-sm bg-surface border border-white/10 rounded-lg text-textMuted">{s}</span>
                  ))}
                </div>
              </div>

              {/* Core Column */}
              <div className="p-6 bg-background rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors tilt" onMouseMove={handleTiltMove} onMouseLeave={handleTiltLeave}>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Core Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'DSA', 'Algorithms', 'OOP', 'OS'].map(s => (
                    <span key={s} className="px-3 py-1 text-sm bg-surface border border-white/10 rounded-lg text-textMuted">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* PROJECTS SECTION */}
      <Projects />

      {/* EXPERIENCE & AWARDS */}
      <section id="experience" className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-24">
        
        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center"><ChevronDown className="mr-2"/> Experience</h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface rounded-2xl border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Engineering Intern</h3>
                  <p className="text-primary text-sm font-semibold">SKOOLLAGE EDTECH</p>
                </div>
                <span className="text-xs text-textMuted bg-white/5 px-2 py-1 rounded">2025</span>
              </div>
              <ul className="text-textMuted text-sm leading-relaxed list-disc list-inside space-y-1">
                <li>Supported development of interactive, skill-based learning modules using React.js and Node.js.</li>
                <li>Worked on backend RESTful APIs and basic database operations for student, course, and mentorship management.</li>
                <li>Assisted in implementing a Retrieval-Augmented Generation (RAG) based content retrieval system to reduce response latency and improve answer relevance.</li>
                <li>Collaborated with cross-functional teams to align technical features with student learning outcomes and platform goals.</li>
              </ul>
            </div>

            <div className="p-6 bg-surface rounded-2xl border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Growth Intern</h3>
                  <p className="text-primary text-sm font-semibold">FACTAPP</p>
                </div>
                <span className="text-xs text-textMuted bg-white/5 px-2 py-1 rounded">2023</span>
              </div>
              <p className="text-textMuted text-sm leading-relaxed">
                Engineered automated data pipelines that significantly reduced operational overhead. Transformed raw data into strategic insights for business expansion.
              </p>
            </div>

            <div className="p-6 bg-surface rounded-2xl border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Sponsorship Head</h3>
                  <p className="text-accent text-sm font-semibold">ENTROPY TECH</p>
                </div>
                <span className="text-xs text-textMuted bg-white/5 px-2 py-1 rounded">2024</span>
              </div>
              <p className="text-textMuted text-sm leading-relaxed">
                Orchestrated high-value partnerships and led a cross-functional team for a premier technical festival.
              </p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div id="achievements" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center"><Trophy className="mr-2 text-yellow-500"/> Achievements</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 bg-gradient-to-br from-surface to-surface/50 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="text-4xl font-black text-white/10">01</div>
              <div>
                <h4 className="font-bold text-lg">Meta Hacker Cup 2025</h4>
                <p className="text-textMuted text-sm">Qualified Round 2 • Top 1500 Global</p>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-surface to-surface/50 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="text-4xl font-black text-white/10">02</div>
              <div>
                <h4 className="font-bold text-lg">TCS CodeVita</h4>
                <p className="text-textMuted text-sm">Global Rank 1180</p>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-surface to-surface/50 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="text-4xl font-black text-white/10">03</div>
              <div>
                <h4 className="font-bold text-lg">ThinkQbator Innovation Mela</h4>
                <p className="text-textMuted text-sm">Top 10 Team (SafeSchool Project)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-surface/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase italic tracking-tighter opacity-90">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Scale</span><span className="ml-1 text-white">?</span>
          </h2>
          <p className="text-textMuted text-lg mb-12">
            Open to pioneering roles in AI, Software Engineering, and Technical Consulting.
          </p>
          <a href="mailto:abhishek.kumar22b@iiitg.ac.in" className="text-2xl md:text-4xl font-bold border-b-2 border-primary hover:text-primary transition-colors pb-1">
            abhishek.kumar22b@iiitg.ac.in
          </a>
          
          <div className="mt-20 flex justify-between items-center text-sm text-textMuted">
            <p>© 2025 Abhishek Kumar</p>
            <div className="flex gap-6 font-medium">
              <span>ORIGINS</span>
              <span>ARSENAL</span>
              <span>WORKS</span>
            </div>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setContactOpen(false)}
                className="absolute top-6 right-6 text-textMuted hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
              <div className="space-y-4 text-textMuted">
                <a href="tel:8057666181" className="flex items-center gap-3 text-white hover:text-primary transition-colors"><Phone className="w-5 h-5"/><span>8057666181</span></a>
                <a href="mailto:abhishek.kumar22b@iiitg.ac.in" className="flex items-center gap-3 text-white hover:text-primary transition-colors"><Mail className="w-5 h-5"/><span>abhishek.kumar22b@iiitg.ac.in</span></a>
                <a href="https://www.linkedin.com/in/workwithabhi007/" target="_blank" className="flex items-center gap-3 text-white hover:text-primary transition-colors"><Linkedin className="w-5 h-5"/><span>linkedin.com/in/workwithabhi007/</span></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </main>
  );
}
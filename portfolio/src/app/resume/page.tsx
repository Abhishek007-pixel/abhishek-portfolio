"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Trophy, BookOpen, Briefcase, Code, ArrowLeft } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-textMain font-sans">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div className="animated-bg" />
        </div>
        <div className="max-w-5xl mx-auto px-6 py-16 relative">
          <a href="/" className="inline-flex items-center gap-2 text-textMuted hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </a>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">Abhishek Kumar</h1>
              <p className="mt-2 text-textMuted">B.Tech — Electronics & Communication Engineering · IIIT Guwahati</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="tel:8057666181" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-white/10 hover:bg-surface/80"><Phone className="w-4 h-4"/><span>+91 8057666181</span></a>
              <a href="mailto:abhishek.kumar22b@iiitg.ac.in" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-white/10 hover:bg-surface/80"><Mail className="w-4 h-4"/><span>abhishek.kumar22b@iiitg.ac.in</span></a>
              <a href="https://github.com/workwithabhi007" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-white/10 hover:bg-surface/80"><Github className="w-4 h-4"/><span>github.com/workwithabhi007</span></a>
              <a href="https://www.linkedin.com/in/workwithabhi007/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-white/10 hover:bg-surface/80"><Linkedin className="w-4 h-4"/><span>linkedin.com/in/workwithabhi007/</span></a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Education */}
        <section id="education">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="grid gap-4">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">B.Tech, Indian Institute of Information Technology, Guwahati</h3>
                  <p className="text-textMuted">Electronics and Communication Engineering</p>
                </div>
                <span className="text-xs text-textMuted bg-white/5 px-2 py-1 rounded">2022 – Present</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Senior Secondary — ISC</h3>
                </div>
                <span className="text-xs text-textMuted bg-white/5 px-2 py-1 rounded">2021</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Secondary — ICSE</h3>
                </div>
                <span className="text-xs text-textMuted bg-white/5 px-2 py-1 rounded">2019</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Engineering Intern — Skoollage EdTech, Remote</h3>
                <p className="text-textMuted text-sm">May 2025 – July 2025</p>
              </div>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-textMuted list-disc list-inside">
              <li>Supported development of interactive, skill-based learning modules using React.js and Node.js.</li>
              <li>Worked on backend RESTful APIs and basic database operations for student, course, and mentorship management.</li>
              <li>Assisted in implementing a Retrieval-Augmented Generation (RAG) based content retrieval system to reduce response latency and improve answer relevance.</li>
              <li>Collaborated with cross-functional teams to align technical features with student learning outcomes and platform goals.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Growth Intern (Paid) — FACTAPP, Remote</h3>
                <p className="text-textMuted text-sm">June 2023 – July 2023</p>
              </div>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-textMuted list-disc list-inside">
              <li>Contributed to data-driven product and business initiatives in a fast-paced startup environment.</li>
              <li>Built and automated data workflows and reporting pipelines to improve operational efficiency.</li>
              <li>Collaborated with cross-functional teams to translate requirements into actionable insights.</li>
            </ul>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-bold">Highlighted Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt">
              <h3 className="font-semibold">MediVerse · Distributed Backend Services Platform</h3>
              <p className="text-xs text-textMuted">Node.js · MongoDB · OAuth · WebRTC · AI APIs</p>
              <ul className="mt-3 space-y-2 text-sm text-textMuted list-disc list-inside">
                <li>Designed and implemented distributed backend handling real-time user requests.</li>
                <li>Developed RESTful APIs with clear contracts and predictable error handling.</li>
                <li>Implemented secure authentication and role-based access control.</li>
                <li>Optimized backend workflows to support concurrent users with consistent performance.</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt">
              <h3 className="font-semibold">LegalAid · BNS AI Retrieval System</h3>
              <p className="text-xs text-textMuted">Python · FastAPI · FAISS · BM25 · LLMs</p>
              <ul className="mt-3 space-y-2 text-sm text-textMuted list-disc list-inside">
                <li>Owned end-to-end development from document ingestion to API deployment.</li>
                <li>Built an API-first backend using FastAPI for low-latency structured responses.</li>
                <li>Implemented hybrid retrieval (BM25 + FAISS) for accuracy over large legal texts.</li>
                <li>Applied prompt engineering and context-bounding to reduce LLM hallucinations.</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-surface rounded-2xl border border-white/10 tilt">
              <h3 className="font-semibold">Personal Finance Data Processing System</h3>
              <p className="text-xs text-textMuted">Node.js · Express.js · MongoDB · JWT</p>
              <ul className="mt-3 space-y-2 text-sm text-textMuted list-disc list-inside">
                <li>Implemented secure authentication and session management with JWT.</li>
                <li>Developed low-latency REST APIs and optimized MongoDB schemas.</li>
                <li>Ensured predictable behavior through structured error handling and validation.</li>
                <li>Tested services under concurrent access to validate stability and performance.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-5 h-5 text-green-400" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-surface rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2">Programming</h4>
              <p className="text-sm text-textMuted">Python, JavaScript, C++</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2">Backend & APIs</h4>
              <p className="text-sm text-textMuted">Node.js, Express.js, FastAPI, REST APIs, JWT/OAuth</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2">Frontend</h4>
              <p className="text-sm text-textMuted">React.js, Component-based UI</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2">AI & GenAI</h4>
              <p className="text-sm text-textMuted">LLMs, Prompt Engineering, RAG, FAISS, BM25</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2">Databases</h4>
              <p className="text-sm text-textMuted">MongoDB, MySQL, PostgreSQL, Vector DBs</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2">Cloud & Deployment</h4>
              <p className="text-sm text-textMuted">AWS (basic), Render, Netlify, Linux CLI</p>
            </div>
          </div>
        </section>

        {/* Honors & Certifications */}
        <section id="honors">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold">Honors & Certifications</h2>
          </div>
          <ul className="space-y-2 text-sm text-textMuted">
            <li>Meta Hacker Cup 2025 — Qualified Round 2 (Global Ranks: 1528 Practice, 1604 Round 1, 1864 Round 2).</li>
            <li>TCS CodeVita — Global Rank 1180 (Username: abhik0007).</li>
            <li>ThinkQbator Innovation Mela 2025 — Top 10 teams.</li>
            <li>Tata Imagination Challenge 2024 — Semi-Finalist.</li>
            <li>Sponsorship Head — Entropy Tech (Yuvaan Fest).</li>
            <li>Machine Learning Certificate — Coursera.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
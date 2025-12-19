// src/components/Projects.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SafeSchool Wearable",
    category: "IoT + AI FOCUS",
    shortDesc: "An AI-powered wearable device for student safety.",
    fullDesc: "A complete hardware-software solution featuring real-time stress detection and emergency alerts. The device uses ESP32 sensors to monitor vitals and sends data to an AI backend for anomaly detection.",
    tech: ["Python", "IoT Sensors", "Embedded C++", "Real-time Alerts"],
    impact: "Selected for ThinkQbation Innovation Mela 2025.",
    link: "https://github.com/Abhishek007-pixel/SafeSchool_Wearable_AI.git",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "MediVerse",
    category: "SDE & DISTRIBUTED SYSTEMS",
    shortDesc: "Distributed Backend Services Platform for Healthcare.",
    fullDesc: "A scalable backend architecture capable of handling high-concurrency requests. Implements sharding, load balancing concepts, and WebRTC for real-time communication.",
    tech: ["Node.js", "WebRTC", "OAuth", "MongoDB", "Sharding"],
    impact: "Optimized for high concurrency and real-time comms.",
    link: "https://github.com/Abhishek007-pixel/Mediverse_1.git",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    title: "LegalAid RAG",
    category: "GENAI FOCUS",
    shortDesc: "Bharatiya Nyaya Sanhita (BNS) AI Retrieval System.",
    fullDesc: "A specialized RAG pipeline designed to retrieve legal information with high accuracy. Uses Hybrid Retrieval (BM25 + FAISS) to minimize hallucinations.",
    tech: ["Python", "FastAPI", "FAISS", "LangChain", "LLMs"],
    impact: "Provides evidence-backed legal outputs.",
    link: "https://github.com/Abhishek007-pixel/legal_aid_bns_rag.git",
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: 4,
    title: "Personal Finance",
    category: "FINTECH",
    shortDesc: "Modular client-server architecture for finance.",
    fullDesc: "A secure dashboard for tracking personal finances, featuring JWT authentication and complex MongoDB aggregation pipelines for data visualization.",
    tech: ["Node.js", "Express", "JWT", "MongoDB Aggregation"],
    impact: "Ensures predictable system behavior.",
    link: "https://github.com/Abhishek007-pixel/personal-finance-dashboard.git",
    color: "from-orange-500 to-red-400"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="projects">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Works</span></h2>
        <p className="text-textMuted text-lg">Interactive prototypes and production-ready systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity`} />
            
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-medium tracking-wider text-primary border border-white/10 mb-4">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-textMuted mb-6">{project.shortDesc}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.slice(0, 3).map((t, i) => (
                <span key={i} className="text-xs text-textMuted bg-black/30 px-2 py-1 rounded border border-white/5">
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && <span className="text-xs text-textMuted py-1">+More</span>}
            </div>

            <div className="flex items-center text-sm text-primary font-medium group-hover:underline decoration-1 underline-offset-4">
              Click to view details <ExternalLink className="w-4 h-4 ml-2" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 text-textMuted hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
              <span className="text-primary text-sm tracking-widest uppercase font-semibold mb-6 block">
                {selectedProject.category}
              </span>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              <div className="bg-black/30 rounded-xl p-4 mb-6 border border-white/5">
                <h4 className="text-sm font-semibold text-textMuted mb-2 uppercase">Impact</h4>
                <p className="text-white italic">"{selectedProject.impact}"</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
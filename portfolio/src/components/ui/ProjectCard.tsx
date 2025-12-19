"use client";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "./badge";
import { Github, Info } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  description: string;
  tech: string[];
  impact: string;
  github?: string;
  delay?: number;
}

export function ProjectCard({ title, category, summary, tech, github, delay }: ProjectCardProps) {
  return (
    <div className="h-full">
      <GlassCard delay={delay} className="relative overflow-hidden flex flex-col h-full border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
        <div className="space-y-3 flex-grow">
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] uppercase tracking-wider">
            {category}
          </Badge>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-zinc-400 text-sm">{summary}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
           {tech.slice(0, 3).map(t => (
             <span key={t} className="text-xs text-zinc-500 border border-white/5 px-2 py-1 rounded">{t}</span>
           ))}
        </div>

        {github && (
          <a href={github} target="_blank" className="mt-6 flex items-center justify-center w-full py-3 bg-white/5 hover:bg-blue-600 text-white rounded-xl font-bold transition-colors text-sm">
            <Github size={16} className="mr-2" /> View Code
          </a>
        )}
      </GlassCard>
    </div>
  );
}
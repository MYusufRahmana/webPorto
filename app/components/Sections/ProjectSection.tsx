// app/components/Sections/ProjectSection.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import ExpandableCardDemo from "../demo-grid/expandable-card-demo-standard";
import { projectsData } from "@/data/project";

// Definisikan interface untuk Project
interface Project {
  id: number;
  title: string;
  short_description: string;
  description: string;
  image: string;
  project_url?: string;
}

// Definisikan interface untuk Props
interface ProjectSectionProps {
  projects?: Project[];
}

export function ProjectSection({
  projects = projectsData,
}: ProjectSectionProps) {
  if (!projects.length) return null;

  // Transform projectsData ke format yang diterima ExpandableCardDemo
  const cards = projects.map((project) => ({
    title: project.title,
    description: project.short_description,
    src: project.image,
    ctaText: "Demo",
    ctaLink: project.project_url || "#",
    content: () => <p>{project.description}</p>,
  }));

  return (
    <section className="relative py-16 overflow-hidden bg-[#19222D]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#C6F10E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      {/* Section Identifier */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-8 top-16 z-10 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <span className="text-5xl font-black text-[#C6F10E]/20">04</span>
          <div className="w-12 h-[1px] bg-[#C6F10E]/30" />
          <span className="text-xs tracking-[0.2em] text-[#C6F10E] font-medium">
            PROJECTS
          </span>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-[#C6F10E] via-white to-[#C6F10E] bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-gray-400 max-w-xl mx-auto mt-2"
          >
            Project yang pernah saya kerjakan
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C6F10E] to-transparent mx-auto mt-4"
          />
        </div>

        {/* Total Projects Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <span className="text-4xl font-bold text-[#C6F10E]">
            {projects.length}
          </span>
          <span className="text-gray-400 ml-2">Total Projects</span>
        </motion.div>

        {/* Expandable Card Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ExpandableCardDemo cards={cards} />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 grid grid-cols-3 gap-1 opacity-5">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#C6F10E] rounded-full" />
        ))}
      </div>
    </section>
  );
}

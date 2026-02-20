// app/components/Sections/ExperienceSection.tsx
"use client";

import { motion } from "motion/react";
import { Timeline } from "@/app/components/Timeline/timeline";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiencesData } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceSectionProps {
  experiences?: typeof experiencesData;
}

export function ExperienceSection({
  experiences = experiencesData,
}: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect for background
      gsap.to(".experience-bg-gradient", {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hitung statistik dari data
  const totalYears = experiences.length;
  const totalTechs = [
    ...new Set(experiences.flatMap((exp) => exp.technologies)),
  ].length;

  if (!experiences.length) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-[#19222D]"
    >
      {/* Background Elements */}
      <div className="experience-bg-gradient absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#C6F10E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      {/* Section Identifier */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-8 top-16 z-10 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <span className="text-5xl font-black text-[#C6F10E]/20">03</span>
          <div className="w-12 h-[1px] bg-[#C6F10E]/30" />
          <span className="text-xs tracking-[0.2em] text-[#C6F10E] font-medium">
            EXPERIENCE
          </span>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header - Compact */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-[#C6F10E] via-white to-[#C6F10E] bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-gray-400 max-w-xl mx-auto mt-1"
          >
            Perjalanan karir dan pengalaman profesional saya
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C6F10E] to-transparent mx-auto mt-3"
          />
        </div>

        {/* Timeline */}
        <Timeline data={experiences} />
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-1 opacity-5">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#C6F10E] rounded-full" />
        ))}
      </div>
    </section>
  );
}

// app/components/Sections/AboutMe.tsx
"use client";

import { motion } from "motion/react";
import { AboutMe } from "@/app/components/AboutMe/AboutMe";

interface Profile {
  full_name?: string;
  about?: string;
  email?: string;
  phone?: string;
  address?: string;
  skills?: string[];
  photo_url?: string;
  cv_url?: string;
}

interface AboutSectionProps {
  profile?: Profile | null;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#19222D] via-[#1E2A36] to-[#19222D]" />

      {/* Section Identifier */}
      <div className="absolute left-0 top-0 w-full h-32 bg-gradient-to-b from-[#19222D] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-8 top-20 z-10 hidden lg:block"
      >
        <div className="flex items-center gap-4">
          <span className="text-7xl font-black text-[#C6F10E]/20">01</span>
          <div className="w-16 h-[1px] bg-[#C6F10E]/30" />
          <span className="text-xs tracking-[0.3em] text-[#C6F10E] font-medium">
            ABOUT
          </span>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#C6F10E] to-white bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C6F10E] to-transparent mx-auto mt-6"
          />
        </div>

        <AboutMe
          name={profile?.full_name || "Yusuf Rahmana"}
          email={profile?.email || "yusuf@email.com"}
          phone={profile?.phone || "+62 812-3456-7890"}
          location={profile?.address || "Jakarta, Indonesia"}
          about={profile?.about}
          skills={profile?.skills || []}
          photo_url={profile?.photo_url}
          cv_url={profile?.cv_url}
        />
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-10 right-10 grid grid-cols-3 gap-2 opacity-10">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-2 h-2 bg-[#C6F10E] rounded-full"
          />
        ))}
      </div>
    </section>
  );
}

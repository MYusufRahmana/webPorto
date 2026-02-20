"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Lanyard from "../Lanyard/Lanyard";

interface AboutMeProps {
  name: string;
  email: string;
  phone: string;
  location: string;
  about?: string;
  skills?: string[];
  photo_url?: string;
  cv_url?: string | null;
}

export function AboutMe({
  name,
  email,
  phone,
  location,
  about,
  skills = [],
}: AboutMeProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animasi variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
    >
      {/* Left Column - Lanyard */}
      <motion.div variants={fadeInUp} className="lg:col-span-4">
        <div className="sticky top-24 space-y-6">
          {/* Lanyard Container */}
          <div className="relative group">
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C6F10E] to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

            {/* Lanyard Wrapper - with proper dimensions */}
            <div className="relative w-full aspect-square max-w-[300px] mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E2A36] to-[#19222D]">
                <div className="w-full h-full scale-[1.2]">
                  <Lanyard
                    position={[0, 0, isMobile ? 20 : 16]}
                    gravity={[0, -40, 0]}
                    fov={isMobile ? 30 : 25}
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#C6F10E]/5 rounded-full blur-3xl" />
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-start gap-4 pt-4"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#C6F10E]">2+</div>
              <div className="text-xs text-gray-400">Years</div>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#C6F10E]">10+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[#C6F10E]">∞</div>
              <div className="text-xs text-gray-400">Passion</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Middle Column - Personal Info */}
      <motion.div variants={fadeInUp} className="lg:col-span-4">
        <div className="space-y-6">
          {/* Name */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-[#C6F10E] via-white to-[#C6F10E] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {name}
            </span>
          </motion.h2>

          {/* About */}
          {about && (
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#C6F10E] to-purple-600 rounded-full" />
              <p className="text-gray-300 leading-relaxed pl-4 italic border-l border-gray-800">
                &ldquo;{about}&rdquo;
              </p>
            </motion.div>
          )}

          {/* Contact Info Cards */}
          <motion.div variants={fadeInUp} className="space-y-4 mt-8">
            {/* Email Card */}
            <motion.div
              whileHover={!isMobile ? { x: 10 } : {}}
              className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#C6F10E]/30"
            >
              <div className="w-10 h-10 rounded-lg bg-[#C6F10E]/10 flex items-center justify-center group-hover:bg-[#C6F10E]/20 transition-colors shrink-0">
                <svg
                  className="w-5 h-5 text-[#C6F10E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-[#C6F10E] transition-colors break-all font-medium truncate block"
                >
                  {email}
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={!isMobile ? { x: 10 } : {}}
              className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#C6F10E]/30"
            >
              <div className="w-10 h-10 rounded-lg bg-[#C6F10E]/10 flex items-center justify-center group-hover:bg-[#C6F10E]/20 transition-colors shrink-0">
                <svg
                  className="w-5 h-5 text-[#C6F10E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href={`tel:${phone}`}
                  className="text-white hover:text-[#C6F10E] transition-colors font-medium truncate block"
                >
                  {phone}
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={!isMobile ? { x: 10 } : {}}
              className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#C6F10E]/30"
            >
              <div className="w-10 h-10 rounded-lg bg-[#C6F10E]/10 flex items-center justify-center group-hover:bg-[#C6F10E]/20 transition-colors shrink-0">
                <svg
                  className="w-5 h-5 text-[#C6F10E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">{location}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Column - Skills */}
      <motion.div variants={fadeInUp} className="lg:col-span-4">
        <div className="sticky top-24 space-y-6">
          {/* Section Title */}
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white">Skills</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#C6F10E] to-transparent" />
            <span className="text-sm text-[#C6F10E] font-mono">
              {skills.length.toString().padStart(2, "0")}
            </span>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-3"
          >
            {(skills.length > 0
              ? skills
              : ["React", "Next.js", "TypeScript", "Laravel"]
            ).map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={!isMobile ? { scale: 1.05, y: -5 } : {}}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C6F10E] to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />
                <div className="relative h-full px-4 py-3 bg-[#1E2A36] rounded-lg border border-white/10 group-hover:border-transparent transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6F10E] group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C6F10E] to-purple-600 rounded-b-lg"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise badges */}
          <motion.div variants={fadeInUp} className="pt-4">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-4 h-4 text-[#C6F10E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-400">Expertise Areas</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Frontend", "Backend", "Database", "Mobile"].map(
                (area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-[#C6F10E]/10 hover:border-[#C6F10E]/30 transition-all duration-300"
                  >
                    {area}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

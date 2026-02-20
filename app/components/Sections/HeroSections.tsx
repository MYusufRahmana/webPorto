// app/components/Sections/HeroSections.tsx
"use client";

import { motion } from "motion/react";
import GlitchText from "../GlitchText/GlitchText";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import RotatingText from "../RotatingText/RotatingText";
import Squares from "../Squares/Squares";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  fullName?: string;
  cvUrl?: string | null;
  scrollTexts?: string[];
}

export function HeroSection({
  fullName = "YUSUF RAHMANA",
  cvUrl = "/cv.pdf",
  scrollTexts = ["Web Developer • ", "Frontend Dev • ", "Full Stack • "],
}: HeroSectionProps) {
  const firstName = fullName.split(" ")[0] || "YUSUF";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#19222D]">
      {/* Squares Background */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={isMobile ? 20 : 30}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.1)"
          hoverFillColor="#C6F10E"
        />
      </div>

      {/* Decorative gradient orbs - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-64 h-64 bg-[#C6F10E]/10 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 h-screen">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 h-full items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 w-full space-y-3 md:space-y-4 lg:space-y-6 pt-16 md:pt-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
                I'm Ready For Jobs
              </h1>
              <RotatingText
                texts={["Web Developer", "Mobile Developer", "UI/UX Designer"]}
                mainClassName="px-2 py-1 sm:px-3 sm:py-1.5 bg-[#C6F10E] text-[#19222D] font-bold rounded-lg shadow-lg shadow-[#C6F10E]/20 w-fit text-xs sm:text-sm md:text-base"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                rotationInterval={2500}
              />
            </div>

            <div className="-mt-1">
              <GlitchText
                speed={1}
                enableShadows
                enableOnHover={false}
                className="hi-name text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight"
              >
                HI, I'M {firstName}
              </GlitchText>
            </div>

            <div className="mt-1 md:mt-2">
              <ScrollVelocity
                texts={scrollTexts}
                velocity={isMobile ? 50 : 70}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[#C6F10E]"
                damping={50}
                stiffness={400}
                numCopies={isMobile ? 3 : 5}
              />
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 sm:mt-6"
            >
              <motion.a
                href={cvUrl || "#"}
                download={!!cvUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-[#C6F10E] text-[#19222D] font-semibold rounded-lg overflow-hidden shadow-lg shadow-[#C6F10E]/20 hover:shadow-xl hover:shadow-[#C6F10E]/30 transition-all duration-300 text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="relative z-10">Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
        <div className="w-5 h-10 border border-white/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-[#C6F10E] rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-[#19222D] to-transparent pointer-events-none" />
    </section>
  );
}

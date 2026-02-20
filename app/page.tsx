// app/page.tsx
"use client";

import { HeroSection } from "./components/Sections/HeroSections";
import { AboutSection } from "./components/Sections/AboutMe";
import { CertificateSection } from "./components/Sections/CertificateSection";
import { ExperienceSection } from "./components/Sections/ExperienceSection";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import {
  profileData,
  certificatesData,
  projectsData,
  scrollTexts,
  experiencesData,
} from "@/data";

// Import icon components langsung di sini
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiFigma,
  SiFlutter,
  SiFirebase,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";

// Definisikan techLogos di sini
const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
    category: "frontend",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
    category: "frontend",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    category: "language",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "language",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    category: "frontend",
  },
  {
    node: <SiLaravel />,
    title: "Laravel",
    href: "https://laravel.com",
    category: "backend",
  },
  {
    node: <SiPhp />,
    title: "PHP",
    href: "https://php.net",
    category: "backend",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://mysql.com",
    category: "database",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://figma.com",
    category: "design",
  },
  {
    node: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/MYusufRahmana",
    category: "tools",
  },
  {
    node: <FaGitAlt />,
    title: "Git",
    href: "https://git-scm.com",
    category: "tools",
  },
  {
    node: <SiFlutter />,
    title: "Flutter",
    href: "https://flutter.dev",
    category: "mobile",
  },
  {
    node: <SiFirebase />,
    title: "Firebase",
    href: "https://firebase.google.com",
    category: "backend",
  },
  {
    node: <FaNodeJs />,
    title: "Node.js",
    href: "https://nodejs.org",
    category: "backend",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://docker.com",
    category: "tools",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://python.org",
    category: "language",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#19222D] text-white">
      {/* Hero Section */}
      <HeroSection
        fullName={profileData.full_name}
        scrollTexts={scrollTexts}
        cvUrl={profileData.cv_url}
      />

      {/* Tech Divider - Left */}
      <div className="relative py-8 my-8">
        <div className="relative z-10 w-full px-0">
          <div className="h-[80px] relative overflow-hidden w-full">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={50}
              gap={60}
              scaleOnHover
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection profile={profileData} />

      {/* Tech Divider - Right */}
      <div className="relative py-8 my-8">
        <div className="relative z-10 w-full px-0">
          <div className="h-[80px] relative overflow-hidden w-full">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="right"
              logoHeight={50}
              gap={60}
              scaleOnHover
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <CertificateSection certificates={certificatesData} />

      {/* Tech Divider - Left */}
      <div className="relative py-8 my-8">
        <div className="relative z-10 w-full px-0">
          <div className="h-[80px] relative overflow-hidden w-full">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={50}
              gap={60}
              scaleOnHover
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>

      {/* Project Section */}
      <ExperienceSection experiences={experiencesData} />

      {/* Tech Divider - Right */}
      <div className="relative py-8 my-8">
        <div className="relative z-10 w-full px-0">
          <div className="h-[80px] relative overflow-hidden w-full">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="right"
              logoHeight={50}
              gap={60}
              scaleOnHover
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

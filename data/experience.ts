// data/experiences.ts
export const experiencesData = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "PT Teknologi Maju",
    location: "Jakarta, Indonesia",
    start_date: "Jan 2023",
    end_date: "Present",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop",
    description: [
      "Mengembangkan aplikasi web menggunakan React dan Next.js untuk klien enterprise",
      "Berkolaborasi dengan tim desain untuk implementasi UI/UX yang responsif dan modern",
      "Optimasi performa aplikasi hingga 40% melalui code splitting dan lazy loading",
      "Memimpin daily stand-up dan code review untuk tim frontend",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"],
  },
  {
    id: 2,
    position: "Junior Developer",
    company: "Startup Digital",
    location: "Bandung, Indonesia",
    start_date: "Jun 2022",
    end_date: "Dec 2022",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop",
    description: [
      "Membantu pengembangan fitur baru pada aplikasi mobile menggunakan Flutter",
      "Testing dan debugging aplikasi untuk memastikan kualitas code",
      "Dokumentasi kode dan membuat panduan penggunaan aplikasi",
      "Berkontribusi dalam sprint planning dan retrospective",
    ],
    technologies: ["Flutter", "Firebase", "GetX", "Git"],
  },
  {
    id: 3,
    position: "Intern Web Developer",
    company: "Digital Agency",
    location: "Yogyakarta, Indonesia",
    start_date: "Jan 2022",
    end_date: "May 2022",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1740&auto=format&fit=crop",
    description: [
      "Mempelajari dan mengimplementasikan teknologi web development",
      "Membantu tim dalam pembuatan website company profile",
      "Melakukan testing dan debugging aplikasi",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
  },
];

export function getCurrentExperience() {
  return experiencesData.find((exp) => exp.end_date === "Present");
}

export function getExperienceById(id: number) {
  return experiencesData.find((exp) => exp.id === id);
}

// data/experiences.ts
export const experiencesData = [
  {
    id: 1,
    position: "Web Developer",
    company: "Balai Besar K3 Jakarta",
    location: "Jakarta, Indonesia",
    start_date: "Des 2025",
    end_date: "Present",
    images: [
      "/assets/Experience/fotoBalai.jpeg",
      "/assets/Experience/fotobalai2.jpeg", // Tambahkan gambar lain jika ada
      "/assets/Experience/fotobalai3.jpeg",
    ],
    description: [
      "Mengembangkan website Balai Besar K3 Jakarta menggunakan Laravel dan Tailwind CSS",
      "Mengembangkan website Pelanayanan Balai Besar K3 Jakarta menggunakan Laravel dan Tailwind CSS",
      "Bekerja sama dengan tim desain untuk memastikan tampilan yang responsif dan menarik",
      "Mengoptimalkan performa website untuk meningkatkan pengalaman pengguna",
    ],
    technologies: ["Laravel", "MySql", "Tailwind CSS", "CSS"],
  },
  {
    id: 2,
    position: "Junior Developer",
    company: "Startup Digital",
    location: "Bandung, Indonesia",
    start_date: "Jun 2022",
    end_date: "Dec 2022",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop",
    ],
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

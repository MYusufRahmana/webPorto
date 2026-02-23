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
];

export function getCurrentExperience() {
  return experiencesData.find((exp) => exp.end_date === "Present");
}

export function getExperienceById(id: number) {
  return experiencesData.find((exp) => exp.id === id);
}

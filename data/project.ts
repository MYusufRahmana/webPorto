// data/projects.ts
export const projectsData = [
  {
    id: 1,
    title: "Website Portofolio",
    short_description: "Website portfolio interaktif dengan animasi modern",
    description:
      "Website portfolio pribadi dengan desain modern, animasi smooth, dan performa optimal menggunakan Next.js dan Tailwind CSS.",
    image: "/assets/Experience/Porto.png",
    project_url: "https://myusufporto.netlify.app/",
  },
  {
    id: 2,
    title: "Monitoring Asset PT Jasa Raharja Cabang Sumatera Selatan",
    short_description:
      "Sistem monitoring asset berbasis mobile dengan dashboard interaktif",
    description:
      "Sistem monitoring asset berbasis mobile dengan dashboard interaktif yang memungkinkan pengawasan real-time kondisi asset di cabang Sumatera Selatan.",
    image: "/assets/Projects/FotoJasaraharja.jpeg",
    project_url: "#",
  },
  {
    id: 3,
    title:
      "Website Absensi Dan Penggajian Karyawan CV Anugerah Tirta Cemerlang ",
    short_description:
      "Website absensi dan penggajian karyawan dengan fitur lengkap",
    description:
      "Website absensi dan penggajian karyawan yang memungkinkan pencatatan kehadiran, pengelolaan data karyawan, dan pembuatan laporan gaji secara otomatis.",
    image: "/assets/Projects/fotoAbsensiKehadiran.jpg",
    project_url: "https://ecommerce.demo.com",
  },
];

export function getProjectById(id: number) {
  return projectsData.find((project) => project.id === id);
}

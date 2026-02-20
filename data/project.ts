// data/projects.ts
export const projectsData = [
  {
    id: 1,
    title: "Aplikasi Monitoring Aset",
    short_description:
      "Mobile app untuk monitoring aset perusahaan secara real-time",
    description:
      "Aplikasi mobile yang memungkinkan perusahaan untuk memantau aset mereka secara real-time, termasuk pelacakan lokasi, pelaporan kerusakan, dan manajemen inventaris.",
    technologies: ["Flutter", "Firebase", "Google Maps", "GetX"],
    image: "/projects/asset-monitoring.jpg",
    github_url: "https://github.com/MYusufRahmana/asset-monitoring",
    project_url: "https://asset-monitoring.demo.com",
    featured: true,
    completion_date: "2024",
    category: ["Mobile", "IoT"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    short_description: "Website portfolio interaktif dengan animasi modern",
    description:
      "Website portfolio pribadi dengan desain modern, animasi smooth, dan performa optimal menggunakan Next.js dan Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/projects/portfolio.jpg",
    github_url: "https://github.com/MYusufRahmana/portfolio",
    project_url: "https://yusufrahmana.dev",
    featured: true,
    completion_date: "2024",
    category: ["Web", "Frontend"],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    short_description: "Full-stack e-commerce solution dengan Laravel",
    description:
      "Platform e-commerce lengkap dengan manajemen produk, keranjang belanja, pembayaran, dan dashboard admin.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Livewire"],
    image: "/projects/ecommerce.jpg",
    github_url: "https://github.com/MYusufRahmana/ecommerce",
    featured: false,
    completion_date: "2023",
    category: ["Web", "Fullstack"],
  },
  {
    id: 4,
    title: "Aplikasi Kasir Restoran",
    short_description:
      "Aplikasi kasir untuk restoran dengan fitur manajemen menu dan laporan",
    description:
      "Aplikasi kasir berbasis web yang memudahkan pencatatan transaksi, manajemen menu, dan pembuatan laporan penjualan.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/cashier.jpg",
    github_url: "https://github.com/MYusufRahmana/cashier-app",
    featured: false,
    completion_date: "2023",
    category: ["Web", "Fullstack"],
  },
  {
    id: 5,
    title: "Weather App",
    short_description: "Aplikasi cuaca real-time dengan API",
    description:
      "Aplikasi sederhana untuk menampilkan informasi cuaca terkini berdasarkan lokasi pengguna.",
    technologies: ["React", "OpenWeather API", "Axios"],
    image: "/projects/weather.jpg",
    github_url: "https://github.com/MYusufRahmana/weather-app",
    project_url: "https://weather.yusufrahmana.dev",
    featured: false,
    completion_date: "2023",
    category: ["Web", "Frontend"],
  },
];

// Fungsi helper untuk projects
export function getFeaturedProjects() {
  return projectsData.filter((project) => project.featured);
}

export function getProjectById(id: number) {
  return projectsData.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string) {
  return projectsData.filter((project) => project.category.includes(category));
}

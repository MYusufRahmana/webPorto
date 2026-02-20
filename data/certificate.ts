// data/certificates.ts
export const certificatesData = [
  {
    id: 1,
    title: "Belajar Data Science",
    image: "/assets/Certificate/belajarDataScience.jpg",
    issuer: "Dicoding",
    year: "2024",
    credential_id: "ABC123",
    credential_url: "https://dicoding.com/cert/ABC123",
  },
  {
    id: 2,
    title: "Design Thinking",
    image: "/assets/Certificate/SertifikatCamy.jpg",
    issuer: "Dicoding",
    year: "2024",
    credential_id: "ABC123",
    credential_url: "https://dicoding.com/cert/ABC123",
  },
  {
    id: 3,
    title: "Design Thinking",
    image: "/assets/Certificate/belajarDasarPemograman.jpg",
    issuer: "Dicoding",
    year: "2024",
    credential_id: "ABC123",
    credential_url: "https://dicoding.com/cert/ABC123",
  },
  {
    id: 4,
    title: "Toefl",
    image: "/assets/Certificate/toefl.jpg",
    issuer: "Dicoding",
    year: "2024",
    credential_id: "ABC123",
    credential_url: "https://dicoding.com/cert/ABC123",
  },
];

// Fungsi untuk mendapatkan certificate berdasarkan ID
export function getCertificateById(id: number) {
  return certificatesData.find((cert) => cert.id === id);
}

// Fungsi untuk mendapatkan certificate terbaru (urut berdasarkan tahun)
export function getLatestCertificates(limit?: number) {
  const sorted = [...certificatesData].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year),
  );
  return limit ? sorted.slice(0, limit) : sorted;
}

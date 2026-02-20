// app/components/Sections/CertificateSection.tsx
"use client";

import { motion } from "motion/react";
import DomeGallery from "../DomeGallery/DomeGallery";
import { useEffect, useState } from "react";

// Interface yang sangat sederhana - hanya title dan image
interface Certificate {
  id: number;
  title: string;
  image: string; // path ke file PNG
}

interface CertificateSectionProps {
  certificates?: Certificate[];
}

export function CertificateSection({
  certificates = [],
}: CertificateSectionProps) {
  const [galleryImages, setGalleryImages] = useState<any[]>([]);

  useEffect(() => {
    if (certificates && certificates.length > 0) {
      // Map data certificate ke format yang diterima DomeGallery
      const images = certificates.map((cert) => ({
        src: cert.image,
        alt: cert.title,
      }));
      setGalleryImages(images);
    }
  }, [certificates]);

  if (!galleryImages.length) return null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#19222D]">
      {/* Section Identifier - Side text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs tracking-[0.3em] text-[#C6F10E] -rotate-90 mb-8 font-medium">
            CERTIFICATES
          </span>
          <div className="w-16 h-[1px] bg-[#C6F10E]/30 -rotate-90" />
          <span className="text-7xl font-black text-[#C6F10E]/20">02</span>
        </div>
      </motion.div>

      {/* Header - hanya menampilkan judul section dan jumlah */}
      <div className="absolute bottom-12 left-0 right-0 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block"
        >
          <h2 className="text-2xl md:text-3xl font-light text-white/90 tracking-wider relative z-10">
            CERTIFICATES
          </h2>
          <div className="absolute -inset-5 bg-[#C6F10E]/5 blur-2xl rounded-full" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-[#C6F10E] mt-1 tracking-widest font-mono"
        >
          ─── {galleryImages.length.toString().padStart(2, "0")} CERTIFICATES
          ───
        </motion.p>
      </div>

      {/* Dome Gallery - Landscape orientation */}
      <div className="w-screen h-screen">
        <DomeGallery
          images={galleryImages}
          fit={1.2} // Perbesar sedikit untuk landscape
          minRadius={500} // Kurangi radius agar lebih dekat
          maxVerticalRotationDeg={3} // Kurangi rotasi vertikal
          segments={40} // Tambah segment untuk lebih banyak tile
          dragDampening={2}
          grayscale={false} // Matikan grayscale agar warna sertifikat asli
          overlayBlurColor="#19222D"
          imageBorderRadius="12px" // Border radius lebih kecil untuk landscape
          openedImageBorderRadius="16px"
          openedImageWidth="500px" // Lebar lebih besar untuk landscape
          openedImageHeight="350px" // Tinggi proporsional untuk landscape
        />
      </div>
    </section>
  );
}

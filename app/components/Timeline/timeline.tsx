// app/components/Timeline/Timeline.tsx
"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
  id: number; // Tambahkan id
  position: string;
  company: string;
  location?: string;
  start_date: string;
  end_date: string;
  description: string[];
  technologies: string[];
  images?: string[] | null; // Ubah dari image ke images (array)
  image?: string | null; // Tetap ada untuk backward compatibility
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }

    // GSAP Animations for timeline items
    timelineRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=50",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const formatPeriod = (start: string, end: string) => {
    return `${start} - ${end}`;
  };

  // Fungsi untuk mendapatkan array gambar
  const getImages = (item: TimelineEntry): string[] => {
    if (item.images && item.images.length > 0) {
      return item.images;
    }
    if (item.image) {
      return [item.image];
    }
    return [];
  };

  // Fungsi untuk menentukan class grid berdasarkan jumlah gambar
  const getGridClass = (imageCount: number) => {
    if (imageCount === 1) return "grid-cols-1";
    if (imageCount === 2) return "grid-cols-2";
    if (imageCount === 3) return "grid-cols-3";
    return "grid-cols-2 md:grid-cols-4"; // 4 atau lebih gambar
  };

  // Fungsi untuk menentukan tinggi gambar berdasarkan jumlah
  const getImageHeightClass = (imageCount: number) => {
    if (imageCount === 1) return "h-48 md:h-64";
    if (imageCount === 2) return "h-32 md:h-48";
    if (imageCount === 3) return "h-28 md:h-40";
    return "h-24 md:h-36"; // 4 atau lebih gambar
  };

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => {
          const images = getImages(item);
          const hasImages = images.length > 0;
          const gridClass = getGridClass(images.length);
          const imageHeightClass = getImageHeightClass(images.length);

          return (
            <div
              key={item.id}
              className="flex justify-start pt-8 md:pt-12 md:gap-8"
              ref={(el) => {
                timelineRefs.current[index] = el;
              }}
            >
              {/* Left Column - Timeline Dot & Title */}
              <div className="sticky flex flex-col md:flex-row z-40 items-start top-40 self-start w-24 md:w-56">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#C6F10E]/10 flex items-center justify-center border-2 border-[#C6F10E]/30">
                    <div className="h-3 w-3 rounded-full bg-[#C6F10E]" />
                  </div>
                  <div className="ml-4 md:hidden">
                    <h3 className="text-lg font-bold text-white">
                      {item.position}
                    </h3>
                    <p className="text-xs text-[#C6F10E]">{item.company}</p>
                  </div>
                </div>
                <div className="hidden md:block md:pl-12">
                  <h3 className="text-xl font-bold text-white">
                    {item.position}
                  </h3>
                  <p className="text-sm text-[#C6F10E] font-medium">
                    {item.company}
                  </p>
                  {item.location && (
                    <p className="text-xs text-gray-400 mt-1">
                      {item.location}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {formatPeriod(item.start_date, item.end_date)}
                  </p>
                </div>
              </div>

              {/* Right Column - Content with Multiple Images */}
              <div className="relative pl-8 md:pl-0 w-full flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#C6F10E]/30 transition-all duration-300 group">
                  {/* Mobile-only info */}
                  <div className="md:hidden mb-3 space-y-1">
                    {item.location && (
                      <p className="text-xs text-gray-400">{item.location}</p>
                    )}
                    <p className="text-xs text-gray-500">
                      {formatPeriod(item.start_date, item.end_date)}
                    </p>
                  </div>

                  {/* Multiple Images Section - Grid Layout */}
                  {hasImages && (
                    <div className="mb-6">
                      <div className={`grid ${gridClass} gap-3`}>
                        {images.slice(0, 4).map((imgSrc, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative group/image overflow-hidden rounded-lg"
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10" />
                            <img
                              src={imgSrc}
                              alt={`${item.company} - ${imgIndex + 1}`}
                              className={`
                                w-full ${imageHeightClass} object-cover 
                                transition-transform duration-700
                                group-hover/image:scale-110
                              `}
                            />
                            <div className="absolute bottom-2 left-2 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                              <span className="text-xs text-white bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                                {item.company}{" "}
                                {images.length > 1 ? `#${imgIndex + 1}` : ""}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Show remaining images count if more than 4 */}
                      {images.length > 4 && (
                        <div className="mt-2 text-right">
                          <span className="text-xs text-gray-400">
                            +{images.length - 4} gambar lainnya
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description List */}
                  {item.description && item.description.length > 0 && (
                    <ul className="space-y-2 mb-3">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-[#C6F10E] mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs bg-[#C6F10E]/10 text-[#C6F10E] rounded-full border border-[#C6F10E]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-3 md:left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#C6F10E]/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#C6F10E] via-purple-500 to-transparent from-[0%] via-[30%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Gallery images (could be testimonials in the future)
const images = [
  {
    id: 1,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=1280&height=720",
    alt: "Modern classroom",
  },
  {
    id: 2,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4ffcfae24b1435a6b406a1734e2c1acb37974c9f?width=1280&height=720",
    alt: "Teacher training",
  },
  {
    id: 3,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/eb17782e5f0f164e0bd079840c1e5e91853a5ced?width=1280&height=720",
    alt: "Educational innovation",
  },
];

const AUTO_SCROLL_INTERVAL = 4000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll logic (like Services/Products)
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="gallery"
      className="relative box-border flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full m-0 p-0">
        <div className="box-border flex max-w-screen-md flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
          <div className="box-border flex items-center m-0 p-0">
            <div
              className="box-border text-sm sm:text-base font-semibold leading-6 m-0 p-0"
              style={{ color: "#0C0504" }}
            >
              Gallery
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
            <h2
              className="box-border w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words"
              style={{ color: "#0C0504" }}
            >
              Explore moments from our programs and classrooms.
            </h2>
          </div>
        </div>
        <div className="box-border flex flex-col items-center gap-8 lg:gap-16 w-full m-0 p-0">
          <div className="box-border w-full flex flex-col items-center justify-center m-0 p-0">
            <div className="relative w-full flex items-center justify-center max-w-full">
              {/* Previous Button */}
              <button
                aria-label="Previous"
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-1.5 sm:p-2 transition-colors focus:outline-none border border-gray-200"
                tabIndex={0}
                style={{ outline: "none" }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="#0C0504"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Image Carousel */}
              <div className="w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg bg-gray-50 p-0">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={images[current].id}
                    className="flex flex-col items-center text-center w-full h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={images[current].src}
                      alt={images[current].alt}
                      className="box-border w-full h-full object-cover rounded-2xl shadow-lg mx-auto"
                      loading="lazy"
                      style={{ background: "#e5e7eb", aspectRatio: "16/9" }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Next Button */}
              <button
                aria-label="Next"
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-1.5 sm:p-2 transition-colors focus:outline-none border border-gray-200"
                tabIndex={0}
                style={{ outline: "none" }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#0C0504"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                    current === idx ? "bg-[#0C0504]" : "bg-gray-300"
                  } transition-colors focus:outline-none`}
                  aria-label={`Go to image ${idx + 1}`}
                  tabIndex={0}
                  style={{ outline: "none" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

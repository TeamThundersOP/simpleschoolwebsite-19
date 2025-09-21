import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images (could be testimonials in the future)
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Students collaborating in classroom",
    category: "Classroom"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Teacher training workshop",
    category: "Workshop"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Educational innovation lab",
    category: "Innovation"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Students presenting project",
    category: "Presentation"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Outdoor learning activity",
    category: "Outdoor"
  }
];

const AUTO_SCROLL_INTERVAL = 5000;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % images.length;
      result.push({ ...images[index], position: i });
    }
    return result;
  };

  return (
    <section
      id="gallery"
      className="relative box-border flex w-full flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 xl:gap-32 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 overflow-hidden"
    >
      <div className="box-border flex max-w-screen-2xl flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 xl:gap-32 w-full m-0 p-0">
        {/* Header */}
        <div className="box-border flex max-w-screen-lg flex-col items-center text-center gap-4 sm:gap-6 lg:gap-8 w-full m-0 p-0">
          <div className="box-border flex items-center justify-center m-0 p-0">
            <div className="box-border text-[#0C0504] text-base sm:text-lg md:text-xl font-semibold leading-6 m-0 p-0 uppercase tracking-widest">
              Events & Workshops
            </div>
          </div>
          <div className="box-border flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 w-full m-0 p-0">
            <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
              Join our events and courses on education and training and connect in real life
            </h2>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="box-border flex flex-col items-center gap-8 lg:gap-12 w-full m-0 p-0">
          <div className="relative w-full max-w-7xl">
            {/* Navigation Buttons */}
            <button
              aria-label="Previous"
              onClick={prevSlide}
              className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full shadow-lg p-3 sm:p-4 lg:p-5 transition-all duration-200 focus:outline-none border border-gray-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#0C0504]" />
            </button>
            
            <button
              aria-label="Next"
              onClick={nextSlide}
              className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full shadow-lg p-3 sm:p-4 lg:p-5 transition-all duration-200 focus:outline-none border border-gray-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#0C0504]" />
            </button>

            {/* Image Container */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-8 px-16 sm:px-20 lg:px-24 py-12 lg:py-16">
              {getVisibleImages().map((image, index) => (
                <motion.div
                  key={`${image.id}-${currentIndex}`}
                  className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 ${
                    index === 2 
                      ? 'w-80 h-56 sm:w-96 sm:h-64 md:w-[28rem] md:h-80 lg:w-[36rem] lg:h-96 xl:w-[42rem] xl:h-[28rem] z-10 shadow-xl' 
                      : index === 1 || index === 3
                        ? 'w-56 h-40 sm:w-64 sm:h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 xl:w-[28rem] xl:h-80 opacity-80'
                        : 'w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 lg:w-64 lg:h-44 xl:w-80 xl:h-56 opacity-60'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: index === 2 ? 1 : index === 1 || index === 3 ? 0.8 : 0.6,
                    scale: index === 2 ? 1 : index === 1 || index === 3 ? 0.85 : 0.7
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setCurrentIndex((currentIndex + index - 2 + images.length) % images.length)}
                  />
                  {index === 2 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 lg:p-6">
                      <div className="text-white text-sm sm:text-base lg:text-lg font-medium">
                        {image.category}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 lg:gap-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-[#0C0504] scale-110 shadow"
                    : "bg-gray-300 hover:bg-[#0C0504] hover:scale-105"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

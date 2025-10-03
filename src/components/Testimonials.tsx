import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images from School Grads folder
const images = [
  {
    id: 1,
    src: "/assets/images/education-excellence-1.jpg",
    alt: "School Grads educational excellence in action",
    category: "Education",
  },
  {
    id: 2,
    src: "/assets/gallery/classroom-1.jpg",
    alt: "Students engaged in innovative learning",
    category: "Learning",
  },
  {
    id: 3,
    src: "/assets/gallery/classroom-2.jpg",
    alt: "Interactive classroom sessions",
    category: "Classroom",
  },
  {
    id: 4,
    src: "/assets/gallery/educational-activities.jpg",
    alt: "Educational innovation and technology",
    category: "Innovation",
  },
  {
    id: 5,
    src: "/assets/gallery/students-learning.jpg",
    alt: "Modern learning environments",
    category: "Modern Learning",
  },
  {
    id: 6,
    src: "/assets/gallery/students-learning.jpg",
    alt: "Teacher empowerment and training",
    category: "Training",
  },
  {
    id: 7,
    src: "/assets/gallery/classroom-3.jpg",
    alt: "Global pedagogy implementation",
    category: "Pedagogy",
  },
  {
    id: 8,
    src: "/assets/gallery/classroom-2.jpg",
    alt: "Educational transformation in progress",
    category: "Transformation",
  },
  {
    id: 9,
    src: "/assets/gallery/classroom-3.jpg",
    alt: "Student achievement and success",
    category: "Achievement",
  },
  {
    id: 10,
    src: "/assets/gallery/educational-activities.jpg",
    alt: "Collaborative learning experiences",
    category: "Collaboration",
  },
  {
    id: 11,
    src: "/assets/gallery/team-meeting.jpg",
    alt: "School excellence and recognition",
    category: "Excellence",
  },
  {
    id: 12,
    src: "/assets/gallery/students-learning.jpg",
    alt: "Future-ready education solutions",
    category: "Future Ready",
  },
  {
    id: 13,
    src: "/assets/gallery/classroom-1.jpg",
    alt: "Educational leadership development",
    category: "Leadership",
  },
  {
    id: 14,
    src: "/assets/gallery/classroom-2.jpg",
    alt: "Global education standards",
    category: "Global Standards",
  },
  {
    id: 15,
    src: "/assets/gallery/classroom-3.jpg",
    alt: "Educational impact and outcomes",
    category: "Impact",
  },
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
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i - 1 + images.length) % images.length;
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
              Join our events and courses
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
            <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-8 sm:px-12 lg:px-16 py-12 lg:py-16">
              {getVisibleImages().map((image, index) => (
                <motion.div
                  key={`${image.id}-${currentIndex}`}
                  className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 aspect-video ${
                    index === 1
                      ? "w-[48rem] sm:w-[56rem] md:w-[64rem] lg:w-[72rem] xl:w-[80rem] 2xl:w-[88rem] z-10 shadow-xl"
                      : "w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 opacity-70"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === 1 ? 1 : 0.7,
                    scale: index === 1 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() =>
                      setCurrentIndex((currentIndex + index - 1 + images.length) % images.length)
                    }
                  />
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

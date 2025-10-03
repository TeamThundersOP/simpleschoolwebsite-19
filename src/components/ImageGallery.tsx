import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/gallery/classroom-1.jpg",
    alt: "School Grads collaborative learning sessions",
    title: "Collaborative Learning",
  },
  {
    id: 2,
    src: "/assets/gallery/classroom-2.jpg",
    alt: "Teacher empowerment and training workshops",
    title: "Teacher Training Workshop",
  },
  {
    id: 3,
    src: "/assets/gallery/classroom-3.jpg",
    alt: "Interactive learning sessions with global pedagogy",
    title: "Interactive Learning",
  },
  {
    id: 4,
    src: "/assets/gallery/educational-activities.jpg",
    alt: "Students working on innovative projects",
    title: "Project-Based Learning",
  },
  {
    id: 5,
    src: "/assets/gallery/team-meeting.jpg",
    alt: "Digital innovation and technology in education",
    title: "Digital Innovation",
  },
  {
    id: 6,
    src: "/assets/gallery/students-learning.jpg",
    alt: "Educational workshops and skill development",
    title: "Educational Workshop",
  },
  {
    id: 7,
    src: "/assets/gallery/classroom-1.jpg",
    alt: "Group learning activities and peer collaboration",
    title: "Group Activities",
  },
  {
    id: 8,
    src: "/assets/gallery/classroom-2.jpg",
    alt: "Experiential learning and hands-on education",
    title: "Experiential Learning",
  },
];

const ImageGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 5;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentImages = () => {
    const startIndex = currentPage * imagesPerPage;
    return galleryImages.slice(startIndex, startIndex + imagesPerPage);
  };

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full m-0 p-0">
        {/* Header */}
        <div className="box-border flex max-w-screen-md flex-col items-center gap-3 sm:gap-4 w-full m-0 p-0 text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-[#0C0504] rounded-full flex items-center justify-center mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V7"
                stroke="#b2e61b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 7H4L5 19C5.05556 19.5329 5.49827 20 6 20H18C18.5017 20 18.9444 19.5329 19 19L20 7Z"
                stroke="#b2e61b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M10 11V17" stroke="#b2e61b" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 11V17" stroke="#b2e61b" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="box-border flex items-center m-0 p-0">
            <div className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0 uppercase tracking-widest">
              Gallery
            </div>
          </div>

          <div className="box-border flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
            <h2 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
              Events & Workshops
            </h2>
            <p className="box-border w-full text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words max-w-2xl">
              Grow your network with exceptional individuals and have fun with education and
              learning at our pan India meet-ups.
            </p>
          </div>
        </div>

        {/* Gallery Container */}
        <div className="box-border flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 w-full m-0 p-0">
          <div className="relative w-full max-w-6xl">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 p-2 sm:p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Previous images"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#0C0504]" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 p-2 sm:p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Next images"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0C0504]" />
            </button>

            {/* Image Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 px-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {getCurrentImages().map((image, index) => (
                <motion.div
                  key={`${image.id}-${currentPage}`}
                  className={`
                    relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                    ${index === 0 ? "sm:col-span-1 lg:col-span-2 lg:row-span-2" : ""}
                    ${index === 2 ? "lg:row-span-2" : ""}
                  `}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`
                    relative w-full overflow-hidden
                    ${index === 0 ? "h-64 sm:h-80 lg:h-96" : "h-48 sm:h-56 lg:h-44"}
                    ${index === 2 ? "lg:h-96" : ""}
                  `}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Title Overlay */}
                    {image.title && (
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Page Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                    index === currentPage
                      ? "bg-[#0C0504] border-[#0C0504] scale-110 shadow"
                      : "bg-gray-200 border-gray-300 hover:bg-[#0C0504] hover:border-[#0C0504]"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

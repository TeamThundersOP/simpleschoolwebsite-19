import React, { useState, useRef, useEffect } from "react";
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface Webinar {
  id: number;
  photo: string;
  name: string;
  location: string;
  date: string;
  time: string;
  title: string;
}

const COMMON_PHOTO =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const webinars: Webinar[] = [
  {
    id: 1,
    photo: COMMON_PHOTO,
    name: "Dr. Sarah Johnson",
    location: "New York, USA",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    title: "Innovative Teaching Methods",
  },
  {
    id: 2,
    photo: COMMON_PHOTO,
    name: "Prof. Michael Chen",
    location: "London, UK",
    date: "March 22, 2024",
    time: "3:00 PM GMT",
    title: "Digital Learning Solutions",
  },
  {
    id: 3,
    photo: COMMON_PHOTO,
    name: "Dr. Emily Rodriguez",
    location: "Toronto, Canada",
    date: "March 29, 2024",
    time: "1:00 PM EST",
    title: "Student Engagement Strategies",
  },
  {
    id: 4,
    photo: COMMON_PHOTO,
    name: "Dr. James Wilson",
    location: "Sydney, Australia",
    date: "April 5, 2024",
    time: "4:00 PM AEST",
    title: "Global Education Trends",
  },
  {
    id: 5,
    photo: COMMON_PHOTO,
    name: "Dr. Lisa Thompson",
    location: "Berlin, Germany",
    date: "April 12, 2024",
    time: "2:00 PM CET",
    title: "Curriculum Development",
  },
  {
    id: 6,
    photo: COMMON_PHOTO,
    name: "Dr. Robert Kim",
    location: "Seoul, South Korea",
    date: "April 19, 2024",
    time: "3:00 PM KST",
    title: "Technology in Education",
  },
];

const CARD_WIDTH = 320; // px, matches max-w-[320px]
const CARDS_PER_SLIDE = 1; // Only 1 card per slide now

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const WebinarCarousel = () => {
  // Looping carousel: duplicate first and last slides for seamless transition
  const slides = chunkArray(webinars, CARDS_PER_SLIDE);
  const totalSlides = slides.length;

  // For seamless looping, add a clone of the last slide at the start and the first slide at the end
  const loopSlides = [
    slides[totalSlides - 1],
    ...slides,
    slides[0],
  ];

  // Start at index 1 (the real first slide)
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  // Handle transition end to reset position if at clone
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (current === 0) {
        // Jump to last real slide (no transition)
        setCurrent(totalSlides);
      } else if (current === totalSlides + 1) {
        // Jump to first real slide (no transition)
        setCurrent(1);
      }
    };
    const node = transitionRef.current;
    if (node) {
      node.addEventListener("transitionend", handleTransitionEnd);
      return () => node.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [current, totalSlides]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  // When jumping to a dot, animate to the correct slide
  const handleDotClick = (idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(idx + 1);
  };

  // Calculate transform
  const slideWidthPercent = 100 / loopSlides.length;
  const translateX = `-${current * 100}%`;

  // Always 1 card per slide, so maxWidth is CARD_WIDTH
  return (
    <section className="w-full flex flex-col items-center bg-white px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28 transition-colors">
      <div className="flex max-w-screen-xl flex-col items-start gap-12 w-full">
        {/* Header */}
        <div className="flex max-w-screen-md flex-col items-start gap-4 w-full">
          <div className="flex items-center">
            <span className="text-[#0C0504] text-sm sm:text-base font-semibold leading-6 uppercase tracking-widest">
              Events
            </span>
          </div>
          <div className="flex flex-col items-start gap-4 lg:gap-6 w-full">
            <h2 className="w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight">
              Upcoming Webinars
            </h2>
            <p className="w-full text-[#0C0504] text-base sm:text-lg font-normal leading-relaxed">
              Join our expert-led webinars to learn about the latest trends in education and innovative teaching methods.
            </p>
          </div>
        </div>
        {/* Carousel */}
        <div className="w-full flex flex-col items-center">
          <div className="relative flex items-center justify-center w-full max-w-[400px] mx-auto">
            <button
              aria-label="Previous Webinar"
              onClick={handlePrev}
              className="absolute left-0 z-10 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-100 p-2 transition-colors disabled:opacity-50"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div
              className="overflow-hidden w-full"
              style={{ maxWidth: `${CARD_WIDTH}px` }}
            >
              <div
                ref={transitionRef}
                className="flex"
                style={{
                  transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
                  transform: `translateX(-${current * 100}%)`,
                  width: `${loopSlides.length * 100}%`,
                }}
              >
                {loopSlides.map((slide, slideIdx) => (
                  <div
                    key={slideIdx}
                    className="flex w-full justify-center"
                    style={{
                      minWidth: `${100 / loopSlides.length}%`,
                      maxWidth: `${100 / loopSlides.length}%`,
                    }}
                  >
                    {slide.map((webinar, idx) => (
                      <div
                        key={webinar.id}
                        className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-200 min-w-[280px] max-w-[320px] w-full flex-shrink-0 mx-2 transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="w-full h-36 sm:h-40 md:h-44 rounded-t-2xl overflow-hidden">
                          <img
                            src={webinar.photo}
                            alt={webinar.title}
                            className="w-full h-full object-cover object-center transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col gap-3 px-5 py-4">
                          <div>
                            <h3 className="text-lg font-semibold text-[#0C0504] leading-tight mb-1">
                              {webinar.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-medium">{webinar.name}</p>
                          </div>
                          <div className="flex flex-col gap-1 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-blue-500 opacity-90" />
                              <span className="truncate">{webinar.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-blue-500 opacity-90" />
                              <span>{webinar.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-blue-500 opacity-90" />
                              <span>{webinar.time}</span>
                            </div>
                          </div>
                          <button
                            className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-full px-4 py-2 text-sm shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            tabIndex={0}
                          >
                            Join Webinar
                          </button>
                        </div>
                      </div>
                    ))}
                    {/* Fill empty slots if last slide has less than 1 (shouldn't happen) */}
                    {slide.length < CARDS_PER_SLIDE &&
                      Array.from({ length: CARDS_PER_SLIDE - slide.length }).map((_, i) => (
                        <div
                          key={`empty-${i}`}
                          className="flex flex-col min-w-[280px] max-w-[320px] w-full mx-2"
                          aria-hidden="true"
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>
            <button
              aria-label="Next Webinar"
              onClick={handleNext}
              className="absolute right-0 z-10 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-100 p-2 transition-colors disabled:opacity-50"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              disabled={isTransitioning}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  idx + 1 === current
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-blue-400"
                }`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCarousel;

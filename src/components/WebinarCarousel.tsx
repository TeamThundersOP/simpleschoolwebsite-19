import React, { useState } from "react";
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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

const WebinarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? webinars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === webinars.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full m-0 p-0">
        {/* Header */}
        <div className="box-border flex max-w-screen-md flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
            <div className="box-border flex items-center m-0 p-0">
            <div className="box-border text-highlight text-sm sm:text-base font-semibold leading-6 m-0 p-0 uppercase tracking-widest">
              Events
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
            <h2 className="box-border w-full text-highlight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
              Upcoming Webinars
            </h2>
            <p className="box-border w-full text-highlight text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words">
              Join our expert-led webinars to learn about the latest trends in education and innovative teaching methods from global experts.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="box-border flex flex-col items-start gap-8 sm:gap-12 lg:gap-16 w-full m-0 p-0">
          <motion.div 
            className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full m-0 p-0 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 p-2 sm:p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Previous webinar"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-highlight" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 p-2 sm:p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Next webinar"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-highlight" />
            </button>
            {/* Show 3 cards starting from currentIndex */}
            {Array.from({ length: 3 }).map((_, i) => {
              const webinarIndex = (currentIndex + i) % webinars.length;
              const webinar = webinars[webinarIndex];
              
              return (
                <motion.article
                  key={`${webinar.id}-${i}`}
                  className="box-border flex flex-col justify-between items-start gap-4 sm:gap-6 lg:gap-8 flex-1 m-0 p-0 group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl sm:rounded-2xl hover:bg-gray-50/50 p-3 sm:p-4 -m-3 sm:-m-4 h-full"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="box-border w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={webinar.photo}
                      alt={webinar.title}
                      className="box-border h-40 sm:h-48 md:h-52 lg:h-56 w-full aspect-[74/45] object-cover m-0 p-0 rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
                    <div className="box-border flex flex-col items-start gap-2 lg:gap-3 w-full m-0 p-0">
                      <h3 className="box-border w-full text-highlight text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-highlight">
                        {webinar.title}
                      </h3>
                      <h4 className="box-border w-full text-highlight text-base md:text-lg font-semibold leading-tight m-0 p-0 break-words transition-colors duration-300">
                        {webinar.name}
                      </h4>
                      <div className="box-border flex flex-col gap-1 w-full text-highlight text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-highlight opacity-70" />
                          <span>{webinar.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-highlight opacity-70" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-highlight opacity-70" />
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-3 sm:px-4 py-2 sm:py-2.5 mt-2 sm:mt-4 rounded-full border-solid transition-all duration-300 hover:shadow-lg hover:scale-105 w-full text-center"
                      style={{
                        backgroundColor: "hsl(var(--highlight))",
                        color: "#fff",
                        borderColor: "hsl(var(--highlight))",
                        transition: "background-color 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "#b2e61b";
                        (e.currentTarget as HTMLElement).style.borderColor = "#b2e61b";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "hsl(var(--highlight))";
                        (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--highlight))";
                      }}
                    >
                      <span
                        className="box-border text-xs sm:text-sm md:text-base font-medium leading-5 sm:leading-6 m-0 p-0"
                        style={{ color: "#fff" }}
                      >
                        Join Webinar
                      </span>
                      <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 12.5L19.5 12.5M19.5 12.5L12.5 5.5M19.5 12.5L12.5 19.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {webinars.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-highlight border-highlight scale-110 shadow"
                    : "bg-gray-200 border-gray-300 hover:bg-highlight hover:border-highlight"
                }`}
                aria-label={`Go to webinar ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCarousel;
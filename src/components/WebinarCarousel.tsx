import React, { useState } from "react";
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
    <section className="w-full flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-white px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="flex max-w-screen-xl flex-col items-center gap-12 lg:gap-16 w-full">
        {/* Header */}
        <div className="flex max-w-screen-md flex-col items-center gap-4 lg:gap-6 w-full text-center">
          <span className="inline-block text-blue-700 text-sm font-bold uppercase tracking-widest bg-blue-100 rounded-full px-4 py-2">
            Events
          </span>
          <h2 className="w-full text-[#0C0504] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Upcoming Webinars
          </h2>
          <p className="w-full text-gray-600 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Join our expert-led webinars to learn about the latest trends in education and innovative teaching methods.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-blue-50 p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Previous webinar"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:bg-blue-50 p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Next webinar"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Cards Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-16">
            {/* Show 3 cards starting from currentIndex */}
            {Array.from({ length: 3 }).map((_, i) => {
              const webinarIndex = (currentIndex + i) % webinars.length;
              const webinar = webinars[webinarIndex];
              
              return (
                <div
                  key={`${webinar.id}-${i}`}
                  className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={webinar.photo}
                      alt={webinar.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-between p-6 flex-1">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#0C0504] leading-tight mb-2">
                          {webinar.title}
                        </h3>
                        <p className="text-sm text-blue-700 font-medium">{webinar.name}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span>{webinar.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Join Webinar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {webinars.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-blue-400"
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
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Webinar {
  id: number;
  photo: string;
  name: string;
  location: string;
  date: string;
  time: string;
  title: string;
}

const WebinarCarousel = () => {
  const webinars: Webinar[] = [
    {
      id: 1,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
      name: "Dr. Sarah Johnson",
      location: "New York, USA",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      title: "Innovative Teaching Methods"
    },
    {
      id: 2,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=450&fit=crop",
      name: "Prof. Michael Chen",
      location: "London, UK",
      date: "March 22, 2024",
      time: "3:00 PM GMT",
      title: "Digital Learning Solutions"
    },
    {
      id: 3,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=450&fit=crop",
      name: "Dr. Emily Rodriguez",
      location: "Toronto, Canada",
      date: "March 29, 2024",
      time: "1:00 PM EST",
      title: "Student Engagement Strategies"
    },
    {
      id: 4,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=450&fit=crop",
      name: "Dr. James Wilson",
      location: "Sydney, Australia",
      date: "April 5, 2024",
      time: "4:00 PM AEST",
      title: "Global Education Trends"
    },
    {
      id: 5,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=450&fit=crop",
      name: "Dr. Lisa Thompson",
      location: "Berlin, Germany",
      date: "April 12, 2024",
      time: "2:00 PM CET",
      title: "Curriculum Development"
    },
    {
      id: 6,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=450&fit=crop",
      name: "Dr. Robert Kim",
      location: "Seoul, South Korea",
      date: "April 19, 2024",
      time: "3:00 PM KST",
      title: "Technology in Education"
    }
  ];

  // Match with UI: dark background, white text, consistent with other sections
  return (
    <section className="box-border w-full flex flex-col items-center gap-12 bg-[#021223] m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 w-full m-0 p-0">
        <div className="box-border flex max-w-screen-md flex-col items-start gap-4 w-full m-0 p-0">
          <div className="box-border flex items-center m-0 p-0">
            <div className="box-border text-white text-sm sm:text-base font-semibold leading-6 m-0 p-0">
              Events
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
            <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
              Upcoming Webinars
            </h2>
            <p className="box-border w-full text-white text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
              Join our expert-led webinars to learn about the latest trends in education and innovative teaching methods.
            </p>
          </div>
        </div>
        <div className="box-border w-full overflow-x-auto m-0 p-0">
          <motion.div
            className="flex gap-8 w-max"
            animate={{
              x: [0, -340 * webinars.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 32,
                ease: "linear",
              },
            }}
          >
            {[...webinars, ...webinars].map((webinar, index) => (
              <motion.article
                key={`${webinar.id}-${index}`}
                className="box-border flex flex-col bg-[#101c2b] rounded-2xl shadow-lg border border-[#22304a] min-w-[280px] max-w-[320px] w-[90vw] sm:w-72 md:w-80 flex-shrink-0 hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="w-full h-36 sm:h-40 md:h-44 rounded-t-2xl overflow-hidden">
                  <img
                    src={webinar.photo}
                    alt={webinar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 px-5 py-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white leading-tight mb-1">
                      {webinar.title}
                    </h3>
                    <p className="text-sm text-[#cbd5e1] font-medium">{webinar.name}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-[#b6c2d6] text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#60a5fa] opacity-80" />
                      <span className="truncate">{webinar.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#60a5fa] opacity-80" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#60a5fa] opacity-80" />
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  <button className="mt-2 bg-gradient-to-r from-[#2563eb] to-[#1e40af] hover:from-[#1d4ed8] hover:to-[#1e3a8a] text-white font-semibold rounded-full px-4 py-2 text-sm shadow transition-colors">
                    Join Webinar
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCarousel;

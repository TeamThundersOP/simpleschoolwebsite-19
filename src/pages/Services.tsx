import React, { memo } from "react";
import { WorldMap } from "@/components/ui/world-map";
import { GraduationCap, Users, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Memoize static data to avoid recreation on each render
const worldMapDots = [
  {
    start: { lat: 20.5937, lng: 78.9629 }, // India
    end: { lat: 61.9241, lng: 25.7482 }, // Finland
  },
  {
    start: { lat: 20.5937, lng: 78.9629 }, // India
    end: { lat: 37.0902, lng: -95.7129 }, // USA
  },
  {
    start: { lat: 20.5937, lng: 78.9629 }, // India
    end: { lat: -1.2921, lng: 36.8219 }, // Kenya (Africa)
  },
];

const services = [
  {
    icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
    title: "For Students",
    subtitle: "Future-Ready Learning (Pre-School to K–12)",
    description:
      "Programs in Coding, AI, English, Maths, Science, Robotics, and Future Skills designed for preschool to high school learners. We build strong foundations and advance skills step by step, preparing students with confidence, creativity, and problem-solving abilities to excel in academics, adapt to challenges, and succeed in future personal and professional journeys.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "For Teachers",
    subtitle: "Professional Development, Training & Certification",
    description:
      "Training, certification, and continuous upskilling programs empower teachers to adopt innovative pedagogy. Teachers access lesson plans, digital resources, and classroom strategies to confidently teach future-ready subjects. With expert mentorship, they strengthen instructional practices, improve student outcomes, and achieve professional growth, equipping them to excel as impactful teachers in today’s evolving educational environment.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-purple-500" />,
    title: "For School Leaders",
    subtitle: "School Transformation & Consultation",
    description:
      "We provide expert support to transform schools into global-standard institutions through audits, consultations, and new school setups. Leaders benefit from participation in Finnish Experience Flagship or Partner School programs. Our approach fosters innovation, builds sustainable growth, and strengthens reputation, ensuring academic excellence and long-term success with future-ready frameworks and progressive leadership practices.",
  },
];

// Extracted ServiceCard for reusability and memoization
const ServiceCard = memo(function ServiceCard({
  icon,
  title,
  subtitle,
  description,
}: (typeof services)[0]) {
  return (
    <article className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group">
      <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
        <div className="transition-colors duration-300 group-hover:[&>*]:text-white">{icon}</div>
      </div>
      <h2 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl font-semibold leading-tight tracking-tight m-0 p-0 transition-colors duration-300 group-hover:text-white">
        {title}
      </h2>
      <h3 className="box-border w-full text-[#0C0504] text-base sm:text-lg md:text-xl font-medium leading-tight tracking-tight m-0 p-0 transition-colors duration-300 group-hover:text-gray-200">
        {subtitle}
      </h3>
      <p className="box-border w-full text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
        {description}
      </p>
    </article>
  );
});

const Services = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Navbar />
    <main className="flex-1 flex flex-col">
      <section
        id="services"
        className="relative box-border flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      >
        {/* WorldMap as a dimmed, light background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center">
          {/* Make the map much lighter by reducing opacity and adding a stronger white overlay */}
          <div className="w-full h-full opacity-20">
            <WorldMap dots={worldMapDots} lineColor="#0ea5e9" />
          </div>
          {/* Stronger white overlay for extra lightness */}
          <div className="absolute inset-0 bg-white/70 dark:bg-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70 dark:from-black/40 dark:via-black/20 dark:to-black/50" />
        </div>

        <div className="relative z-10 box-border flex max-w-screen-xl flex-col items-start gap-8 sm:gap-12 lg:gap-16 w-full m-0 p-0">
          {/* Who We Are Section */}
          <section className="box-border flex max-w-screen-lg flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
            <header className="box-border flex items-center m-0 p-0">
              <span className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0 uppercase tracking-widest">
                Who We Are
              </span>
            </header>
            <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
              <h2 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
                Transforming Indian Education with Global Excellence
              </h2>
              <p className="box-border w-full text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words">
                School Grads is a future-focused education company dedicated to transforming Indian
                classrooms with globally trusted solutions. Backed by three generations of educators
                and innovators, we bring the best of Global pedagogy, Ed-tech apps, and school
                transformation models into local contexts.
              </p>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="box-border flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 w-full m-0 p-0">
            <header className="box-border flex max-w-screen-md flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
              <h3 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
                How We Help
              </h3>
            </header>
            {/* Services Grid */}
            <div className="box-border w-full overflow-x-visible m-0 p-0">
              <div className="box-border grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 m-0 p-0">
                {services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    subtitle={service.subtitle}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default memo(Services);

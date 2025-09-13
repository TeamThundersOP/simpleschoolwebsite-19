import React, { useRef, useEffect } from "react";
import { motion, Variants, useAnimation } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import { GraduationCap, Users, Building2 } from "lucide-react";

const services = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    title: "For Students",
    subtitle: "Future-Ready Learning (Pre-School to K–12)",
    description:
      "Engaging programs in Coding, AI, English, Maths, Science, Robotics, and Future Skills, designed for learners from preschool to high school. We focus on building strong early foundations and progressively advancing skills, preparing students with confidence, creativity, and problem-solving abilities needed to excel in academics and future careers.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "For Teachers",
    subtitle: "Professional Development & Training",
    description:
      "Comprehensive training, certification, and continuous upskilling programs that empower educators to adopt innovative pedagogy. Teachers gain access to ready-to-use lesson plans, digital resources, and classroom strategies, helping them confidently introduce future-ready subjects while receiving ongoing expert support for effective teaching and measurable student outcomes.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-purple-500" />,
    title: "For School Leaders",
    subtitle: "School Transformation & Consultation",
    description:
      "Expert guidance to transform schools into global-standard institutions. We support leaders through audits, strategic consultations, and new school setups, while enabling participation in Finnish Experience Flagship or Partner School programs. Our approach enhances reputation, boosts innovation, and strengthens long-term growth through sustainable, future-focused academic models.",
  },
];

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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 18 } },
};

const AUTO_SCROLL_INTERVAL = 3500; // ms

const Services = () => {
  const [current, setCurrent] = React.useState(0);
  const controls = useAnimation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll logic for mobile
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section
      id="services"
      className="relative box-border flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* WorldMap as a dimmed, light background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center">
        <div className="w-full h-full opacity-40">
          <WorldMap dots={worldMapDots} lineColor="#0ea5e9" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/50 dark:from-black/40 dark:via-black/20 dark:to-black/50" />
      </div>

      <div className="relative z-10 box-border flex max-w-screen-xl flex-col items-start gap-8 sm:gap-12 lg:gap-16 w-full m-0 p-0">
        {/* Who We Are Section */}
        <div className="box-border flex max-w-screen-lg flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
          <div className="box-border flex items-center m-0 p-0">
            <div className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0">
              Who We Are
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
            <h2 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
              Transforming Indian Education with Global Excellence
            </h2>
            <p className="box-border w-full text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words">
              School Grads is a future-focused education company dedicated to transforming Indian classrooms with globally trusted solutions. Backed by three generations of educators and innovators, we bring the best of Finnish pedagogy, digital apps, and school transformation models into local contexts.
            </p>
          </div>
        </div>

        {/* How We Help Section */}
        <div className="box-border flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 w-full m-0 p-0">
          <div className="box-border flex max-w-screen-md flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
            <h3 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
              How We Help
            </h3>
          </div>

          {/* Mobile Carousel */}
          <div className="box-border w-full m-0 p-0 block lg:hidden">
            <div className="relative w-full flex flex-col items-center">
              <motion.div
                key={current}
                className="box-border flex flex-col items-start gap-3 sm:gap-4 w-full max-w-xs mx-auto flex-shrink-0 m-0 p-3 sm:p-4 bg-gray-50/90 rounded-xl sm:rounded-2xl shadow-md backdrop-blur
                  transition-colors duration-300
                  hover:bg-[rgb(3,24,47)] group"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
              >
                <motion.div
                  className="box-border flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/80 rounded-xl sm:rounded-2xl m-0 p-0 shadow
                    transition-colors duration-300
                    group-hover:bg-white/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                >
                  {services[current].icon}
                </motion.div>
                <div className="box-border flex flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
                  <h4 className="box-border w-full text-[#0C0504] text-base sm:text-lg font-medium leading-tight tracking-tight m-0 p-0 break-words
                    transition-colors duration-300 group-hover:text-white">
                    {services[current].title}
                  </h4>
                  <h5 className="box-border w-full text-[#0C0504] text-sm sm:text-base font-semibold leading-tight m-0 p-0 break-words
                    transition-colors duration-300 group-hover:text-white">
                    {services[current].subtitle}
                  </h5>
                  <p className="box-border w-full text-[#0C0504] text-xs sm:text-sm font-normal leading-5 sm:leading-6 m-0 p-0 break-words
                    transition-colors duration-300 group-hover:text-white">
                    {services[current].description}
                  </p>
                </div>
              </motion.div>
              {/* Dots navigation */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      idx === current
                        ? "bg-blue-500 scale-110"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrent(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="box-border w-full overflow-x-visible m-0 p-0 hidden lg:block">
            <motion.div
              className="box-border grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 m-0 p-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {services.map((service, idx) => (
                <motion.article
                  key={service.title}
                  className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl lg:rounded-[32px] shadow-md backdrop-blur
                    transition-colors duration-300
                    hover:bg-[rgb(3,24,47)] group"
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 16 }}
                >
                  <motion.div
                    className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow
                      transition-colors duration-300
                      group-hover:bg-white/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.4, type: "spring" }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words
                      transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h4>
                    <h5 className="box-border w-full text-[#0C0504] text-base md:text-lg font-semibold leading-tight m-0 p-0 break-words
                      transition-colors duration-300 group-hover:text-white">
                      {service.subtitle}
                    </h5>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words
                      transition-colors duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

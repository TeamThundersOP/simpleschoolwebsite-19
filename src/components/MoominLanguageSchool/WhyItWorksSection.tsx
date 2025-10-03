import React from "react";
import { motion } from "framer-motion";

const WhyItWorksSection = () => {
  const reasons = [
    {
      heading: "Play-based & child-centered:",
      text: "Learning feels like play with engaging activities",
    },
    {
      heading: "Blended approach:",
      text: "Children explore language in the app, then use it in group sessions",
    },
    {
      heading: "Daily routine integration:",
      text: "Short bursts help words stick and confidence grow naturally",
    },
    {
      heading: "Finnish pedagogy excellence:",
      text: "Nurturing creativity, curiosity, and social skills development",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-0 bg-gray-50 m-0 px-0 py-0">
      {/* Hero Image Section with Overlay Text */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full">
          <img
            src="/assets/gallery/educational-activities.jpg"
            alt="Moomin Language School Learning Session"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay - clear at top, dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

          {/* Overlay Content - positioned in lower section */}
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why It Works
            </motion.h2>

            {/* Bullet Points */}
            <motion.div
              className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8 max-w-6xl w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {reasons.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 text-left p-2 sm:p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#b2e600] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                    <span className="text-[#b2e600] font-bold">{point.heading}</span> {point.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;

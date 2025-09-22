import React from "react";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const reasons = [
    {
      heading: "Research-based pedagogy:",
      text: "Strong focus on wellbeing and equity for all learners",
    },
    {
      heading: "Practical classroom solutions:",
      text: "That work in real classrooms with measurable outcomes",
    },
    {
      heading: "Globally proven EdTech:",
      text: "Aligned with local curricula and educational standards",
    },
    {
      heading: "Journey of transformation:",
      text: "Inspiration and lasting change for schools, teachers, and students",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-0 bg-gray-50 m-0 px-0 py-0">
      {/* Hero Image Section with Overlay Text */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full">
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="Finnish Education Experience"
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
              Why Choose Finnish Education?
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
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                    <span className="text-yellow-400 font-bold">{point.heading}</span> {point.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative group w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl text-center mx-auto">
            <p className="text-highlight font-semibold text-lg">
              Join the movement with School Grads and be part of transforming 1,000 schools in India
              into Finnish Experience® Schools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

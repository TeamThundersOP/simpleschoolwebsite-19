import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Award } from 'lucide-react';

// Use same family icon styles, icon white, no bg
const ICONS = [
  <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
    <Globe2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
  </span>,
  <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
    <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
  </span>,
  <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
  </span>,
];

const stats = [
  {
    number: "10+",
    label: "Global Products",
    description: "From 3 leading education nations, offering internationally acclaimed models for schools."
  },
  {
    number: "40+",
    label: "Countries",
    description: "Our partners' solutions are trusted and implemented in classrooms around the world."
  },
  {
    number: "1 Million+",
    label: "Students",
    description: "Benefiting from these innovative tools as part of their daily learning journey."
  }
];

const TrustedSolutions = () => {
  return (
    <section
      className="relative box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundColor: '#0b1b45',
        backgroundImage: `url('/assets/pattern-schoolgrads.svg')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '160px 160px',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle overlay for readability */}
      <div
        className="absolute inset-0 z-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          background: 'rgba(11,27,69,0.92)', // #0b1b45 with opacity for overlay
          backdropFilter: 'blur(0.5px)',
        }}
      />
      <div className="relative z-10 box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
        <div className="box-border flex max-w-screen-md flex-col items-start gap-4 w-full m-0 p-0">
          <div className="box-border flex items-center m-0 p-0">
            <div className="box-border text-white text-sm sm:text-base font-semibold leading-6 m-0 p-0">
              Impact
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
            <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
              Trusted Global Solutions with Proven Impact
            </h2>
            <p className="box-border w-full text-white text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
              Our solutions, developed by globally awarded partners, are trusted for their quality, innovation, and decades of service to schools worldwide. Backed by recognition and success across continents, these programs continue to shape the future of education.
            </p>
          </div>
        </div>

        {/* Trust Strip - Company Logos */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Placeholder trust indicators */}
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-white/60 text-xs font-medium">
                Partner {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="box-border grid grid-cols-1 sm:grid-cols-3 gap-4 w-full m-0 p-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.article
              key={index}
              className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full text-center m-0 p-0 relative"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Icon and Number in a single line */}
              <div className="mb-2 flex items-center justify-center gap-4">
                {ICONS[index]}
                <span className="box-border text-white text-4xl font-semibold leading-tight m-0 p-0">
                  {stat.number}
                </span>
              </div>
              <div className="box-border flex flex-col items-center gap-2 m-0 p-0">
                <h3 className="box-border text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-tight m-0 p-0">
                  {stat.label}
                </h3>
              </div>
              <p className="box-border text-white text-sm sm:text-base font-normal leading-6 m-0 p-0">
                {stat.description}
              </p>

            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedSolutions;
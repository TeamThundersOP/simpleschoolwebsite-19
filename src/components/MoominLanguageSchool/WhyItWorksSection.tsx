import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Clock, Globe } from 'lucide-react';

const WhyItWorksSection = () => {
  const reasons = [
    {
      icon: <Gamepad2 className="w-6 h-6 text-highlight" />,
      title: "Play-based & child-centered",
      description: "Learning feels like play"
    },
    {
      icon: <Users className="w-6 h-6 text-highlight" />,
      title: "Blended approach",
      description: "Children explore language in the app, then use it in group sessions"
    },
    {
      icon: <Clock className="w-6 h-6 text-highlight" />,
      title: "Daily routine",
      description: "Short bursts help words stick and confidence grow"
    },
    {
      icon: <Globe className="w-6 h-6 text-highlight" />,
      title: "Finnish pedagogy",
      description: "Nurturing creativity, curiosity, and social skills"
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Why It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="box-border flex h-full w-full p-4 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                {reason.icon}
                <div>
                  <h3 className="font-semibold text-highlight mb-1">{reason.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
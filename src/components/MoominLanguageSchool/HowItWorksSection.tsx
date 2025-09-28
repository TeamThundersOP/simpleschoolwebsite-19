import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Users, Clock } from "lucide-react";

const HowItWorksSection = () => {
  const workSteps = [
    {
      icon: <Smartphone className="w-8 h-8 text-highlight" />,
      title: "Daily App Practice",
      description:
        "5–15 minutes per child, focusing on vocabulary, pronunciation, and simple grammar.",
    },
    {
      icon: <Users className="w-8 h-8 text-highlight" />,
      title: "Weekly Playful Session",
      description: "45 minutes of movement games, songs, stories, drama, and crafts.",
    },
    {
      icon: <Clock className="w-8 h-8 text-highlight" />,
      title: "Built for Early Learners",
      description:
        "No reading or writing required; safe, limited screen time; modeled by native speakers.",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {workSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-center text-center gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-highlight mb-3">{step.title}</h3>
                  <p className="text-highlight opacity-80">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

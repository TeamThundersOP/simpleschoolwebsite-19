import React from "react";
import { motion } from "framer-motion";
import { Download, UserCheck, Tablet, Users, Monitor } from "lucide-react";

const GettingStartedSection = () => {
  const steps = [
    {
      number: "1",
      icon: <Download className="w-6 h-6 text-highlight" />,
      title: "Install the app",
      description: "And set up teacher accounts",
    },
    {
      number: "2",
      icon: <UserCheck className="w-6 h-6 text-highlight" />,
      title: "Create child profiles",
      description: "With photos and Moomin characters",
    },
    {
      number: "3",
      icon: <Tablet className="w-6 h-6 text-highlight" />,
      title: "Introduce daily play",
      description: "1 tablet can serve 5 children",
    },
    {
      number: "4",
      icon: <Users className="w-6 h-6 text-highlight" />,
      title: "Run weekly group sessions",
      description: "For small groups (10–12 children)",
    },
    {
      number: "5",
      icon: <Monitor className="w-6 h-6 text-highlight" />,
      title: "Monitor progress",
      description: "With online tools",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          Getting Started is Simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-highlight text-white rounded-full flex-shrink-0 text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{step.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;

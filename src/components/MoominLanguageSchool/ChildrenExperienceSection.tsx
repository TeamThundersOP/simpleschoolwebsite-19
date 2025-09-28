import React from "react";
import { motion } from "framer-motion";
import { Heart, Gamepad2, Languages, UserCheck, Camera } from "lucide-react";

const ChildrenExperienceSection = () => {
  const experiences = [
    {
      icon: <Heart className="w-6 h-6 text-highlight" />,
      title: "Fun, story-led app",
      description: "Moomin characters as guides",
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-highlight" />,
      title: "1,000+ interactive exercises",
      description: "Games, songs, rhymes, and stories",
    },
    {
      icon: <Languages className="w-6 h-6 text-highlight" />,
      title: "1,700 words and 2,500 phrases",
      description: "Taught in child-friendly themes",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-highlight" />,
      title: "Language Lab",
      description: "Daily speaking practice – listen, record, and replay",
    },
    {
      icon: <Camera className="w-6 h-6 text-highlight" />,
      title: "Personal profiles with photos",
      description: "Even non-readers navigate independently",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          What Children Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full flex-shrink-0">
                  {experience.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{experience.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChildrenExperienceSection;

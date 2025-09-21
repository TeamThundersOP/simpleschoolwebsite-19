import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smile, TrendingUp, Users } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      icon: <Smile className="w-6 h-6 text-highlight" />,
      title: "Children enjoy speaking English",
      description: "And grow more independent"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-highlight" />,
      title: "Steady progress",
      description: "In vocabulary, pronunciation, and confidence"
    },
    {
      icon: <Users className="w-6 h-6 text-highlight" />,
      title: "Educators report improved motivation",
      description: "Better classroom rhythm, and smoother digital integration"
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Results That Families Notice</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="box-border flex h-full w-full p-6 items-start gap-3 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <Check className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{result.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{result.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
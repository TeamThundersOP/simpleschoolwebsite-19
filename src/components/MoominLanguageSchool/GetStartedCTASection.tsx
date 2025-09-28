import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Play } from "lucide-react";

const GetStartedCTASection = () => {
  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-[rgb(17,24,39)] m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Make English a Highlight of the Day
        </h2>
        <p className="text-lg text-white leading-relaxed max-w-3xl">
          Moomin Language School turns just a few minutes into lasting skills. Children enjoy
          learning, teachers enjoy teaching, and schools gain a global-quality program with ease.
        </p>
        <p className="text-xl text-white font-semibold">
          Ready to bring joyful English learning to your classrooms?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-6 py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors font-semibold text-[#0C0504] min-w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowRight className="w-4 h-4 text-[#0C0504]" />
            Let's get started with School Grads
          </motion.button>
          <motion.button
            className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.08)] transition-colors font-semibold text-white min-w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <BookOpen className="w-4 h-4 text-white" />
            Request Demo Pack
          </motion.button>
          <motion.button
            className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.08)] transition-colors font-semibold text-white min-w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play className="w-4 h-4 text-white" />
            Start Free Trial
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTASection;

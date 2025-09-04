import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="home" 
      className="box-border flex w-full min-h-[700px] sm:min-h-[800px] lg:min-h-[900px] flex-col items-center gap-8 lg:gap-16 bg-[#021223] m-0 pt-[100px] sm:pt-[120px] lg:pt-[152px] pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-1 w-full m-0 p-0">
        {/* Content Section - Left */}
        <div className="box-border flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-6 lg:gap-8 m-0 p-0 lg:pt-8">
          <motion.div 
            className="box-border flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 w-full m-0 p-0"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="box-border w-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[56px] font-normal leading-tight tracking-tight m-0 p-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering Schools with Global Pedagogy & Learning Solutions
            </motion.h1>
            <motion.p 
              className="box-border w-full text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed m-0 p-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At School Grads, we bring world-class pedagogy like Finnish education and digital innovations to Indian classrooms. Our mission is to enhance learning outcomes, empower teachers, and elevate your school's reputation with globally trusted solutions.
            </motion.p>
          </motion.div>
          <motion.div 
            className="box-border flex items-center gap-4 m-0 p-0 flex-wrap justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-6 py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors text-sm sm:text-base min-w-[160px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="box-border text-[#0C0504] font-medium leading-6 m-0 p-0">
                Explore Solutions
              </span>
            </motion.button>
            <motion.button 
              className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-sm sm:text-base min-w-[160px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="box-border text-white font-medium leading-6 m-0 p-0">
                Partner With Us
              </span>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Images Section - Right */}
        <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
          <motion.div 
            className="box-border flex items-start gap-2 sm:gap-4 w-full max-w-lg lg:max-w-none overflow-hidden m-0 p-0 max-sm:flex-col max-sm:gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="box-border flex w-full sm:w-1/2 lg:w-[280px] flex-col items-start gap-2 sm:gap-4 m-0 p-0 max-sm:w-full animate-[scroll-up_20s_ease-in-out_infinite_alternate]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/80b8d4c4368f57d1a679e5cdf038d34eca5f4d99?width=623"
                alt="Educational environment"
                className="box-border h-40 sm:h-48 lg:h-[280px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-2xl lg:rounded-[32px] transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/948bd8919e8bbec333014a204acb18af2633946f?width=623"
                alt="Students learning"
                className="box-border h-40 sm:h-48 lg:h-[280px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-2xl lg:rounded-[32px] transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e63b1d63cbd27af7036663df83041e4641f0f134?width=623"
                alt="Educational tools"
                className="box-border h-40 sm:h-48 lg:h-[280px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-2xl lg:rounded-[32px] transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="box-border flex w-full sm:w-1/2 lg:w-[280px] flex-col items-start gap-2 sm:gap-4 translate-y-0 sm:translate-y-[-60px] lg:translate-y-[-120px] m-0 p-0 max-sm:w-full max-sm:translate-y-0 animate-[scroll-down_25s_ease-in-out_infinite_alternate]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/68c487557f681f8a5d55ed95b51389df3e5febeb?width=623"
                alt="Modern classroom"
                className="box-border h-40 sm:h-48 lg:h-[280px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-2xl lg:rounded-[32px] transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4ffcfae24b1435a6b406a1734e2c1acb37974c9f?width=623"
                alt="Teacher training"
                className="box-border h-40 sm:h-48 lg:h-[280px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-2xl lg:rounded-[32px] transition-transform duration-300 hover:scale-105"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/eb17782e5f0f164e0bd079840c1e5e91853a5ced?width=623"
                alt="Educational innovation"
                className="box-border h-40 sm:h-48 lg:h-[280px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-2xl lg:rounded-[32px] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

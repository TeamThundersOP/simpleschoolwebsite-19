import React from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", setDisplayValue);
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration });
    }
  }, [motionValue, value, duration, isInView]);
  
  return (
    <motion.div
      ref={ref}
      className="box-border w-full text-white text-[80px] font-bold leading-[104px] m-0 p-0 max-sm:text-6xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}{suffix}
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28" style={{background: 'linear-gradient(135deg, #03182F 0%, #021223 100%)'}}>
      <div className="box-border flex w-full max-w-screen-xl flex-col items-start gap-12 lg:gap-20 m-0 p-0">
        <div className="box-border flex items-start gap-8 lg:gap-20 w-full m-0 p-0 max-lg:flex-col max-lg:gap-8">
          <div className="box-border flex flex-col items-start gap-4 flex-1 m-0 p-0">
            <div className="box-border flex items-center w-full m-0 p-0">
              <div className="box-border text-white text-sm sm:text-base font-semibold leading-6 m-0 p-0">
                Impact
              </div>
            </div>
            <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
              Proven Success in Education Worldwide
            </h2>
          </div>
          <div className="box-border flex flex-col items-start gap-6 lg:gap-8 flex-1 m-0 p-0">
            <p className="box-border w-full text-white text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
              Our educational programs have transformed classrooms globally. With a focus on innovative teaching methods, schools report significant improvements in student engagement and performance. Join the ranks of successful institutions embracing change.
            </p>
            <div className="box-border flex items-center gap-4 lg:gap-6 m-0 p-0 max-sm:flex-col max-sm:w-full">
              <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2.5 rounded-full border-solid border-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] transition-colors max-sm:w-full text-sm sm:text-base">
                <span className="box-border text-white font-normal leading-6 m-0 p-0">
                  Learn More
                </span>
              </button>
              <button className="box-border flex justify-center items-center gap-2 cursor-pointer m-0 px-4 py-2.5 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors group max-sm:w-full text-sm sm:text-base">
                <span className="box-border text-white font-normal leading-6 m-0 p-0">
                  Sign Up
                </span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M9.68591 7.00781C9.78674 7.00781 9.86371 7.03822 9.94177 7.11621L14.8861 12.0605C14.94 12.1145 14.9652 12.1564 14.9769 12.1846V12.1855C14.9917 12.2211 15.0004 12.2609 15.0004 12.3096C15.0004 12.3583 14.9917 12.398 14.9769 12.4336V12.4346C14.9652 12.4627 14.94 12.5047 14.8861 12.5586L9.91736 17.5273C9.83959 17.6051 9.77245 17.627 9.69177 17.624C9.59774 17.6205 9.51688 17.5887 9.43103 17.5029C9.35291 17.4248 9.32166 17.348 9.32166 17.2471C9.32166 17.1462 9.35291 17.0693 9.43103 16.9912L14.1127 12.3096L9.40564 7.60254C9.32797 7.52484 9.30603 7.45853 9.30896 7.37793C9.31241 7.28366 9.34498 7.20227 9.43103 7.11621C9.50896 7.0384 9.58532 7.00789 9.68591 7.00781Z" fill="white" stroke="white"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-col items-start gap-8 lg:gap-16 w-full m-0 p-0">
          <div className="box-border w-full overflow-x-auto lg:overflow-visible m-0 p-0">
            <motion.div 
              className="box-border flex items-start gap-6 lg:gap-12 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0 m-0 p-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
            >
              <motion.div 
                className="box-border flex flex-col items-start gap-2 w-64 lg:w-full flex-shrink-0 m-0 pl-6 lg:pl-8 p-0 border-l-white border-l border-solid"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <AnimatedCounter value={95} suffix="%" />
                <div className="box-border w-full text-white text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                  Student Satisfaction Rate
                </div>
              </motion.div>
              <motion.div 
                className="box-border flex flex-col items-start gap-2 w-64 lg:w-full flex-shrink-0 m-0 pl-6 lg:pl-8 p-0 border-l-white border-l border-solid"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <AnimatedCounter value={85} suffix="%" />
                <div className="box-border w-full text-white text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                  Global Recognition Achieved
                </div>
              </motion.div>
              <motion.div 
                className="box-border flex flex-col items-start gap-2 w-64 lg:w-full flex-shrink-0 m-0 pl-6 lg:pl-8 p-0 border-l-white border-l border-solid"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <AnimatedCounter value={70} suffix="%" />
                <div className="box-border w-full text-white text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                  Improvement in Grades
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

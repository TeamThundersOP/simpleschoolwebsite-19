import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
        {/* Who We Are Section */}
        <div className="box-border flex max-w-screen-lg flex-col items-start gap-4 w-full m-0 p-0">
          <div className="box-border flex items-center m-0 p-0">
            <div className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0">
              Who We Are
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
            <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
              Transforming Indian Education with Global Excellence
            </h2>
            <p className="box-border w-full text-[#0C0504] text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
              School Grads is a future-focused education company dedicated to transforming Indian classrooms with globally trusted solutions. Backed by three generations of educators and innovators, we bring the best of Finnish pedagogy, digital apps, and school transformation models into local contexts.
            </p>
          </div>
        </div>

        {/* How We Help Section */}
        <div className="box-border flex flex-col items-start gap-8 lg:gap-16 w-full m-0 p-0">
          <div className="box-border flex max-w-screen-md flex-col items-start gap-4 w-full m-0 p-0">
            <h3 className="box-border w-full text-[#0C0504] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight m-0 p-0">
              How We Help
            </h3>
          </div>
          
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
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.article 
                className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="box-border flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl m-0 p-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2L20.09 10.26L29 12L20.09 13.74L16 22L11.91 13.74L3 12L11.91 10.26L16 2Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                  <h4 className="box-border w-full text-[#0C0504] text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                    For Students
                  </h4>
                  <h5 className="box-border w-full text-[#0C0504] text-base sm:text-lg font-semibold leading-tight m-0 p-0">
                    Future-Ready Learning (Pre-School to K–12)
                  </h5>
                  <p className="box-border w-full text-[#0C0504] text-sm sm:text-base font-normal leading-6 m-0 p-0">
                    Innovative programs in Coding, AI, English, Maths, Science, Robotics, and Future Skills designed for both preschoolers and K–12 students, ensuring strong foundations in the early years and advanced skills as they progress through school.
                  </p>
                </div>
              </motion.article>

              <motion.article 
                className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="box-border flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl m-0 p-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L18 14H28L20 20L22 30L16 24L10 30L12 20L4 14H14L16 4Z" fill="#10B981"/>
                  </svg>
                </div>
                <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                  <h4 className="box-border w-full text-[#0C0504] text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                    For Teachers
                  </h4>
                  <h5 className="box-border w-full text-[#0C0504] text-base sm:text-lg font-semibold leading-tight m-0 p-0">
                    Professional Development & Training
                  </h5>
                  <p className="box-border w-full text-[#0C0504] text-sm sm:text-base font-normal leading-6 m-0 p-0">
                    Comprehensive teacher training, certification, and continuous upskilling to empower educators with innovative pedagogy and practical classroom strategies.
                  </p>
                </div>
              </motion.article>

              <motion.article 
                className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="box-border flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl m-0 p-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 4H24V8H28V24H24V28H8V24H4V8H8V4Z" fill="#8B5CF6"/>
                  </svg>
                </div>
                <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                  <h4 className="box-border w-full text-[#0C0504] text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                    For School Leaders
                  </h4>
                  <h5 className="box-border w-full text-[#0C0504] text-base sm:text-lg font-semibold leading-tight m-0 p-0">
                    School Transformation & Consultation
                  </h5>
                  <p className="box-border w-full text-[#0C0504] text-sm sm:text-base font-normal leading-6 m-0 p-0">
                    Supporting schools to become Finnish Experience Flagship or Partner Schools, conducting audits, consultations, and new school setups aligned with global standards.
                  </p>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Implementing these programs has significantly improved student engagement and performance.",
      author: "Rajesh Kumar",
      position: "Principal, Green School",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/testimonial1.jpg"
    },
    {
      quote: "The resources provided are invaluable for our teachers and students alike.",
      author: "Anita Sharma",
      position: "Owner, Bright Academy",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/testimonial2.jpg"
    }
  ];

  const StarRating = () => (
    <div className="flex items-start gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.36971 0.947304C9.71345 0.130846 10.8842 0.130847 11.228 0.947307L13.2567 5.76619C13.4017 6.11039 13.7294 6.34557 14.1055 6.37536L19.3715 6.79244C20.2637 6.86311 20.6255 7.96309 19.9457 8.53836L15.9336 11.9336C15.647 12.1762 15.5218 12.5567 15.6094 12.9193L16.8352 17.996C17.0428 18.8561 16.0957 19.536 15.3318 19.0751L10.8234 16.3545C10.5013 16.1602 10.0963 16.1602 9.77431 16.3545L5.26582 19.0751C4.50194 19.536 3.55478 18.8561 3.76246 17.996L4.98825 12.9193C5.07581 12.5567 4.95065 12.1762 4.66408 11.9336L0.65189 8.53836C-0.0278896 7.96309 0.333896 6.86311 1.22612 6.79244L6.49218 6.37536C6.86833 6.34557 7.19598 6.11039 7.34089 5.76619L9.36971 0.947304Z" fill="#0C0504"></path>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
        <div className="box-border flex max-w-screen-md flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
          <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
            Customer Testimonials
          </h2>
          <p className="box-border w-full text-[#0C0504] text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
            Our programs have transformed our school's learning environment.
          </p>
        </div>
        <div className="box-border flex flex-col items-start gap-8 lg:gap-16 w-full m-0 p-0">
          <div className="box-border w-full overflow-x-auto lg:overflow-visible m-0 p-0">
            <motion.div 
              className="box-border flex justify-center items-start gap-8 lg:gap-16 min-w-max lg:grid lg:grid-cols-2 lg:min-w-0 m-0 p-0"
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
              {testimonials.map((testimonial, index) => (
                <motion.article 
                  key={index} 
                  className="box-border flex flex-col items-start gap-6 lg:gap-8 w-80 lg:w-full flex-shrink-0 m-0 p-0"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <StarRating />
                  <blockquote className="box-border w-full text-[#0C0504] text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="box-border flex items-center gap-4 lg:gap-5 m-0 p-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="28" cy="28" r="28" fill="#E5E7EB"/>
                        <path d="M28 32C31.3137 32 34 29.3137 34 26C34 22.6863 31.3137 20 28 20C24.6863 20 22 22.6863 22 26C22 29.3137 24.6863 32 28 32Z" fill="#9CA3AF"/>
                        <path d="M28 34C22.4772 34 18 38.4772 18 44H38C38 38.4772 33.5228 34 28 34Z" fill="#9CA3AF"/>
                      </svg>
                    </div>
                    <div className="box-border flex flex-col items-start flex-1 m-0 p-0">
                      <div className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0">
                        {testimonial.author}
                      </div>
                      <div className="box-border text-[#0C0504] text-sm sm:text-base font-normal leading-6 m-0 p-0">
                        {testimonial.position}
                      </div>
                    </div>
                    <div className="box-border w-px h-12 sm:h-[61px] bg-[rgba(12,5,4,0.15)] m-0 p-0 flex-shrink-0" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

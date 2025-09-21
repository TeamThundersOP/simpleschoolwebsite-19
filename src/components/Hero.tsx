import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const leftImages = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/80b8d4c4368f57d1a679e5cdf038d34eca5f4d99?width=623",
    alt: "Educational environment",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/948bd8919e8bbec333014a204acb18af2633946f?width=623",
    alt: "Students learning",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e63b1d63cbd27af7036663df83041e4641f0f134?width=623",
    alt: "Educational tools",
  },
];

const rightImages = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/68c487557f681f8a5d55ed95b51389df3e5febeb?width=623",
    alt: "Modern classroom",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4ffcfae24b1435a6b406a1734e2c1acb37974c9f?width=623",
    alt: "Teacher training",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/eb17782e5f0f164e0bd079840c1e5e91853a5ced?width=623",
    alt: "Educational innovation",
  },
];

const Hero = () => {
  // Auto scroll for mobile image row
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isHovered = false;
    const scrollAmount = 0.5; // px per frame
    const direction = 1;

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const scrollImages = () => {
      if (!container) return;
      if (!isHovered) {
        // If reached end, scroll back to start for infinite loop
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollAmount * direction;
        }
      }
      scrollInterval.current = setTimeout(scrollImages, 16); // ~60fps
    };

    scrollImages();

    return () => {
      if (scrollInterval.current) clearTimeout(scrollInterval.current);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.section
      id="home"
      className="box-border flex w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-[#021223] m-0 pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-1 w-full m-0 p-0">
        {/* Content Section - Left */}
        <div className="box-border flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 sm:gap-6 lg:gap-8 m-0 p-0 lg:pt-6">
          <motion.div
            className="box-border flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 w-full m-0 p-0"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight m-0 p-0 break-words"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering Schools with Global Pedagogy & Learning Solutions
            </motion.h1>
            <motion.p
              className="box-border w-full text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0 p-0 max-w-2xl break-words"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At School Grads, we bring world-class pedagogy like Finnish education and digital innovations to Indian classrooms. Our mission is to enhance learning outcomes, empower teachers, and elevate your school's reputation with globally trusted solutions.
            </motion.p>
          </motion.div>
          <motion.div
            className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="box-border text-[#0C0504] font-semibold leading-5 sm:leading-6 m-0 p-0">
                Explore Solutions
              </span>
            </motion.button>
            <motion.button
              className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.08)] transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                Partner With Us
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Images Section - Right */}
        <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
          {/* Mobile: horizontal scroll, Desktop: original layout */}
          <motion.div
            className="
              box-border
              w-full
              max-w-lg
              lg:max-w-none
              m-0 p-0
              overflow-x-auto
              flex
              gap-4
              items-start
              sm:gap-4 md:gap-6
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
              max-sm:flex-row
              max-sm:overflow-x-auto
              max-sm:overflow-y-hidden
              max-sm:items-stretch
              max-sm:py-2
              max-sm:px-1
              max-sm:-mx-4
              max-sm:w-[calc(100vw+32px)]
              max-sm:max-w-none
              max-sm:scroll-smooth
              max-sm:justify-start
              max-sm:relative
              max-sm:z-10
              sm:flex
              sm:flex-row
              lg:flex
              lg:gap-6
              "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Mobile: show all images in a single horizontal row */}
            <div
              className="flex flex-row gap-3 w-full sm:hidden"
              ref={scrollRef}
              style={{ scrollBehavior: 'smooth', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
            >
              {/* Duplicate images for seamless infinite scroll */}
              {[...leftImages, ...rightImages, ...leftImages, ...rightImages].map((img, idx, arr) => (
                <img
                  key={img.src + idx}
                  src={img.src}
                  alt={img.alt}
                  className={`box-border h-32 w-40 shrink-0 aspect-[77/82] object-cover m-0 p-0 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105${idx !== arr.length - 1 ? ' mr-3' : ''}`}
                  loading="lazy"
                  style={{ minWidth: 160, maxWidth: 180 }}
                />
              ))}
            </div>
            {/* Desktop: original two columns */}
            <React.Fragment>
              <div className="box-border flex flex-col items-start gap-2 sm:gap-4 md:gap-6 m-0 p-0 w-1/2 lg:w-[260px] max-sm:hidden animate-[scroll-up_20s_ease-in-out_infinite_alternate]">
                {leftImages.map((img, idx) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`box-border h-24 sm:h-32 md:h-40 lg:h-[200px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105${idx !== leftImages.length - 1 ? ' mb-2 sm:mb-4 md:mb-6' : ''}`}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="box-border flex flex-col items-start gap-2 sm:gap-4 md:gap-6 translate-y-0 sm:translate-y-[-30px] md:translate-y-[-40px] lg:translate-y-[-60px] m-0 p-0 w-1/2 lg:w-[260px] max-sm:hidden animate-[scroll-down_25s_ease-in-out_infinite_alternate]">
                {rightImages.map((img, idx) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`box-border h-24 sm:h-32 md:h-40 lg:h-[200px] shrink-0 w-full aspect-[77/82] object-cover m-0 p-0 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105${idx !== rightImages.length - 1 ? ' mb-2 sm:mb-4 md:mb-6' : ''}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </React.Fragment>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

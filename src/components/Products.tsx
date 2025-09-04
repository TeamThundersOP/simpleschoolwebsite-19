import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      title: "Code School Finland",
      description: "Empowering Indian schools with world-class coding, AI, and future-skills education—rooted in Finnish pedagogy, tailored for NEP 2020, and made simple for teachers and students alike.",
      features: ["Coding & AI Education", "Finnish Pedagogy", "NEP 2020 Aligned"],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=789",
      link: "/codeschool"
    },
    {
      title: "Finnish Experience",
      description: "Bringing the world's most admired education methods to schools, leaders, and learners through Finnish pedagogy, EdTech, training, and immersive Finnish Experience® programs.",
      features: ["Finnish Pedagogy", "Leadership Training", "School Transformation"],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8ead1f9a8371bab419bab0afeb7ef53a7d9481f2?width=789",
      link: "/finnish-experience"
    },
    {
      title: "GraphoGame",
      description: "A research-backed reading app that helps children aged 4–9 learn to read through fun, adaptive, phonics-based play—making literacy accessible at home, in schools, and at scale.",
      features: ["Phonics-based Learning", "Research-backed", "Adaptive Gameplay"],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=789",
      link: "/grapho-game"
    },
    {
      title: "Kindie Days",
      description: "A Finnish early education platform that empowers preschools with smart apps, playful lesson plans, and teacher training—making learning visible, consistent, and joyful for children and families.",
      features: ["Early Education", "Smart Apps", "Teacher Training"],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=789",
      link: "/kindie-days"
    },
    {
      title: "Moomin Language School",
      description: "A playful, Finnish-designed program that helps children aged 3–8 learn English naturally through daily app practice and weekly group sessions—making language learning fun, stress-free, and effective.",
      features: ["Language Learning", "Moomin Characters", "Story-driven"],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8ead1f9a8371bab419bab0afeb7ef53a7d9481f2?width=789",
      link: "/moomin-language-school"
    }
  ];

  return (
    <section id="products" className="box-border flex w-full flex-col items-center gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-16 lg:gap-20 w-full m-0 p-0">
        <div className="box-border flex max-w-screen-md flex-col items-start gap-4 w-full m-0 p-0">
          <div className="box-border flex items-center m-0 p-0">
            <div className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0">
              Products
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
            <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
              Our Educational Products Suite
            </h2>
            <p className="box-border w-full text-[#0C0504] text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
              Discover our comprehensive range of educational solutions designed to transform learning experiences across all age groups and enhance your school's educational offerings.
            </p>
          </div>
        </div>
        
        <div className="box-border flex flex-col items-start gap-12 lg:gap-16 w-full m-0 p-0">
          <motion.div 
            className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full m-0 p-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {products.map((product, index) => (
              <motion.article 
                key={index} 
                className="box-border flex flex-col items-start gap-6 lg:gap-8 flex-1 m-0 p-0 group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl lg:rounded-[32px] hover:bg-gray-50/50 p-4 -m-4"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="box-border w-full overflow-hidden rounded-2xl lg:rounded-[32px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="box-border h-48 sm:h-56 lg:h-60 w-full aspect-[74/45] object-cover m-0 p-0 rounded-2xl lg:rounded-[32px] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                  <h3 className="box-border w-full text-[#0C0504] text-xl sm:text-2xl lg:text-2xl font-medium leading-tight tracking-tight m-0 p-0 transition-colors duration-300 group-hover:text-blue-600">
                    {product.title}
                  </h3>
                  <p className="box-border w-full text-[#0C0504] text-sm sm:text-base font-normal leading-6 m-0 p-0">
                    {product.description}
                  </p>
                  <div className="box-border flex flex-col items-start gap-3 w-full m-0 p-0">
                    <h4 className="box-border text-[#0C0504] text-sm font-semibold leading-5 m-0 p-0">Key Features:</h4>
                    <ul className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="box-border flex items-center gap-2 text-[#0C0504] text-sm font-normal leading-5 m-0 p-0 transition-all duration-200 group-hover:translate-x-1">
                          <span className="box-border w-1.5 h-1.5 bg-[#0C0504] rounded-full flex-shrink-0 m-0 p-0 transition-colors duration-300 group-hover:bg-blue-600"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={product.link}
                    className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-[#0C0504] text-white m-0 px-4 py-2.5 mt-4 rounded-full border-solid border-[#0C0504] transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:scale-105 w-full text-center no-underline"
                  >
                    <span className="box-border text-white text-sm sm:text-base font-medium leading-6 m-0 p-0">
                      View Product
                    </span>
                    <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M9.68591 7.00781C9.78674 7.00781 9.86371 7.03822 9.94177 7.11621L14.8861 12.0605C14.94 12.1145 14.9652 12.1564 14.9769 12.1846V12.1855C14.9917 12.2211 15.0004 12.2609 15.0004 12.3096C15.0004 12.3583 14.9917 12.398 14.9769 12.4336V12.4346C14.9652 12.4627 14.94 12.5047 14.8861 12.5586L9.91736 17.5273C9.83959 17.6051 9.77245 17.627 9.69177 17.624C9.59774 17.6205 9.51688 17.5887 9.43103 17.5029C9.35291 17.4248 9.32166 17.348 9.32166 17.2471C9.32166 17.1462 9.35291 17.0693 9.43103 16.9912L14.1127 12.3096L9.40564 7.60254C9.32797 7.52484 9.30603 7.45853 9.30896 7.37793C9.31241 7.28366 9.34498 7.20227 9.43103 7.11621C9.50896 7.0384 9.58532 7.00789 9.68591 7.00781Z" fill="currentColor" stroke="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
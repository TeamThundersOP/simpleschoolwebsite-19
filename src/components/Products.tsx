import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Code School Finland",
      description:
        "Empowering Indian schools with world-class coding, AI, and future-skills education—rooted in Finnish pedagogy, tailored for NEP 2020, and made simple for teachers and students alike.",
      features: ["Coding & AI Education", "Finnish Pedagogy", "NEP 2020 Aligned"],
      image: "/lovable-uploads/CSF-LOGO-simple+1580x1040++(1).png",
      link: "/code-school",
      logoStyle: "contain",
    },
    {
      title: "Finnish Experience",
      description:
        "Bringing the world's most admired education methods to schools, leaders, and learners through Finnish pedagogy, EdTech, training, and immersive Finnish Experience® programs.",
      features: ["Finnish Pedagogy", "Leadership Training", "School Transformation"],
      image: "/lovable-uploads/FEDS-LOGO-FE-3.png",
      link: "/finnish-experience",
      logoStyle: "contain",
    },
    // {
    //   title: "GraphoGame",
    //   description: "A research-backed reading app that helps children aged 4–9 learn to read through fun, adaptive, phonics-based play—making literacy accessible at home, in schools, and at scale.",
    //   features: ["Phonics-based Learning", "Research-backed", "Adaptive Gameplay"],
    //   image: "/lovable-uploads/Group-215.svg",
    //   link: "/grapho-game",
    //   logoStyle: "contain"
    // },
    {
      title: "Kindie Days",
      description:
        "A Finnish early education platform that empowers preschools with smart apps, playful lesson plans, and teacher training—making learning visible, consistent, and joyful for children and families.",
      features: ["Early Education", "Smart Apps", "Teacher Training"],
      image: "/lovable-uploads/kdlogobroadjpgcopy.jpg",
      link: "/kindie-days",
      logoStyle: "contain",
    },
    {
      title: "Moomin Language School",
      description:
        "A playful, Finnish-designed program that helps children aged 3–8 learn English naturally through daily app practice and weekly group sessions—making language learning fun, stress-free, and effective.",
      features: ["Language Learning", "Moomin Characters", "Story-driven"],
      image: "/lovable-uploads/MoominLS_logo_text3-1.png.webp",
      link: "/moomin-language-school",
      logoStyle: "contain",
    },
  ];

  return (
    <section
      id="products"
      className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden"
    >
      <div className="box-border flex max-w-screen-xl flex-col items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full m-0 p-0">
        <div className="box-border flex max-w-screen-md flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
          <div className="box-border flex items-center m-0 p-0">
            <div
              className="box-border text-sm sm:text-base font-semibold leading-6 m-0 p-0"
              style={{ color: "#0C0504" }}
            >
              Products
            </div>
          </div>
          <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
            <h2
              className="box-border w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words"
              style={{ color: "#0C0504" }}
            >
              Our Educational Products Suite
            </h2>
            <p
              className="box-border w-full text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words"
              style={{ color: "#0C0504" }}
            >
              Discover our comprehensive range of educational solutions designed to transform
              learning experiences across all age groups and enhance your school's educational
              offerings.
            </p>
          </div>
        </div>

        <div className="box-border flex flex-col items-start gap-8 sm:gap-12 lg:gap-16 w-full m-0 p-0">
          <div className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full m-0 p-0">
            {products.map((product, index) => (
              <article
                key={index}
                className="box-border flex flex-col justify-between items-start gap-4 sm:gap-6 lg:gap-8 flex-1 m-0 p-0 group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl sm:rounded-2xl hover:bg-gray-50/50 p-3 sm:p-4 -m-3 sm:-m-4 h-full"
              >
                <div className="box-border w-full flex items-center justify-center bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                  <img
                    src={product.image}
                    alt={`${product.title} Logo`}
                    className="box-border h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-full object-contain m-0 p-0 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
                  <h3
                    className="box-border w-full text-lg sm:text-xl lg:text-2xl font-medium leading-tight tracking-tight m-0 p-0 transition-colors duration-300 break-words group-hover:text-gray-700"
                    style={{
                      color: "#0C0504",
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="box-border w-full text-sm sm:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words"
                    style={{ color: "#0C0504" }}
                  >
                    {product.description}
                  </p>
                  <div className="box-border flex flex-col items-start gap-2 sm:gap-3 w-full m-0 p-0">
                    <h4
                      className="box-border text-sm font-semibold leading-5 m-0 p-0"
                      style={{ color: "#0C0504" }}
                    >
                      Key Features:
                    </h4>
                    <ul className="box-border flex flex-col items-start gap-1.5 sm:gap-2 w-full m-0 p-0">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="box-border flex items-center gap-2 text-xs sm:text-sm font-normal leading-4 sm:leading-5 m-0 p-0 transition-all duration-200 group-hover:translate-x-1"
                          style={{ color: "#0C0504" }}
                        >
                          <span
                            className="box-border w-1.5 h-1.5 rounded-full flex-shrink-0 m-0 p-0 transition-colors duration-300"
                            style={{
                              backgroundColor: "#0C0504",
                            }}
                          ></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={product.link}
                    className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-3 sm:px-4 py-2 sm:py-2.5 mt-2 sm:mt-4 rounded-full border-solid transition-all duration-300 hover:shadow-lg hover:scale-105 w-full text-center no-underline bg-[#0C0504] text-white border-[#0C0504] hover:bg-[#b2e61b] hover:border-[#b2e61b] focus:outline-none focus:ring-2 focus:ring-[#0C0504] focus:ring-offset-2"
                  >
                    <span className="box-border text-xs sm:text-sm md:text-base font-medium leading-5 sm:leading-6 m-0 p-0">
                      View Product
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M9.68591 7.00781C9.78674 7.00781 9.86371 7.03822 9.94177 7.11621L14.8861 12.0605C14.94 12.1145 14.9652 12.1564 14.9769 12.1846V12.1855C14.9917 12.2211 15.0004 12.2609 15.0004 12.3096C15.0004 12.3583 14.9917 12.398 14.9769 12.4336V12.4346C14.9652 12.4627 14.94 12.5047 14.8861 12.5586L9.91736 17.5273C9.83959 17.6051 9.77245 17.627 9.69177 17.624C9.59774 17.6205 9.51688 17.5887 9.43103 17.5029C9.35291 17.4248 9.32166 17.348 9.32166 17.2471C9.32166 17.1462 9.35291 17.0693 9.43103 16.9912L14.1127 12.3096L9.40564 7.60254C9.32797 7.52484 9.30603 7.45853 9.30896 7.37793C9.31241 7.28366 9.34498 7.20227 9.43103 7.11621C9.50896 7.0384 9.58532 7.00789 9.68591 7.00781Z"
                        fill="currentColor"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

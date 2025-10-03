import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import {
  Target,
  Users,
  Lightbulb,
  Award,
  Globe,
  GraduationCap,
  Heart,
  CheckCircle,
  Star,
  ArrowRight,
  Globe2,
  BookOpen,
  Zap,
  Building,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="About School Grads – Bringing Global Excellence to Indian Schools"
        description="At School Grads, we transform Indian classrooms with world-class pedagogy, digital innovations, and school transformation models inspired by Finland and other globally trusted education systems."
        canonical="https://schoolgrads.ai/about"
      />
      <main id="main" className="w-full" role="main">
        {/* Hero Section */}
        <section className="box-border flex w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-x-hidden">
          <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-1 w-full m-0 p-0">
            {/* Content Section */}
            <div className="box-border flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 sm:gap-6 lg:gap-8 m-0 p-0 lg:pt-6">
              <div className="box-border flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 w-full m-0 p-0">
                <h1 className="box-border w-full text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight m-0 p-0 break-words">
                  School Grads – Bringing Global Excellence to Indian Schools
                </h1>
                <p className="box-border w-full text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0 p-0 max-w-2xl break-words">
                  At School Grads, we transform Indian classrooms with world-class pedagogy, digital
                  innovations, and school transformation models inspired by Finland and other
                  globally trusted education systems. Backed by the experience of three generations
                  in education, we help schools enhance learning outcomes, empower teachers, and
                  build global reputations.
                </p>
              </div>
              <div className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center lg:justify-start">
                <button className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-gray-900 m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-900 hover:bg-gray-800 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="box-border text-white font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Our Solutions
                  </span>
                </button>
                <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Get in Touch
                  </span>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
              <img
                src="/assets/images/education-excellence-1.jpg"
                alt="Educational excellence in action"
                className="box-border h-80 sm:h-96 lg:h-[500px] w-full max-w-lg aspect-[15/16] object-cover m-0 p-0 rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex max-w-screen-md flex-col items-start gap-4 w-full m-0 p-0">
              <h2 className="box-border w-full text-[#0C0504] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                What We Do
              </h2>
              <p className="box-border w-full text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0">
                We help schools enhance learning outcomes, empower teachers, and build global
                reputations through comprehensive educational solutions.
              </p>
            </div>

            <div className="box-border grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full m-0 p-0">
              <article className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                  <h3 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-semibold leading-tight tracking-tight m-0 p-0">
                    For Students
                  </h3>
                  <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-relaxed m-0 p-0">
                    Future-ready programs in Coding, AI, English, Maths, Science & Robotics, plus
                    preschool lesson plans and K–12 curriculum solutions.
                  </p>
                </div>
              </article>

              <article className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                  <h3 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-semibold leading-tight tracking-tight m-0 p-0">
                    For Teachers
                  </h3>
                  <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-relaxed m-0 p-0">
                    Professional training, certifications, and continuous upskilling opportunities
                    to ensure teaching excellence.
                  </p>
                </div>
              </article>

              <article className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                  <h3 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-semibold leading-tight tracking-tight m-0 p-0">
                    For School Leaders
                  </h3>
                  <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-relaxed m-0 p-0">
                    School audits, strategic consultations, and global accreditations through
                    Finnish Experience Flagship/Partner Schools®️ transformation models.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Our Leadership Section */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-[#03182F] m-0 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
              <h2 className="box-border w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Our Leadership
              </h2>
              <p className="box-border w-full text-white text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0">
                Led by visionary educators with decades of experience in transforming educational
                landscapes.
              </p>
            </div>

            <div className="box-border grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full m-0 p-0">
              <article className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-6 bg-white/10 rounded-2xl backdrop-blur">
                <div className="box-border flex flex-col items-start gap-3 w-full m-0 p-0">
                  <h3 className="box-border w-full text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-tight tracking-tight m-0 p-0">
                    M. Nithin Reddy
                  </h3>
                  <div className="text-[#b2e600] font-medium">Founder & CEO</div>
                  <p className="box-border w-full text-white text-sm md:text-base font-normal leading-relaxed m-0 p-0">
                    Education entrepreneur bridging global excellence with Indian schools, bringing
                    innovative pedagogical approaches to transform learning experiences.
                  </p>
                </div>
              </article>

              <article className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-6 bg-white/10 rounded-2xl backdrop-blur">
                <div className="box-border flex flex-col items-start gap-3 w-full m-0 p-0">
                  <h3 className="box-border w-full text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-tight tracking-tight m-0 p-0">
                    M. Sudhakara Reddy
                  </h3>
                  <div className="text-[#b2e600] font-medium">Chairman</div>
                  <p className="box-border w-full text-white text-sm md:text-base font-normal leading-relaxed m-0 p-0">
                    30+ years in school education and global exposure programs, providing strategic
                    guidance and educational leadership.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Our Solutions - Updated Partners Section */}
        <section className="relative box-border flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="relative z-10 box-border flex max-w-screen-xl flex-col items-start gap-8 sm:gap-12 lg:gap-16 w-full m-0 p-0">
            {/* Header */}
            <div className="box-border flex max-w-screen-lg flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
              <div className="box-border flex items-center m-0 p-0">
                <div className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0 uppercase tracking-widest">
                  Our Solutions
                </div>
              </div>
              <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
                <h2 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
                  10+ Global Solutions from Leading Education Nations
                </h2>
                <p className="box-border w-full text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words">
                  We bring proven educational solutions from Finland and other leading education
                  nations to transform Indian schools.
                </p>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="box-border w-full overflow-x-visible m-0 p-0">
              <div className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 m-0 p-0">
                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/assets/partners/code-school-finland-logo.png"
                      alt="Code School Finland"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Code School Finland
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      Coding, AI, Robotics & future skills programs for K-12 students
                    </p>
                  </div>
                </article>

                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/assets/partners/finnish-experience-logo.png"
                      alt="Finnish Experience"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Finnish Experience®️
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      School accreditation, transformation, teacher training & certification
                    </p>
                  </div>
                </article>

                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/assets/partners/kindiedays-logo.jpg"
                      alt="Kindiedays"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Kindiedays
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      Smart early education platform with Finnish expertise for quality learning
                    </p>
                  </div>
                </article>

                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/assets/partners/moomin-language-school-logo.webp"
                      alt="Moomin Language School"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Moomin Language School
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      Playful English learning and structured lesson plans for ages 3–8
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section
          className="relative box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28 overflow-hidden"
          style={{
            backgroundColor: "#0b1b45",
            backgroundImage: `url('/assets/images/education-pattern.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "160px 160px",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none select-none"
            aria-hidden="true"
            style={{
              background: "rgba(11,27,69,0.92)",
              backdropFilter: "blur(0.5px)",
            }}
          />
          <div className="relative z-10 box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex max-w-screen-md flex-col items-start gap-4 w-full m-0 p-0">
              <div className="box-border flex items-center m-0 p-0">
                <div className="box-border text-white text-sm sm:text-base font-semibold leading-6 m-0 p-0">
                  Why Us
                </div>
              </div>
              <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
                  Trusted by Schools Worldwide
                </h2>
                <p className="box-border w-full text-white text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
                  Our global reach and proven impact demonstrate our commitment to educational
                  excellence.
                </p>
              </div>
            </div>

            <div className="box-border grid grid-cols-1 sm:grid-cols-3 gap-8 w-full m-0 p-0">
              <article className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full text-center m-0 p-6 bg-white/10 rounded-2xl backdrop-blur">
                <div className="box-border flex flex-col items-center gap-2 m-0 p-0">
                  <div className="text-3xl font-bold text-[#b2e600] mb-1">10+</div>
                  <h3 className="box-border text-white text-lg sm:text-xl font-semibold leading-tight m-0 p-0">
                    Global Solutions
                  </h3>
                </div>
                <p className="box-border text-white text-sm sm:text-base font-normal leading-6 m-0 p-0">
                  From leading education nations worldwide
                </p>
              </article>

              <article className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full text-center m-0 p-6 bg-white/10 rounded-2xl backdrop-blur">
                <div className="box-border flex flex-col items-center gap-2 m-0 p-0">
                  <div className="text-3xl font-bold text-[#b2e600] mb-1">40+</div>
                  <h3 className="box-border text-white text-lg sm:text-xl font-semibold leading-tight m-0 p-0">
                    Countries
                  </h3>
                </div>
                <p className="box-border text-white text-sm sm:text-base font-normal leading-6 m-0 p-0">
                  Trusted by schools worldwide
                </p>
              </article>

              <article className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full text-center m-0 p-6 bg-white/10 rounded-2xl backdrop-blur">
                <div className="box-border flex flex-col items-center gap-2 m-0 p-0">
                  <div className="text-3xl font-bold text-[#b2e600] mb-1">1M+</div>
                  <h3 className="box-border text-white text-lg sm:text-xl font-semibold leading-tight m-0 p-0">
                    Students Impacted
                  </h3>
                </div>
                <p className="box-border text-white text-sm sm:text-base font-normal leading-6 m-0 p-0">
                  Positively impacting over 1 million students worldwide
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="box-border flex w-full flex-col items-center gap-6 bg-[#03182F] m-0 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center text-center gap-4 w-full m-0 p-0">
            <h2 className="box-border w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight m-0 p-0">
              School Grads empowers schools with 21st-century learning solutions — trusted
              worldwide.
            </h2>
            <div className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center">
              <button className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-6 py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors text-base font-semibold w-full sm:w-auto min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span className="box-border text-[#03182F] font-semibold leading-6 m-0 p-0">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

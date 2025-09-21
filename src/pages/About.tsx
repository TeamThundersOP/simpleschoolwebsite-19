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
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="About School Grads – Bringing World-Class Education to India"
        description="We partner with leading educational organizations to bring the best global teaching practices to Indian classrooms in a way that is easy, affordable, and scalable."
        canonical="https://simpleschoolwebsite-19.onrender.com/about"
      />
      <main id="main" className="w-full" role="main">
        {/* Hero Section */}
        <section className="box-border flex w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-x-hidden">
          <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-1 w-full m-0 p-0">
            {/* Content Section */}
            <div className="box-border flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 sm:gap-6 lg:gap-8 m-0 p-0 lg:pt-6">
              <div className="box-border flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 w-full m-0 p-0">
                <div className="mb-1 flex items-center gap-2">
                  <img
                    src="/lovable-uploads/Primary.svg"
                    alt="School Grads Logo"
                    className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto mb-1"
                  />
                  {/* <span className="text-gray-700 text-lg font-medium">in partnership with</span> */}
                </div>
                <h1 className="box-border w-full text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight m-0 p-0 break-words">
                  About School Grads
                </h1>
                <p className="box-border w-full text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0 p-0 max-w-2xl break-words">
                  Bringing world-class education to Indian schools through strategic partnerships
                  with leading global educational organizations
                </p>
              </div>
              <div className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center lg:justify-start">
                <button className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-gray-900 m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-900 hover:bg-gray-800 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="box-border text-white font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Our Partnerships
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
                src="https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=1200"
                alt="Educational excellence in action"
                className="box-border h-80 sm:h-96 lg:h-[500px] w-full max-w-lg aspect-[15/16] object-cover m-0 p-0 rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision - Similar to AboutUs component */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-[#03182F] m-0 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex items-center gap-8 lg:gap-20 w-full m-0 p-0 max-lg:flex-col max-lg:gap-8">
              <div className="box-border flex flex-col items-start gap-6 lg:gap-8 flex-1 m-0 p-0">
                <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                  <h2 className="box-border w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                    Our Mission & Vision
                  </h2>
                  <p className="box-border w-full text-white text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0">
                    We believe every Indian student deserves access to world-class education.
                    Through strategic partnerships with leading global educational organizations, we
                    make this vision a reality.
                  </p>
                </div>
                <div className="box-border flex flex-col items-start gap-4 w-full m-0 p-0">
                  <div className="box-border flex items-start gap-4 lg:gap-6 w-full m-0 px-0 py-2 max-md:flex-col max-md:gap-6">
                    <article className="box-border flex flex-col items-start gap-3 lg:gap-4 flex-1 m-0 p-0">
                      <div>
                        <Target className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />
                      </div>
                      <h3 className="box-border w-full text-white text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                        Our Mission
                      </h3>
                      <p className="box-border w-full text-white text-xs sm:text-sm md:text-base font-normal leading-relaxed m-0 p-0">
                        To bring the best global teaching practices to Indian classrooms in a way
                        that is easy, affordable, and scalable. We partner with world-renowned
                        educational organizations to deliver proven, high-quality learning
                        solutions.
                      </p>
                    </article>
                    <article className="box-border flex flex-col items-start gap-3 lg:gap-4 flex-1 m-0 p-0">
                      <div>
                        <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
                      </div>
                      <h3 className="box-border w-full text-white text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                        Our Vision
                      </h3>
                      <p className="box-border w-full text-white text-xs sm:text-sm md:text-base font-normal leading-relaxed m-0 p-0">
                        A future where every Indian school can offer internationally benchmarked
                        education. We envision classrooms where students learn through the world's
                        most effective methodologies, preparing them for global success.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/948bd8919e8bbec333014a204acb18af2633946f?width=1200"
                alt="Educational excellence in action"
                className="box-border h-80 sm:h-96 lg:h-[640px] w-full lg:flex-1 aspect-[15/16] object-cover m-0 p-0 rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Our Partners - Similar to Services component */}
        <section className="relative box-border flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="relative z-10 box-border flex max-w-screen-xl flex-col items-start gap-8 sm:gap-12 lg:gap-16 w-full m-0 p-0">
            {/* Header */}
            <div className="box-border flex max-w-screen-lg flex-col items-start gap-3 sm:gap-4 w-full m-0 p-0">
              <div className="box-border flex items-center m-0 p-0">
                <div className="box-border text-[#0C0504] text-sm sm:text-base font-semibold leading-6 m-0 p-0 uppercase tracking-widest">
                  Our Global Partners
                </div>
              </div>
              <div className="box-border flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full m-0 p-0">
                <h2 className="box-border w-full text-[#0C0504] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0 break-words">
                  Collaborating with World-Class Educational Organizations
                </h2>
                <p className="box-border w-full text-[#0C0504] text-sm sm:text-base md:text-lg font-normal leading-relaxed m-0 p-0 break-words">
                  We collaborate with internationally recognized educational organizations to bring
                  proven methodologies to Indian schools.
                </p>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="box-border w-full overflow-x-visible m-0 p-0">
              <div className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 m-0 p-0">
                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/lovable-uploads/CSF-LOGO-simple+1580x1040++(1).png"
                      alt="Code School Finland"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Code School Finland
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      Leading provider of coding and AI education for K-12 students
                    </p>
                  </div>
                </article>
                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/lovable-uploads/FEDS-LOGO-FE-3.png"
                      alt="Finnish Education Solutions"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Finnish Education Solutions
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      Bringing the Finnish Experience® to schools worldwide
                    </p>
                  </div>
                </article>
                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/lovable-uploads/Group-215.svg"
                      alt="GraphoGame"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      GraphoGame
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      World's most researched digital literacy game for children
                    </p>
                  </div>
                </article>
                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/lovable-uploads/MoominLS_logo_text3-1.png.webp"
                      alt="Moomin Language School"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Moomin Language School
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      Joyful English learning for children aged 3-8 years
                    </p>
                  </div>
                </article>
                <article className="box-border flex flex-col justify-between items-start gap-4 lg:gap-6 w-full flex-shrink-0 m-0 p-6 bg-gray-50/90 rounded-2xl shadow-md backdrop-blur transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-900 hover:-translate-y-2 cursor-pointer group h-full">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl m-0 p-0 shadow transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-gray-800">
                    <img
                      src="/lovable-uploads/kdlogobroadjpgcopy.jpg"
                      alt="Kindie Days"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="box-border flex flex-col items-start gap-2 w-full m-0 p-0">
                    <h4 className="box-border w-full text-[#0C0504] text-lg lg:text-xl font-medium leading-tight tracking-tight m-0 p-0 break-words transition-colors duration-300 group-hover:text-white">
                      Kindie Days
                    </h4>
                    <p className="box-border w-full text-[#0C0504] text-sm md:text-base font-normal leading-5 sm:leading-6 m-0 p-0 break-words transition-colors duration-300 group-hover:text-gray-300">
                      Early childhood education and development programs
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        {/* Our Approach - Similar to TrustedSolutions component */}
        <section
          className="relative box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28 overflow-hidden"
          style={{
            backgroundColor: "#0b1b45",
            backgroundImage: `url('/assets/pattern-schoolgrads.svg')`,
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
                  Our Approach
                </div>
              </div>
              <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight m-0 p-0">
                  Complete Implementation Support for Success
                </h2>
                <p className="box-border w-full text-white text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
                  We don't just deliver educational products – we provide complete implementation
                  support to ensure success.
                </p>
              </div>
            </div>

            <div className="box-border grid grid-cols-1 sm:grid-cols-3 gap-4 w-full m-0 p-0">
              <article className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full text-center m-0 p-0 relative">
                <div className="mb-2 flex items-center justify-center gap-4">
                  <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                    <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </span>
                </div>
                <div className="box-border flex flex-col items-center gap-2 m-0 p-0">
                  <h3 className="box-border text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-tight m-0 p-0">
                    Expert Training
                  </h3>
                </div>
                <p className="box-border text-white text-sm sm:text-base font-normal leading-6 m-0 p-0">
                  Comprehensive teacher training and professional development to ensure confident
                  implementation of new methodologies.
                </p>
              </article>
              <article className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full text-center m-0 p-0 relative">
                <div className="mb-2 flex items-center justify-center gap-4">
                  <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </span>
                </div>
                <div className="box-border flex flex-col items-center gap-2 m-0 p-0">
                  <h3 className="box-border text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-tight m-0 p-0">
                    Ongoing Support
                  </h3>
                </div>
                <p className="box-border text-white text-sm sm:text-base font-normal leading-6 m-0 p-0">
                  Continuous guidance and support throughout implementation and beyond, ensuring
                  sustainable success for your school.
                </p>
              </article>
              <article className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full text-center m-0 p-0 relative">
                <div className="mb-2 flex items-center justify-center gap-4">
                  <span className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                    <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </span>
                </div>
                <div className="box-border flex flex-col items-center gap-2 m-0 p-0">
                  <h3 className="box-border text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-tight m-0 p-0">
                    Proven Results
                  </h3>
                </div>
                <p className="box-border text-white text-sm sm:text-base font-normal leading-6 m-0 p-0">
                  Evidence-based solutions with measurable outcomes that demonstrate real
                  improvement in student learning.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Why Choose School Grads */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex items-center gap-8 lg:gap-20 w-full m-0 p-0 max-lg:flex-col max-lg:gap-8">
              <div className="box-border flex flex-col items-start gap-6 lg:gap-8 flex-1 m-0 p-0">
                <h2 className="box-border w-full text-[#0C0504] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                  Why Choose School Grads?
                </h2>
                <div className="box-border flex flex-col items-start gap-4 w-full m-0 p-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Global Standards, Local Context
                      </h3>
                      <p className="text-gray-600">
                        We adapt world-class methodologies to fit Indian curriculum requirements and
                        cultural contexts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Affordable & Scalable</h3>
                      <p className="text-gray-600">
                        Cost-effective solutions designed to work at scale, making quality education
                        accessible to more schools.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Complete Implementation Support
                      </h3>
                      <p className="text-gray-600">
                        From initial training to ongoing support, we ensure successful adoption and
                        sustainable results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Proven Track Record</h3>
                      <p className="text-gray-600">
                        Our partners have successfully implemented these solutions in schools across
                        multiple countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:text-center flex-1">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                      <div className="text-sm text-gray-600">Schools Worldwide</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">300K+</div>
                      <div className="text-sm text-gray-600">Students Impacted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                      <div className="text-sm text-gray-600">Languages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

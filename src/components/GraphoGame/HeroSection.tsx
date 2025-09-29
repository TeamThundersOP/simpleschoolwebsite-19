import React from "react";
import { BookOpen } from "lucide-react";

// GraphoGame Logo Component
const GraphoGameLogo = ({
  className = "",
  size = "large",
}: {
  className?: string;
  size?: "small" | "medium" | "large";
}) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto md:h-20",
  };

  return (
    <img
      src="/lovable-uploads/Group-215.svg"
      alt="GraphoGame Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

const HeroSection = () => {
  return (
    <section className="box-border flex w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-x-hidden">
      <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16 w-full m-0 p-0">
        {/* Content Section - Left */}
        <div className="box-border flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-6 lg:gap-8 m-0 p-0">
          <div className="box-border flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 w-full m-0 p-0">
            <div className="mb-6">
              <GraphoGameLogo className="mb-4" size="large" />
            </div>
            <h2 className="box-border w-full text-black text-lg sm:text-xl md:text-2xl font-semibold leading-tight m-0 p-0 break-words">
              Ending Illiteracy, At Scale
            </h2>
            <p className="box-border w-full text-gray-600 text-base md:text-lg font-normal leading-relaxed m-0 p-0 max-w-2xl break-words">
              The world's most researched digital literacy game for children aged 3–9 years. Making
              learning to read fun, simple, and effective.
            </p>
          </div>
          <div className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center lg:justify-start">
            <button className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-gray-800 m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-800 hover:bg-gray-700 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
              <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                Try Demo
              </span>
            </button>
            <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                Request Info
              </span>
            </button>
          </div>
        </div>

        {/* Images Section - Right */}
        <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
          <div className="relative w-full max-w-lg">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200">
              <img
                src="/lovable-uploads/School Grads/IMG-20250924-WA0005.jpg"
                alt="Children learning to read with GraphoGame"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

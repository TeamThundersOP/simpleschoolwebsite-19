import React from 'react';
import { Globe, Star } from 'lucide-react';

// Finnish Experience Logo Component
const FinnishExperienceLogo = ({ className = "", size = "large" }: { className?: string; size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto md:h-20"
  };

  return (
    <img 
      src="/lovable-uploads/FEDS-LOGO-FE-3.png" 
      alt="Finnish Education Solutions Logo" 
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
              <FinnishExperienceLogo className="mb-4" size="large" />

            </div>
            <h2 className="box-border w-full text-black text-lg sm:text-xl md:text-2xl font-semibold leading-tight m-0 p-0 break-words">
              Bringing the Finnish Experience® to India
            </h2>
            <p className="box-border w-full text-gray-600 text-base md:text-lg font-normal leading-relaxed m-0 p-0 max-w-2xl break-words">
              Transform your school with the world's most admired education practices. Join 1,000 schools in the Finnish Experience® movement.
            </p>
          </div>
          <div className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center lg:justify-start">
            <button className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-gray-800 m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-800 hover:bg-gray-700 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
              <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                Become a Partner
              </span>
            </button>
            <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* Images Section - Right */}
        <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
          <div className="relative w-full max-w-lg">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <div className="text-center">
                  <Globe className="h-16 w-16 mx-auto mb-4 opacity-80 text-gray-600" />
                  <p className="text-lg font-medium">Finnish Experience®</p>
                  <p className="text-sm opacity-70">Transforming education worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
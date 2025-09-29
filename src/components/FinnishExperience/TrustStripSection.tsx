import React from "react";
import { Check, Globe, Star, Users } from "lucide-react";

const TrustStripSection = () => {
  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full">
          {[
            "Education Finland",
            "School Grads",
            "Finnish Schools",
            "Global Partners",
            "Award Winners",
          ].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-sm font-medium text-gray-600">{partner}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="inline-flex items-center px-3 py-1 bg-[#b2e600]/10 text-[#004080] text-xs font-medium rounded-full">
            <Check className="w-3 h-3 mr-1 text-[#004080]" />
            Research-Based
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-[#004080]/10 text-[#001f3f] text-xs font-medium rounded-full">
            <Globe className="w-3 h-3 mr-1 text-[#001f3f]" />
            Global Recognition
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-[#001f3f]/10 text-[#004080] text-xs font-medium rounded-full">
            <Star className="w-3 h-3 mr-1 text-[#004080]" />
            Award-Winning
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-[#b2e600]/10 text-[#001f3f] text-xs font-medium rounded-full">
            <Users className="w-3 h-3 mr-1 text-[#001f3f]" />
            1,000 Schools Goal
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustStripSection;

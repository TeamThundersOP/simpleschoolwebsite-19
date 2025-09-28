import React from "react";
import { Check, Globe, Star, Clock } from "lucide-react";

const TrustStripSection = () => {
  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full">
          {[
            "Moomin Characters",
            "School Grads",
            "Finland Education",
            "Learning Apps",
            "Happy Children",
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
          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            <Check className="w-3 h-3 mr-1 text-green-800" />
            Ages 3–8 Years
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            <Globe className="w-3 h-3 mr-1 text-blue-800" />
            1,700 Words
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
            <Star className="w-3 h-3 mr-1 text-purple-800" />
            2,500 Phrases
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
            <Clock className="w-3 h-3 mr-1 text-orange-800" />
            5-15 Min Daily
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustStripSection;

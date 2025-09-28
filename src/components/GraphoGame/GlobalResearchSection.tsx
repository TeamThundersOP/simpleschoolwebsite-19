import React from "react";
import { GraduationCap, Globe } from "lucide-react";

const GlobalResearchSection = () => {
  const collaborations = [
    {
      university: "University of Cambridge",
      version: "British English version",
    },
    {
      university: "Yale University",
      version: "American English version",
    },
    {
      university: "Beijing Normal University",
      version: "Chinese Pinyin",
    },
    {
      university: "University of Groningen & Stavanger",
      version: "Dutch & Norwegian",
    },
    {
      university: "Aix-Marseille University",
      version: "French",
    },
    {
      university: "Pontifical Catholic Universities of Brazil & Chile",
      version: "Portuguese & Spanish",
    },
    {
      university: "University of Jyväskylä, Finland",
      version: "Original research base",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          Global Research & Collaborations
        </h2>
        <div className="text-center max-w-4xl mb-8">
          <p className="text-lg text-highlight leading-relaxed">
            Every language version of GraphoGame is co-created with top universities to ensure
            cultural and scientific accuracy. Key partners include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {collaborations.map((collab, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-4 items-start gap-3 bg-white m-0 rounded-lg border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-1 text-sm">{collab.university}</h3>
                  <p className="text-highlight opacity-80 text-xs">{collab.version}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Globe className="w-6 h-6 text-blue-600" />
            <p className="text-highlight font-semibold">
              GraphoGame has been researched in 17+ languages, backed by leading universities
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalResearchSection;

import React from "react";
import { Volume2, TrendingUp, Gamepad2, Wifi } from "lucide-react";

const WhatIsGraphoGameSection = () => {
  const features = [
    {
      icon: <Volume2 className="w-6 h-6 text-highlight" />,
      title: "Phonics-based learning",
      description: "Teaches letters, sounds, and words step by step",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-highlight" />,
      title: "Adaptive pathways",
      description: "Adjusts to each child's pace for personalized progress",
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-highlight" />,
      title: "Game-like play",
      description: "Keeps children engaged and motivated without ads",
    },
    {
      icon: <Wifi className="w-6 h-6 text-highlight" />,
      title: "Low-resource access",
      description: "Works offline after download, free to users in sponsored regions",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          What is GraphoGame?
        </h2>
        <div className="text-center max-w-4xl mb-8">
          <p className="text-lg text-highlight leading-relaxed mb-6">
            GraphoGame is the world's most researched digital literacy game for children aged 3–9
            years. Built in collaboration with leading universities, it makes learning to read fun,
            simple, and effective by combining:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{feature.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#004080]/5 border border-[#004080]/20 rounded-xl p-6 max-w-2xl text-center">
          <p className="text-highlight font-semibold">
            Just 10–15 minutes a day, 4 times a week is enough to show measurable improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGraphoGameSection;

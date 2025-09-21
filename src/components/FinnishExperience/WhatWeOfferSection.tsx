import React from 'react';
import { Smartphone, GraduationCap, Users, Plane } from 'lucide-react';

const WhatWeOfferSection = () => {
  const offerings = [
    {
      icon: <Smartphone className="w-8 h-8 text-highlight" />,
      title: "Learning Tools",
      description: "Award-winning Finnish apps and EdTech solutions for early years, primary, secondary, and tertiary education, all members of Education Finland and globally recognised."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-highlight" />,
      title: "Training",
      description: "Hands-on teacher and leadership training with real classroom demonstrations. Focused on solving practical challenges and improving daily teaching.",
      examples: [
        "How to Activate Art in STEAM Education",
        "Best Practices in Teaching Coding & Digital Skills", 
        "Neuroscience-Based SEL Training for Teachers"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-highlight" />,
      title: "Events",
      description: "Expert-led workshops and conferences connecting Indian educators with Finnish specialists.",
      examples: [
        "How I Built the Largest Kindergarten Chain in Finland",
        "Co-Teaching & Differentiation",
        "Future Skills & Classroom Management"
      ]
    },
    {
      icon: <Plane className="w-8 h-8 text-highlight" />,
      title: "Education Trips",
      description: "Custom-made education tours and camps in Finland, with school visits, teacher shadowing, and leadership workshops.",
      examples: [
        "AI Innovations Camp – Coding & AI with creativity and collaboration",
        "Future Skills Camp – Robotics, design thinking, and entrepreneurship",
        "Discover Finland – Unique tours beyond education: scenic archipelago cruises, cultural experiences, and heritage trails"
      ]
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {offerings.map((offering, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-start gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-highlight">{offering.title}</h3>
                </div>
                <p className="text-highlight opacity-80">{offering.description}</p>
                {offering.examples && (
                  <div className="space-y-2">
                    <p className="text-highlight font-medium text-sm">Examples include:</p>
                    <ul className="space-y-1">
                      {offering.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2 text-highlight opacity-80 text-sm">
                          <span className="text-highlight font-bold text-sm">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
import React from 'react';
import { Shield, DollarSign, GraduationCap, Award } from 'lucide-react';

// GraphoGame Logo Component
const GraphoGameLogo = ({ className = "", size = "medium" }: { className?: string; size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "h-6 w-auto",
    medium: "h-8 w-auto md:h-12",
    large: "h-16 w-auto md:h-20"
  };

  return (
    <img 
      src="/lovable-uploads/Group-215.svg" 
      alt="GraphoGame Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Shield className="w-6 h-6 text-highlight" />,
      title: "Backed by global research",
      description: "University partnerships and proven pedagogy"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-highlight" />,
      title: "Affordable & scalable",
      description: "Designed for Indian schools with cost-effective implementation"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-highlight" />,
      title: "Teacher training & support",
      description: "Whole-school adoption with comprehensive training"
    },
    {
      icon: <Award className="w-6 h-6 text-highlight" />,
      title: "NEP 2020 alignment",
      description: "Supports literacy goals and international credibility"
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <GraphoGameLogo className="" size="medium" />
            <span className="text-2xl md:text-3xl font-bold text-gray-700">×</span>
            <img 
              src="/lovable-uploads/logo.svg" 
              alt="School Grads Logo" 
              className="h-8 w-auto md:h-12" 
            />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">Why Choose GraphoGame with School Grads?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {reasons.map((reason, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{reason.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
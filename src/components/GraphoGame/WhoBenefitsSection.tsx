import React from "react";
import { Heart, Eye, Home, Building } from "lucide-react";

const WhoBenefitsSection = () => {
  const beneficiaries = [
    {
      icon: <Heart className="w-8 h-8 text-highlight" />,
      title: "Children",
      description: "Fun, personalized literacy journey",
    },
    {
      icon: <Eye className="w-8 h-8 text-highlight" />,
      title: "Teachers",
      description: "Real-time insights to support classroom instruction",
    },
    {
      icon: <Home className="w-8 h-8 text-highlight" />,
      title: "Parents",
      description: "Easy-to-use support at home",
    },
    {
      icon: <Building className="w-8 h-8 text-highlight" />,
      title: "Schools & Governments",
      description: "Cost-effective, scalable literacy programs",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          Who Benefits?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {beneficiaries.map((beneficiary, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-center text-center gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full">
                  {beneficiary.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-highlight mb-2">{beneficiary.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{beneficiary.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoBenefitsSection;

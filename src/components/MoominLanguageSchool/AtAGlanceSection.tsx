import React from 'react';
import { Clock, Smartphone, Users, BookOpen, Headphones, GraduationCap } from 'lucide-react';

const AtAGlanceSection = () => {
  const details = [
    {
      icon: <Clock className="w-6 h-6 text-highlight" />,
      label: "Ages",
      value: "3–8 years"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-highlight" />,
      label: "Daily app",
      value: "5–15 minutes"
    },
    {
      icon: <Users className="w-6 h-6 text-highlight" />,
      label: "Weekly group session",
      value: "~45 minutes"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-highlight" />,
      label: "Content",
      value: "1,000+ exercises, 1,700 words, 2,500 phrases"
    },
    {
      icon: <Headphones className="w-6 h-6 text-highlight" />,
      label: "Audio",
      value: "Native voice actors (American English)"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-highlight" />,
      label: "Support",
      value: "Teacher-ready materials & full support"
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">At a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {details.map((detail, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full flex-shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{detail.label}</h3>
                  <p className="text-highlight opacity-80 text-sm">{detail.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceSection;
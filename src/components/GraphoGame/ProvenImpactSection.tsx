import React from 'react';
import { Users, Target, TrendingUp, Baby } from 'lucide-react';

const ProvenImpactSection = () => {
  const impacts = [
    {
      icon: <Users className="w-6 h-6 text-highlight" />,
      title: "Nearly 2 million users worldwide",
      description: "Global reach and proven adoption"
    },
    {
      icon: <Target className="w-6 h-6 text-highlight" />,
      title: "As effective as one-to-one tutoring",
      description: "Research-validated learning outcomes"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-highlight" />,
      title: "Consistently outperform peers",
      description: "Children using GraphoGame excel in standard classrooms"
    },
    {
      icon: <Baby className="w-6 h-6 text-highlight" />,
      title: "Progress from age 3",
      description: "Parents report progress even with children as young as 3 years old"
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Proven Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {impacts.map((impact, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-full flex-shrink-0">
                  {impact.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{impact.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{impact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenImpactSection;
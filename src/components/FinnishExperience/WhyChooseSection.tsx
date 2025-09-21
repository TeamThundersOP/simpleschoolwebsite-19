import React from 'react';
import { Brain, Target, Globe, TrendingUp } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: <Brain className="w-6 h-6 text-highlight" />,
      title: "Research-based pedagogy",
      description: "Strong focus on wellbeing and equity"
    },
    {
      icon: <Target className="w-6 h-6 text-highlight" />,
      title: "Practical solutions",
      description: "That work in real classrooms"
    },
    {
      icon: <Globe className="w-6 h-6 text-highlight" />,
      title: "Globally proven EdTech",
      description: "Aligned with local curricula"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-highlight" />,
      title: "Journey of transformation",
      description: "Inspiration and lasting change for schools, teachers, and students"
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Why Choose Finnish Education?</h2>
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
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl text-center">
          <p className="text-highlight font-semibold text-lg">
            Join the movement with School Grads and be part of transforming 1,000 schools in India into Finnish Experience® Schools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
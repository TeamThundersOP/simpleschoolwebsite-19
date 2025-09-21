import React from 'react';
import { TrendingDown, DollarSign, Heart } from 'lucide-react';

const WhyLiteracyMattersSection = () => {
  const facts = [
    {
      icon: <TrendingDown className="w-6 h-6 text-red-600" />,
      title: "Grade 4 Reading Crisis",
      description: "Children who can't read by Grade 4 often struggle lifelong"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-600" />,
      title: "Economic Impact",
      description: "Illiteracy costs the global economy over $1 trillion annually"
    },
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: "Life Outcomes",
      description: "Literacy is linked to higher earnings, better health, and reduced poverty"
    }
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Why Literacy Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {facts.map((fact, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full flex-shrink-0">
                  {fact.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{fact.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{fact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLiteracyMattersSection;
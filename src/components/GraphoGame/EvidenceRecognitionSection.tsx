import React from "react";
import { Award, Check, Star, Flag } from "lucide-react";

const EvidenceRecognitionSection = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-highlight" />,
      title: "20+ years of research",
      description: "University-led research foundation",
    },
    {
      icon: <Check className="w-6 h-6 text-highlight" />,
      title: "Global endorsement",
      description: "Ministries of Education and NGOs worldwide",
    },
    {
      icon: <Star className="w-6 h-6 text-highlight" />,
      title: "UNESCO recognition",
      description: "Recognized as a proven literacy solution",
    },
    {
      icon: <Flag className="w-6 h-6 text-highlight" />,
      title: "National adoption",
      description: "Finland, Norway, France, USA, Colombia, Argentina, Chile, Brazil",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
          Evidence & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative group">
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{achievement.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brazil Highlight */}
        <div className="bg-[#b2e600]/5 border border-[#b2e600]/20 rounded-xl p-6 max-w-4xl">
          <div className="text-center">
            <h3 className="font-semibold text-highlight mb-3 text-lg">
              Brazil Collaboration Success Story
            </h3>
            <p className="text-highlight leading-relaxed">
              The Brazilian government rolled out GraphoGame through nationwide literacy campaigns,
              helping millions of children learn to read. It quickly became a top-ranked app in the
              country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceRecognitionSection;

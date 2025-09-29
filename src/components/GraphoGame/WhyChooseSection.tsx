import React from "react";

// GraphoGame Logo Component
const GraphoGameLogo = ({
  className = "",
  size = "medium",
}: {
  className?: string;
  size?: "small" | "medium" | "large";
}) => {
  const sizeClasses = {
    small: "h-6 w-auto",
    medium: "h-8 w-auto md:h-12",
    large: "h-16 w-auto md:h-20",
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
      heading: "Backed by global research:",
      text: "University partnerships and proven pedagogy worldwide",
    },
    {
      heading: "Affordable & scalable:",
      text: "Designed for Indian schools with cost-effective implementation",
    },
    {
      heading: "Teacher training & support:",
      text: "Whole-school adoption with comprehensive training programs",
    },
    {
      heading: "NEP 2020 alignment:",
      text: "Supports literacy goals and international credibility standards",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-0 bg-gray-50 m-0 px-0 py-0">
      {/* Hero Image Section with Overlay Text */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full">
          <img
            src="/lovable-uploads/School Grads/IMG-20250924-WA0012.jpg"
            alt="GraphoGame Learning Community"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay - clear at top, dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

          {/* Overlay Content - positioned in lower section */}
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <GraphoGameLogo className="" size="medium" />
              <span className="text-2xl md:text-3xl font-bold text-white">×</span>
              <img
                src="/lovable-uploads/logo.svg"
                alt="School Grads Logo"
                className="h-8 w-auto md:h-12"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight">
              Why Choose GraphoGame?
            </h2>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8 max-w-6xl w-full">
              {reasons.map((point, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 text-left p-2 sm:p-4">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#b2e600] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                    <span className="text-[#b2e600] font-bold">{point.heading}</span> {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative group w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#004080]/5 border border-[#004080]/20 rounded-xl p-6">
            <p className="text-highlight font-semibold text-lg">
              Join over 1 million children worldwide who are learning to read with GraphoGame and
              School Grads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

import React from "react";
import { Award, Users, GraduationCap, School } from "lucide-react";

// Finnish Experience Logo Component
const FinnishExperienceLogo = ({
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
      src="/assets/partners/finnish-experience-logo.png"
      alt="Finnish Education Solutions Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

const PartnershipModelsSection = () => {
  const models = [
    {
      icon: <Award className="w-8 h-8 text-highlight" />,
      title: "Finnish Experience Flagship School",
      description:
        "A marketing and reference school for your region. Must be a prominent institution willing to host reference visits and support promotional activities (events, talks, case studies).",
      highlight: "flagship",
    },
    {
      icon: <Users className="w-8 h-8 text-highlight" />,
      title: "Finnish Experience Partner School",
      description:
        "Schools commit to a minimum of 2 training sessions annually to actively develop teachers and share best practices.",
      highlight: "partner",
    },
    {
      icon: <School className="w-8 h-8 text-highlight" />,
      title: "Basic Finnish Experience School",
      description:
        "Flexible entry-level model with no specific commitments beyond the standard subscription.",
      highlight: "basic",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-highlight" />,
      title: "Finnish Experience Kindergarten",
      description:
        'Kindergartens using the "Finnish Experience Kindergarten" recognition must subscribe to either Moomin Language School or Kindiedays.',
      highlight: "kindergarten",
    },
  ];

  const getHighlightColor = (type: string) => {
    switch (type) {
      case "flagship":
        return "border-l-[#b2e600] bg-[#b2e600]/5";
      case "partner":
        return "border-l-[#004080] bg-[#004080]/5";
      case "basic":
        return "border-l-[#001f3f] bg-[#001f3f]/5";
      case "kindergarten":
        return "border-l-[#004080] bg-[#004080]/5";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <FinnishExperienceLogo className="" size="medium" />
            <span className="text-2xl md:text-3xl font-bold text-gray-700">×</span>
            <img
              src="/assets/logos/school-grads-logo.svg"
              alt="School Grads Logo"
              className="h-8 w-auto md:h-12"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
            Finnish Experience® School Partnership Models
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {models.map((model, index) => (
            <div key={index} className="relative group">
              <div
                className={`box-border flex h-full w-full p-6 flex-col justify-start items-start gap-4 bg-white m-0 rounded-2xl border-l-4 ${getHighlightColor(model.highlight)} opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm">
                    {model.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-highlight">{model.title}</h3>
                </div>
                <p className="text-highlight opacity-80 text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipModelsSection;

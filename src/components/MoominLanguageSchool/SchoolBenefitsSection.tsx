import React from "react";
import { motion } from "framer-motion";
import { Clock, Star, Shield, Award } from "lucide-react";

// Moomin Language School Logo Component
const MoominLanguageSchoolLogo = ({
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
      src="/lovable-uploads/MoominLS_logo_text3-1.png.webp"
      alt="Moomin Language School Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

const SchoolBenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-highlight" />,
      title: "Quick rollout with existing staff",
      description: "No need for specialist English teachers",
    },
    {
      icon: <Star className="w-6 h-6 text-highlight" />,
      title: "Training materials improve teachers",
      description: "Own language and pedagogy skills",
    },
    {
      icon: <Shield className="w-6 h-6 text-highlight" />,
      title: "Unique program rooted in Finnish education",
      description: "Differentiator for parents",
    },
    {
      icon: <Award className="w-6 h-6 text-highlight" />,
      title: "Strengthens school's brand",
      description: "As innovative and globally aligned",
    },
  ];

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <MoominLanguageSchoolLogo className="" size="medium" />
            <span className="text-2xl md:text-3xl font-bold text-gray-700">×</span>
            <img
              src="/lovable-uploads/logo.svg"
              alt="School Grads Logo"
              className="h-8 w-auto md:h-12"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
            Benefits for Schools & Managers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-highlight mb-2">{benefit.title}</h3>
                  <p className="text-highlight opacity-80 text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolBenefitsSection;

import React from "react";

interface SectionProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ index, children, className = "" }) => {
  const bgWhiteClass = "bg-white";
  const bgBlueClass = "bg-[#021223]";

  const bg = index % 2 === 0 ? bgWhiteClass : bgBlueClass;

  return <section className={`${bg} py-16 md:py-24 ${className}`}>{children}</section>;
};

export default Section;

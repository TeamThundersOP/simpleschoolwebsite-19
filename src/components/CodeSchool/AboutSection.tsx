import React from 'react';
import { Code } from 'lucide-react';

// Code School Finland Logo Component
const CodeSchoolFinlandLogo = ({ className = "" }: { className?: string }) => (
  <img 
    src="/lovable-uploads/CSF-LOGO-simple+1580x1040++(1).png" 
    alt="Code School Finland Logo" 
    className={`h-12 w-auto ${className}`}
  />
);

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-highlight">About Code School Finland</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-highlight/80 mb-8">
              Founded in 2017 by Kaisu Pallaskallio, a computer scientist and EdTech leader, Code School Finland creates practical teaching resources that help any teacher confidently teach coding, AI, robotics, and future skills.
            </p>
            <p className="text-lg text-highlight/80">
              These materials are constantly improved with feedback from classrooms around the world.
            </p>
          </div>
          <div className="relative">
            {/* Image Slot 5 - Founder or classroom scene */}
            <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-lg border border-[rgba(0,0,0,0.12)]">
              <div className="w-full h-full flex items-center justify-center text-highlight/60">
                <div className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <p className="text-sm">Kaisu Pallaskallio & team</p>
                  <p className="text-xs opacity-70">About image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
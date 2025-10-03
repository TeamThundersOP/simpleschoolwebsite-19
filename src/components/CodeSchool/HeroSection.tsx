import React from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

// Code School Finland Logo Component
const CodeSchoolFinlandLogo = ({ className = "" }: { className?: string }) => (
  <img
    src="/assets/partners/code-school-finland-logo.png"
    alt="Code School Finland Logo"
    className={`h-16 w-auto md:h-20 ${className}`}
  />
);

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <CodeSchoolFinlandLogo className="mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-highlight/70">× School Grads</div>
            </div>
            <p className="text-2xl font-semibold text-highlight mb-4">
              Transforming How Indian Schools Teach Coding, AI & Future Skills
            </p>
            <p className="text-xl text-highlight/70 mb-8">
              Designed for classrooms. Powered by Finnish pedagogy. Delivered in India by School
              Grads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-highlight text-white hover:bg-highlight/90">
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-highlight text-highlight hover:bg-highlight hover:text-white"
              >
                Request Sample Pack
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Image Slot 1 - Hero Image */}
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className="w-full h-full flex items-center justify-center text-highlight/60">
                <div className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <p className="text-sm">Students coding in classroom</p>
                  <p className="text-xs opacity-70">Hero image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

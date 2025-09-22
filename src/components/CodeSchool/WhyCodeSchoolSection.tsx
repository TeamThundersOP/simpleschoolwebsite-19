import React from 'react';
import { Code, Globe, Zap, Laptop } from 'lucide-react';

const WhyCodeSchoolSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-highlight">Why Code School Finland</h2>
        
        {/* Image Slot 3 - Global reach/scale */}
        <div className="mb-12">
          <div className="aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-lg border border-[rgba(0,0,0,0.12)] max-w-4xl mx-auto">
            <div className="w-full h-full flex items-center justify-center text-highlight/60">
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <p className="text-sm">Global implementation across 20+ countries</p>
                <p className="text-xs opacity-70">Global reach image placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="font-bold mb-2">Built by educators</h3>
            <p className="text-sm text-highlight/80">Co-created and tested with Finnish teachers</p>
          </div>
          <div className="text-center">
            <div className="bg-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="font-bold mb-2">Trusted worldwide</h3>
            <p className="text-sm text-highlight/80">Implemented in 20+ countries, available in 7 languages</p>
          </div>
          <div className="text-center">
            <div className="bg-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="font-bold mb-2">Proven at scale</h3>
            <p className="text-sm text-highlight/80">3,00,000+ learners, thousands of trained teachers</p>
          </div>
          <div className="text-center">
            <div className="bg-highlight/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Laptop className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="font-bold mb-2">Faster adoption</h3>
            <p className="text-sm text-highlight/80">Up to 80% less teacher training time, 90% less lesson prep</p>
          </div>
        </div>
        <blockquote className="text-center text-xl italic text-highlight/80 max-w-3xl mx-auto">
          "Great teachers don't need to be coders—they need the right tools."
          <footer className="mt-4 text-sm font-semibold text-highlight">
            — Kaisu Pallaskallio, CEO & Co-Founder, Code School Finland
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default WhyCodeSchoolSection;
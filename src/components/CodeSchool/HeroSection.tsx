import React from 'react';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

// Code School Finland Logo Component
const CodeSchoolFinlandLogo = ({ className = "" }: { className?: string }) => (
  <img 
    src="/lovable-uploads/CSF-LOGO-simple+1580x1040++(1).png" 
    alt="Code School Finland Logo" 
    className={`h-16 w-auto md:h-20 ${className}`}
  />
);

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <CodeSchoolFinlandLogo className="mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-600">
                × School Grads
              </div>
            </div>
            <p className="text-2xl font-semibold text-foreground mb-4">
              Transforming How Indian Schools Teach Coding, AI & Future Skills
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              Designed for classrooms. Powered by Finnish pedagogy. Delivered in India by School Grads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                Request Sample Pack
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Image Slot 1 - Hero Image */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
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
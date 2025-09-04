import React from 'react';
import { Globe } from 'lucide-react';

const VisionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">School Grads Vision for India</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              At SchoolGrads, our mission is to bring the best global teaching practices to Indian classrooms in a way that is easy, affordable, and scalable.
            </p>
            <p className="text-lg text-muted-foreground">
              With our partner, Code School Finland, we help schools give students—from early years to high school—practical skills in coding, AI, robotics, and future skills while also building their creativity, innovation, and problem-solving abilities.
            </p>
          </div>
          <div className="relative">
            {/* Image Slot 2 - Finnish pedagogy/classroom */}
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Finnish pedagogy in action</p>
                  <p className="text-xs opacity-70">Vision image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
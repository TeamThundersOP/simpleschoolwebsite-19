import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">See Code School Finland in Action</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Watch how our program transforms classrooms and empowers both teachers and students
        </p>
        
        {/* Video Slot */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-primary border-y-6 border-y-transparent ml-1"></div>
                </div>
                <p className="text-sm">Program overview & testimonials</p>
                <p className="text-xs opacity-70">Video placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
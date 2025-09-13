import React from 'react';

const PedagogySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Pedagogy & Fit for India</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Project-based & hands-on</h3>
                <p className="text-muted-foreground">Students learn by building, testing, and creating together</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Research-led</h3>
                <p className="text-muted-foreground">Focus on creativity, collaboration, and critical thinking</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Aligned with NEP 2020</h3>
                <p className="text-muted-foreground">Supports digital literacy and computational thinking goals</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Implementation with School Grads</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Rapid onboarding for leadership and staff</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Timetable integration across subjects and grades</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Monitoring, assessments, and showcase events (hackathons, exhibitions)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PedagogySection;
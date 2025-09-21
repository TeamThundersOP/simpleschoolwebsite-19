import React from 'react';
import { Clock, Calendar, Trophy } from 'lucide-react';

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
                <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Clock className="w-3 h-3 text-primary" />
                </div>
                <span>Rapid onboarding for leadership and staff</span>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Calendar className="w-3 h-3 text-primary" />
                </div>
                <span>Timetable integration across subjects and grades</span>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Trophy className="w-3 h-3 text-primary" />
                </div>
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
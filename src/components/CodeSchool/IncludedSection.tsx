import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IncludedSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-highlight">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl border border-[rgba(0,0,0,0.12)]">
            <CardHeader>
              <CardTitle className="text-highlight">Custom Implementation Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-highlight/80">
                Designed around your school's grades, subjects, and vision
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-[rgba(0,0,0,0.12)]">
            <CardHeader>
              <CardTitle className="text-highlight">Flexible Teacher Training</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-highlight/80">
                Certification with short, blended modules that fit into busy schedules
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-[rgba(0,0,0,0.12)]">
            <CardHeader>
              <CardTitle className="text-highlight">Complete Classroom Kit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-highlight/80">
                Lesson plans, worksheets, guides, projects, and assessment guides included
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border border-[rgba(0,0,0,0.12)]">
            <CardHeader>
              <CardTitle className="text-highlight">Continuous Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-highlight/80">
                Live and offline expert guidance, regular resource updates, and a dedicated helpdesk
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
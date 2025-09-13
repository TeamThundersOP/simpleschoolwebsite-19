import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IncludedSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Custom Implementation Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Designed around your school's grades, subjects, and vision
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flexible Teacher Training</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Certification with short, blended modules that fit into busy schedules
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Complete Classroom Kit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Lesson plans, worksheets, guides, projects, and assessment guides included
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Continuous Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
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
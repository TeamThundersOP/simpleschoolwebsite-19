import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Laptop, Globe, BookOpen, Lightbulb, Target, Award, School, Users } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-4" />
              <CardTitle>What Students Gain</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Code className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Coding, AI, robotics, and future skills taught from basics to advanced levels</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Lightbulb className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Hands-on projects that build creativity, logic, and problem-solving</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Target className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Digital skills designed to match global standards and future needs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Laptop className="h-10 w-10 text-primary mb-4" />
              <CardTitle>What Teachers Gain</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Users className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Designed for teachers with no prior coding experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <BookOpen className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Comes with ready-to-use lesson plans, worksheets, and assessments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Award className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Short, practical training along with certification, plus continuous support from experts</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-10 w-10 text-primary mb-4" />
              <CardTitle>What Schools Gain</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Globe className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Globally benchmarked curriculum, locally adaptable to boards and timetables</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Award className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Stronger innovation profile and brand positioning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <School className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">Seamless NEP 2020 alignment for computational thinking & digital literacy</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
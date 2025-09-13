import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

const CurriculumSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">Curriculum Roadmap</h2>
            <p className="text-xl text-muted-foreground mb-8">Future Skills from K–12</p>
            
            {/* Image Slot 4 - Students of different ages */}
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Laptop className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Students from K-12 learning</p>
                  <p className="text-xs opacity-70">Curriculum image placeholder</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Early Years */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl">Early Years (K–2 | Ages 5–7) – Future Thinker</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Help young children develop computational thinking through playful activities that spark curiosity and prepare them for digital learning.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Lower Primary */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-xl">Lower Primary (Grades 1–3 | Ages 6–9)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Little AI Learner</h4>
                    <p className="text-sm text-muted-foreground">Discover AI through engaging, unplugged activities and creative exploration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Junior Coder</h4>
                    <p className="text-sm text-muted-foreground">Develop computational thinking and problem-solving through hands-on ScratchJr activities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upper Primary */}
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-xl">Upper Primary (Grades 3–6 | Ages 8–11)</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-1">Code & Create + AI</h4>
                  <p className="text-sm text-muted-foreground">Practise computational thinking by creating stories, games, and AI apps using Scratch</p>
                </div>
              </CardContent>
            </Card>

            {/* Middle School */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl">Middle School (Grades 3–8 | Ages 8–13)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Automate</h4>
                    <p className="text-sm text-muted-foreground">Practical experience in automation and embedded systems using sensors, processors, and actuators</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Develop & Test</h4>
                    <p className="text-sm text-muted-foreground">Design and build educational games by applying product development principles</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lower Secondary */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-xl">Lower Secondary (Grades 6–9 | Ages 11–15)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Solutions & Syntax</h4>
                    <p className="text-sm text-muted-foreground">Build work-life skills through innovative, project-based textual programming</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Vision</h4>
                    <p className="text-sm text-muted-foreground">Create machine vision and augmented reality projects to explore AI creatively</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upper Secondary */}
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-xl">Upper Secondary (Grades 8–12 | Ages 13–17)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">ICT Explorer</h4>
                    <p className="text-sm text-muted-foreground">Learn to navigate the internet and computer systems safely and independently</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Web Innovator</h4>
                    <p className="text-sm text-muted-foreground">Progress from basic web design to AI-enhanced applications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teachable Machine</h4>
                    <p className="text-sm text-muted-foreground">Investigate AI classifiers and social media profiling through experimental projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Senior Secondary */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl">Senior Secondary (Grades 9–12 | Ages 14–18)</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-1">Sensor Challenger</h4>
                  <p className="text-sm text-muted-foreground">Conduct experiments with electromechanics and embedded systems to build sensor-activated games</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
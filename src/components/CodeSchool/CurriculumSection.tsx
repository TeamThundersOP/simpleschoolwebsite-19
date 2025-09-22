import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

const CurriculumSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-highlight mb-2">Curriculum Roadmap</h2>
            <p className="text-lg text-highlight/80 mb-8">Future Skills from K–12</p>
            
            {/* Image Slot 4 - Students of different ages */}
            <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-lg border border-[rgba(0,0,0,0.12)]">
              <div className="w-full h-full flex items-center justify-center text-highlight/60">
                <div className="text-center">
                  <Laptop className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <p className="text-sm">Students from K-12 learning</p>
                  <p className="text-xs opacity-70">Curriculum image placeholder</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Early Years */}
            <Card className="rounded-xl border border-[rgba(0,0,0,0.12)]">
              <CardHeader>
                <CardTitle className="text-xl text-highlight">Early Years (K–2 | Ages 5–7) – Future Thinker</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-highlight/80">
                  Help young children develop computational thinking through playful activities that spark curiosity and prepare them for digital learning.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Lower Primary */}
            <Card className="rounded-xl border border-[rgba(0,0,0,0.12)]">
              <CardHeader>
                <CardTitle className="text-xl text-highlight">Lower Primary (Grades 1–3 | Ages 6–9)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Little AI Learner</h4>
                    <p className="text-sm text-highlight/80">Discover AI through engaging, unplugged activities and creative exploration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Junior Coder</h4>
                    <p className="text-sm text-highlight/80">Develop computational thinking and problem-solving through hands-on ScratchJr activities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upper Primary */}
            <Card className="rounded-xl border border-[rgba(0,0,0,0.12)]">
              <CardHeader>
                <CardTitle className="text-xl text-highlight">Upper Primary (Grades 3–6 | Ages 8–11)</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-1">Code & Create + AI</h4>
                  <p className="text-sm text-highlight/80">Practise computational thinking by creating stories, games, and AI apps using Scratch</p>
                </div>
              </CardContent>
            </Card>

            {/* Middle School */}
            <Card className="rounded-xl border border-[rgba(0,0,0,0.12)]">
              <CardHeader>
                <CardTitle className="text-xl text-highlight">Middle School (Grades 3–8 | Ages 8–13)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Automate</h4>
                    <p className="text-sm text-highlight/80">Practical experience in automation and embedded systems using sensors, processors, and actuators</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Develop & Test</h4>
                    <p className="text-sm text-highlight/80">Design and build educational games by applying product development principles</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lower Secondary */}
            <Card className="rounded-xl border border-[rgba(0,0,0,0.12)]">
              <CardHeader>
                <CardTitle className="text-xl text-highlight">Lower Secondary (Grades 6–9 | Ages 11–15)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Solutions & Syntax</h4>
                    <p className="text-sm text-highlight/80">Build work-life skills through innovative, project-based textual programming</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Vision</h4>
                    <p className="text-sm text-highlight/80">Create machine vision and augmented reality projects to explore AI creatively</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upper Secondary */}
            <Card className="rounded-xl border border-[rgba(0,0,0,0.12)]">
              <CardHeader>
                <CardTitle className="text-xl text-highlight">Upper Secondary (Grades 8–12 | Ages 13–17)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">ICT Explorer</h4>
                    <p className="text-sm text-highlight/80">Learn to navigate the internet and computer systems safely and independently</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Web Innovator</h4>
                    <p className="text-sm text-highlight/80">Progress from basic web design to AI-enhanced applications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teachable Machine</h4>
                    <p className="text-sm text-highlight/80">Investigate AI classifiers and social media profiling through experimental projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Senior Secondary */}
            <Card className="rounded-xl border border-[rgba(0,0,0,0.12)]">
              <CardHeader>
                <CardTitle className="text-xl text-highlight">Senior Secondary (Grades 9–12 | Ages 14–18)</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-1">Sensor Challenger</h4>
                  <p className="text-sm text-highlight/80">Conduct experiments with electromechanics and embedded systems to build sensor-activated games</p>
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
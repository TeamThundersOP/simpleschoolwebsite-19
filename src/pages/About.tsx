import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Dedicated to transforming education through innovative technology and evidence-based learning solutions
            </p>
            <Button size="lg" className="mr-4">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              Our Mission
            </Button>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Making quality education accessible to everyone through innovative technology
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Community Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Building strong educational communities that support learners at every level
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Continuously developing cutting-edge solutions for modern learning challenges
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Committed to the highest standards in educational technology and support
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to revolutionize education, we've been at the forefront of educational technology for over a decade. Our journey began when a group of educators and technologists came together with a simple belief: every learner deserves access to high-quality, personalized education.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we serve millions of students, teachers, and educational institutions worldwide, providing innovative solutions that make learning more engaging, effective, and accessible than ever before.
              </p>
              <Button size="lg">
                Learn More About Our Journey
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
import React from 'react';
import { Button } from '@/components/ui/button';

const GetStartedSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Get Started</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Bring future-ready skills to your classrooms, simply, effectively, and at scale. SchoolGrads takes care of the rollout, teacher training, and ongoing support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            → Book a 20-minute consultation
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            → Request a sample lesson pack
          </Button>
          <Button size="lg" variant="ghost" className="w-full sm:w-auto text-primary-foreground hover:bg-primary-foreground/10">
            → Plan a pilot for one grade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
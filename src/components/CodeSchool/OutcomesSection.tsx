import React from 'react';

const OutcomesSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Outcomes You Can Expect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Confident Teachers</h3>
              <p className="text-muted-foreground">Teachers confidently leading coding & AI lessons without extra burden</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Skilled Students</h3>
              <p className="text-muted-foreground">Students who can design, code, and present real-world projects</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Future-Ready School</h3>
              <p className="text-muted-foreground">A visible "future-skills" identity for your school</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
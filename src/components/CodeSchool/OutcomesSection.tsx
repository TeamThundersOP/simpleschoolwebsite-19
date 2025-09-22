import React from 'react';

const OutcomesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-highlight">Outcomes You Can Expect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[rgba(0,0,0,0.12)]">
              <h3 className="text-xl font-semibold mb-4 text-highlight">Confident Teachers</h3>
              <p className="text-highlight/80">Teachers confidently leading coding & AI lessons without extra burden</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[rgba(0,0,0,0.12)]">
              <h3 className="text-xl font-semibold mb-4 text-highlight">Skilled Students</h3>
              <p className="text-highlight/80">Students who can design, code, and present real-world projects</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[rgba(0,0,0,0.12)]">
              <h3 className="text-xl font-semibold mb-4 text-highlight">Future-Ready School</h3>
              <p className="text-highlight/80">A visible "future-skills" identity for your school</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
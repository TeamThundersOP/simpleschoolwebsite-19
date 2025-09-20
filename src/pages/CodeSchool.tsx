import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import HeroSection from '@/components/CodeSchool/HeroSection';
import AboutSection from '@/components/CodeSchool/AboutSection';
import BenefitsSection from '@/components/CodeSchool/BenefitsSection';
import CurriculumSection from '@/components/CodeSchool/CurriculumSection';
import PedagogySection from '@/components/CodeSchool/PedagogySection';
import OutcomesSection from '@/components/CodeSchool/OutcomesSection';
import IncludedSection from '@/components/CodeSchool/IncludedSection';
import GetStartedSection from '@/components/CodeSchool/GetStartedSection';
import VideoSection from '@/components/CodeSchool/VideoSection';
import VisionSection from '@/components/CodeSchool/VisionSection';
import WhyCodeSchoolSection from '@/components/CodeSchool/WhyCodeSchoolSection';

const CodeSchool = () => {
  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="Code School Finland × School Grads – Transforming Coding Education"
        description="Discover how Code School Finland partners with School Grads to bring Finnish pedagogy and innovative coding education to Indian classrooms."
        canonical="https://simpleschoolwebsite-19.onrender.com/codeschool"
      />
      <main id="main" className="w-full" role="main">
        <HeroSection />
        <AboutSection />
        <WhyCodeSchoolSection />
        <BenefitsSection />
        <CurriculumSection />
        <PedagogySection />
        <OutcomesSection />
        <VideoSection />
        <IncludedSection />
        <VisionSection />
        <GetStartedSection />
      </main>
      <Footer />
      
      {/* Sticky CTA */}
      <div className="fixed bottom-3 inset-x-3 z-50">
        <div className="max-w-sm mx-auto bg-primary text-primary-foreground rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-medium">Ready to get started?</p>
              <p className="text-xs opacity-90">Book your consultation today</p>
            </div>
            <button className="bg-white text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSchool;
